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
LEVELS = [
    dict(
        t="Hello, variables",
        brief="Make `name` the string 'Ada' and `age` the number 36.",
        start="name = ?\nage = ?\n",
        tests=[("name", "Ada"), ("age", 36)],
        sol="name = 'Ada'\nage = 36",
    ),
    dict(
        t="Printing",
        brief="Print exactly: Hello, World!",
        start="",
        tests=[("__out__", "Hello, World!\n")],
        sol="print('Hello, World!')",
    ),
    dict(
        t="Strings",
        brief="Given `raw`, set `clean` to it stripped of spaces and lowercased.",
        start="raw = '  MiXeD Case  '\nclean = ?\n",
        tests=[("clean", "mixed case")],
        sol="raw = '  MiXeD Case  '\nclean = raw.strip().lower()",
    ),
    dict(
        t="f-strings",
        brief="`naam` aur `marks` ko jod ke `line` banao: 'Riya ke 92 marks aaye'.",
        start="naam = 'Riya'\nmarks = 92\nline = ?\n",
        tests=[("line", "Riya ke 92 marks aaye")],
        sol="naam = 'Riya'\nmarks = 92\nline = f'{naam} ke {marks} marks aaye'",
    ),
    dict(
        t="Conditionals",
        brief=("score = 76 se `grade` banao (90+ 'A', 80+ 'B', 70+ 'C', warna 'F') aur "
               "temp = 45 se `mausam` banao (40 se upar 'Garmi', warna 'Theek')."),
        start=("score = 76\nif ?:\n    grade = ?\n\n"
               "temp = 45\nif ?:\n    mausam = ?\n"),
        tests=[("grade", "C"), ("mausam", "Garmi")],
        sol=("score = 76\n"
             "if score >= 90:\n"
             "    grade = 'A'\n"
             "elif score >= 80:\n"
             "    grade = 'B'\n"
             "elif score >= 70:\n"
             "    grade = 'C'\n"
             "else:\n"
             "    grade = 'F'\n\n"
             "temp = 45\n"
             "if temp > 40:\n"
             "    mausam = 'Garmi'\n"
             "else:\n"
             "    mausam = 'Theek'"),
    ),
    dict(
        t="Loops",
        brief=("for loop se 1 se 10 tak ka jod `total` me nikalo, aur 1 se 5 tak ke "
               "har number ka square `squares` list me daalo."),
        start="total = 0\nfor ?:\n    ?\n\nsquares = []\nfor ?:\n    ?\n",
        tests=[("total", 55), ("squares", [1, 4, 9, 16, 25])],
        sol=("total = 0\n"
             "for i in range(1, 11):\n"
             "    total = total + i\n\n"
             "squares = []\n"
             "for i in range(1, 6):\n"
             "    squares.append(i * i)"),
    ),
    dict(
        t="Lists",
        brief=("`nums` se: `pehla` (pehla item), `kitne` (lambai), `bade` (10 se bade "
               "numbers ki nayi list) nikalo, fir 50 ko `nums` me add karo."),
        start=("nums = [5, 12, 7, 20]\npehla = ?\nkitne = ?\nbade = ?\n"
               "# ab 50 ko nums me add karo\n"),
        tests=[("pehla", 5), ("kitne", 4), ("bade", [12, 20]), ("nums", [5, 12, 7, 20, 50])],
        sol=("nums = [5, 12, 7, 20]\n"
             "pehla = nums[0]\n"
             "kitne = len(nums)\n"
             "bade = [n for n in nums if n > 10]\n"
             "nums.append(50)"),
    ),
    dict(
        t="Slicing",
        brief="s = 'namaste' se `pehle_teen`, `aakhri_do` aur `ulta` (poora ulta) nikalo.",
        start="s = 'namaste'\npehle_teen = ?\naakhri_do = ?\nulta = ?\n",
        tests=[("pehle_teen", "nam"), ("aakhri_do", "te"), ("ulta", "etsaman")],
        sol="s = 'namaste'\npehle_teen = s[:3]\naakhri_do = s[-2:]\nulta = s[::-1]",
    ),
    dict(
        t="Dicts",
        brief=("`phone` me 'sita' ka number 88888 add karo, `ravi_num` nikalo, aur "
               "`amit_num` .get() se nikalo (Amit nahi hai toh 0 aana chahiye)."),
        start="phone = {'ravi': 99999}\n# sita add karo\nravi_num = ?\namit_num = ?\n",
        tests=[("phone", {"ravi": 99999, "sita": 88888}), ("ravi_num", 99999), ("amit_num", 0)],
        sol=("phone = {'ravi': 99999}\n"
             "phone['sita'] = 88888\n"
             "ravi_num = phone['ravi']\n"
             "amit_num = phone.get('amit', 0)"),
    ),
    dict(
        t="Numbers & maths",
        brief=("a = 7 aur b = 2 se: `jod` (+), `ghata` (-), `guna` (*), `bhaag` (/), "
               "`bacha` (%) aur `ghaat` (**) nikalo."),
        start=("a = 7\nb = 2\njod = ?\nghata = ?\nguna = ?\n"
               "bhaag = ?    # / hamesha decimal deta hai\n"
               "bacha = ?    # % matlab bhaag ke baad jo bacha\n"
               "ghaat = ?    # ** matlab power\n"),
        tests=[("jod", 9), ("ghata", 5), ("guna", 14), ("bhaag", 3.5),
               ("bacha", 1), ("ghaat", 49)],
        sol=("a = 7\nb = 2\njod = a + b\nghata = a - b\nguna = a * b\n"
             "bhaag = a / b\nbacha = a % b\nghaat = a ** b"),
    ),
    dict(
        t="Booleans & comparison",
        brief=("age = 20, marks = 45. `adult` (18 ya zyada?), `paas` (33 se zyada?), "
               "`dono` (dono sach hai?), `fail` (paas nahi hai?) banao."),
        start=("age = 20\nmarks = 45\nadult = ?\npaas = ?\n"
               "dono = ?     # and use karo\nfail = ?     # not use karo\n"),
        tests=[("adult", True), ("paas", True), ("dono", True), ("fail", False)],
        sol=("age = 20\nmarks = 45\nadult = age >= 18\npaas = marks > 33\n"
             "dono = adult and paas\nfail = not paas"),
    ),
    dict(
        t="While loop",
        brief=("1 se shuru kar ke while loop me double karte jao jab tak 100 paar na ho. "
               "`n` final value aur `steps` me kitni baar double kiya."),
        start="n = 1\nsteps = 0\nwhile ?:\n    ?\n",
        tests=[("n", 128), ("steps", 7)],
        sol=("n = 1\nsteps = 0\n"
             "while n <= 100:\n"
             "    n = n * 2\n"
             "    steps = steps + 1"),
    ),
    dict(
        t="Functions",
        brief=("Do function banao: `namaste(naam)` jo 'Namaste, Riya!' de, aur "
               "`area(lambai, chaudai)` jo dono ka guna de."),
        start="def namaste(naam):\n    ...\n\ndef area(lambai, chaudai):\n    ...\n",
        tests=[("namaste('Riya')", "Namaste, Riya!"), ("namaste('Om')", "Namaste, Om!"),
               ("area(3, 4)", 12), ("area(10, 10)", 100)],
        sol=("def namaste(naam):\n"
             "    return f'Namaste, {naam}!'\n\n"
             "def area(lambai, chaudai):\n"
             "    return lambai * chaudai"),
    ),
    dict(
        t="Default & keyword args",
        brief="Write `join(items, sep=', ')` joining items into one string.",
        start="def join(items, sep=', '):\n    ...\n",
        tests=[("join(['a','b'])", "a, b"), ("join(['a','b'], sep='-')", "a-b")],
        sol="def join(items, sep=', '):\n    return sep.join(items)",
    ),
    dict(
        t="Sorting with a key",
        brief="Write `by_len(words)` sorting words shortest first, ties alphabetical.",
        start="def by_len(words):\n    ...\n",
        tests=[("by_len(['pear','fig','apple'])", ["fig", "pear", "apple"]),
               ("by_len(['bb','aa'])", ["aa", "bb"])],
        sol="def by_len(words):\n    return sorted(words, key=lambda w: (len(w), w))",
    ),
    dict(
        t="Exceptions",
        brief="Write `safe_div(a, b)` returning a/b, or None if b is 0.",
        start="def safe_div(a, b):\n    ...\n",
        tests=[("safe_div(6, 3)", 2.0), ("safe_div(1, 0)", None)],
        sol=("def safe_div(a, b):\n"
             "    try:\n"
             "        return a / b\n"
             "    except ZeroDivisionError:\n"
             "        return None"),
    ),
    dict(
        t="Classes",
        brief="Class `Dog` with __init__(name) and speak() -> '<name> says woof'.",
        start="class Dog:\n    ...\n",
        tests=[("Dog('Rex').speak()", "Rex says woof"), ("Dog('Ada').name", "Ada")],
        sol=("class Dog:\n"
             "    def __init__(self, name):\n"
             "        self.name = name\n"
             "    def speak(self):\n"
             "        return f'{self.name} says woof'"),
    ),
    dict(
        t="Dunder methods",
        brief="Class `Money(amount)` where repr is 'Money(5)' and Money(2)+Money(3)==Money(5).",
        start="class Money:\n    ...\n",
        tests=[("repr(Money(5))", "Money(5)"), ("Money(2) + Money(3) == Money(5)", True)],
        sol=("class Money:\n"
             "    def __init__(self, amount):\n"
             "        self.amount = amount\n"
             "    def __repr__(self):\n"
             "        return f'Money({self.amount})'\n"
             "    def __add__(self, other):\n"
             "        return Money(self.amount + other.amount)\n"
             "    def __eq__(self, other):\n"
             "        return self.amount == other.amount"),
    ),
    dict(
        t="Inheritance",
        brief="`Cat` subclasses Animal, overrides speak() -> 'meow'. Keep Animal.name.",
        start=("class Animal:\n"
               "    def __init__(self, name):\n"
               "        self.name = name\n"
               "    def speak(self):\n"
               "        return '...'\n\n"
               "class Cat(Animal):\n"
               "    ...\n"),
        tests=[("Cat('Tom').speak()", "meow"), ("Cat('Tom').name", "Tom"),
               ("isinstance(Cat('Tom'), Animal)", True)],
        sol=("class Animal:\n"
             "    def __init__(self, name):\n"
             "        self.name = name\n"
             "    def speak(self):\n"
             "        return '...'\n\n"
             "class Cat(Animal):\n"
             "    def speak(self):\n"
             "        return 'meow'"),
    ),
    dict(
        t="Generators",
        brief="Write `countdown(n)` yielding n, n-1, ... 1.",
        start="def countdown(n):\n    ...\n",
        tests=[("list(countdown(3))", [3, 2, 1]), ("list(countdown(0))", [])],
        sol="def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1",
    ),
    dict(
        t="Comprehensions & zip",
        brief="Write `pair(ks, vs)` -> dict of ks zipped to vs, skipping falsy keys.",
        start="def pair(ks, vs):\n    ...\n",
        tests=[("pair(['a','','b'], [1,2,3])", {"a": 1, "b": 3}), ("pair([], [])", {})],
        sol="def pair(ks, vs):\n    return {k: v for k, v in zip(ks, vs) if k}",
    ),
    dict(
        t="Decorators",
        brief="Write `twice` - a decorator that calls the function and returns its result doubled.",
        start="def twice(fn):\n    ...\n\n@twice\ndef n():\n    return 5\n",
        tests=[("n()", 10)],
        sol=("def twice(fn):\n"
             "    def wrapper(*args, **kwargs):\n"
             "        return fn(*args, **kwargs) * 2\n"
             "    return wrapper\n\n"
             "@twice\ndef n():\n    return 5"),
    ),
    dict(
        t="Closures",
        brief="Write `counter()` returning a function that returns 1, 2, 3... on each call.",
        start="def counter():\n    ...\n",
        tests=[("[(lambda c: [c(), c(), c()])(counter())]", [[1, 2, 3]]),
               ("counter()()", 1)],
        sol=("def counter():\n"
             "    n = 0\n"
             "    def tick():\n"
             "        nonlocal n\n"
             "        n += 1\n"
             "        return n\n"
             "    return tick"),
    ),
    dict(
        t="Context managers",
        brief="Write class `Tag(name)` usable with `with`, appending to `log`: 'open'/'close'.",
        start="log = []\n\nclass Tag:\n    ...\n",
        tests=[("(log.clear(), Tag('b').__enter__(), Tag('b').__exit__(None, None, None), log)[3]",
                ["open", "close"])],
        sol=("log = []\n\n"
             "class Tag:\n"
             "    def __init__(self, name):\n"
             "        self.name = name\n"
             "    def __enter__(self):\n"
             "        log.append('open')\n"
             "        return self\n"
             "    def __exit__(self, *exc):\n"
             "        log.append('close')\n"
             "        return False"),
    ),
    dict(
        t="collections & itertools",
        brief="Write `top(words, k)` -> k most common words, most common first (use Counter).",
        start="from collections import Counter\n\ndef top(words, k):\n    ...\n",
        tests=[("top(['a','b','a','c','a','b'], 2)", ["a", "b"]), ("top(['x'], 5)", ["x"])],
        sol=("from collections import Counter\n\n"
             "def top(words, k):\n"
             "    return [w for w, _ in Counter(words).most_common(k)]"),
    ),
    dict(
        t="Dataclasses & typing",
        brief="`Point` dataclass with x: int, y: int and method `dist2()` -> x*x + y*y.",
        start="from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    ...\n",
        tests=[("Point(3, 4).dist2()", 25), ("Point(1, 2) == Point(1, 2)", True)],
        sol=("from dataclasses import dataclass\n\n"
             "@dataclass\n"
             "class Point:\n"
             "    x: int\n"
             "    y: int\n"
             "    def dist2(self) -> int:\n"
             "        return self.x * self.x + self.y * self.y"),
    ),
    dict(
        t="Recursion",
        brief="Write `flatten(x)` turning nested lists into one flat list.",
        start="def flatten(x):\n    ...\n",
        tests=[("flatten([1, [2, [3, 4]], 5])", [1, 2, 3, 4, 5]), ("flatten([])", [])],
        sol=("def flatten(x):\n"
             "    out = []\n"
             "    for item in x:\n"
             "        if isinstance(item, list):\n"
             "            out.extend(flatten(item))\n"
             "        else:\n"
             "            out.append(item)\n"
             "    return out"),
    ),
    dict(
        t="async / await",
        brief=("Write `async def fetch(x)` returning x*2, and `async def both(a, b)` "
               "returning [await fetch(a), await fetch(b)]."),
        start="async def fetch(x):\n    ...\n\nasync def both(a, b):\n    ...\n",
        tests=[("drive(fetch(3))", 6), ("drive(both(1, 2))", [2, 4])],
        sol=("async def fetch(x):\n"
             "    return x * 2\n\n"
             "async def both(a, b):\n"
             "    return [await fetch(a), await fetch(b)]"),
    ),
]


# Teaching order: zero se shuru. Koi function (def) tab tak nahi jab tak "Functions"
# level na aa jaye - beginner ko pehle print, maths, if-else, loop aate hai.
ORDER = [
    "Printing", "Hello, variables", "Numbers & maths", "Strings", "f-strings",
    "Booleans & comparison", "Conditionals", "Lists", "Slicing", "Loops", "While loop",
    "Dicts",
    "Functions", "Default & keyword args", "Sorting with a key", "Exceptions",
    "Comprehensions & zip", "Classes", "Dunder methods", "Inheritance",
    "Generators", "Decorators", "Closures", "Context managers",
    "collections & itertools", "Dataclasses & typing", "Recursion", "async / await",
]
LEVELS.sort(key=lambda lv: ORDER.index(lv["t"]))

# Hinglish hint + bonus task per level, merged into LEVELS below.
HINTS = {
    "Hello, variables": (
        "Bhai ? ki jagah value likhni hai: name = 'Ada' (text pe quotes lagte hai) aur "
        "age = 36 (number pe quotes nahi lagte).",
        "Bonus: ek variable city bana ke usme apne sheher ka naam daal, aur pi = 3.14 bhi bana."),
    "Printing": (
        "print() ke andar bilkul wahi text daal - spelling, comma aur ! sab same: "
        "print('Hello, World!')",
        "Bonus: do print lines likh ke dekh output kaise alag alag line me aata hai."),
    "Strings": (
        "Do kaam karne hai bhai - pehle spaces hatao .strip(), fir chhota karo .lower(). "
        "Dono ko jod de: raw.strip().lower()",
        "Bonus: clean.title() chala ke dekh, kya milta hai."),
    "f-strings": (
        "String ke aage f lagao aur {} ke andar variable ka naam daalo: "
        "line = f'{naam} ke {marks} marks aaye'. Quotes ke andar hi rehna hai.",
        "Bonus: ek aur line bana jisme marks ka double dikhe - {marks * 2}."),
    "Conditionals": (
        "if ke aage shart, uske niche 4 space chhod ke kaam. Upar se niche check hota hai - "
        "pehle 90, fir 80, fir 70, isliye elif ka order ulta mat karna.",
        "Bonus: 60 se upar ke liye 'D' bhi add kar."),
    "Loops": (
        "range(1, 11) matlab 1 se 10 tak - aakhri number kabhi shamil nahi hota. Loop ke "
        "andar total = total + i likh, aur list me daalne ke liye squares.append(i * i).",
        "Bonus: 1 se 20 tak sirf even numbers ka jod nikaal (range(2, 21, 2) dekh)."),
    "Lists": (
        "nums[0] pehla item deta hai (ginti 0 se shuru hoti hai), len(nums) lambai. "
        "bade ke liye list comprehension: [n for n in nums if n > 10]. Add karne ke liye .append(50).",
        "Bonus: nums.remove(7) chala ke dekh, aur nums[1:3] bhi print kar."),
    "Slicing": (
        "s[:3] shuru ke teen, s[-2:] aakhri ke do, aur s[::-1] poori string ulti kar deta hai. "
        "Colon ke pehle start, baad me end.",
        "Bonus: s[2:5] print kar ke dekh kya aata hai."),
    "Numbers & maths": (
        "Seedha likh: jod = a + b. Do cheezein yaad rakh - / hamesha decimal deta hai "
        "(7/2 = 3.5), aur % bacha hua deta hai (7%2 = 1). ** matlab power.",
        "Bonus: a // b bhi try kar - ye decimal kaat ke pura number deta hai."),
    "Booleans & comparison": (
        "Comparison ka jawab True ya False hota hai: age >= 18. Do shart jodne ke liye and, "
        "ulta karne ke liye not. = (value dena) aur == (barabari check) alag hai bhai.",
        "Bonus: or bhi try kar - ek bhi sach ho toh True aata hai."),
    "While loop": (
        "while ki shart tab tak sachi rehni chahiye jab tak kaam baaki hai: while n <= 100. "
        "Andar n ko badalna mat bhool warna loop kabhi rukega hi nahi.",
        "Bonus: 3 ka table while loop se print kar."),
    "Functions": (
        "def naam(argument): likh, andar kaam kar, aur result return kar. return nahi likha "
        "toh function None deta hai. Body 4 space andar honi chahiye.",
        "Bonus: ek `bada(a, b)` function bana jo dono me se bada number de."),
    "Dicts": (
        "Nayi entry aise banti hai: phone['sita'] = 88888. Nikalne ke liye phone['ravi']. "
        "Jo key ho hi na uske liye .get('amit', 0) - warna KeyError aa jayega.",
        "Bonus: phone.keys() aur phone.values() print kar ke dekh."),
    "Default & keyword args": (
        "sep ka default already ', ' hai - bas sep.join(items) return kar de. Join ulta "
        "chalta hai bhai: separator.join(list).",
        "Bonus: numbers ki list join kar ke dekh, error aayega - sochh kyun."),
    "Sorting with a key": (
        "sorted() me key do: key=lambda w: (len(w), w). Tuple isliye ki pehle lambai dekhe, "
        "barabar ho toh alphabet.",
        "Bonus: reverse=True laga ke ulta sort kar ke dekh."),
    "Exceptions": (
        "try ke andar a / b likh, aur except ZeroDivisionError ke andar None return kar.",
        "Bonus: b agar string ho toh? TypeError bhi handle kar le."),
    "Classes": (
        "__init__ me self.name = name save kar, speak() me f'{self.name} says woof' return "
        "kar. Har method ka pehla argument self hota hai.",
        "Bonus: ek breed argument bhi le, default 'desi' rakh."),
    "Dunder methods": (
        "__repr__ me f'Money({self.amount})' return kar, __add__ me naya Money(self.amount + "
        "other.amount) return kar, __eq__ me dono amounts compare kar.",
        "Bonus: __sub__ bhi likh de."),
    "Inheritance": (
        "Cat ke andar sirf speak() dubara likhna hai - __init__ Animal se apne aap mil jata "
        "hai, dubara likhne ki zarurat nahi.",
        "Bonus: Dog class bhi bana jo 'woof' bole."),
    "Generators": (
        "return nahi bhai, yield karna hai: while n > 0: yield n, fir n -= 1.",
        "Bonus: countup(n) bana jo 1 se n tak yield kare."),
    "Comprehensions & zip": (
        "{k: v for k, v in zip(ks, vs) if k} - zip dono list ko jodta hai, if k khali string "
        "ko hata deta hai.",
        "Bonus: values ko double kar ke daal."),
    "Decorators": (
        "twice ke andar ek wrapper function bana jo fn(*args) ka result * 2 kare, fir wrapper "
        "return kar - bina bracket ke, call mat kar.",
        "Bonus: times(n) bana jo n se multiply kare (decorator with argument)."),
    "Closures": (
        "counter ke andar n = 0 rakh, andar wale function me nonlocal n likh ke n += 1 kar, "
        "fir andar wala function return kar de.",
        "Bonus: counter(start=10) bana jo 10 se ginti shuru kare."),
    "Context managers": (
        "__enter__ me log.append('open') aur return self, __exit__(self, *exc) me "
        "log.append('close'). Dono methods honi chahiye tabhi with chalega.",
        "Bonus: __exit__ me error aaye toh 'error' bhi append kar."),
    "collections & itertools": (
        "Counter(words).most_common(k) seedha (word, count) ki list deta hai - bas words "
        "nikal le comprehension se.",
        "Bonus: bina Counter ke, dict aur sorted se same kaam kar ke dekh."),
    "Dataclasses & typing": (
        "Class ke andar sirf x: int aur y: int likh - @dataclass khud __init__ aur == bana "
        "dega. dist2 normal method ki tarah likh.",
        "Bonus: @dataclass(frozen=True) laga ke value badalne ki koshish kar."),
    "Recursion": (
        "Har item pe dekh - agar wo list hai toh flatten(item) dubara bula ke extend kar, "
        "warna seedha append kar de.",
        "Bonus: tuples ko bhi handle kar le."),
    "async / await": (
        "async def ke andar return normal hi likhte hai. both() me [await fetch(a), "
        "await fetch(b)] ki list bana. await sirf async def ke andar chalta hai.",
        "Bonus: teesra fetch add kar ke teen results return kar."),
}
for _lv in LEVELS:
    _lv["hint"], _lv["bonus"] = HINTS[_lv["t"]]

# Pehle sikhao, fir test lo: each lesson explains the idea with a worked example
# that is deliberately DIFFERENT from the level's own task.
LESSONS = {
    "Hello, variables": (
        "Variable ek dabba hai jisme value rakhte hai, aur = se value andar daalte hai. "
        "Text (string) ko quotes me likhte hai, number ko bina quotes ke.",
        "city = 'Mumbai'      # text - quotes zaroori hai\n"
        "pin = 400001         # number - quotes nahi lagte\n"
        "print(city, pin)     # Mumbai 400001"),
    "Printing": (
        "print() screen pe kuch bhi dikhata hai. Quotes ke andar jo likhoge wo waisa ka waisa "
        "chhapega - ek bhi spelling ya symbol idhar-udhar hua toh output alag ho jayega.",
        "print('Namaste India!')   # Namaste India!\n"
        "print('Line ek')\n"
        "print('Line do')          # har print nayi line me aata hai"),
    "Strings": (
        "String pe kuch ready-made kaam hote hai jinhe method kehte hai. Method ko dot laga ke "
        "bulate hai. Ye original ko badalte nahi, nayi string bana ke dete hai.",
        "s = '  PyThOn RoCkS  '\n"
        "print(s.strip())          # 'PyThOn RoCkS' - dono taraf ke space gaye\n"
        "print(s.upper())          # sab bada\n"
        "print(s.strip().lower())  # dono kaam ek saath, left se right chalte hai"),
    "f-strings": (
        "String ke aage f lagao, fir {} ke andar koi bhi variable ya calculation daal do - "
        "Python usko value se badal dega. Ye jodne ka sabse saaf tarika hai.",
        "naam = 'Riya'\n"
        "marks = 92\n"
        "print(f'{naam} ke {marks} marks aaye')   # Riya ke 92 marks aaye\n"
        "print(f'Double: {marks * 2}')            # {} ke andar hisaab bhi chalta hai"),
    "Numbers & maths": (
        "Python calculator bhi hai. + - * / ke alawa do khaas hai: % bacha hua deta hai aur "
        "** power. Dhyan rakh - / hamesha decimal deta hai, aur // decimal kaat deta hai.",
        "x = 9\ny = 4\n"
        "print(x + y, x - y, x * y)   # 13 5 36\n"
        "print(x / y)                 # 2.25  - decimal\n"
        "print(x // y, x % y)         # 2 1   - pura, aur bacha hua\n"
        "print(x ** 2)                # 81    - x ka square"),
    "Booleans & comparison": (
        "Comparison ka jawab sirf True ya False hota hai. Yaad rakh: = value deta hai, "
        "== barabari check karta hai. Do shart jodne ke liye and/or, ulta karne ke liye not.",
        "umar = 15\n"
        "print(umar > 10)              # True\n"
        "print(umar == 18)             # False - == barabari, = nahi\n"
        "print(umar > 10 and umar < 18)  # True  - dono sach\n"
        "print(not umar > 10)          # False - ulta ho gaya"),
    "While loop": (
        "for pehle se pata list pe ghoomta hai, while tab tak chalta hai jab tak shart sachi "
        "hai. Andar wali value badalna zaroori hai, warna loop hamesha ke liye atak jayega.",
        "n = 10\n"
        "steps = 0\n"
        "while n > 1:\n"
        "    n = n // 2      # ye badalna zaroori hai\n"
        "    steps = steps + 1\n"
        "print(n, steps)     # 1 3"),
    "Functions": (
        "Function ek kaam ko naam de deta hai, taki baar-baar likhna na pade. def se banate "
        "hai, brackets me input (argument) lete hai, aur return se jawab wapas dete hai.",
        "def double(x):\n"
        "    return x * 2          # return nahi likha toh None milega\n\n"
        "def jodo(a, b):\n"
        "    return a + b\n\n"
        "print(double(5))          # 10\n"
        "print(jodo(3, 4))         # 7"),
    "Conditionals": (
        "if condition sach ho toh uska block chalta hai, warna elif dekha jata hai, aur sab "
        "fail ho toh else. Python upar se niche check karta hai aur PEHLA match chuun ke ruk jata hai.",
        "temp = 38\n"
        "if temp > 40:\n"
        "    print('Bahut garmi')\n"
        "elif temp > 30:\n"
        "    print('Garmi')      # yahi chalega, aur baaki check nahi honge\n"
        "else:\n"
        "    print('Thanda')"),
    "Loops": (
        "for loop ek list ya range ke har item pe ghoomta hai. range(1, 4) matlab 1, 2, 3 - "
        "aakhri number kabhi shamil nahi hota, isliye n tak jaana ho toh n+1 likhna padta hai.",
        "count = 0\n"
        "for i in range(1, 4):     # i = 1, fir 2, fir 3\n"
        "    count = count + i     # jodta jata hai\n"
        "print(count)              # 6"),
    "Lists": (
        "List ek line me kai cheezein rakhti hai. Nayi list banane ka short tarika hai list "
        "comprehension: [kya_chahiye for item in list if shart].",
        "nums = [5, 12, 7, 20]\n"
        "bade = [n for n in nums if n > 10]\n"
        "print(bade)               # [12, 20] - order wahi rehta hai\n"
        "print(len(nums))          # 4"),
    "Slicing": (
        "s[start:end] se string ka tukda milta hai - start shamil, end nahi. Minus ulta ginta "
        "hai: -1 matlab aakhri letter.",
        "s = 'namaste'\n"
        "print(s[0:3])   # nam  - 0,1,2 (3 nahi)\n"
        "print(s[-2:])   # te   - aakhri do\n"
        "print(s[:4])    # nama - shuru se"),
    "Dicts": (
        "Dict me har value ka ek naam (key) hota hai. d[key] se value milti hai, par key na ho "
        "toh error aata hai - isliye d.get(key, default) safe hota hai.",
        "phone = {'ravi': 99999, 'sita': 88888}\n"
        "print(phone['ravi'])          # 99999\n"
        "print(phone.get('amit', 0))   # 0 - key nahi hai, par error bhi nahi\n"
        "phone['amit'] = 77777         # nayi entry add"),
    "Default & keyword args": (
        "Function ke argument ko default value de sakte ho. Jo bulaye wo chahe toh badal de, "
        "chahe toh chhod de. join() list ko ek string me jodta hai: separator.join(list).",
        "def wish(naam, msg='Namaste'):\n"
        "    return f'{msg}, {naam}!'\n"
        "print(wish('Ravi'))              # Namaste, Ravi!\n"
        "print(wish('Ravi', msg='Hi'))    # Hi, Ravi!"),
    "Sorting with a key": (
        "sorted() list ko sort karta hai. key=... batata hai ki kis cheez pe sort karna hai. "
        "Tuple return karo toh pehle wale pe sort hoga, barabar hone pe doosre pe.",
        "naam = ['Ravi', 'Om', 'Sita']\n"
        "print(sorted(naam))                    # alphabet ke hisaab se\n"
        "print(sorted(naam, key=len))           # chhote naam pehle\n"
        "print(sorted(naam, key=len, reverse=True))   # ulta"),
    "Exceptions": (
        "Jo code fatt sakta hai use try me rakho, aur except me batao ki error aane pe kya karna "
        "hai. Isse program band nahi hota.",
        "try:\n"
        "    n = int('abc')          # ye fatega\n"
        "except ValueError:\n"
        "    n = 0                   # sambhal liya\n"
        "print(n)                    # 0"),
    "Classes": (
        "Class ek blueprint hai. __init__ tab chalta hai jab naya object banta hai, aur self.x = x "
        "se value object ke andar save hoti hai. Har method ka pehla argument self hota hai.",
        "class Student:\n"
        "    def __init__(self, naam):\n"
        "        self.naam = naam          # object ke andar save\n"
        "    def hello(self):\n"
        "        return f'Main {self.naam} hu'\n"
        "print(Student('Riya').hello())    # Main Riya hu"),
    "Dunder methods": (
        "Do underscore wale special methods Python ke built-in kaam ko sambhalte hai: __repr__ "
        "print pe, __add__ + pe, __eq__ == pe. Inhe khud kabhi bulana nahi padta.",
        "class Box:\n"
        "    def __init__(self, n):\n"
        "        self.n = n\n"
        "    def __repr__(self):\n"
        "        return f'Box({self.n})'\n"
        "    def __add__(self, other):\n"
        "        return Box(self.n + other.n)\n"
        "print(Box(2) + Box(3))     # Box(5)"),
    "Inheritance": (
        "Ek class doosri se sab kuch viraasat me le sakti hai. Jo method waisa hi chahiye use "
        "dubara likhna hi nahi - sirf jo badalna hai wahi likho.",
        "class Vehicle:\n"
        "    def __init__(self, naam):\n"
        "        self.naam = naam\n"
        "    def sound(self):\n"
        "        return 'brrr'\n\n"
        "class Bike(Vehicle):          # __init__ apne aap mil gaya\n"
        "    def sound(self):\n"
        "        return 'vroom'\n"
        "print(Bike('Splendor').naam, Bike('Splendor').sound())   # Splendor vroom"),
    "Generators": (
        "yield wala function ek saath sab nahi deta - ek-ek karke deta hai, jab maango tab. "
        "Isse badi list memory me nahi bharni padti.",
        "def squares(n):\n"
        "    for i in range(1, n + 1):\n"
        "        yield i * i           # return nahi, yield\n"
        "print(list(squares(4)))       # [1, 4, 9, 16]"),
    "Comprehensions & zip": (
        "zip do list ko jodi bana ke saath chalata hai. Dict comprehension {k: v for ...} se "
        "seedha dict ban jata hai, aur if laga ke fazool entries hata sakte ho.",
        "naam = ['ravi', 'sita']\n"
        "marks = [80, 91]\n"
        "d = {n: m for n, m in zip(naam, marks)}\n"
        "print(d)                      # {'ravi': 80, 'sita': 91}"),
    "Decorators": (
        "Decorator ek function hai jo doosre function ko lapet ke uska behaviour badal deta hai. "
        "Andar wrapper banao, usme asli function ko bulao, aur wrapper ko return karo - call mat karo.",
        "def shout(fn):\n"
        "    def wrapper(*args):\n"
        "        return fn(*args).upper()   # asli result ko badla\n"
        "    return wrapper                 # bina bracket ke\n\n"
        "@shout\n"
        "def greet():\n"
        "    return 'namaste'\n"
        "print(greet())                     # NAMASTE"),
    "Closures": (
        "Andar wala function bahar wale ki value yaad rakhta hai, function khatam hone ke baad "
        "bhi. Us yaad ko badalna ho toh nonlocal likhna padta hai.",
        "def adder(n):\n"
        "    def add(x):\n"
        "        return x + n      # n yaad hai\n"
        "    return add\n"
        "add5 = adder(5)\n"
        "print(add5(3), add5(10))  # 8 15"),
    "Context managers": (
        "with block ke shuru me __enter__ chalta hai aur khatam hone pe __exit__ - error aaye "
        "tab bhi. Isliye file band karna type ke kaam kabhi bhoolte nahi.",
        "class Door:\n"
        "    def __enter__(self):\n"
        "        print('khula')\n"
        "        return self\n"
        "    def __exit__(self, *exc):\n"
        "        print('band')\n"
        "        return False\n\n"
        "with Door():\n"
        "    print('andar')        # khula / andar / band"),
    "collections & itertools": (
        "collections me ready-made tools hai. Counter ginti ka kaam ek line me kar deta hai, "
        "aur most_common(k) sabse zyada aane wale k items deta hai.",
        "from collections import Counter\n"
        "c = Counter('banana')\n"
        "print(c)                    # Counter({'a': 3, 'n': 2, 'b': 1})\n"
        "print(c.most_common(1))     # [('a', 3)] - list of (item, count)"),
    "Dataclasses & typing": (
        "@dataclass lagane se __init__, __repr__ aur == apne aap ban jate hai. Tumhe sirf field "
        "aur unka type likhna hai. Method normal tarike se likhte ho.",
        "from dataclasses import dataclass\n\n"
        "@dataclass\n"
        "class Book:\n"
        "    title: str\n"
        "    pages: int\n"
        "    def is_long(self) -> bool:\n"
        "        return self.pages > 300\n"
        "print(Book('Python', 500).is_long())   # True"),
    "Recursion": (
        "Function khud ko bula sakta hai. Do cheez zaroori hai: ek rukne ki shart (base case), "
        "aur har baar problem chhoti honi chahiye - warna hamesha chalta rahega.",
        "def fact(n):\n"
        "    if n <= 1:            # base case - yahi rokta hai\n"
        "        return 1\n"
        "    return n * fact(n - 1)\n"
        "print(fact(5))            # 120"),
    "async / await": (
        "async def se coroutine banta hai - wo turant chalta nahi, chalane pe chalta hai. Uske "
        "andar await laga ke doosre coroutine ka result le sakte ho. Test me drive(...) usko chalata hai.",
        "async def double(x):\n"
        "    return x * 2\n\n"
        "async def total(a, b):\n"
        "    return await double(a) + await double(b)\n"
        "# drive(total(1, 2))  ->  6"),
}
for _lv in LEVELS:
    _lv["lesson"], _lv["example"] = LESSONS[_lv["t"]]

# Track = kahan se shuru karna hai. Level index, 24 levels ko teen hisso me.
TRACKS = [
    {"id": "beginner", "name": "Beginner - kabhi Python nahi chhua",
     "start": ORDER.index("Printing"),
     "desc": "Bilkul zero se: print, variables, + - * /, True/False, if-else, list, loop, dict. "
             "Koi function-wunction nahi, ek-ek cheez aaram se."},
    {"id": "medium", "name": "Medium - basics aate hai",
     "start": ORDER.index("Functions"),
     "desc": "print, if-else, loop pata hai. Yahan se: functions, sorting, error handling, classes."},
    {"id": "advanced", "name": "Advanced - classes bhi aati hai",
     "start": ORDER.index("Generators"),
     "desc": "Generators, decorators, closures, context managers, dataclass, recursion, async."},
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
    with open(os.path.join(HERE, "levels.js"), "w") as f:
        f.write("window.LEVELS = %s;\nwindow.TRACKS = %s;\nwindow.SCOLD = %s;\n"
                "window.CHEER = %s;\nwindow.REVEAL = %d;\nwindow.CHECK_SRC = %s;\n"
                % (json.dumps(LEVELS, indent=1), json.dumps(TRACKS), json.dumps(SCOLD),
                   json.dumps(CHEER), REVEAL, json.dumps(inspect.getsource(check))))
    print("wrote levels.js")


# ---------------------------------------------------------------- accounts + server
# users.json is the whole database: {username: {pw, token, progress}}. Progress lives
# on disk, so clearing the browser (or switching browsers) doesn't lose it.
USERS = os.path.join(HERE, "users.json")
# ponytail: one global lock around read-modify-write of users.json. Without it two
# saves land at once, clobber each other's temp file and wipe the db. Per-user locks
# (or a real db) only if this ever serves more than a classroom.
DB_LOCK = threading.Lock()


def users_load():
    try:
        with open(USERS) as f:
            return json.load(f)
    except (OSError, ValueError):
        return {}


def users_save(users):
    tmp = USERS + ".tmp"          # write-then-rename so a crash can't truncate the db
    with open(tmp, "w") as f:
        json.dump(users, f, indent=1)
    os.replace(tmp, USERS)


def pw_hash(password, salt=None):
    import hashlib
    import secrets
    salt = salt or secrets.token_hex(8)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), 200_000)
    return salt + "$" + digest.hex()


def pw_ok(password, stored):
    import secrets
    try:
        salt = stored.split("$")[0]
    except (AttributeError, IndexError):
        return False
    return secrets.compare_digest(stored, pw_hash(password, salt))


def api(route, body, users):
    """Returns (status, payload). Pure function so demo() can test it without a socket."""
    import secrets
    name = str(body.get("user", "")).strip().lower()
    password = str(body.get("pass", ""))
    if route in ("/api/signup", "/api/login"):
        if not (3 <= len(name) <= 20 and name.replace("_", "").isalnum()):
            return 400, {"error": "Username 3-20 letters/numbers ka hona chahiye."}
        if len(password) < 4:
            return 400, {"error": "Password kam se kam 4 characters ka rakho."}
    if route == "/api/signup":
        if name in users:
            return 409, {"error": "Ye username already hai, doosra try kar."}
        token = secrets.token_hex(16)
        users[name] = {"pw": pw_hash(password), "token": token, "progress": {}}
        return 200, {"user": name, "token": token, "progress": {}}
    if route == "/api/login":
        u = users.get(name)
        if not u or not pw_ok(password, u["pw"]):
            return 401, {"error": "Username ya password galat hai."}
        u["token"] = secrets.token_hex(16)
        return 200, {"user": name, "token": u["token"], "progress": u["progress"]}
    if route in ("/api/save", "/api/resume"):
        u = users.get(name)
        if not u or not secrets.compare_digest(u["token"], str(body.get("token", ""))):
            return 401, {"error": "Phir se login kar."}
        if route == "/api/resume":
            return 200, {"user": name, "progress": u["progress"]}
        if not isinstance(body.get("progress"), dict):
            return 400, {"error": "bad progress"}
        u["progress"] = body["progress"]
        return 200, {"ok": True}
    return 404, {"error": "no such route"}


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
            with DB_LOCK:           # load-modify-save must be atomic, see DB_LOCK note
                users = users_load()
                status, payload = api(route, body, users)
                if status == 200:
                    users_save(users)   # signup adds, login rotates token, save stores progress
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
    # beginner track must not need a function before the level that teaches functions
    for lv in LEVELS[:ORDER.index("Functions")]:
        assert "def " not in lv["sol"] + lv["start"], f"{lv['t']} needs def before it's taught"
    assert LEVELS[0]["t"] == "Printing", "beginner must start at print"
    assert check(LEVELS[1], "name = 'Bob'\nage = 36") is not None, "checker too lenient"
    assert check(LEVELS[0], "1/0") is not None, "crash not caught"

    db = {}
    ok, out = api("/api/signup", {"user": "Ravi", "pass": "hello"}, db)
    assert ok == 200 and out["user"] == "ravi", out          # username normalised
    assert "hello" not in json.dumps(db), "password stored in plaintext!"
    assert api("/api/signup", {"user": "ravi", "pass": "hello"}, db)[0] == 409, "dup allowed"
    assert api("/api/signup", {"user": "ab", "pass": "hello"}, db)[0] == 400, "short name ok'd"
    assert api("/api/signup", {"user": "amit", "pass": "x"}, db)[0] == 400, "short pass ok'd"
    assert api("/api/login", {"user": "ravi", "pass": "wrong"}, db)[0] == 401, "bad pass ok'd"
    ok, out = api("/api/login", {"user": "ravi", "pass": "hello"}, db)
    assert ok == 200, out
    token = out["token"]
    assert api("/api/save", {"user": "ravi", "token": "nope", "progress": {}}, db)[0] == 401
    prog = {"done": [0, 1], "pts": 200, "track": "medium"}
    assert api("/api/save", {"user": "ravi", "token": token, "progress": prog}, db)[0] == 200
    assert api("/api/login", {"user": "ravi", "pass": "hello"}, db)[1]["progress"] == prog
    assert api("/api/resume", {"user": "ravi", "token": token, "progress": {}}, db)[0] == 401, \
        "old token still works after re-login"
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
