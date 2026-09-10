"""Python Quest - a terminal game that teaches Python, beginner to advanced.

Run:  python learn.py
Each level writes a task into work.py. Edit it in your editor, save,
then press Enter here to check it.
"""
import contextlib, io, json, os, sys, threading, traceback

HERE = os.path.dirname(os.path.abspath(__file__))
WORK = os.path.join(HERE, "work.py")
SAVE = os.path.join(HERE, "progress.json")

# Each level: title, brief, starter code, tests [(expression, expected)], solution.
# `__out__` in a test expression is whatever the code printed.
from curriculum import TOPICS
from curriculum_extra import EXTRA

LEVELS = TOPICS + EXTRA

# Chapters, in teaching order. Each one is a section of the roadmap.
CHAPTERS = [
    ("basics", "Basics", "Print se lekar dict tak. Koi function nahi, ek-ek cheez aaram se."),
    ("functions", "Functions", "Apna kaam ek naam me baandhna: def, args, lambda, scope."),
    ("errors", "Errors", "Program ko girne se bachana."),
    ("modules", "Modules", "Dusro ka likha code import karke use karna."),
    ("files", "Files", "Disk pe likhna aur padhna."),
    ("regex", "Regex", "Text me pattern dhoondhna."),
    ("oop", "OOP", "Apni cheezein banana: class, object, inheritance."),
    ("advanced", "Advanced", "Generators, decorators, closures, dataclass."),
    ("dsa", "DSA", "Stack, queue, search, sort, linked list, recursion."),
    ("concurrency", "Concurrency", "Ek saath kai kaam: async, thread, process."),
    ("testing", "Testing", "Apne code ko khud jaanchna."),
    ("tools", "Tools", "pip, venv, type checker."),
]

# The exact teaching order. Nothing appears before the level that teaches it.
TEACH = [
    "Printing", "Hello, variables", "Numbers & maths", "Type casting",
    "Strings", "f-strings", "Booleans & comparison", "Operators: in, is, +=", "Conditionals",
    "Ternary (ek line ka if)", "Lists", "Slicing", "Loops", "While loop", "break, continue, pass",
    "Nested loops & patterns", "Tuples", "Sets", "Dicts",

    "Functions", "Comments & docstrings", "Default & keyword args", "*args and **kwargs",
    "Lambda, map, filter",
    "Variable scope", "Type annotations", "Sorting with a key", "Comprehensions & zip",

    "Exceptions",
    "Modules: import karo",
    "File handling",
    "Regular expressions",

    "Classes", "Dunder methods", "Inheritance", "super() and overriding",
    "Encapsulation & property",

    "Generators", "Decorators", "Closures", "Context managers",
    "collections & itertools", "Dataclasses & typing",

    "Recursion", "Stack & Queue", "Searching: linear & binary", "Sorting algorithms",
    "HashMap problems", "Linked list",

    "async / await", "Threading & the GIL", "Multiprocessing vs asyncio",
    "Testing with assert",
    "pip, venv & requirements", "Static typing & mypy",
]

_have = {lv["t"] for lv in LEVELS}
assert _have == set(TEACH), (
    "TEACH order and the topics disagree.\n"
    "  missing from TEACH: %s\n  missing from topics: %s"
    % (sorted(_have - set(TEACH)), sorted(set(TEACH) - _have))
)
LEVELS.sort(key=lambda lv: TEACH.index(lv["t"]))
ORDER = TEACH          # older code still calls it ORDER

TRACKS = [
    {"id": "beginner", "name": "Beginner - kabhi Python nahi chhua",
     "start": TEACH.index("Printing"),
     "desc": "Bilkul zero se: print, variables, + - * /, True/False, if-else, list, tuple, set, "
             "loop, dict. Koi function-wunction nahi, ek-ek cheez aaram se."},
    {"id": "medium", "name": "Medium - basics aate hai",
     "start": TEACH.index("Functions"),
     "desc": "print, if-else, loop pata hai. Yahan se: functions, lambda, scope, errors, modules, "
             "files, regex, classes."},
    {"id": "advanced", "name": "Advanced - classes bhi aati hai",
     "start": TEACH.index("Generators"),
     "desc": "Generators, decorators, closures, context managers, DSA, concurrency, testing, typing."},
]

# Yaar-style lines, rotated by attempt number.
SCOLD = [
    "Arre bhai, ye toh galat ho gaya. Ek baar dhyan se dekh:",
    "Nahi bhai, abhi bhi kuch gadbad hai. Chal hint le:",
    "Bhai tu kar sakta hai - isko aise nahi, waise karte hai:",
    "Ruk ja bhai, jaldi mat kar. Error khud sab bata raha hai:",
    "Koi baat nahi bhai, galti se hi seekhte hai. Fir se try kar:",
]
CHEER = [
    "Wah bhai wah! Ekdum sahi.",
    "Shabaash! Level nikal gaya.",
    "Kya baat hai bhai, mast solve kiya.",
    "Bilkul sahi bhai - agla level chalu.",
    "Zabardast! Python tere haath me aa raha hai.",
]
REVEAL = 10  # itni galtiyon ke baad answer bata do


def points(tries):
    """Fewer wrong attempts, more points. Never below 20 - koshish ka bhi credit."""
    return max(20, 100 - 10 * tries)


def check(level, src):
    """Run src, then every test. Returns None on pass, else a failure message."""
    ns = {}
    out = io.StringIO()
    try:
        with contextlib.redirect_stdout(out):
            exec(compile(src, "work.py", "exec"), ns)
    except Exception:
        # limit=-1: deepest frame, i.e. the user's line, not this checker's exec call
        return "your code crashed:\n" + traceback.format_exc(limit=-1).strip()
    ns["__out__"] = out.getvalue()

    def drive(coro):
        """Run a coroutine that never really blocks. asyncio.run() is unusable in
        the browser (Pyodide already owns the event loop), so step it by hand."""
        try:
            coro.send(None)
        except StopIteration as stop:
            return stop.value
        raise RuntimeError("coroutine awaited something that blocks")

    ns["drive"] = drive

    def raises(fn, exc):
        """True if calling fn() raises exc. Lets a test check error handling."""
        try:
            fn()
        except exc:
            return True
        except Exception:
            return False
        return False

    ns["raises"] = raises
    for expr, want in level["tests"]:
        try:
            got = eval(expr, ns)
        except Exception as e:
            return f"{expr}  ->  raised {type(e).__name__}: {e}"
        if got != want:
            return f"{expr}  ->  got {got!r}, expected {want!r}"
    return None


def load():
    try:
        with open(SAVE) as f:
            d = json.load(f)
            return d["done"], d.get("pts", 0)
    except (OSError, ValueError, KeyError):
        return 0, 0


def save(done, pts):
    with open(SAVE, "w") as f:
        json.dump({"done": done, "pts": pts}, f)


def pick_track():
    print("\nPehle bata, tera Python level kya hai?")
    for n, t in enumerate(TRACKS, 1):
        print(f"  {n}. {t['name']} (level {t['start'] + 1} se)  -  {t['desc']}")
    while True:
        choice = input("1 / 2 / 3 > ").strip()
        if choice in ("1", "2", "3"):
            return TRACKS[int(choice) - 1]["start"]
        print("  1, 2 ya 3 daal bhai.")


def show(i, pts):
    lv = LEVELS[i]
    bar = "#" * (i + 1) + "." * (len(LEVELS) - i - 1)
    print(f"\n[{bar}]  Level {i + 1}/{len(LEVELS)}: {lv['t']}  |  {pts} points")
    print("\n  -- Pehle samajh --")
    print("  " + lv["lesson"].replace(". ", ".\n  "))
    print("\n  " + lv["example"].replace("\n", "\n  "))
    print("\n  -- Ab tera test (upar wale example se alag sawaal) --")
    print(f"  {lv['brief']}")
    print(f"  Edit {WORK}, save it, then press Enter.")
    print("  (s = solution, n = skip, r = reset level, q = quit)")


def play():
    i, pts = load()
    if i >= len(LEVELS):
        print(f"All levels done, {pts} points. Delete progress.json to replay.")
        return
    print("Python Quest - edit work.py, press Enter to check.")
    if not os.path.exists(SAVE):
        i = pick_track()
    while i < len(LEVELS):
        lv = LEVELS[i]
        with open(WORK, "w") as f:
            f.write(f"# Level {i + 1}: {lv['t']}\n# {lv['brief']}\n\n" + lv["start"])
        show(i, pts)
        tries = 0
        while True:
            cmd = input("> ").strip().lower()
            if cmd == "q":
                save(i, pts)
                print("Saved. See you.")
                return
            if cmd == "s":
                print("\n" + lv["sol"] + "\n")
                continue
            if cmd == "n":
                i += 1
                break
            if cmd == "r":
                break
            with open(WORK) as f:
                src = f.read()
            err = check(lv, src)
            if err:
                tries += 1
                print("\n  " + SCOLD[min(tries - 1, len(SCOLD) - 1)])
                print("  " + lv["hint"])
                print("  (technically: " + err.replace("\n", "\n  ") + ")")
                if tries >= REVEAL:
                    print(f"\n  Bhai {tries} baar ho gaya, ab main hi bata deta hu. "
                          "Ise padh, samajh, fir apne haath se likh:\n")
                    print("  " + lv["sol"].replace("\n", "\n  "))
                    print("\n  " + lv["bonus"])
                continue
            got = points(tries)
            pts += got
            i += 1
            save(i, pts)
            print(f"\n  {CHEER[min(tries, len(CHEER) - 1)]}  +{got} points  (total {pts})")
            print("  " + lv["bonus"])
            break
        if i >= len(LEVELS):
            print(f"\nYou finished Python Quest with {pts} points. Nicely done, bhai.")
            save(i, pts)


def dump_web():
    """Write levels.js so index.html can reuse these levels and this checker."""
    import inspect
    # JSON has no set and no tuple, so every expected value travels as a Python
    # literal string and the browser turns it back with ast.literal_eval.
    web = []
    for lv in LEVELS:
        d = dict(lv)
        d["tests"] = [[expr, repr(want)] for expr, want in lv["tests"]]
        web.append(d)
    with open(os.path.join(HERE, "levels.js"), "w") as f:
        f.write("window.LEVELS = %s;\nwindow.CHAPTERS = %s;\nwindow.TRACKS = %s;\n"
                "window.SCOLD = %s;\nwindow.CHEER = %s;\nwindow.REVEAL = %d;\n"
                "window.CHECK_SRC = %s;\n"
                % (json.dumps(web, indent=1),
                   json.dumps([{"id": c, "name": n, "desc": d} for c, n, d in CHAPTERS]),
                   json.dumps(TRACKS), json.dumps(SCOLD), json.dumps(CHEER), REVEAL,
                   json.dumps(inspect.getsource(check))))
    print("wrote levels.js")


# ---------------------------------------------------------------- accounts + server
# The accounts, the storage and the AI live in api/_shared.py, because Vercel runs
# that folder as serverless functions. Local dev imports the same file, so there is
# one implementation of login rather than two that drift apart.
sys.path.insert(0, os.path.join(HERE, "api"))
import index as _shared                            # noqa: E402,F401
from index import (COACH_SYSTEM, CHAT_SYSTEM, account_route, ai_key,  # noqa: E402,F401
                     ask_ai, friendly, get_store, handle, pw_hash, pw_ok)

USERS = os.path.join(HERE, "users.json")


def serve(port=8777):
    import http.server
    import urllib.parse

    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *a, **kw):
            super().__init__(*a, directory=HERE, **kw)

        def reply(self, status, payload):
            raw = json.dumps(payload).encode()
            self.send_response(status)
            self.send_header("content-type", "application/json")
            self.send_header("content-length", str(len(raw)))
            self.end_headers()
            self.wfile.write(raw)

        def do_POST(self):
            route = urllib.parse.urlparse(self.path).path
            if not route.startswith("/api/"):
                return self.reply(404, {"error": "no such route"})
            try:
                length = int(self.headers.get("content-length") or 0)
                body = json.loads(self.rfile.read(length) or "{}")
                assert isinstance(body, dict)
            except (ValueError, AssertionError):
                return self.reply(400, {"error": "bad json"})
            try:
                status, payload = handle(route, body)
            except Exception as e:
                status, payload = 500, {"error": "server error: %s" % e}
            self.reply(status, payload)

        def log_message(self, *a):
            pass   # ponytail: quiet server, use --debug plumbing only if you miss it

    print(f"Python Quest chal raha hai:  http://localhost:{port}/index.html")
    print(f"Accounts yahan save hote hai: {USERS}   (Ctrl+C to stop)")
    http.server.ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()


def demo():
    """Self-check: every reference solution passes, and the accounts API behaves."""
    for lv in LEVELS:
        err = check(lv, lv["sol"])
        assert err is None, f"{lv['t']}: {err}"
        # a lesson that just hands over the answer isn't teaching, it's cheating
        assert lv["example"].strip() and lv["example"] != lv["sol"], f"{lv['t']}: lesson == answer"
    # .env.example is committed, so a real key in it would be published. This
    # caught a live OpenAI key once; the guard stays.
    tpl = os.path.join(HERE, ".env.example")
    if os.path.exists(tpl):
        for line in io.open(tpl, encoding="utf-8"):
            if "=" not in line or line.strip().startswith("#"):
                continue
            name, value = line.split("=", 1)
            value = value.strip()
            leaky = value.startswith(("sk-", "sb_secret_", "eyJ")) or "postgresql://" in value
            assert not (leaky and len(value) > 25),                 ".env.example holds a real secret on %s, move it to .env" % name.strip()

    # beginner track must not need a function before the level that teaches functions
    for lv in LEVELS[:ORDER.index("Functions")]:
        assert "def " not in lv["sol"] + lv["start"], f"{lv['t']} needs def before it's taught"
    assert LEVELS[0]["t"] == "Printing", "beginner must start at print"
    assert check(LEVELS[1], "name = 'Bob'\nage = 36") is not None, "checker too lenient"
    assert check(LEVELS[0], "1/0") is not None, "crash not caught"

    class FakeStore:                 # the account logic, with no disk and no network
        def __init__(self):
            self.rows = {}

        def get(self, name):
            return self.rows.get(name)

        def put(self, name, user):
            self.rows[name] = user

    db = FakeStore()
    ok, out = account_route("/api/signup", {"user": "Ravi", "pass": "hello"}, db)
    assert ok == 200 and out["user"] == "ravi", out          # username normalised
    assert "hello" not in json.dumps(db.rows), "password stored in plaintext!"
    assert account_route("/api/signup", {"user": "ravi", "pass": "hello"}, db)[0] == 409
    assert account_route("/api/signup", {"user": "ab", "pass": "hello"}, db)[0] == 400
    assert account_route("/api/signup", {"user": "amit", "pass": "x"}, db)[0] == 400
    assert account_route("/api/login", {"user": "ravi", "pass": "wrong"}, db)[0] == 401
    ok, out = account_route("/api/login", {"user": "ravi", "pass": "hello"}, db)
    assert ok == 200, out
    token = out["token"]
    assert account_route("/api/save", {"user": "ravi", "token": "nope", "progress": {}}, db)[0] == 401
    prog = {"done": [0, 1], "pts": 200, "track": "medium"}
    assert account_route("/api/save", {"user": "ravi", "token": token, "progress": prog}, db)[0] == 200
    assert account_route("/api/login", {"user": "ravi", "pass": "hello"}, db)[1]["progress"] == prog
    # logging in on a second device must not sign the first one out
    assert account_route("/api/resume", {"user": "ravi", "token": token}, db)[0] == 200, \
        "logging in elsewhere kicked out the earlier device"
    assert account_route("/api/resume", {"user": "ravi", "token": "made up"}, db)[0] == 401
    print(f"ok - {len(LEVELS)} levels + lessons + accounts self-check")


if __name__ == "__main__":
    if "--test" in sys.argv:
        demo()
    elif "--web" in sys.argv:
        dump_web()
    elif "--serve" in sys.argv:
        serve()
    else:
        play()
