"""The topics added to cover the full Python roadmap.

Same shape as curriculum.TOPICS. Two kinds:
  kind='code'  -> learner writes code, tests run it
  kind='quiz'  -> learner picks an option, code sets `answer`
"""

EXTRA = [
    # ---------------------------------------------------------------- basics
    dict(
        t="Comments & docstrings", ch="functions", kind="code",
        brief="Ek function `greet` banao jo 'Namaste' de, aur uske andar docstring likho: Namaste bolta hai.",
        start='def greet():\n    """?"""\n    return ?\n',
        tests=[("greet()", "Namaste"), ("greet.__doc__.strip()", "Namaste bolta hai.")],
        sol='def greet():\n    """Namaste bolta hai."""\n    return \'Namaste\'',
        hint="# se ek line ka comment banta hai. Function ke andar pehli line me teen quotes wala "
             "text docstring kehlata hai, aur wo greet.__doc__ me milta hai.",
        bonus="Bonus: help(greet) chala ke dekh, wahi docstring dikhega.",
        lesson="Comment code ke liye note hai jise Python padhta nahi. # se line comment banta hai. "
               "Function ke andar pehli line me teen quotes wala text docstring hota hai, jise dusre "
               "log aur help() padh sakte hai.",
        example='# ye line Python ignore karega\n'
                'def area(r):\n'
                '    """Circle ka area deta hai."""\n'
                '    return 3.14 * r * r      # yaha bhi comment chalta hai\n\n'
                'print(area.__doc__)          # Circle ka area deta hai',
    ),
    dict(
        t="Type casting", ch="basics", kind="code",
        brief="'42' ko number banao (`n`), '3.5' ko decimal (`pi`), 99 ko string (`text`), aur "
              "42 ke type ka naam nikalo (`kism`).",
        start="n = ?\npi = ?\ntext = ?\nkism = ?     # type(42).__name__\n",
        tests=[("n", 42), ("pi", 3.5), ("text", "99"), ("kism", "int")],
        sol="n = int('42')\npi = float('3.5')\ntext = str(99)\nkism = type(42).__name__",
        hint="int() string ko number banata hai, float() decimal, str() ko string. type(x) batata hai "
             "kaunsa type hai aur .__name__ se uska naam milta hai.",
        bonus="Bonus: int('abc') chala ke dekh, ValueError aayega. Use try/except se sambhal.",
        lesson="Data ka type badalna type casting kehlata hai. Screen se aane wala data hamesha string "
               "hota hai, isliye jodne se pehle use number banana padta hai. '2' + '3' = '23', "
               "par 2 + 3 = 5.",
        example="a = '7'\n"
                "print(a + a)              # 77  - dono string thi, jud gayi\n"
                "print(int(a) + int(a))    # 14  - ab number hai\n"
                "print(type(a).__name__)   # str",
    ),
    dict(
        t="Operators: in, is, +=", ch="basics", kind="code",
        brief="`hai` ('na' banana me hai?), `nahi` ('z' nahi hai?), `total` (0 me += se pehle 5 fir 3 "
              "jodo), aur `same` (do alag khali list ek hi object hai kya).",
        start="fruit = 'banana'\nhai = ?\nnahi = ?\ntotal = 0\n# += se 5 aur fir 3 jodo\nx = []\ny = []\nsame = ?\n",
        tests=[("hai", True), ("nahi", True), ("total", 8), ("same", False)],
        sol="fruit = 'banana'\nhai = 'na' in fruit\nnahi = 'z' not in fruit\n"
            "total = 0\ntotal += 5\ntotal += 3\nx = []\ny = []\nsame = x is y",
        hint="in check karta hai ki cheez andar hai ya nahi. += matlab jo hai usme aur jod do. "
             "is poochta hai ki dono bilkul ek hi object hai kya, jabki == poochta hai value barabar hai kya.",
        bonus="Bonus: x == y print kar ke dekh. True aayega, jabki x is y False hai.",
        lesson="Teen kaam ke operator. in batata hai ki cheez andar hai ya nahi. += purani value me jod "
               "deta hai. is poochta hai ek hi object hai kya, == poochta hai value barabar hai kya.",
        example="nums = [1, 2, 3]\n"
                "print(2 in nums)        # True\n"
                "score = 10\n"
                "score += 5              # score = score + 5\n"
                "print(score)            # 15\n"
                "a = [1]; b = [1]\n"
                "print(a == b, a is b)   # True False",
    ),
    dict(
        t="Ternary (ek line ka if)", ch="basics", kind="code",
        brief="marks = 45 se `natija` banao ek hi line me: 33 ya usse zyada ho toh 'paas', warna 'fail'.",
        start="marks = 45\nnatija = ?\n",
        tests=[("natija", "paas")],
        sol="marks = 45\nnatija = 'paas' if marks >= 33 else 'fail'",
        hint="Format hai: value_agar_sach if shart else value_agar_jhoot. Sab ek line me.",
        bonus="Bonus: umar se 'adult' ya 'bachcha' nikalne wali ek line likh.",
        lesson="Chhote if-else ko ek line me likh sakte ho. Padhne me seedha angrezi jaisa lagta hai: "
               "ye value agar shart sach hai, warna wo value.",
        example="temp = 45\n"
                "kaisa = 'garam' if temp > 40 else 'thanda'\n"
                "print(kaisa)                             # garam\n"
                "n = 7\n"
                "print('even' if n % 2 == 0 else 'odd')   # odd",
    ),
    dict(
        t="break, continue, pass", ch="basics", kind="code",
        brief="1 se 20 tak loop chalao. Odd number skip karo, 8 se bada dikhte hi ruk jao, aur bache "
              "hue even numbers `mile` list me daalo.",
        start="mile = []\nfor n in range(1, 21):\n    ?\n",
        tests=[("mile", [2, 4, 6, 8])],
        sol="mile = []\nfor n in range(1, 21):\n"
            "    if n % 2 != 0:\n        continue\n"
            "    if n > 8:\n        break\n"
            "    mile.append(n)",
        hint="continue matlab is chakkar ko chhod ke agla chalao. break matlab loop yahi khatam. "
             "Pehle odd wala continue, fir 8 se bada wala break, fir append.",
        bonus="Bonus: for ke baad else laga ke dekh. break hua toh else nahi chalta.",
        lesson="Loop ke andar teen control word. continue is chakkar ko chhod ke agla shuru karta hai. "
               "break poora loop tod deta hai. pass ka matlab kuch mat karo, sirf jagah bhar do.",
        example="for n in range(1, 6):\n"
                "    if n == 2:\n"
                "        continue      # 2 chhod do\n"
                "    if n == 4:\n"
                "        break         # 4 pe ruk jao\n"
                "    print(n)          # 1 fir 3\n\n"
                "def baad_me():\n"
                "    pass              # abhi kuch nahi, error bhi nahi",
    ),
    dict(
        t="Nested loops & patterns", ch="basics", kind="code",
        brief="Do loop laga ke `pattern` banao: pehli line me 1 star, fir 2, fir 3, fir 4, har line "
              "ke baad nayi line.",
        start="pattern = ''\nfor i in range(1, 5):\n    ?\n",
        tests=[("pattern", "*\n**\n***\n****\n"), ("pattern.count('*')", 10)],
        sol="pattern = ''\nfor i in range(1, 5):\n"
            "    for j in range(i):\n        pattern = pattern + '*'\n"
            "    pattern = pattern + '\\n'",
        hint="Bahar wala loop line ginta hai, andar wala us line ke star. Andar wale loop ke baad "
             "'\\n' jodna mat bhool, wahi nayi line banata hai.",
        bonus="Bonus: ulta triangle bana - pehle 4 star, fir 3, fir 2, fir 1.",
        lesson="Loop ke andar loop chal sakta hai. Bahar wala ek baar chalta hai toh andar wala poora "
               "chakkar lagata hai. Pattern banane me yahi kaam aata hai.",
        example="for i in range(1, 4):        # 3 line\n"
                "    line = ''\n"
                "    for j in range(i):      # is line me i star\n"
                "        line = line + '#'\n"
                "    print(line)             # #  ##  ###\n\n"
                "# chhota tarika: print('#' * i)",
    ),
    dict(
        t="Tuples", ch="basics", kind="code",
        brief="`point` tuple (10, 20, 30) banao. `pehla` aur `lambai` nikalo, a b c me unpack karo, "
              "aur badalne ki koshish try/except me karke `badal_sakte` False rakho.",
        start="point = ?\npehla = ?\nlambai = ?\na, b, c = ?\ntry:\n    point[0] = 99\n    badal_sakte = True\nexcept ?:\n    badal_sakte = False\n",
        tests=[("point", (10, 20, 30)), ("pehla", 10), ("lambai", 3), ("b", 20), ("badal_sakte", False)],
        sol="point = (10, 20, 30)\npehla = point[0]\nlambai = len(point)\na, b, c = point\n"
            "try:\n    point[0] = 99\n    badal_sakte = True\nexcept TypeError:\n    badal_sakte = False",
        hint="Tuple round bracket se banti hai aur badalti nahi. Badalne ki koshish pe TypeError aata "
             "hai. a, b, c = point ko unpacking kehte hai.",
        bonus="Bonus: ek function bana jo do value return kare. Wo apne aap tuple banti hai.",
        lesson="Tuple list jaisi hai par tala laga hua: banane ke baad badal nahi sakte. Isliye wo "
               "safe hai aur dict ki key bhi ban sakti hai. Round bracket se banti hai.",
        example="rang = ('lal', 'neela')\n"
                "print(rang[1], len(rang))    # neela 2\n"
                "x, y = (3, 4)                # unpacking\n"
                "print(x + y)                 # 7\n"
                "# rang[0] = 'hara'  ->  TypeError, tuple badalti nahi",
    ),
    dict(
        t="Sets", ch="basics", kind="code",
        brief="a = {1,2,3} aur b = {3,4,5} se `mila` (dono ka sab), `dono_me`, `sirf_a` nikalo, aur "
              "[1,1,2,2,3] se duplicate hata ke `alag` sorted list banao.",
        start="a = {1, 2, 3}\nb = {3, 4, 5}\nmila = ?\ndono_me = ?\nsirf_a = ?\nalag = ?\n",
        tests=[("mila", {1, 2, 3, 4, 5}), ("dono_me", {3}), ("sirf_a", {1, 2}), ("alag", [1, 2, 3])],
        sol="a = {1, 2, 3}\nb = {3, 4, 5}\nmila = a | b\ndono_me = a & b\nsirf_a = a - b\n"
            "alag = sorted(set([1, 1, 2, 2, 3]))",
        hint="| dono ka sab deta hai, & dono me jo common hai, - sirf pehle wale me jo hai. Duplicate "
             "hatane ke liye list ko set() me daal, fir sorted() se wapas list bana.",
        bonus="Bonus: a.add(9) aur a.discard(1) chala ke dekh set kaise badalta hai.",
        lesson="Set ek jhola hai jisme har cheez sirf ek baar aati hai aur order nahi hota. Duplicate "
               "hatane aur do group compare karne ka sabse tez tarika yahi hai.",
        example="p = {'a', 'b', 'c'}\n"
                "q = {'b', 'c', 'd'}\n"
                "print(p | q)            # sab: a b c d\n"
                "print(p & q)            # common: b c\n"
                "print(p - q)            # sirf p me: a\n"
                "print(set([1, 1, 2]))   # {1, 2}",
    ),

    # ---------------------------------------------------------------- functions
    dict(
        t="Lambda, map, filter", ch="functions", kind="code",
        brief="`double` lambda banao jo number ka double de. nums = [1,2,3,4] se map se `doubled` "
              "aur filter se `evens` nikalo (dono list).",
        start="nums = [1, 2, 3, 4]\ndouble = ?\ndoubled = ?\nevens = ?\n",
        tests=[("double(5)", 10), ("doubled", [2, 4, 6, 8]), ("evens", [2, 4])],
        sol="nums = [1, 2, 3, 4]\ndouble = lambda x: x * 2\ndoubled = list(map(double, nums))\n"
            "evens = list(filter(lambda n: n % 2 == 0, nums))",
        hint="lambda x: x * 2 ek chhota bina naam ka function hai. map har item pe function lagata hai, "
             "filter sirf wo item rakhta hai jinpe function True de. Dono ko list() me daalna padta hai.",
        bonus="Bonus: yahi kaam list comprehension se kar ke dekh, kaunsa zyada saaf lagta hai?",
        lesson="lambda ek line ka function hai jise naam ki zarurat nahi. map har item pe function "
               "chalata hai, filter chhaanti karta hai. Dono lazy hai, isliye list() lagana padta hai.",
        example="nums = [5, 10, 15]\n"
                "half = lambda x: x / 2\n"
                "print(half(10))                        # 5.0\n"
                "print(list(map(half, nums)))           # [2.5, 5.0, 7.5]\n"
                "print(list(filter(lambda n: n > 6, nums)))   # [10, 15]",
    ),
    dict(
        t="*args and **kwargs", ch="functions", kind="code",
        brief="`total(*nums)` banao jo sab numbers jode (kuch bhi na mile toh 0), aur `tag(**kw)` "
              "banao jo keys sorted karke 'a=1,b=2' jaisi string de.",
        start="def total(*nums):\n    ...\n\ndef tag(**kw):\n    ...\n",
        tests=[("total(1, 2, 3)", 6), ("total()", 0), ("tag(b=2, a=1)", "a=1,b=2"), ("tag()", "")],
        sol="def total(*nums):\n    return sum(nums)\n\n"
            "def tag(**kw):\n    return ','.join(f'{k}={v}' for k in sorted(kw) for v in [kw[k]])",
        hint="*nums saare bina naam wale arguments ko tuple bana deta hai, **kw naam wale arguments ko "
             "dict. sum(nums) khali tuple pe 0 deta hai. join ke liye pehle sorted(kw) pe ghoom.",
        bonus="Bonus: def f(a, *rest, **kw) bana ke print kar ke dekh kaunsa kya pakadta hai.",
        lesson="Kabhi pata nahi hota kitne argument aayenge. *args unhe tuple me daal deta hai, "
               "**kwargs naam wale ko dict me. Naam koi bhi ho sakta hai, star zaroori hai.",
        example="def jodo(*nums):\n"
                "    return sum(nums)\n"
                "print(jodo(1, 2), jodo(1, 2, 3, 4))    # 3 10\n\n"
                "def dikha(**kw):\n"
                "    return kw\n"
                "print(dikha(naam='Riya', age=20))      # {'naam': 'Riya', 'age': 20}",
    ),
    dict(
        t="Variable scope", ch="functions", kind="code",
        brief="`ginti` global ko badhane wala `badhao()` likho (global), aur `counter()` jo andar ki "
              "value badhaye (nonlocal) aur nayi value de.",
        start="ginti = 0\n\ndef badhao():\n    ...\n\ndef counter():\n    n = 0\n    def tick():\n        ...\n    return tick\n",
        tests=[("(badhao(), badhao(), ginti)[2]", 2),
               ("(lambda c: [c(), c()])(counter())", [1, 2])],
        sol="ginti = 0\n\ndef badhao():\n    global ginti\n    ginti += 1\n\n"
            "def counter():\n    n = 0\n    def tick():\n        nonlocal n\n        n += 1\n        return n\n    return tick",
        hint="Function ke andar bahar wali variable badalni ho toh global likhna padta hai. Andar wale "
             "function me uske bahar wale (par global nahi) variable ke liye nonlocal likhte hai.",
        bonus="Bonus: global hataye bina badhao() chala ke dekh, UnboundLocalError aayega.",
        lesson="Function ke andar banayi variable sirf usi ke andar rehti hai. Bahar wali ko padh toh "
               "sakte ho, par badalne ke liye batana padta hai: global (file wali ke liye) ya nonlocal "
               "(bahar wale function wali ke liye).",
        example="x = 10\n"
                "def dekho():\n"
                "    print(x)        # padhna theek hai: 10\n\n"
                "def badlo():\n"
                "    global x\n"
                "    x = 99          # ab bahar wali x badli\n"
                "badlo()\n"
                "print(x)            # 99",
    ),
    dict(
        t="Type annotations", ch="functions", kind="code",
        brief="`jodo(a: int, b: int) -> int` banao, aur uske annotations dict se `a_type` (a ka type ka "
              "naam) aur `wapas` (return type ka naam) nikalo.",
        start="def jodo(a, b):\n    ...\n\na_type = ?\nwapas = ?\n",
        tests=[("jodo(2, 3)", 5), ("a_type", "int"), ("wapas", "int")],
        sol="def jodo(a: int, b: int) -> int:\n    return a + b\n\n"
            "a_type = jodo.__annotations__['a'].__name__\n"
            "wapas = jodo.__annotations__['return'].__name__",
        hint="Argument ke aage colon laga ke type likho: a: int. Return type function ke baad arrow se: "
             "-> int. Sab jodo.__annotations__ dict me milta hai, 'return' key ke saath.",
        bonus="Bonus: list[int] aur str | None jaise annotation bhi try kar.",
        lesson="Annotation batata hai ki kaunsa type expect kar rahe ho. Python inhe rokta nahi, par "
               "editor aur mypy jaise tools inse galti pakad lete hai, aur padhne wale ko saaf dikhta hai.",
        example="def naam_do(naam: str, baar: int = 1) -> str:\n"
                "    return (naam + ' ') * baar\n\n"
                "print(naam_do('Riya', 2))            # Riya Riya\n"
                "print(naam_do.__annotations__)       # {'naam': str, 'baar': int, 'return': str}",
    ),

    # ---------------------------------------------------------------- modules
    dict(
        t="Modules: import karo", ch="modules", kind="code",
        brief="math se `jad` (16 ka square root) aur `gol` (pi ko 2 decimal tak round) nikalo, aur "
              "random se 3 dice roll `rolls` banao (har ek 1 se 6 ke beech).",
        start="import math\nimport random\n\njad = ?\ngol = ?\nrolls = ?\nsahi = all(1 <= r <= 6 for r in rolls)\n",
        tests=[("jad", 4.0), ("gol", 3.14), ("len(rolls)", 3), ("sahi", True)],
        sol="import math\nimport random\n\njad = math.sqrt(16)\ngol = round(math.pi, 2)\n"
            "rolls = [random.randint(1, 6) for _ in range(3)]\n"
            "sahi = all(1 <= r <= 6 for r in rolls)",
        hint="import math ke baad math.sqrt() aur math.pi milta hai. round(x, 2) do decimal tak "
             "chhota karta hai. random.randint(1, 6) ek dice roll deta hai.",
        bonus="Bonus: from math import sqrt likh ke dekh, fir seedha sqrt(16) chalega.",
        lesson="Module dusro ka likha hua code hai jo Python ke saath aata hai. import karte hi uske "
               "function mil jate hai. math me hisaab wale, random me chance wale, datetime me time wale.",
        example="import math, random\n"
                "print(math.sqrt(25))          # 5.0\n"
                "print(math.floor(4.7))        # 4\n"
                "print(random.choice(['a', 'b', 'c']))   # koi ek\n"
                "from math import pi           # sirf ek cheez\n"
                "print(round(pi, 3))           # 3.142",
    ),

    # ---------------------------------------------------------------- files
    dict(
        t="File handling", ch="files", kind="code",
        brief="'note.txt' me with block se do line likho ('ek' aur 'do'), fir usi file ko padh ke "
              "`saara` (poora text) aur `lines` (list) nikalo.",
        start="with open('note.txt', 'w') as f:\n    ?\n\nwith open('note.txt') as f:\n    saara = ?\n\nlines = saara.splitlines()\n",
        tests=[("saara", "ek\ndo\n"), ("lines", ["ek", "do"])],
        sol="with open('note.txt', 'w') as f:\n    f.write('ek\\n')\n    f.write('do\\n')\n\n"
            "with open('note.txt') as f:\n    saara = f.read()\n\nlines = saara.splitlines()",
        hint="'w' likhne ke liye, bina kuch likhe padhne ke liye. f.write() line ke aakhir me '\\n' "
             "khud nahi lagata, tumhe lagana padta hai. f.read() poori file ek string me deta hai.",
        bonus="Bonus: 'a' mode se ek aur line jod, fir dubara padh ke dekh.",
        lesson="File kholne ka sahi tarika with hai, kyunki wo file apne aap band kar deta hai. "
               "'w' se nayi file likhte hai (purana mit jata hai), 'a' se aakhir me jodte hai, "
               "bina mode ke padhte hai.",
        example="with open('data.txt', 'w') as f:\n"
                "    f.write('pehli line\\n')\n\n"
                "with open('data.txt', 'a') as f:\n"
                "    f.write('dusri line\\n')     # jud gayi\n\n"
                "with open('data.txt') as f:\n"
                "    for line in f:               # ek-ek line\n"
                "        print(line.strip())",
    ),

    # ---------------------------------------------------------------- regex
    dict(
        t="Regular expressions", ch="regex", kind="code",
        brief="text me se `numbers` (saare numbers, list of string), `pehla_word` (pehla shabd), aur "
              "`saaf` (saare digit hata ke) nikalo re se.",
        start="import re\ntext = 'Order 42 aur 7 items'\nnumbers = ?\npehla_word = ?\nsaaf = ?\n",
        tests=[("numbers", ["42", "7"]), ("pehla_word", "Order"), ("saaf", "Order  aur  items")],
        sol="import re\ntext = 'Order 42 aur 7 items'\n"
            "numbers = re.findall(r'\\d+', text)\n"
            "pehla_word = re.findall(r'[A-Za-z]+', text)[0]\n"
            "saaf = re.sub(r'\\d+', '', text)",
        hint="\\d matlab ek digit, + matlab ek ya zyada. findall sab match ki list deta hai, "
             "sub match ko badal deta hai. Pattern ke aage r lagana mat bhool: r'\\d+'.",
        bonus="Bonus: re.search(r'\\d+', text).group() chala ke dekh, sirf pehla match milega.",
        lesson="Regular expression text me pattern dhoondhne ki bhasha hai. \\d digit, \\w letter ya "
               "digit, + ek ya zyada, * zero ya zyada. findall sab nikalta hai, sub badal deta hai.",
        example="import re\n"
                "s = 'call 98765 or 12345'\n"
                "print(re.findall(r'\\d+', s))        # ['98765', '12345']\n"
                "print(re.sub(r'\\d', '*', s))        # call ***** or *****\n"
                "print(bool(re.match(r'call', s)))    # True - shuru me hai",
    ),

    # ---------------------------------------------------------------- oop
    dict(
        t="Encapsulation & property", ch="oop", kind="code",
        brief="`Account` class banao jisme `_balance` chhupi ho, `balance` property se padh sako, "
              "`jama(x)` positive amount jode aur negative pe ValueError de.",
        start="class Account:\n    def __init__(self, start=0):\n        ...\n",
        tests=[("Account(100).balance", 100),
               ("(lambda a: (a.jama(50), a.balance)[1])(Account(10))", 60),
               ("raises(lambda: Account(0).jama(-5), ValueError)", True)],
        sol="class Account:\n"
            "    def __init__(self, start=0):\n"
            "        self._balance = start\n"
            "    @property\n"
            "    def balance(self):\n"
            "        return self._balance\n"
            "    def jama(self, x):\n"
            "        if x <= 0:\n"
            "            raise ValueError('amount positive hona chahiye')\n"
            "        self._balance += x",
        hint="Naam ke aage underscore matlab 'ye andar ka hai, bahar se mat chhuo'. @property lagane se "
             "method bina bracket ke value ki tarah padha jata hai. Galat input pe raise ValueError(...).",
        bonus="Bonus: nikaalo(x) bhi bana jo balance se zyada nikalne pe ValueError de.",
        lesson="Encapsulation matlab class ka andar ka data seedha bahar se na chhua jaye. Underscore "
               "wala naam ishara hai ki ye private hai, aur @property se use padhne ka safe darwaza "
               "milta hai, likhne ka nahi.",
        example="class Temp:\n"
                "    def __init__(self, c):\n"
                "        self._c = c\n"
                "    @property\n"
                "    def f(self):\n"
                "        return self._c * 9 / 5 + 32\n\n"
                "t = Temp(100)\n"
                "print(t.f)          # 212.0  - bracket nahi lagaya",
    ),
    dict(
        t="super() and overriding", ch="oop", kind="code",
        brief="`Animal` me naam save karo aur bolo() 'kuch nahi' de. `Dog` usse inherit kare, super() "
              "se naam save kare, apna breed rakhe aur bolo() 'bhau' de.",
        start="class Animal:\n    def __init__(self, naam):\n        self.naam = naam\n    def bolo(self):\n        return 'kuch nahi'\n\nclass Dog(Animal):\n    ...\n",
        tests=[("Dog('Moti', 'desi').naam", "Moti"), ("Dog('Moti', 'desi').breed", "desi"),
               ("Dog('Moti', 'desi').bolo()", "bhau"), ("Animal('X').bolo()", "kuch nahi"),
               ("isinstance(Dog('M', 'd'), Animal)", True)],
        sol="class Animal:\n    def __init__(self, naam):\n        self.naam = naam\n"
            "    def bolo(self):\n        return 'kuch nahi'\n\n"
            "class Dog(Animal):\n"
            "    def __init__(self, naam, breed):\n"
            "        super().__init__(naam)\n"
            "        self.breed = breed\n"
            "    def bolo(self):\n        return 'bhau'",
        hint="super().__init__(naam) parent ka kaam karwa deta hai, fir apna extra kaam karo. Same naam "
             "ka method dubara likhne ko overriding kehte hai.",
        bonus="Bonus: Dog ke bolo() me super().bolo() bula ke dono jawab jod ke dekh.",
        lesson="Child class parent ka sab kuch le leti hai. super() se parent ka wahi method bula sakte "
               "ho, taki likha hua dubara na likhna pade. Same naam ka method dubara likhna overriding "
               "kehlata hai.",
        example="class Base:\n"
                "    def __init__(self, x):\n"
                "        self.x = x\n"
                "    def show(self):\n"
                "        return f'x={self.x}'\n\n"
                "class Child(Base):\n"
                "    def __init__(self, x, y):\n"
                "        super().__init__(x)     # parent ka kaam\n"
                "        self.y = y\n"
                "    def show(self):\n"
                "        return super().show() + f' y={self.y}'\n\n"
                "print(Child(1, 2).show())       # x=1 y=2",
    ),

    # ---------------------------------------------------------------- dsa
    dict(
        t="Stack & Queue", ch="dsa", kind="code",
        brief="List ko stack ki tarah use karo: 1,2,3 push karke `top` pop karo. deque ko queue ki "
              "tarah: 1,2,3 daal ke `pehla` nikalo (popleft).",
        start="from collections import deque\n\nstack = []\n# 1, 2, 3 push karo, fir top nikalo\ntop = ?\n\nq = deque()\n# 1, 2, 3 daalo, fir pehla nikalo\npehla = ?\n",
        tests=[("top", 3), ("stack", [1, 2]), ("pehla", 1), ("list(q)", [2, 3])],
        sol="from collections import deque\n\n"
            "stack = []\nstack.append(1)\nstack.append(2)\nstack.append(3)\ntop = stack.pop()\n\n"
            "q = deque()\nq.append(1)\nq.append(2)\nq.append(3)\npehla = q.popleft()",
        hint="Stack me aakhri wala pehle nikalta hai: .pop(). Queue me pehla wala pehle nikalta hai: "
             "deque ka .popleft(). List ka .pop(0) bhi chalta hai par slow hota hai.",
        bonus="Bonus: stack se brackets '((()))' balanced hai ya nahi check kar.",
        lesson="Stack matlab thali ka dher: jo upar rakha wahi pehle uthta hai (LIFO). Queue matlab "
               "line: jo pehle aaya wahi pehle jayega (FIFO). Python me stack ke liye list kaafi hai, "
               "queue ke liye deque tez hai.",
        example="from collections import deque\n"
                "s = [1, 2]\n"
                "s.append(3)\n"
                "print(s.pop(), s)         # 3 [1, 2]   - aakhri gaya\n\n"
                "q = deque([1, 2, 3])\n"
                "print(q.popleft(), list(q))   # 1 [2, 3]  - pehla gaya",
    ),
    dict(
        t="Searching: linear & binary", ch="dsa", kind="code",
        brief="`linear(nums, target)` banao jo index de ya -1. `binary(nums, target)` banao jo sorted "
              "list me aadha-aadha kaat ke dhoondhe.",
        start="def linear(nums, target):\n    ...\n\ndef binary(nums, target):\n    ...\n",
        tests=[("linear([4, 8, 15], 8)", 1), ("linear([4, 8, 15], 99)", -1),
               ("binary([1, 3, 5, 7, 9, 11], 9)", 4), ("binary([1, 3, 5, 7, 9, 11], 4)", -1),
               ("binary([], 1)", -1)],
        sol="def linear(nums, target):\n"
            "    for i, n in enumerate(nums):\n"
            "        if n == target:\n            return i\n"
            "    return -1\n\n"
            "def binary(nums, target):\n"
            "    lo, hi = 0, len(nums) - 1\n"
            "    while lo <= hi:\n"
            "        mid = (lo + hi) // 2\n"
            "        if nums[mid] == target:\n            return mid\n"
            "        if nums[mid] < target:\n            lo = mid + 1\n"
            "        else:\n            hi = mid - 1\n"
            "    return -1",
        hint="Linear me bas ek-ek karke dekho, enumerate index bhi deta hai. Binary me lo aur hi rakho, "
             "beech ka mid nikalo, aur jis taraf target ho sakta hai udhar ka aadha hissa hi bachao.",
        bonus="Bonus: 1000000 items pe dono ko time kar ke dekh, farq saaf dikhega.",
        lesson="Linear search ek-ek karke dekhta hai, isliye 1000 items me 1000 kadam lag sakte hai. "
               "Binary search sirf sorted list pe chalta hai aur har kadam me aadha hissa phenk deta "
               "hai, isliye 1000 items sirf 10 kadam me nipat jate hai.",
        example="nums = [2, 4, 6, 8, 10]\n"
                "lo, hi = 0, len(nums) - 1\n"
                "while lo <= hi:\n"
                "    mid = (lo + hi) // 2\n"
                "    print('dekha', nums[mid])\n"
                "    if nums[mid] == 8:\n"
                "        break\n"
                "    if nums[mid] < 8:\n"
                "        lo = mid + 1\n"
                "    else:\n"
                "        hi = mid - 1\n"
                "# dekha 6, dekha 8  - sirf do kadam",
    ),
    dict(
        t="Sorting algorithms", ch="dsa", kind="code",
        brief="`bubble(nums)` khud likho jo nayi sorted list de (original ko mat badlo), aur "
              "`builtin` me sorted() ka jawab rakho.",
        start="def bubble(nums):\n    ...\n\ndata = [5, 1, 4, 2]\nbuiltin = ?\n",
        tests=[("bubble([5, 1, 4, 2])", [1, 2, 4, 5]), ("bubble([])", []),
               ("(lambda d: (bubble(d), d)[1])([3, 1])", [3, 1]), ("builtin", [1, 2, 4, 5])],
        sol="def bubble(nums):\n"
            "    arr = list(nums)\n"
            "    for i in range(len(arr)):\n"
            "        for j in range(len(arr) - i - 1):\n"
            "            if arr[j] > arr[j + 1]:\n"
            "                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n"
            "    return arr\n\n"
            "data = [5, 1, 4, 2]\nbuiltin = sorted(data)",
        hint="Pehle list(nums) se copy bana warna original badal jayega. Fir paas-paas wale do compare "
             "karo aur ulta ho toh swap: arr[j], arr[j+1] = arr[j+1], arr[j].",
        bonus="Bonus: har round me kitne swap hue count kar ke print kar.",
        lesson="Bubble sort paas-paas wale do numbers ko compare karke swap karta hai, aur har round me "
               "sabse bada number aakhir me pahunch jata hai. Seekhne ke liye badhiya, asli kaam ke "
               "liye sorted() use karo, wo bahut tez hai.",
        example="arr = [3, 1, 2]\n"
                "for i in range(len(arr)):\n"
                "    for j in range(len(arr) - i - 1):\n"
                "        if arr[j] > arr[j + 1]:\n"
                "            arr[j], arr[j + 1] = arr[j + 1], arr[j]\n"
                "print(arr)              # [1, 2, 3]\n"
                "print(sorted([3, 1, 2]))    # [1, 2, 3] - ek line me",
    ),
    dict(
        t="HashMap problems", ch="dsa", kind="code",
        brief="`two_sum(nums, target)` banao jo un do numbers ke index de jinka jod target ho (dict se, "
              "ek hi chakkar me). Na mile toh None.",
        start="def two_sum(nums, target):\n    ...\n",
        tests=[("two_sum([2, 7, 11, 15], 9)", [0, 1]), ("two_sum([3, 2, 4], 6)", [1, 2]),
               ("two_sum([1, 2], 50)", None)],
        sol="def two_sum(nums, target):\n"
            "    dekha = {}\n"
            "    for i, n in enumerate(nums):\n"
            "        chahiye = target - n\n"
            "        if chahiye in dekha:\n"
            "            return [dekha[chahiye], i]\n"
            "        dekha[n] = i\n"
            "    return None",
        hint="Har number pe socho: iske saath kaunsa number chahiye? chahiye = target - n. Agar wo "
             "pehle dekha hua dict me hai toh jawab mil gaya. Warna is number ko dict me daal do.",
        bonus="Bonus: list me kaunsa item sabse zyada baar aaya, wo dict se nikal.",
        lesson="Dict me dhoondhna list me dhoondhne se bahut tez hai. Isliye 'pehle dekhe hue' items "
               "ko dict me rakh lo, fir dobara ghoomne ki zarurat hi nahi padti. Ye interview ka "
               "sabse aam trick hai.",
        example="nums = [2, 7, 11]\n"
                "dekha = {}\n"
                "for i, n in enumerate(nums):\n"
                "    chahiye = 9 - n\n"
                "    if chahiye in dekha:\n"
                "        print([dekha[chahiye], i])   # [0, 1]\n"
                "        break\n"
                "    dekha[n] = i",
    ),
    dict(
        t="Linked list", ch="dsa", kind="code",
        brief="`Node` class banao (value + next), teen node jodo, aur `to_list(head)` likho jo saari "
              "values list me de.",
        start="class Node:\n    def __init__(self, value):\n        ...\n\ndef to_list(head):\n    ...\n",
        tests=[("to_list(None)", []),
               ("(lambda a, b: (setattr(a, 'next', b), to_list(a))[1])(Node(1), Node(2))", [1, 2])],
        sol="class Node:\n"
            "    def __init__(self, value):\n"
            "        self.value = value\n"
            "        self.next = None\n\n"
            "def to_list(head):\n"
            "    out = []\n"
            "    node = head\n"
            "    while node is not None:\n"
            "        out.append(node.value)\n"
            "        node = node.next\n"
            "    return out",
        hint="Har node apni value rakhta hai aur agle node ka pata (next), jo shuru me None hota hai. "
             "Ghoomne ke liye while node is not None: value lo, fir node = node.next.",
        bonus="Bonus: ek add(head, value) bana jo aakhir me naya node jode.",
        lesson="Linked list me items ek dusre ka pata pakde hue hote hai, ek line me nahi rakhe hote. "
               "Beech me daalna sasta hota hai, par kisi bhi item tak pahunchne ke liye shuru se "
               "chalna padta hai.",
        example="class Node:\n"
                "    def __init__(self, v):\n"
                "        self.value = v\n"
                "        self.next = None\n\n"
                "a = Node('A'); b = Node('B')\n"
                "a.next = b                  # A ne B ka haath pakda\n"
                "n = a\n"
                "while n:\n"
                "    print(n.value)          # A fir B\n"
                "    n = n.next",
    ),

    # ---------------------------------------------------------------- concurrency (quiz)
    dict(
        t="Threading & the GIL", ch="concurrency", kind="quiz",
        brief="Python me ek normal program me do thread ek hi waqt me Python ka code chala sakte hai kya?",
        choices=["Haan, dono poora saath me chalte hai",
                 "Nahi, GIL ki wajah se ek waqt me ek hi thread Python bytecode chalata hai",
                 "Thread Python me hote hi nahi hai"],
        start="# a, b ya c likho\nanswer = '?'\n",
        tests=[("answer", "b")],
        sol="answer = 'b'",
        hint="GIL matlab Global Interpreter Lock, ek tala. Isi wajah se CPU ka bhaari kaam thread se "
             "tez nahi hota, par file ya internet ka intezaar wala kaam thread se tez ho jata hai.",
        bonus="Bonus: soch ke bata, 4 badi file download karni ho toh thread theek hai ya nahi?",
        lesson="Thread ek hi program ke andar kai kaam ek saath chalane ka tarika hai. Par Python me "
               "GIL naam ka tala hai, jiski wajah se ek waqt me ek hi thread Python code chalata hai. "
               "Isliye intezaar wale kaam (file, network) me thread madad karta hai, aur CPU ke bhaari "
               "hisaab me multiprocessing chahiye hoti hai.",
        example="import threading\n\n"
                "def kaam(naam):\n"
                "    print('chal raha', naam)\n\n"
                "t = threading.Thread(target=kaam, args=('A',))\n"
                "t.start()\n"
                "t.join()      # khatam hone ka intezaar\n"
                "# CPU ka bhaari kaam? multiprocessing use karo, thread nahi",
    ),
    dict(
        t="Multiprocessing vs asyncio", ch="concurrency", kind="quiz",
        brief="100 website se data laane ka kaam (zyadatar intezaar) sabse achha kis se hoga?",
        choices=["multiprocessing, kyunki wo 100 process banata hai",
                 "asyncio, kyunki intezaar ke waqt dusra kaam chal jata hai",
                 "Normal for loop, farq nahi padta"],
        start="# a, b ya c likho\nanswer = '?'\n",
        tests=[("answer", "b")],
        sol="answer = 'b'",
        hint="Jab kaam me zyadatar intezaar ho (network, file), tab asyncio best hai. Jab CPU ghis raha "
             "ho (bada hisaab, image processing), tab multiprocessing.",
        bonus="Bonus: ek line me likh ke rakh: intezaar = asyncio, hisaab = multiprocessing.",
        lesson="Teen tarike hai. Thread: ek hi process me, intezaar wale kaam ke liye theek. "
               "Multiprocessing: alag-alag process, har ek ka apna Python, CPU ke bhaari kaam ke liye. "
               "Asyncio: ek hi thread, par intezaar ke waqt dusra kaam pakad leta hai, network ke liye "
               "sabse halka aur tez.",
        example="import asyncio\n\n"
                "async def laao(naam):\n"
                "    await asyncio.sleep(1)      # intezaar - yahi jagah dusro ko milti hai\n"
                "    return naam\n\n"
                "async def main():\n"
                "    return await asyncio.gather(laao('a'), laao('b'))\n"
                "# dono ek saath, kul 1 second - 2 nahi",
    ),

    # ---------------------------------------------------------------- testing
    dict(
        t="Testing with assert", ch="testing", kind="code",
        brief="`ulta(s)` banao jo string ulti kare, fir `test_ulta()` likho jo assert se use jaanche "
              "aur 'sab paas' return kare. `natija` me use chala ke rakho.",
        start="def ulta(s):\n    ...\n\ndef test_ulta():\n    ...\n\nnatija = test_ulta()\n",
        tests=[("ulta('abc')", "cba"), ("natija", "sab paas")],
        sol="def ulta(s):\n    return s[::-1]\n\n"
            "def test_ulta():\n"
            "    assert ulta('abc') == 'cba'\n"
            "    assert ulta('') == ''\n"
            "    assert ulta('a') == 'a'\n"
            "    return 'sab paas'\n\n"
            "natija = test_ulta()",
        hint="assert shart likho: assert ulta('abc') == 'cba'. Shart sach hui toh kuch nahi hota, "
             "jhooti hui toh AssertionError. Khali string aur ek letter wale case bhi jaanch.",
        bonus="Bonus: ulta() ko jaan bujh ke galat kar ke dekh, test turant pakad lega.",
        lesson="Test wo code hai jo tumhare code ko jaanchta hai. assert sabse simple tarika hai: "
               "shart sach toh chup, jhooti toh error. Bade project me pytest ya unittest use hota hai, "
               "par idea yahi rehta hai - khud likho, machine jaanche.",
        example="def jodo(a, b):\n"
                "    return a + b\n\n"
                "assert jodo(2, 2) == 4        # theek, kuch nahi hoga\n"
                "assert jodo(0, 0) == 0        # kinare wale case bhi jaanch\n"
                "print('test paas')\n"
                "# assert jodo(2, 2) == 5  ->  AssertionError",
    ),

    # ---------------------------------------------------------------- tools (quiz)
    dict(
        t="pip, venv & requirements", ch="tools", kind="quiz",
        brief="Nayi project ke liye alag jagah banana jaha uske apne packages rahe, wo kis se hota hai?",
        choices=["pip install se", "python -m venv .venv se", "import se"],
        start="# a, b ya c likho\nanswer = '?'\n",
        tests=[("answer", "b")],
        sol="answer = 'b'",
        hint="venv ek alag dabba banata hai jisme sirf usi project ke packages rehte hai. pip us dabbe "
             "ke andar package daalta hai. Dono alag kaam hai.",
        bonus="Bonus: apne computer pe python -m venv .venv chala ke dekh, ek nayi folder banegi.",
        lesson="pip Python ka package installer hai: pip install requests. venv har project ke liye "
               "alag dabba banata hai, taki ek project ka package dusre ko na todhe. "
               "requirements.txt me list rehti hai taki dusra banda wahi setup bana sake.",
        example="# terminal me chalte hai, Python file me nahi:\n"
                "#   python -m venv .venv          alag dabba bana\n"
                "#   .venv\\Scripts\\activate       Windows pe chalu kar\n"
                "#   pip install requests          package daal\n"
                "#   pip freeze > requirements.txt list bana\n"
                "#   pip install -r requirements.txt   dusre computer pe wahi setup",
    ),
    dict(
        t="Static typing & mypy", ch="tools", kind="quiz",
        brief="Agar def jodo(a: int, b: int) likha ho aur koi jodo('x', 'y') bulaye toh Python khud kya karega?",
        choices=["Turant error dega, kyunki type galat hai",
                 "Chala dega, kyunki annotation sirf note hai. mypy jaisa tool hi pakadta hai",
                 "Argument ko apne aap int bana dega"],
        start="# a, b ya c likho\nanswer = '?'\n",
        tests=[("answer", "b")],
        sol="answer = 'b'",
        hint="Python annotation ko chalate waqt check nahi karta. Wo sirf ishara hai, jise editor aur "
             "mypy jaise checker padh ke galti batate hai.",
        bonus="Bonus: apne computer pe pip install mypy karke mypy file.py chala ke dekh.",
        lesson="Annotation likhne se Python rukta nahi. 'x' + 'y' chal jayega aur 'xy' de dega. "
               "mypy alag se chalne wala checker hai jo poora code padh ke batata hai ki type kahan "
               "galat lag raha hai, bina program chalaye.",
        example="def jodo(a: int, b: int) -> int:\n"
                "    return a + b\n\n"
                "print(jodo('x', 'y'))      # xy  - Python ne rok nahi lagayi\n"
                "# terminal me: mypy file.py\n"
                "# error: Argument 1 to \"jodo\" has incompatible type \"str\"; expected \"int\"",
    ),
]
