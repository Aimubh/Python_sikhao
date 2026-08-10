window.LEVELS = [
 {
  "t": "Printing",
  "brief": "Print exactly: Hello, World!",
  "start": "",
  "tests": [
   [
    "__out__",
    "Hello, World!\n"
   ]
  ],
  "sol": "print('Hello, World!')",
  "hint": "print() ke andar bilkul wahi text daal - spelling, comma aur ! sab same: print('Hello, World!')",
  "bonus": "Bonus: do print lines likh ke dekh output kaise alag alag line me aata hai.",
  "lesson": "print() screen pe kuch bhi dikhata hai. Quotes ke andar jo likhoge wo waisa ka waisa chhapega - ek bhi spelling ya symbol idhar-udhar hua toh output alag ho jayega.",
  "example": "print('Namaste India!')   # Namaste India!\nprint('Line ek')\nprint('Line do')          # har print nayi line me aata hai"
 },
 {
  "t": "Hello, variables",
  "brief": "Make `name` the string 'Ada' and `age` the number 36.",
  "start": "name = ?\nage = ?\n",
  "tests": [
   [
    "name",
    "Ada"
   ],
   [
    "age",
    36
   ]
  ],
  "sol": "name = 'Ada'\nage = 36",
  "hint": "Bhai ? ki jagah value likhni hai: name = 'Ada' (text pe quotes lagte hai) aur age = 36 (number pe quotes nahi lagte).",
  "bonus": "Bonus: ek variable city bana ke usme apne sheher ka naam daal, aur pi = 3.14 bhi bana.",
  "lesson": "Variable ek dabba hai jisme value rakhte hai, aur = se value andar daalte hai. Text (string) ko quotes me likhte hai, number ko bina quotes ke.",
  "example": "city = 'Mumbai'      # text - quotes zaroori hai\npin = 400001         # number - quotes nahi lagte\nprint(city, pin)     # Mumbai 400001"
 },
 {
  "t": "Numbers & maths",
  "brief": "a = 7 aur b = 2 se: `jod` (+), `ghata` (-), `guna` (*), `bhaag` (/), `bacha` (%) aur `ghaat` (**) nikalo.",
  "start": "a = 7\nb = 2\njod = ?\nghata = ?\nguna = ?\nbhaag = ?    # / hamesha decimal deta hai\nbacha = ?    # % matlab bhaag ke baad jo bacha\nghaat = ?    # ** matlab power\n",
  "tests": [
   [
    "jod",
    9
   ],
   [
    "ghata",
    5
   ],
   [
    "guna",
    14
   ],
   [
    "bhaag",
    3.5
   ],
   [
    "bacha",
    1
   ],
   [
    "ghaat",
    49
   ]
  ],
  "sol": "a = 7\nb = 2\njod = a + b\nghata = a - b\nguna = a * b\nbhaag = a / b\nbacha = a % b\nghaat = a ** b",
  "hint": "Seedha likh: jod = a + b. Do cheezein yaad rakh - / hamesha decimal deta hai (7/2 = 3.5), aur % bacha hua deta hai (7%2 = 1). ** matlab power.",
  "bonus": "Bonus: a // b bhi try kar - ye decimal kaat ke pura number deta hai.",
  "lesson": "Python calculator bhi hai. + - * / ke alawa do khaas hai: % bacha hua deta hai aur ** power. Dhyan rakh - / hamesha decimal deta hai, aur // decimal kaat deta hai.",
  "example": "x = 9\ny = 4\nprint(x + y, x - y, x * y)   # 13 5 36\nprint(x / y)                 # 2.25  - decimal\nprint(x // y, x % y)         # 2 1   - pura, aur bacha hua\nprint(x ** 2)                # 81    - x ka square"
 },
 {
  "t": "Strings",
  "brief": "Given `raw`, set `clean` to it stripped of spaces and lowercased.",
  "start": "raw = '  MiXeD Case  '\nclean = ?\n",
  "tests": [
   [
    "clean",
    "mixed case"
   ]
  ],
  "sol": "raw = '  MiXeD Case  '\nclean = raw.strip().lower()",
  "hint": "Do kaam karne hai bhai - pehle spaces hatao .strip(), fir chhota karo .lower(). Dono ko jod de: raw.strip().lower()",
  "bonus": "Bonus: clean.title() chala ke dekh, kya milta hai.",
  "lesson": "String pe kuch ready-made kaam hote hai jinhe method kehte hai. Method ko dot laga ke bulate hai. Ye original ko badalte nahi, nayi string bana ke dete hai.",
  "example": "s = '  PyThOn RoCkS  '\nprint(s.strip())          # 'PyThOn RoCkS' - dono taraf ke space gaye\nprint(s.upper())          # sab bada\nprint(s.strip().lower())  # dono kaam ek saath, left se right chalte hai"
 },
 {
  "t": "f-strings",
  "brief": "`naam` aur `marks` ko jod ke `line` banao: 'Riya ke 92 marks aaye'.",
  "start": "naam = 'Riya'\nmarks = 92\nline = ?\n",
  "tests": [
   [
    "line",
    "Riya ke 92 marks aaye"
   ]
  ],
  "sol": "naam = 'Riya'\nmarks = 92\nline = f'{naam} ke {marks} marks aaye'",
  "hint": "String ke aage f lagao aur {} ke andar variable ka naam daalo: line = f'{naam} ke {marks} marks aaye'. Quotes ke andar hi rehna hai.",
  "bonus": "Bonus: ek aur line bana jisme marks ka double dikhe - {marks * 2}.",
  "lesson": "String ke aage f lagao, fir {} ke andar koi bhi variable ya calculation daal do - Python usko value se badal dega. Ye jodne ka sabse saaf tarika hai.",
  "example": "naam = 'Riya'\nmarks = 92\nprint(f'{naam} ke {marks} marks aaye')   # Riya ke 92 marks aaye\nprint(f'Double: {marks * 2}')            # {} ke andar hisaab bhi chalta hai"
 },
 {
  "t": "Booleans & comparison",
  "brief": "age = 20, marks = 45. `adult` (18 ya zyada?), `paas` (33 se zyada?), `dono` (dono sach hai?), `fail` (paas nahi hai?) banao.",
  "start": "age = 20\nmarks = 45\nadult = ?\npaas = ?\ndono = ?     # and use karo\nfail = ?     # not use karo\n",
  "tests": [
   [
    "adult",
    true
   ],
   [
    "paas",
    true
   ],
   [
    "dono",
    true
   ],
   [
    "fail",
    false
   ]
  ],
  "sol": "age = 20\nmarks = 45\nadult = age >= 18\npaas = marks > 33\ndono = adult and paas\nfail = not paas",
  "hint": "Comparison ka jawab True ya False hota hai: age >= 18. Do shart jodne ke liye and, ulta karne ke liye not. = (value dena) aur == (barabari check) alag hai bhai.",
  "bonus": "Bonus: or bhi try kar - ek bhi sach ho toh True aata hai.",
  "lesson": "Comparison ka jawab sirf True ya False hota hai. Yaad rakh: = value deta hai, == barabari check karta hai. Do shart jodne ke liye and/or, ulta karne ke liye not.",
  "example": "umar = 15\nprint(umar > 10)              # True\nprint(umar == 18)             # False - == barabari, = nahi\nprint(umar > 10 and umar < 18)  # True  - dono sach\nprint(not umar > 10)          # False - ulta ho gaya"
 },
 {
  "t": "Conditionals",
  "brief": "score = 76 se `grade` banao (90+ 'A', 80+ 'B', 70+ 'C', warna 'F') aur temp = 45 se `mausam` banao (40 se upar 'Garmi', warna 'Theek').",
  "start": "score = 76\nif ?:\n    grade = ?\n\ntemp = 45\nif ?:\n    mausam = ?\n",
  "tests": [
   [
    "grade",
    "C"
   ],
   [
    "mausam",
    "Garmi"
   ]
  ],
  "sol": "score = 76\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\n\ntemp = 45\nif temp > 40:\n    mausam = 'Garmi'\nelse:\n    mausam = 'Theek'",
  "hint": "if ke aage shart, uske niche 4 space chhod ke kaam. Upar se niche check hota hai - pehle 90, fir 80, fir 70, isliye elif ka order ulta mat karna.",
  "bonus": "Bonus: 60 se upar ke liye 'D' bhi add kar.",
  "lesson": "if condition sach ho toh uska block chalta hai, warna elif dekha jata hai, aur sab fail ho toh else. Python upar se niche check karta hai aur PEHLA match chuun ke ruk jata hai.",
  "example": "temp = 38\nif temp > 40:\n    print('Bahut garmi')\nelif temp > 30:\n    print('Garmi')      # yahi chalega, aur baaki check nahi honge\nelse:\n    print('Thanda')"
 },
 {
  "t": "Lists",
  "brief": "`nums` se: `pehla` (pehla item), `kitne` (lambai), `bade` (10 se bade numbers ki nayi list) nikalo, fir 50 ko `nums` me add karo.",
  "start": "nums = [5, 12, 7, 20]\npehla = ?\nkitne = ?\nbade = ?\n# ab 50 ko nums me add karo\n",
  "tests": [
   [
    "pehla",
    5
   ],
   [
    "kitne",
    4
   ],
   [
    "bade",
    [
     12,
     20
    ]
   ],
   [
    "nums",
    [
     5,
     12,
     7,
     20,
     50
    ]
   ]
  ],
  "sol": "nums = [5, 12, 7, 20]\npehla = nums[0]\nkitne = len(nums)\nbade = [n for n in nums if n > 10]\nnums.append(50)",
  "hint": "nums[0] pehla item deta hai (ginti 0 se shuru hoti hai), len(nums) lambai. bade ke liye list comprehension: [n for n in nums if n > 10]. Add karne ke liye .append(50).",
  "bonus": "Bonus: nums.remove(7) chala ke dekh, aur nums[1:3] bhi print kar.",
  "lesson": "List ek line me kai cheezein rakhti hai. Nayi list banane ka short tarika hai list comprehension: [kya_chahiye for item in list if shart].",
  "example": "nums = [5, 12, 7, 20]\nbade = [n for n in nums if n > 10]\nprint(bade)               # [12, 20] - order wahi rehta hai\nprint(len(nums))          # 4"
 },
 {
  "t": "Slicing",
  "brief": "s = 'namaste' se `pehle_teen`, `aakhri_do` aur `ulta` (poora ulta) nikalo.",
  "start": "s = 'namaste'\npehle_teen = ?\naakhri_do = ?\nulta = ?\n",
  "tests": [
   [
    "pehle_teen",
    "nam"
   ],
   [
    "aakhri_do",
    "te"
   ],
   [
    "ulta",
    "etsaman"
   ]
  ],
  "sol": "s = 'namaste'\npehle_teen = s[:3]\naakhri_do = s[-2:]\nulta = s[::-1]",
  "hint": "s[:3] shuru ke teen, s[-2:] aakhri ke do, aur s[::-1] poori string ulti kar deta hai. Colon ke pehle start, baad me end.",
  "bonus": "Bonus: s[2:5] print kar ke dekh kya aata hai.",
  "lesson": "s[start:end] se string ka tukda milta hai - start shamil, end nahi. Minus ulta ginta hai: -1 matlab aakhri letter.",
  "example": "s = 'namaste'\nprint(s[0:3])   # nam  - 0,1,2 (3 nahi)\nprint(s[-2:])   # te   - aakhri do\nprint(s[:4])    # nama - shuru se"
 },
 {
  "t": "Loops",
  "brief": "for loop se 1 se 10 tak ka jod `total` me nikalo, aur 1 se 5 tak ke har number ka square `squares` list me daalo.",
  "start": "total = 0\nfor ?:\n    ?\n\nsquares = []\nfor ?:\n    ?\n",
  "tests": [
   [
    "total",
    55
   ],
   [
    "squares",
    [
     1,
     4,
     9,
     16,
     25
    ]
   ]
  ],
  "sol": "total = 0\nfor i in range(1, 11):\n    total = total + i\n\nsquares = []\nfor i in range(1, 6):\n    squares.append(i * i)",
  "hint": "range(1, 11) matlab 1 se 10 tak - aakhri number kabhi shamil nahi hota. Loop ke andar total = total + i likh, aur list me daalne ke liye squares.append(i * i).",
  "bonus": "Bonus: 1 se 20 tak sirf even numbers ka jod nikaal (range(2, 21, 2) dekh).",
  "lesson": "for loop ek list ya range ke har item pe ghoomta hai. range(1, 4) matlab 1, 2, 3 - aakhri number kabhi shamil nahi hota, isliye n tak jaana ho toh n+1 likhna padta hai.",
  "example": "count = 0\nfor i in range(1, 4):     # i = 1, fir 2, fir 3\n    count = count + i     # jodta jata hai\nprint(count)              # 6"
 },
 {
  "t": "While loop",
  "brief": "1 se shuru kar ke while loop me double karte jao jab tak 100 paar na ho. `n` final value aur `steps` me kitni baar double kiya.",
  "start": "n = 1\nsteps = 0\nwhile ?:\n    ?\n",
  "tests": [
   [
    "n",
    128
   ],
   [
    "steps",
    7
   ]
  ],
  "sol": "n = 1\nsteps = 0\nwhile n <= 100:\n    n = n * 2\n    steps = steps + 1",
  "hint": "while ki shart tab tak sachi rehni chahiye jab tak kaam baaki hai: while n <= 100. Andar n ko badalna mat bhool warna loop kabhi rukega hi nahi.",
  "bonus": "Bonus: 3 ka table while loop se print kar.",
  "lesson": "for pehle se pata list pe ghoomta hai, while tab tak chalta hai jab tak shart sachi hai. Andar wali value badalna zaroori hai, warna loop hamesha ke liye atak jayega.",
  "example": "n = 10\nsteps = 0\nwhile n > 1:\n    n = n // 2      # ye badalna zaroori hai\n    steps = steps + 1\nprint(n, steps)     # 1 3"
 },
 {
  "t": "Dicts",
  "brief": "`phone` me 'sita' ka number 88888 add karo, `ravi_num` nikalo, aur `amit_num` .get() se nikalo (Amit nahi hai toh 0 aana chahiye).",
  "start": "phone = {'ravi': 99999}\n# sita add karo\nravi_num = ?\namit_num = ?\n",
  "tests": [
   [
    "phone",
    {
     "ravi": 99999,
     "sita": 88888
    }
   ],
   [
    "ravi_num",
    99999
   ],
   [
    "amit_num",
    0
   ]
  ],
  "sol": "phone = {'ravi': 99999}\nphone['sita'] = 88888\nravi_num = phone['ravi']\namit_num = phone.get('amit', 0)",
  "hint": "Nayi entry aise banti hai: phone['sita'] = 88888. Nikalne ke liye phone['ravi']. Jo key ho hi na uske liye .get('amit', 0) - warna KeyError aa jayega.",
  "bonus": "Bonus: phone.keys() aur phone.values() print kar ke dekh.",
  "lesson": "Dict me har value ka ek naam (key) hota hai. d[key] se value milti hai, par key na ho toh error aata hai - isliye d.get(key, default) safe hota hai.",
  "example": "phone = {'ravi': 99999, 'sita': 88888}\nprint(phone['ravi'])          # 99999\nprint(phone.get('amit', 0))   # 0 - key nahi hai, par error bhi nahi\nphone['amit'] = 77777         # nayi entry add"
 },
 {
  "t": "Functions",
  "brief": "Do function banao: `namaste(naam)` jo 'Namaste, Riya!' de, aur `area(lambai, chaudai)` jo dono ka guna de.",
  "start": "def namaste(naam):\n    ...\n\ndef area(lambai, chaudai):\n    ...\n",
  "tests": [
   [
    "namaste('Riya')",
    "Namaste, Riya!"
   ],
   [
    "namaste('Om')",
    "Namaste, Om!"
   ],
   [
    "area(3, 4)",
    12
   ],
   [
    "area(10, 10)",
    100
   ]
  ],
  "sol": "def namaste(naam):\n    return f'Namaste, {naam}!'\n\ndef area(lambai, chaudai):\n    return lambai * chaudai",
  "hint": "def naam(argument): likh, andar kaam kar, aur result return kar. return nahi likha toh function None deta hai. Body 4 space andar honi chahiye.",
  "bonus": "Bonus: ek `bada(a, b)` function bana jo dono me se bada number de.",
  "lesson": "Function ek kaam ko naam de deta hai, taki baar-baar likhna na pade. def se banate hai, brackets me input (argument) lete hai, aur return se jawab wapas dete hai.",
  "example": "def double(x):\n    return x * 2          # return nahi likha toh None milega\n\ndef jodo(a, b):\n    return a + b\n\nprint(double(5))          # 10\nprint(jodo(3, 4))         # 7"
 },
 {
  "t": "Default & keyword args",
  "brief": "Write `join(items, sep=', ')` joining items into one string.",
  "start": "def join(items, sep=', '):\n    ...\n",
  "tests": [
   [
    "join(['a','b'])",
    "a, b"
   ],
   [
    "join(['a','b'], sep='-')",
    "a-b"
   ]
  ],
  "sol": "def join(items, sep=', '):\n    return sep.join(items)",
  "hint": "sep ka default already ', ' hai - bas sep.join(items) return kar de. Join ulta chalta hai bhai: separator.join(list).",
  "bonus": "Bonus: numbers ki list join kar ke dekh, error aayega - sochh kyun.",
  "lesson": "Function ke argument ko default value de sakte ho. Jo bulaye wo chahe toh badal de, chahe toh chhod de. join() list ko ek string me jodta hai: separator.join(list).",
  "example": "def wish(naam, msg='Namaste'):\n    return f'{msg}, {naam}!'\nprint(wish('Ravi'))              # Namaste, Ravi!\nprint(wish('Ravi', msg='Hi'))    # Hi, Ravi!"
 },
 {
  "t": "Sorting with a key",
  "brief": "Write `by_len(words)` sorting words shortest first, ties alphabetical.",
  "start": "def by_len(words):\n    ...\n",
  "tests": [
   [
    "by_len(['pear','fig','apple'])",
    [
     "fig",
     "pear",
     "apple"
    ]
   ],
   [
    "by_len(['bb','aa'])",
    [
     "aa",
     "bb"
    ]
   ]
  ],
  "sol": "def by_len(words):\n    return sorted(words, key=lambda w: (len(w), w))",
  "hint": "sorted() me key do: key=lambda w: (len(w), w). Tuple isliye ki pehle lambai dekhe, barabar ho toh alphabet.",
  "bonus": "Bonus: reverse=True laga ke ulta sort kar ke dekh.",
  "lesson": "sorted() list ko sort karta hai. key=... batata hai ki kis cheez pe sort karna hai. Tuple return karo toh pehle wale pe sort hoga, barabar hone pe doosre pe.",
  "example": "naam = ['Ravi', 'Om', 'Sita']\nprint(sorted(naam))                    # alphabet ke hisaab se\nprint(sorted(naam, key=len))           # chhote naam pehle\nprint(sorted(naam, key=len, reverse=True))   # ulta"
 },
 {
  "t": "Exceptions",
  "brief": "Write `safe_div(a, b)` returning a/b, or None if b is 0.",
  "start": "def safe_div(a, b):\n    ...\n",
  "tests": [
   [
    "safe_div(6, 3)",
    2.0
   ],
   [
    "safe_div(1, 0)",
    null
   ]
  ],
  "sol": "def safe_div(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None",
  "hint": "try ke andar a / b likh, aur except ZeroDivisionError ke andar None return kar.",
  "bonus": "Bonus: b agar string ho toh? TypeError bhi handle kar le.",
  "lesson": "Jo code fatt sakta hai use try me rakho, aur except me batao ki error aane pe kya karna hai. Isse program band nahi hota.",
  "example": "try:\n    n = int('abc')          # ye fatega\nexcept ValueError:\n    n = 0                   # sambhal liya\nprint(n)                    # 0"
 },
 {
  "t": "Comprehensions & zip",
  "brief": "Write `pair(ks, vs)` -> dict of ks zipped to vs, skipping falsy keys.",
  "start": "def pair(ks, vs):\n    ...\n",
  "tests": [
   [
    "pair(['a','','b'], [1,2,3])",
    {
     "a": 1,
     "b": 3
    }
   ],
   [
    "pair([], [])",
    {}
   ]
  ],
  "sol": "def pair(ks, vs):\n    return {k: v for k, v in zip(ks, vs) if k}",
  "hint": "{k: v for k, v in zip(ks, vs) if k} - zip dono list ko jodta hai, if k khali string ko hata deta hai.",
  "bonus": "Bonus: values ko double kar ke daal.",
  "lesson": "zip do list ko jodi bana ke saath chalata hai. Dict comprehension {k: v for ...} se seedha dict ban jata hai, aur if laga ke fazool entries hata sakte ho.",
  "example": "naam = ['ravi', 'sita']\nmarks = [80, 91]\nd = {n: m for n, m in zip(naam, marks)}\nprint(d)                      # {'ravi': 80, 'sita': 91}"
 },
 {
  "t": "Classes",
  "brief": "Class `Dog` with __init__(name) and speak() -> '<name> says woof'.",
  "start": "class Dog:\n    ...\n",
  "tests": [
   [
    "Dog('Rex').speak()",
    "Rex says woof"
   ],
   [
    "Dog('Ada').name",
    "Ada"
   ]
  ],
  "sol": "class Dog:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f'{self.name} says woof'",
  "hint": "__init__ me self.name = name save kar, speak() me f'{self.name} says woof' return kar. Har method ka pehla argument self hota hai.",
  "bonus": "Bonus: ek breed argument bhi le, default 'desi' rakh.",
  "lesson": "Class ek blueprint hai. __init__ tab chalta hai jab naya object banta hai, aur self.x = x se value object ke andar save hoti hai. Har method ka pehla argument self hota hai.",
  "example": "class Student:\n    def __init__(self, naam):\n        self.naam = naam          # object ke andar save\n    def hello(self):\n        return f'Main {self.naam} hu'\nprint(Student('Riya').hello())    # Main Riya hu"
 },
 {
  "t": "Dunder methods",
  "brief": "Class `Money(amount)` where repr is 'Money(5)' and Money(2)+Money(3)==Money(5).",
  "start": "class Money:\n    ...\n",
  "tests": [
   [
    "repr(Money(5))",
    "Money(5)"
   ],
   [
    "Money(2) + Money(3) == Money(5)",
    true
   ]
  ],
  "sol": "class Money:\n    def __init__(self, amount):\n        self.amount = amount\n    def __repr__(self):\n        return f'Money({self.amount})'\n    def __add__(self, other):\n        return Money(self.amount + other.amount)\n    def __eq__(self, other):\n        return self.amount == other.amount",
  "hint": "__repr__ me f'Money({self.amount})' return kar, __add__ me naya Money(self.amount + other.amount) return kar, __eq__ me dono amounts compare kar.",
  "bonus": "Bonus: __sub__ bhi likh de.",
  "lesson": "Do underscore wale special methods Python ke built-in kaam ko sambhalte hai: __repr__ print pe, __add__ + pe, __eq__ == pe. Inhe khud kabhi bulana nahi padta.",
  "example": "class Box:\n    def __init__(self, n):\n        self.n = n\n    def __repr__(self):\n        return f'Box({self.n})'\n    def __add__(self, other):\n        return Box(self.n + other.n)\nprint(Box(2) + Box(3))     # Box(5)"
 },
 {
  "t": "Inheritance",
  "brief": "`Cat` subclasses Animal, overrides speak() -> 'meow'. Keep Animal.name.",
  "start": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return '...'\n\nclass Cat(Animal):\n    ...\n",
  "tests": [
   [
    "Cat('Tom').speak()",
    "meow"
   ],
   [
    "Cat('Tom').name",
    "Tom"
   ],
   [
    "isinstance(Cat('Tom'), Animal)",
    true
   ]
  ],
  "sol": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return '...'\n\nclass Cat(Animal):\n    def speak(self):\n        return 'meow'",
  "hint": "Cat ke andar sirf speak() dubara likhna hai - __init__ Animal se apne aap mil jata hai, dubara likhne ki zarurat nahi.",
  "bonus": "Bonus: Dog class bhi bana jo 'woof' bole.",
  "lesson": "Ek class doosri se sab kuch viraasat me le sakti hai. Jo method waisa hi chahiye use dubara likhna hi nahi - sirf jo badalna hai wahi likho.",
  "example": "class Vehicle:\n    def __init__(self, naam):\n        self.naam = naam\n    def sound(self):\n        return 'brrr'\n\nclass Bike(Vehicle):          # __init__ apne aap mil gaya\n    def sound(self):\n        return 'vroom'\nprint(Bike('Splendor').naam, Bike('Splendor').sound())   # Splendor vroom"
 },
 {
  "t": "Generators",
  "brief": "Write `countdown(n)` yielding n, n-1, ... 1.",
  "start": "def countdown(n):\n    ...\n",
  "tests": [
   [
    "list(countdown(3))",
    [
     3,
     2,
     1
    ]
   ],
   [
    "list(countdown(0))",
    []
   ]
  ],
  "sol": "def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1",
  "hint": "return nahi bhai, yield karna hai: while n > 0: yield n, fir n -= 1.",
  "bonus": "Bonus: countup(n) bana jo 1 se n tak yield kare.",
  "lesson": "yield wala function ek saath sab nahi deta - ek-ek karke deta hai, jab maango tab. Isse badi list memory me nahi bharni padti.",
  "example": "def squares(n):\n    for i in range(1, n + 1):\n        yield i * i           # return nahi, yield\nprint(list(squares(4)))       # [1, 4, 9, 16]"
 },
 {
  "t": "Decorators",
  "brief": "Write `twice` - a decorator that calls the function and returns its result doubled.",
  "start": "def twice(fn):\n    ...\n\n@twice\ndef n():\n    return 5\n",
  "tests": [
   [
    "n()",
    10
   ]
  ],
  "sol": "def twice(fn):\n    def wrapper(*args, **kwargs):\n        return fn(*args, **kwargs) * 2\n    return wrapper\n\n@twice\ndef n():\n    return 5",
  "hint": "twice ke andar ek wrapper function bana jo fn(*args) ka result * 2 kare, fir wrapper return kar - bina bracket ke, call mat kar.",
  "bonus": "Bonus: times(n) bana jo n se multiply kare (decorator with argument).",
  "lesson": "Decorator ek function hai jo doosre function ko lapet ke uska behaviour badal deta hai. Andar wrapper banao, usme asli function ko bulao, aur wrapper ko return karo - call mat karo.",
  "example": "def shout(fn):\n    def wrapper(*args):\n        return fn(*args).upper()   # asli result ko badla\n    return wrapper                 # bina bracket ke\n\n@shout\ndef greet():\n    return 'namaste'\nprint(greet())                     # NAMASTE"
 },
 {
  "t": "Closures",
  "brief": "Write `counter()` returning a function that returns 1, 2, 3... on each call.",
  "start": "def counter():\n    ...\n",
  "tests": [
   [
    "[(lambda c: [c(), c(), c()])(counter())]",
    [
     [
      1,
      2,
      3
     ]
    ]
   ],
   [
    "counter()()",
    1
   ]
  ],
  "sol": "def counter():\n    n = 0\n    def tick():\n        nonlocal n\n        n += 1\n        return n\n    return tick",
  "hint": "counter ke andar n = 0 rakh, andar wale function me nonlocal n likh ke n += 1 kar, fir andar wala function return kar de.",
  "bonus": "Bonus: counter(start=10) bana jo 10 se ginti shuru kare.",
  "lesson": "Andar wala function bahar wale ki value yaad rakhta hai, function khatam hone ke baad bhi. Us yaad ko badalna ho toh nonlocal likhna padta hai.",
  "example": "def adder(n):\n    def add(x):\n        return x + n      # n yaad hai\n    return add\nadd5 = adder(5)\nprint(add5(3), add5(10))  # 8 15"
 },
 {
  "t": "Context managers",
  "brief": "Write class `Tag(name)` usable with `with`, appending to `log`: 'open'/'close'.",
  "start": "log = []\n\nclass Tag:\n    ...\n",
  "tests": [
   [
    "(log.clear(), Tag('b').__enter__(), Tag('b').__exit__(None, None, None), log)[3]",
    [
     "open",
     "close"
    ]
   ]
  ],
  "sol": "log = []\n\nclass Tag:\n    def __init__(self, name):\n        self.name = name\n    def __enter__(self):\n        log.append('open')\n        return self\n    def __exit__(self, *exc):\n        log.append('close')\n        return False",
  "hint": "__enter__ me log.append('open') aur return self, __exit__(self, *exc) me log.append('close'). Dono methods honi chahiye tabhi with chalega.",
  "bonus": "Bonus: __exit__ me error aaye toh 'error' bhi append kar.",
  "lesson": "with block ke shuru me __enter__ chalta hai aur khatam hone pe __exit__ - error aaye tab bhi. Isliye file band karna type ke kaam kabhi bhoolte nahi.",
  "example": "class Door:\n    def __enter__(self):\n        print('khula')\n        return self\n    def __exit__(self, *exc):\n        print('band')\n        return False\n\nwith Door():\n    print('andar')        # khula / andar / band"
 },
 {
  "t": "collections & itertools",
  "brief": "Write `top(words, k)` -> k most common words, most common first (use Counter).",
  "start": "from collections import Counter\n\ndef top(words, k):\n    ...\n",
  "tests": [
   [
    "top(['a','b','a','c','a','b'], 2)",
    [
     "a",
     "b"
    ]
   ],
   [
    "top(['x'], 5)",
    [
     "x"
    ]
   ]
  ],
  "sol": "from collections import Counter\n\ndef top(words, k):\n    return [w for w, _ in Counter(words).most_common(k)]",
  "hint": "Counter(words).most_common(k) seedha (word, count) ki list deta hai - bas words nikal le comprehension se.",
  "bonus": "Bonus: bina Counter ke, dict aur sorted se same kaam kar ke dekh.",
  "lesson": "collections me ready-made tools hai. Counter ginti ka kaam ek line me kar deta hai, aur most_common(k) sabse zyada aane wale k items deta hai.",
  "example": "from collections import Counter\nc = Counter('banana')\nprint(c)                    # Counter({'a': 3, 'n': 2, 'b': 1})\nprint(c.most_common(1))     # [('a', 3)] - list of (item, count)"
 },
 {
  "t": "Dataclasses & typing",
  "brief": "`Point` dataclass with x: int, y: int and method `dist2()` -> x*x + y*y.",
  "start": "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    ...\n",
  "tests": [
   [
    "Point(3, 4).dist2()",
    25
   ],
   [
    "Point(1, 2) == Point(1, 2)",
    true
   ]
  ],
  "sol": "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n    def dist2(self) -> int:\n        return self.x * self.x + self.y * self.y",
  "hint": "Class ke andar sirf x: int aur y: int likh - @dataclass khud __init__ aur == bana dega. dist2 normal method ki tarah likh.",
  "bonus": "Bonus: @dataclass(frozen=True) laga ke value badalne ki koshish kar.",
  "lesson": "@dataclass lagane se __init__, __repr__ aur == apne aap ban jate hai. Tumhe sirf field aur unka type likhna hai. Method normal tarike se likhte ho.",
  "example": "from dataclasses import dataclass\n\n@dataclass\nclass Book:\n    title: str\n    pages: int\n    def is_long(self) -> bool:\n        return self.pages > 300\nprint(Book('Python', 500).is_long())   # True"
 },
 {
  "t": "Recursion",
  "brief": "Write `flatten(x)` turning nested lists into one flat list.",
  "start": "def flatten(x):\n    ...\n",
  "tests": [
   [
    "flatten([1, [2, [3, 4]], 5])",
    [
     1,
     2,
     3,
     4,
     5
    ]
   ],
   [
    "flatten([])",
    []
   ]
  ],
  "sol": "def flatten(x):\n    out = []\n    for item in x:\n        if isinstance(item, list):\n            out.extend(flatten(item))\n        else:\n            out.append(item)\n    return out",
  "hint": "Har item pe dekh - agar wo list hai toh flatten(item) dubara bula ke extend kar, warna seedha append kar de.",
  "bonus": "Bonus: tuples ko bhi handle kar le.",
  "lesson": "Function khud ko bula sakta hai. Do cheez zaroori hai: ek rukne ki shart (base case), aur har baar problem chhoti honi chahiye - warna hamesha chalta rahega.",
  "example": "def fact(n):\n    if n <= 1:            # base case - yahi rokta hai\n        return 1\n    return n * fact(n - 1)\nprint(fact(5))            # 120"
 },
 {
  "t": "async / await",
  "brief": "Write `async def fetch(x)` returning x*2, and `async def both(a, b)` returning [await fetch(a), await fetch(b)].",
  "start": "async def fetch(x):\n    ...\n\nasync def both(a, b):\n    ...\n",
  "tests": [
   [
    "drive(fetch(3))",
    6
   ],
   [
    "drive(both(1, 2))",
    [
     2,
     4
    ]
   ]
  ],
  "sol": "async def fetch(x):\n    return x * 2\n\nasync def both(a, b):\n    return [await fetch(a), await fetch(b)]",
  "hint": "async def ke andar return normal hi likhte hai. both() me [await fetch(a), await fetch(b)] ki list bana. await sirf async def ke andar chalta hai.",
  "bonus": "Bonus: teesra fetch add kar ke teen results return kar.",
  "lesson": "async def se coroutine banta hai - wo turant chalta nahi, chalane pe chalta hai. Uske andar await laga ke doosre coroutine ka result le sakte ho. Test me drive(...) usko chalata hai.",
  "example": "async def double(x):\n    return x * 2\n\nasync def total(a, b):\n    return await double(a) + await double(b)\n# drive(total(1, 2))  ->  6"
 }
];
window.TRACKS = [{"id": "beginner", "name": "Beginner - kabhi Python nahi chhua", "start": 0, "desc": "Bilkul zero se: print, variables, + - * /, True/False, if-else, list, loop, dict. Koi function-wunction nahi, ek-ek cheez aaram se."}, {"id": "medium", "name": "Medium - basics aate hai", "start": 12, "desc": "print, if-else, loop pata hai. Yahan se: functions, sorting, error handling, classes."}, {"id": "advanced", "name": "Advanced - classes bhi aati hai", "start": 20, "desc": "Generators, decorators, closures, context managers, dataclass, recursion, async."}];
window.SCOLD = ["Arre bhai, ye toh galat ho gaya. Ek baar dhyan se dekh:", "Nahi bhai, abhi bhi kuch gadbad hai. Chal hint le:", "Bhai tu kar sakta hai - isko aise nahi, waise karte hai:", "Ruk ja bhai, jaldi mat kar. Error khud sab bata raha hai:", "Koi baat nahi bhai, galti se hi seekhte hai. Fir se try kar:"];
window.CHEER = ["Wah bhai wah! Ekdum sahi.", "Shabaash! Level nikal gaya.", "Kya baat hai bhai, mast solve kiya.", "Bilkul sahi bhai - agla level chalu.", "Zabardast! Python tere haath me aa raha hai."];
window.REVEAL = 10;
window.CHECK_SRC = "def check(level, src):\n    \"\"\"Run src, then every test. Returns None on pass, else a failure message.\"\"\"\n    ns = {}\n    out = io.StringIO()\n    try:\n        with contextlib.redirect_stdout(out):\n            exec(compile(src, \"work.py\", \"exec\"), ns)\n    except Exception:\n        # limit=-1: deepest frame, i.e. the user's line, not this checker's exec call\n        return \"your code crashed:\\n\" + traceback.format_exc(limit=-1).strip()\n    ns[\"__out__\"] = out.getvalue()\n\n    def drive(coro):\n        \"\"\"Run a coroutine that never really blocks. asyncio.run() is unusable in\n        the browser (Pyodide already owns the event loop), so step it by hand.\"\"\"\n        try:\n            coro.send(None)\n        except StopIteration as stop:\n            return stop.value\n        raise RuntimeError(\"coroutine awaited something that blocks\")\n\n    ns[\"drive\"] = drive\n    for expr, want in level[\"tests\"]:\n        try:\n            got = eval(expr, ns)\n        except Exception as e:\n            return f\"{expr}  ->  raised {type(e).__name__}: {e}\"\n        if got != want:\n            return f\"{expr}  ->  got {got!r}, expected {want!r}\"\n    return None\n";
