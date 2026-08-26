window.LEVELS = [
 {
  "t": "Printing",
  "ch": "basics",
  "kind": "code",
  "brief": "Print exactly: Hello, World!",
  "start": "",
  "tests": [
   [
    "__out__",
    "'Hello, World!\\n'"
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
  "ch": "basics",
  "kind": "code",
  "brief": "Make `name` the string 'Ada' and `age` the number 36.",
  "start": "name = ?\nage = ?\n",
  "tests": [
   [
    "name",
    "'Ada'"
   ],
   [
    "age",
    "36"
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
  "ch": "basics",
  "kind": "code",
  "brief": "a = 7 aur b = 2 se: `jod` (+), `ghata` (-), `guna` (*), `bhaag` (/), `bacha` (%) aur `ghaat` (**) nikalo.",
  "start": "a = 7\nb = 2\njod = ?\nghata = ?\nguna = ?\nbhaag = ?    # / hamesha decimal deta hai\nbacha = ?    # % matlab bhaag ke baad jo bacha\nghaat = ?    # ** matlab power\n",
  "tests": [
   [
    "jod",
    "9"
   ],
   [
    "ghata",
    "5"
   ],
   [
    "guna",
    "14"
   ],
   [
    "bhaag",
    "3.5"
   ],
   [
    "bacha",
    "1"
   ],
   [
    "ghaat",
    "49"
   ]
  ],
  "sol": "a = 7\nb = 2\njod = a + b\nghata = a - b\nguna = a * b\nbhaag = a / b\nbacha = a % b\nghaat = a ** b",
  "hint": "Seedha likh: jod = a + b. Do cheezein yaad rakh - / hamesha decimal deta hai (7/2 = 3.5), aur % bacha hua deta hai (7%2 = 1). ** matlab power.",
  "bonus": "Bonus: a // b bhi try kar - ye decimal kaat ke pura number deta hai.",
  "lesson": "Python calculator bhi hai. + - * / ke alawa do khaas hai: % bacha hua deta hai aur ** power. Dhyan rakh - / hamesha decimal deta hai, aur // decimal kaat deta hai.",
  "example": "x = 9\ny = 4\nprint(x + y, x - y, x * y)   # 13 5 36\nprint(x / y)                 # 2.25  - decimal\nprint(x // y, x % y)         # 2 1   - pura, aur bacha hua\nprint(x ** 2)                # 81    - x ka square"
 },
 {
  "t": "Type casting",
  "ch": "basics",
  "kind": "code",
  "brief": "'42' ko number banao (`n`), '3.5' ko decimal (`pi`), 99 ko string (`text`), aur 42 ke type ka naam nikalo (`kism`).",
  "start": "n = ?\npi = ?\ntext = ?\nkism = ?     # type(42).__name__\n",
  "tests": [
   [
    "n",
    "42"
   ],
   [
    "pi",
    "3.5"
   ],
   [
    "text",
    "'99'"
   ],
   [
    "kism",
    "'int'"
   ]
  ],
  "sol": "n = int('42')\npi = float('3.5')\ntext = str(99)\nkism = type(42).__name__",
  "hint": "int() string ko number banata hai, float() decimal, str() ko string. type(x) batata hai kaunsa type hai aur .__name__ se uska naam milta hai.",
  "bonus": "Bonus: int('abc') chala ke dekh, ValueError aayega. Use try/except se sambhal.",
  "lesson": "Data ka type badalna type casting kehlata hai. Screen se aane wala data hamesha string hota hai, isliye jodne se pehle use number banana padta hai. '2' + '3' = '23', par 2 + 3 = 5.",
  "example": "a = '7'\nprint(a + a)              # 77  - dono string thi, jud gayi\nprint(int(a) + int(a))    # 14  - ab number hai\nprint(type(a).__name__)   # str"
 },
 {
  "t": "Strings",
  "ch": "basics",
  "kind": "code",
  "brief": "Given `raw`, set `clean` to it stripped of spaces and lowercased.",
  "start": "raw = '  MiXeD Case  '\nclean = ?\n",
  "tests": [
   [
    "clean",
    "'mixed case'"
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
  "ch": "basics",
  "kind": "code",
  "brief": "`naam` aur `marks` ko jod ke `line` banao: 'Riya ke 92 marks aaye'.",
  "start": "naam = 'Riya'\nmarks = 92\nline = ?\n",
  "tests": [
   [
    "line",
    "'Riya ke 92 marks aaye'"
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
  "ch": "basics",
  "kind": "code",
  "brief": "age = 20, marks = 45. `adult` (18 ya zyada?), `paas` (33 se zyada?), `dono` (dono sach hai?), `fail` (paas nahi hai?) banao.",
  "start": "age = 20\nmarks = 45\nadult = ?\npaas = ?\ndono = ?     # and use karo\nfail = ?     # not use karo\n",
  "tests": [
   [
    "adult",
    "True"
   ],
   [
    "paas",
    "True"
   ],
   [
    "dono",
    "True"
   ],
   [
    "fail",
    "False"
   ]
  ],
  "sol": "age = 20\nmarks = 45\nadult = age >= 18\npaas = marks > 33\ndono = adult and paas\nfail = not paas",
  "hint": "Comparison ka jawab True ya False hota hai: age >= 18. Do shart jodne ke liye and, ulta karne ke liye not. = (value dena) aur == (barabari check) alag hai bhai.",
  "bonus": "Bonus: or bhi try kar - ek bhi sach ho toh True aata hai.",
  "lesson": "Comparison ka jawab sirf True ya False hota hai. Yaad rakh: = value deta hai, == barabari check karta hai. Do shart jodne ke liye and/or, ulta karne ke liye not.",
  "example": "umar = 15\nprint(umar > 10)              # True\nprint(umar == 18)             # False - == barabari, = nahi\nprint(umar > 10 and umar < 18)  # True  - dono sach\nprint(not umar > 10)          # False - ulta ho gaya"
 },
 {
  "t": "Operators: in, is, +=",
  "ch": "basics",
  "kind": "code",
  "brief": "`hai` ('na' banana me hai?), `nahi` ('z' nahi hai?), `total` (0 me += se pehle 5 fir 3 jodo), aur `same` (do alag khali list ek hi object hai kya).",
  "start": "fruit = 'banana'\nhai = ?\nnahi = ?\ntotal = 0\n# += se 5 aur fir 3 jodo\nx = []\ny = []\nsame = ?\n",
  "tests": [
   [
    "hai",
    "True"
   ],
   [
    "nahi",
    "True"
   ],
   [
    "total",
    "8"
   ],
   [
    "same",
    "False"
   ]
  ],
  "sol": "fruit = 'banana'\nhai = 'na' in fruit\nnahi = 'z' not in fruit\ntotal = 0\ntotal += 5\ntotal += 3\nx = []\ny = []\nsame = x is y",
  "hint": "in check karta hai ki cheez andar hai ya nahi. += matlab jo hai usme aur jod do. is poochta hai ki dono bilkul ek hi object hai kya, jabki == poochta hai value barabar hai kya.",
  "bonus": "Bonus: x == y print kar ke dekh. True aayega, jabki x is y False hai.",
  "lesson": "Teen kaam ke operator. in batata hai ki cheez andar hai ya nahi. += purani value me jod deta hai. is poochta hai ek hi object hai kya, == poochta hai value barabar hai kya.",
  "example": "nums = [1, 2, 3]\nprint(2 in nums)        # True\nscore = 10\nscore += 5              # score = score + 5\nprint(score)            # 15\na = [1]; b = [1]\nprint(a == b, a is b)   # True False"
 },
 {
  "t": "Conditionals",
  "ch": "basics",
  "kind": "code",
  "brief": "score = 76 se `grade` banao (90+ 'A', 80+ 'B', 70+ 'C', warna 'F') aur temp = 45 se `mausam` banao (40 se upar 'Garmi', warna 'Theek').",
  "start": "score = 76\nif ?:\n    grade = ?\n\ntemp = 45\nif ?:\n    mausam = ?\n",
  "tests": [
   [
    "grade",
    "'C'"
   ],
   [
    "mausam",
    "'Garmi'"
   ]
  ],
  "sol": "score = 76\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\n\ntemp = 45\nif temp > 40:\n    mausam = 'Garmi'\nelse:\n    mausam = 'Theek'",
  "hint": "if ke aage shart, uske niche 4 space chhod ke kaam. Upar se niche check hota hai - pehle 90, fir 80, fir 70, isliye elif ka order ulta mat karna.",
  "bonus": "Bonus: 60 se upar ke liye 'D' bhi add kar.",
  "lesson": "if condition sach ho toh uska block chalta hai, warna elif dekha jata hai, aur sab fail ho toh else. Python upar se niche check karta hai aur PEHLA match chuun ke ruk jata hai.",
  "example": "temp = 38\nif temp > 40:\n    print('Bahut garmi')\nelif temp > 30:\n    print('Garmi')      # yahi chalega, aur baaki check nahi honge\nelse:\n    print('Thanda')"
 },
 {
  "t": "Ternary (ek line ka if)",
  "ch": "basics",
  "kind": "code",
  "brief": "marks = 45 se `natija` banao ek hi line me: 33 ya usse zyada ho toh 'paas', warna 'fail'.",
  "start": "marks = 45\nnatija = ?\n",
  "tests": [
   [
    "natija",
    "'paas'"
   ]
  ],
  "sol": "marks = 45\nnatija = 'paas' if marks >= 33 else 'fail'",
  "hint": "Format hai: value_agar_sach if shart else value_agar_jhoot. Sab ek line me.",
  "bonus": "Bonus: umar se 'adult' ya 'bachcha' nikalne wali ek line likh.",
  "lesson": "Chhote if-else ko ek line me likh sakte ho. Padhne me seedha angrezi jaisa lagta hai: ye value agar shart sach hai, warna wo value.",
  "example": "temp = 45\nkaisa = 'garam' if temp > 40 else 'thanda'\nprint(kaisa)                             # garam\nn = 7\nprint('even' if n % 2 == 0 else 'odd')   # odd"
 },
 {
  "t": "Lists",
  "ch": "basics",
  "kind": "code",
  "brief": "`nums` se: `pehla` (pehla item), `kitne` (lambai), `bade` (10 se bade numbers ki nayi list) nikalo, fir 50 ko `nums` me add karo.",
  "start": "nums = [5, 12, 7, 20]\npehla = ?\nkitne = ?\nbade = ?\n# ab 50 ko nums me add karo\n",
  "tests": [
   [
    "pehla",
    "5"
   ],
   [
    "kitne",
    "4"
   ],
   [
    "bade",
    "[12, 20]"
   ],
   [
    "nums",
    "[5, 12, 7, 20, 50]"
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
  "ch": "basics",
  "kind": "code",
  "brief": "s = 'namaste' se `pehle_teen`, `aakhri_do` aur `ulta` (poora ulta) nikalo.",
  "start": "s = 'namaste'\npehle_teen = ?\naakhri_do = ?\nulta = ?\n",
  "tests": [
   [
    "pehle_teen",
    "'nam'"
   ],
   [
    "aakhri_do",
    "'te'"
   ],
   [
    "ulta",
    "'etsaman'"
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
  "ch": "basics",
  "kind": "code",
  "brief": "for loop se 1 se 10 tak ka jod `total` me nikalo, aur 1 se 5 tak ke har number ka square `squares` list me daalo.",
  "start": "total = 0\nfor ?:\n    ?\n\nsquares = []\nfor ?:\n    ?\n",
  "tests": [
   [
    "total",
    "55"
   ],
   [
    "squares",
    "[1, 4, 9, 16, 25]"
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
  "ch": "basics",
  "kind": "code",
  "brief": "1 se shuru kar ke while loop me double karte jao jab tak 100 paar na ho. `n` final value aur `steps` me kitni baar double kiya.",
  "start": "n = 1\nsteps = 0\nwhile ?:\n    ?\n",
  "tests": [
   [
    "n",
    "128"
   ],
   [
    "steps",
    "7"
   ]
  ],
  "sol": "n = 1\nsteps = 0\nwhile n <= 100:\n    n = n * 2\n    steps = steps + 1",
  "hint": "while ki shart tab tak sachi rehni chahiye jab tak kaam baaki hai: while n <= 100. Andar n ko badalna mat bhool warna loop kabhi rukega hi nahi.",
  "bonus": "Bonus: 3 ka table while loop se print kar.",
  "lesson": "for pehle se pata list pe ghoomta hai, while tab tak chalta hai jab tak shart sachi hai. Andar wali value badalna zaroori hai, warna loop hamesha ke liye atak jayega.",
  "example": "n = 10\nsteps = 0\nwhile n > 1:\n    n = n // 2      # ye badalna zaroori hai\n    steps = steps + 1\nprint(n, steps)     # 1 3"
 },
 {
  "t": "break, continue, pass",
  "ch": "basics",
  "kind": "code",
  "brief": "1 se 20 tak loop chalao. Odd number skip karo, 8 se bada dikhte hi ruk jao, aur bache hue even numbers `mile` list me daalo.",
  "start": "mile = []\nfor n in range(1, 21):\n    ?\n",
  "tests": [
   [
    "mile",
    "[2, 4, 6, 8]"
   ]
  ],
  "sol": "mile = []\nfor n in range(1, 21):\n    if n % 2 != 0:\n        continue\n    if n > 8:\n        break\n    mile.append(n)",
  "hint": "continue matlab is chakkar ko chhod ke agla chalao. break matlab loop yahi khatam. Pehle odd wala continue, fir 8 se bada wala break, fir append.",
  "bonus": "Bonus: for ke baad else laga ke dekh. break hua toh else nahi chalta.",
  "lesson": "Loop ke andar teen control word. continue is chakkar ko chhod ke agla shuru karta hai. break poora loop tod deta hai. pass ka matlab kuch mat karo, sirf jagah bhar do.",
  "example": "for n in range(1, 6):\n    if n == 2:\n        continue      # 2 chhod do\n    if n == 4:\n        break         # 4 pe ruk jao\n    print(n)          # 1 fir 3\n\ndef baad_me():\n    pass              # abhi kuch nahi, error bhi nahi"
 },
 {
  "t": "Nested loops & patterns",
  "ch": "basics",
  "kind": "code",
  "brief": "Do loop laga ke `pattern` banao: pehli line me 1 star, fir 2, fir 3, fir 4, har line ke baad nayi line.",
  "start": "pattern = ''\nfor i in range(1, 5):\n    ?\n",
  "tests": [
   [
    "pattern",
    "'*\\n**\\n***\\n****\\n'"
   ],
   [
    "pattern.count('*')",
    "10"
   ]
  ],
  "sol": "pattern = ''\nfor i in range(1, 5):\n    for j in range(i):\n        pattern = pattern + '*'\n    pattern = pattern + '\\n'",
  "hint": "Bahar wala loop line ginta hai, andar wala us line ke star. Andar wale loop ke baad '\\n' jodna mat bhool, wahi nayi line banata hai.",
  "bonus": "Bonus: ulta triangle bana - pehle 4 star, fir 3, fir 2, fir 1.",
  "lesson": "Loop ke andar loop chal sakta hai. Bahar wala ek baar chalta hai toh andar wala poora chakkar lagata hai. Pattern banane me yahi kaam aata hai.",
  "example": "for i in range(1, 4):        # 3 line\n    line = ''\n    for j in range(i):      # is line me i star\n        line = line + '#'\n    print(line)             # #  ##  ###\n\n# chhota tarika: print('#' * i)"
 },
 {
  "t": "Tuples",
  "ch": "basics",
  "kind": "code",
  "brief": "`point` tuple (10, 20, 30) banao. `pehla` aur `lambai` nikalo, a b c me unpack karo, aur badalne ki koshish try/except me karke `badal_sakte` False rakho.",
  "start": "point = ?\npehla = ?\nlambai = ?\na, b, c = ?\ntry:\n    point[0] = 99\n    badal_sakte = True\nexcept ?:\n    badal_sakte = False\n",
  "tests": [
   [
    "point",
    "(10, 20, 30)"
   ],
   [
    "pehla",
    "10"
   ],
   [
    "lambai",
    "3"
   ],
   [
    "b",
    "20"
   ],
   [
    "badal_sakte",
    "False"
   ]
  ],
  "sol": "point = (10, 20, 30)\npehla = point[0]\nlambai = len(point)\na, b, c = point\ntry:\n    point[0] = 99\n    badal_sakte = True\nexcept TypeError:\n    badal_sakte = False",
  "hint": "Tuple round bracket se banti hai aur badalti nahi. Badalne ki koshish pe TypeError aata hai. a, b, c = point ko unpacking kehte hai.",
  "bonus": "Bonus: ek function bana jo do value return kare. Wo apne aap tuple banti hai.",
  "lesson": "Tuple list jaisi hai par tala laga hua: banane ke baad badal nahi sakte. Isliye wo safe hai aur dict ki key bhi ban sakti hai. Round bracket se banti hai.",
  "example": "rang = ('lal', 'neela')\nprint(rang[1], len(rang))    # neela 2\nx, y = (3, 4)                # unpacking\nprint(x + y)                 # 7\n# rang[0] = 'hara'  ->  TypeError, tuple badalti nahi"
 },
 {
  "t": "Sets",
  "ch": "basics",
  "kind": "code",
  "brief": "a = {1,2,3} aur b = {3,4,5} se `mila` (dono ka sab), `dono_me`, `sirf_a` nikalo, aur [1,1,2,2,3] se duplicate hata ke `alag` sorted list banao.",
  "start": "a = {1, 2, 3}\nb = {3, 4, 5}\nmila = ?\ndono_me = ?\nsirf_a = ?\nalag = ?\n",
  "tests": [
   [
    "mila",
    "{1, 2, 3, 4, 5}"
   ],
   [
    "dono_me",
    "{3}"
   ],
   [
    "sirf_a",
    "{1, 2}"
   ],
   [
    "alag",
    "[1, 2, 3]"
   ]
  ],
  "sol": "a = {1, 2, 3}\nb = {3, 4, 5}\nmila = a | b\ndono_me = a & b\nsirf_a = a - b\nalag = sorted(set([1, 1, 2, 2, 3]))",
  "hint": "| dono ka sab deta hai, & dono me jo common hai, - sirf pehle wale me jo hai. Duplicate hatane ke liye list ko set() me daal, fir sorted() se wapas list bana.",
  "bonus": "Bonus: a.add(9) aur a.discard(1) chala ke dekh set kaise badalta hai.",
  "lesson": "Set ek jhola hai jisme har cheez sirf ek baar aati hai aur order nahi hota. Duplicate hatane aur do group compare karne ka sabse tez tarika yahi hai.",
  "example": "p = {'a', 'b', 'c'}\nq = {'b', 'c', 'd'}\nprint(p | q)            # sab: a b c d\nprint(p & q)            # common: b c\nprint(p - q)            # sirf p me: a\nprint(set([1, 1, 2]))   # {1, 2}"
 },
 {
  "t": "Dicts",
  "ch": "basics",
  "kind": "code",
  "brief": "`phone` me 'sita' ka number 88888 add karo, `ravi_num` nikalo, aur `amit_num` .get() se nikalo (Amit nahi hai toh 0 aana chahiye).",
  "start": "phone = {'ravi': 99999}\n# sita add karo\nravi_num = ?\namit_num = ?\n",
  "tests": [
   [
    "phone",
    "{'ravi': 99999, 'sita': 88888}"
   ],
   [
    "ravi_num",
    "99999"
   ],
   [
    "amit_num",
    "0"
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
  "ch": "functions",
  "kind": "code",
  "brief": "Do function banao: `namaste(naam)` jo 'Namaste, Riya!' de, aur `area(lambai, chaudai)` jo dono ka guna de.",
  "start": "def namaste(naam):\n    ...\n\ndef area(lambai, chaudai):\n    ...\n",
  "tests": [
   [
    "namaste('Riya')",
    "'Namaste, Riya!'"
   ],
   [
    "namaste('Om')",
    "'Namaste, Om!'"
   ],
   [
    "area(3, 4)",
    "12"
   ],
   [
    "area(10, 10)",
    "100"
   ]
  ],
  "sol": "def namaste(naam):\n    return f'Namaste, {naam}!'\n\ndef area(lambai, chaudai):\n    return lambai * chaudai",
  "hint": "def naam(argument): likh, andar kaam kar, aur result return kar. return nahi likha toh function None deta hai. Body 4 space andar honi chahiye.",
  "bonus": "Bonus: ek `bada(a, b)` function bana jo dono me se bada number de.",
  "lesson": "Function ek kaam ko naam de deta hai, taki baar-baar likhna na pade. def se banate hai, brackets me input (argument) lete hai, aur return se jawab wapas dete hai.",
  "example": "def double(x):\n    return x * 2          # return nahi likha toh None milega\n\ndef jodo(a, b):\n    return a + b\n\nprint(double(5))          # 10\nprint(jodo(3, 4))         # 7"
 },
 {
  "t": "Comments & docstrings",
  "ch": "functions",
  "kind": "code",
  "brief": "Ek function `greet` banao jo 'Namaste' de, aur uske andar docstring likho: Namaste bolta hai.",
  "start": "def greet():\n    \"\"\"?\"\"\"\n    return ?\n",
  "tests": [
   [
    "greet()",
    "'Namaste'"
   ],
   [
    "greet.__doc__.strip()",
    "'Namaste bolta hai.'"
   ]
  ],
  "sol": "def greet():\n    \"\"\"Namaste bolta hai.\"\"\"\n    return 'Namaste'",
  "hint": "# se ek line ka comment banta hai. Function ke andar pehli line me teen quotes wala text docstring kehlata hai, aur wo greet.__doc__ me milta hai.",
  "bonus": "Bonus: help(greet) chala ke dekh, wahi docstring dikhega.",
  "lesson": "Comment code ke liye note hai jise Python padhta nahi. # se line comment banta hai. Function ke andar pehli line me teen quotes wala text docstring hota hai, jise dusre log aur help() padh sakte hai.",
  "example": "# ye line Python ignore karega\ndef area(r):\n    \"\"\"Circle ka area deta hai.\"\"\"\n    return 3.14 * r * r      # yaha bhi comment chalta hai\n\nprint(area.__doc__)          # Circle ka area deta hai"
 },
 {
  "t": "Default & keyword args",
  "ch": "functions",
  "kind": "code",
  "brief": "Write `join(items, sep=', ')` joining items into one string.",
  "start": "def join(items, sep=', '):\n    ...\n",
  "tests": [
   [
    "join(['a','b'])",
    "'a, b'"
   ],
   [
    "join(['a','b'], sep='-')",
    "'a-b'"
   ]
  ],
  "sol": "def join(items, sep=', '):\n    return sep.join(items)",
  "hint": "sep ka default already ', ' hai - bas sep.join(items) return kar de. Join ulta chalta hai bhai: separator.join(list).",
  "bonus": "Bonus: numbers ki list join kar ke dekh, error aayega - sochh kyun.",
  "lesson": "Function ke argument ko default value de sakte ho. Jo bulaye wo chahe toh badal de, chahe toh chhod de. join() list ko ek string me jodta hai: separator.join(list).",
  "example": "def wish(naam, msg='Namaste'):\n    return f'{msg}, {naam}!'\nprint(wish('Ravi'))              # Namaste, Ravi!\nprint(wish('Ravi', msg='Hi'))    # Hi, Ravi!"
 },
 {
  "t": "*args and **kwargs",
  "ch": "functions",
  "kind": "code",
  "brief": "`total(*nums)` banao jo sab numbers jode (kuch bhi na mile toh 0), aur `tag(**kw)` banao jo keys sorted karke 'a=1,b=2' jaisi string de.",
  "start": "def total(*nums):\n    ...\n\ndef tag(**kw):\n    ...\n",
  "tests": [
   [
    "total(1, 2, 3)",
    "6"
   ],
   [
    "total()",
    "0"
   ],
   [
    "tag(b=2, a=1)",
    "'a=1,b=2'"
   ],
   [
    "tag()",
    "''"
   ]
  ],
  "sol": "def total(*nums):\n    return sum(nums)\n\ndef tag(**kw):\n    return ','.join(f'{k}={v}' for k in sorted(kw) for v in [kw[k]])",
  "hint": "*nums saare bina naam wale arguments ko tuple bana deta hai, **kw naam wale arguments ko dict. sum(nums) khali tuple pe 0 deta hai. join ke liye pehle sorted(kw) pe ghoom.",
  "bonus": "Bonus: def f(a, *rest, **kw) bana ke print kar ke dekh kaunsa kya pakadta hai.",
  "lesson": "Kabhi pata nahi hota kitne argument aayenge. *args unhe tuple me daal deta hai, **kwargs naam wale ko dict me. Naam koi bhi ho sakta hai, star zaroori hai.",
  "example": "def jodo(*nums):\n    return sum(nums)\nprint(jodo(1, 2), jodo(1, 2, 3, 4))    # 3 10\n\ndef dikha(**kw):\n    return kw\nprint(dikha(naam='Riya', age=20))      # {'naam': 'Riya', 'age': 20}"
 },
 {
  "t": "Lambda, map, filter",
  "ch": "functions",
  "kind": "code",
  "brief": "`double` lambda banao jo number ka double de. nums = [1,2,3,4] se map se `doubled` aur filter se `evens` nikalo (dono list).",
  "start": "nums = [1, 2, 3, 4]\ndouble = ?\ndoubled = ?\nevens = ?\n",
  "tests": [
   [
    "double(5)",
    "10"
   ],
   [
    "doubled",
    "[2, 4, 6, 8]"
   ],
   [
    "evens",
    "[2, 4]"
   ]
  ],
  "sol": "nums = [1, 2, 3, 4]\ndouble = lambda x: x * 2\ndoubled = list(map(double, nums))\nevens = list(filter(lambda n: n % 2 == 0, nums))",
  "hint": "lambda x: x * 2 ek chhota bina naam ka function hai. map har item pe function lagata hai, filter sirf wo item rakhta hai jinpe function True de. Dono ko list() me daalna padta hai.",
  "bonus": "Bonus: yahi kaam list comprehension se kar ke dekh, kaunsa zyada saaf lagta hai?",
  "lesson": "lambda ek line ka function hai jise naam ki zarurat nahi. map har item pe function chalata hai, filter chhaanti karta hai. Dono lazy hai, isliye list() lagana padta hai.",
  "example": "nums = [5, 10, 15]\nhalf = lambda x: x / 2\nprint(half(10))                        # 5.0\nprint(list(map(half, nums)))           # [2.5, 5.0, 7.5]\nprint(list(filter(lambda n: n > 6, nums)))   # [10, 15]"
 },
 {
  "t": "Variable scope",
  "ch": "functions",
  "kind": "code",
  "brief": "`ginti` global ko badhane wala `badhao()` likho (global), aur `counter()` jo andar ki value badhaye (nonlocal) aur nayi value de.",
  "start": "ginti = 0\n\ndef badhao():\n    ...\n\ndef counter():\n    n = 0\n    def tick():\n        ...\n    return tick\n",
  "tests": [
   [
    "(badhao(), badhao(), ginti)[2]",
    "2"
   ],
   [
    "(lambda c: [c(), c()])(counter())",
    "[1, 2]"
   ]
  ],
  "sol": "ginti = 0\n\ndef badhao():\n    global ginti\n    ginti += 1\n\ndef counter():\n    n = 0\n    def tick():\n        nonlocal n\n        n += 1\n        return n\n    return tick",
  "hint": "Function ke andar bahar wali variable badalni ho toh global likhna padta hai. Andar wale function me uske bahar wale (par global nahi) variable ke liye nonlocal likhte hai.",
  "bonus": "Bonus: global hataye bina badhao() chala ke dekh, UnboundLocalError aayega.",
  "lesson": "Function ke andar banayi variable sirf usi ke andar rehti hai. Bahar wali ko padh toh sakte ho, par badalne ke liye batana padta hai: global (file wali ke liye) ya nonlocal (bahar wale function wali ke liye).",
  "example": "x = 10\ndef dekho():\n    print(x)        # padhna theek hai: 10\n\ndef badlo():\n    global x\n    x = 99          # ab bahar wali x badli\nbadlo()\nprint(x)            # 99"
 },
 {
  "t": "Type annotations",
  "ch": "functions",
  "kind": "code",
  "brief": "`jodo(a: int, b: int) -> int` banao, aur uske annotations dict se `a_type` (a ka type ka naam) aur `wapas` (return type ka naam) nikalo.",
  "start": "def jodo(a, b):\n    ...\n\na_type = ?\nwapas = ?\n",
  "tests": [
   [
    "jodo(2, 3)",
    "5"
   ],
   [
    "a_type",
    "'int'"
   ],
   [
    "wapas",
    "'int'"
   ]
  ],
  "sol": "def jodo(a: int, b: int) -> int:\n    return a + b\n\na_type = jodo.__annotations__['a'].__name__\nwapas = jodo.__annotations__['return'].__name__",
  "hint": "Argument ke aage colon laga ke type likho: a: int. Return type function ke baad arrow se: -> int. Sab jodo.__annotations__ dict me milta hai, 'return' key ke saath.",
  "bonus": "Bonus: list[int] aur str | None jaise annotation bhi try kar.",
  "lesson": "Annotation batata hai ki kaunsa type expect kar rahe ho. Python inhe rokta nahi, par editor aur mypy jaise tools inse galti pakad lete hai, aur padhne wale ko saaf dikhta hai.",
  "example": "def naam_do(naam: str, baar: int = 1) -> str:\n    return (naam + ' ') * baar\n\nprint(naam_do('Riya', 2))            # Riya Riya\nprint(naam_do.__annotations__)       # {'naam': str, 'baar': int, 'return': str}"
 },
 {
  "t": "Sorting with a key",
  "ch": "functions",
  "kind": "code",
  "brief": "Write `by_len(words)` sorting words shortest first, ties alphabetical.",
  "start": "def by_len(words):\n    ...\n",
  "tests": [
   [
    "by_len(['pear','fig','apple'])",
    "['fig', 'pear', 'apple']"
   ],
   [
    "by_len(['bb','aa'])",
    "['aa', 'bb']"
   ]
  ],
  "sol": "def by_len(words):\n    return sorted(words, key=lambda w: (len(w), w))",
  "hint": "sorted() me key do: key=lambda w: (len(w), w). Tuple isliye ki pehle lambai dekhe, barabar ho toh alphabet.",
  "bonus": "Bonus: reverse=True laga ke ulta sort kar ke dekh.",
  "lesson": "sorted() list ko sort karta hai. key=... batata hai ki kis cheez pe sort karna hai. Tuple return karo toh pehle wale pe sort hoga, barabar hone pe doosre pe.",
  "example": "naam = ['Ravi', 'Om', 'Sita']\nprint(sorted(naam))                    # alphabet ke hisaab se\nprint(sorted(naam, key=len))           # chhote naam pehle\nprint(sorted(naam, key=len, reverse=True))   # ulta"
 },
 {
  "t": "Comprehensions & zip",
  "ch": "functions",
  "kind": "code",
  "brief": "Write `pair(ks, vs)` -> dict of ks zipped to vs, skipping falsy keys.",
  "start": "def pair(ks, vs):\n    ...\n",
  "tests": [
   [
    "pair(['a','','b'], [1,2,3])",
    "{'a': 1, 'b': 3}"
   ],
   [
    "pair([], [])",
    "{}"
   ]
  ],
  "sol": "def pair(ks, vs):\n    return {k: v for k, v in zip(ks, vs) if k}",
  "hint": "{k: v for k, v in zip(ks, vs) if k} - zip dono list ko jodta hai, if k khali string ko hata deta hai.",
  "bonus": "Bonus: values ko double kar ke daal.",
  "lesson": "zip do list ko jodi bana ke saath chalata hai. Dict comprehension {k: v for ...} se seedha dict ban jata hai, aur if laga ke fazool entries hata sakte ho.",
  "example": "naam = ['ravi', 'sita']\nmarks = [80, 91]\nd = {n: m for n, m in zip(naam, marks)}\nprint(d)                      # {'ravi': 80, 'sita': 91}"
 },
 {
  "t": "Exceptions",
  "ch": "errors",
  "kind": "code",
  "brief": "Write `safe_div(a, b)` returning a/b, or None if b is 0.",
  "start": "def safe_div(a, b):\n    ...\n",
  "tests": [
   [
    "safe_div(6, 3)",
    "2.0"
   ],
   [
    "safe_div(1, 0)",
    "None"
   ]
  ],
  "sol": "def safe_div(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None",
  "hint": "try ke andar a / b likh, aur except ZeroDivisionError ke andar None return kar.",
  "bonus": "Bonus: b agar string ho toh? TypeError bhi handle kar le.",
  "lesson": "Jo code fatt sakta hai use try me rakho, aur except me batao ki error aane pe kya karna hai. Isse program band nahi hota.",
  "example": "try:\n    n = int('abc')          # ye fatega\nexcept ValueError:\n    n = 0                   # sambhal liya\nprint(n)                    # 0"
 },
 {
  "t": "Modules: import karo",
  "ch": "modules",
  "kind": "code",
  "brief": "math se `jad` (16 ka square root) aur `gol` (pi ko 2 decimal tak round) nikalo, aur random se 3 dice roll `rolls` banao (har ek 1 se 6 ke beech).",
  "start": "import math\nimport random\n\njad = ?\ngol = ?\nrolls = ?\nsahi = all(1 <= r <= 6 for r in rolls)\n",
  "tests": [
   [
    "jad",
    "4.0"
   ],
   [
    "gol",
    "3.14"
   ],
   [
    "len(rolls)",
    "3"
   ],
   [
    "sahi",
    "True"
   ]
  ],
  "sol": "import math\nimport random\n\njad = math.sqrt(16)\ngol = round(math.pi, 2)\nrolls = [random.randint(1, 6) for _ in range(3)]\nsahi = all(1 <= r <= 6 for r in rolls)",
  "hint": "import math ke baad math.sqrt() aur math.pi milta hai. round(x, 2) do decimal tak chhota karta hai. random.randint(1, 6) ek dice roll deta hai.",
  "bonus": "Bonus: from math import sqrt likh ke dekh, fir seedha sqrt(16) chalega.",
  "lesson": "Module dusro ka likha hua code hai jo Python ke saath aata hai. import karte hi uske function mil jate hai. math me hisaab wale, random me chance wale, datetime me time wale.",
  "example": "import math, random\nprint(math.sqrt(25))          # 5.0\nprint(math.floor(4.7))        # 4\nprint(random.choice(['a', 'b', 'c']))   # koi ek\nfrom math import pi           # sirf ek cheez\nprint(round(pi, 3))           # 3.142"
 },
 {
  "t": "File handling",
  "ch": "files",
  "kind": "code",
  "brief": "'note.txt' me with block se do line likho ('ek' aur 'do'), fir usi file ko padh ke `saara` (poora text) aur `lines` (list) nikalo.",
  "start": "with open('note.txt', 'w') as f:\n    ?\n\nwith open('note.txt') as f:\n    saara = ?\n\nlines = saara.splitlines()\n",
  "tests": [
   [
    "saara",
    "'ek\\ndo\\n'"
   ],
   [
    "lines",
    "['ek', 'do']"
   ]
  ],
  "sol": "with open('note.txt', 'w') as f:\n    f.write('ek\\n')\n    f.write('do\\n')\n\nwith open('note.txt') as f:\n    saara = f.read()\n\nlines = saara.splitlines()",
  "hint": "'w' likhne ke liye, bina kuch likhe padhne ke liye. f.write() line ke aakhir me '\\n' khud nahi lagata, tumhe lagana padta hai. f.read() poori file ek string me deta hai.",
  "bonus": "Bonus: 'a' mode se ek aur line jod, fir dubara padh ke dekh.",
  "lesson": "File kholne ka sahi tarika with hai, kyunki wo file apne aap band kar deta hai. 'w' se nayi file likhte hai (purana mit jata hai), 'a' se aakhir me jodte hai, bina mode ke padhte hai.",
  "example": "with open('data.txt', 'w') as f:\n    f.write('pehli line\\n')\n\nwith open('data.txt', 'a') as f:\n    f.write('dusri line\\n')     # jud gayi\n\nwith open('data.txt') as f:\n    for line in f:               # ek-ek line\n        print(line.strip())"
 },
 {
  "t": "Regular expressions",
  "ch": "regex",
  "kind": "code",
  "brief": "text me se `numbers` (saare numbers, list of string), `pehla_word` (pehla shabd), aur `saaf` (saare digit hata ke) nikalo re se.",
  "start": "import re\ntext = 'Order 42 aur 7 items'\nnumbers = ?\npehla_word = ?\nsaaf = ?\n",
  "tests": [
   [
    "numbers",
    "['42', '7']"
   ],
   [
    "pehla_word",
    "'Order'"
   ],
   [
    "saaf",
    "'Order  aur  items'"
   ]
  ],
  "sol": "import re\ntext = 'Order 42 aur 7 items'\nnumbers = re.findall(r'\\d+', text)\npehla_word = re.findall(r'[A-Za-z]+', text)[0]\nsaaf = re.sub(r'\\d+', '', text)",
  "hint": "\\d matlab ek digit, + matlab ek ya zyada. findall sab match ki list deta hai, sub match ko badal deta hai. Pattern ke aage r lagana mat bhool: r'\\d+'.",
  "bonus": "Bonus: re.search(r'\\d+', text).group() chala ke dekh, sirf pehla match milega.",
  "lesson": "Regular expression text me pattern dhoondhne ki bhasha hai. \\d digit, \\w letter ya digit, + ek ya zyada, * zero ya zyada. findall sab nikalta hai, sub badal deta hai.",
  "example": "import re\ns = 'call 98765 or 12345'\nprint(re.findall(r'\\d+', s))        # ['98765', '12345']\nprint(re.sub(r'\\d', '*', s))        # call ***** or *****\nprint(bool(re.match(r'call', s)))    # True - shuru me hai"
 },
 {
  "t": "Classes",
  "ch": "oop",
  "kind": "code",
  "brief": "Class `Dog` with __init__(name) and speak() -> '<name> says woof'.",
  "start": "class Dog:\n    ...\n",
  "tests": [
   [
    "Dog('Rex').speak()",
    "'Rex says woof'"
   ],
   [
    "Dog('Ada').name",
    "'Ada'"
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
  "ch": "oop",
  "kind": "code",
  "brief": "Class `Money(amount)` where repr is 'Money(5)' and Money(2)+Money(3)==Money(5).",
  "start": "class Money:\n    ...\n",
  "tests": [
   [
    "repr(Money(5))",
    "'Money(5)'"
   ],
   [
    "Money(2) + Money(3) == Money(5)",
    "True"
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
  "ch": "oop",
  "kind": "code",
  "brief": "`Cat` subclasses Animal, overrides speak() -> 'meow'. Keep Animal.name.",
  "start": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return '...'\n\nclass Cat(Animal):\n    ...\n",
  "tests": [
   [
    "Cat('Tom').speak()",
    "'meow'"
   ],
   [
    "Cat('Tom').name",
    "'Tom'"
   ],
   [
    "isinstance(Cat('Tom'), Animal)",
    "True"
   ]
  ],
  "sol": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return '...'\n\nclass Cat(Animal):\n    def speak(self):\n        return 'meow'",
  "hint": "Cat ke andar sirf speak() dubara likhna hai - __init__ Animal se apne aap mil jata hai, dubara likhne ki zarurat nahi.",
  "bonus": "Bonus: Dog class bhi bana jo 'woof' bole.",
  "lesson": "Ek class doosri se sab kuch viraasat me le sakti hai. Jo method waisa hi chahiye use dubara likhna hi nahi - sirf jo badalna hai wahi likho.",
  "example": "class Vehicle:\n    def __init__(self, naam):\n        self.naam = naam\n    def sound(self):\n        return 'brrr'\n\nclass Bike(Vehicle):          # __init__ apne aap mil gaya\n    def sound(self):\n        return 'vroom'\nprint(Bike('Splendor').naam, Bike('Splendor').sound())   # Splendor vroom"
 },
 {
  "t": "super() and overriding",
  "ch": "oop",
  "kind": "code",
  "brief": "`Animal` me naam save karo aur bolo() 'kuch nahi' de. `Dog` usse inherit kare, super() se naam save kare, apna breed rakhe aur bolo() 'bhau' de.",
  "start": "class Animal:\n    def __init__(self, naam):\n        self.naam = naam\n    def bolo(self):\n        return 'kuch nahi'\n\nclass Dog(Animal):\n    ...\n",
  "tests": [
   [
    "Dog('Moti', 'desi').naam",
    "'Moti'"
   ],
   [
    "Dog('Moti', 'desi').breed",
    "'desi'"
   ],
   [
    "Dog('Moti', 'desi').bolo()",
    "'bhau'"
   ],
   [
    "Animal('X').bolo()",
    "'kuch nahi'"
   ],
   [
    "isinstance(Dog('M', 'd'), Animal)",
    "True"
   ]
  ],
  "sol": "class Animal:\n    def __init__(self, naam):\n        self.naam = naam\n    def bolo(self):\n        return 'kuch nahi'\n\nclass Dog(Animal):\n    def __init__(self, naam, breed):\n        super().__init__(naam)\n        self.breed = breed\n    def bolo(self):\n        return 'bhau'",
  "hint": "super().__init__(naam) parent ka kaam karwa deta hai, fir apna extra kaam karo. Same naam ka method dubara likhne ko overriding kehte hai.",
  "bonus": "Bonus: Dog ke bolo() me super().bolo() bula ke dono jawab jod ke dekh.",
  "lesson": "Child class parent ka sab kuch le leti hai. super() se parent ka wahi method bula sakte ho, taki likha hua dubara na likhna pade. Same naam ka method dubara likhna overriding kehlata hai.",
  "example": "class Base:\n    def __init__(self, x):\n        self.x = x\n    def show(self):\n        return f'x={self.x}'\n\nclass Child(Base):\n    def __init__(self, x, y):\n        super().__init__(x)     # parent ka kaam\n        self.y = y\n    def show(self):\n        return super().show() + f' y={self.y}'\n\nprint(Child(1, 2).show())       # x=1 y=2"
 },
 {
  "t": "Encapsulation & property",
  "ch": "oop",
  "kind": "code",
  "brief": "`Account` class banao jisme `_balance` chhupi ho, `balance` property se padh sako, `jama(x)` positive amount jode aur negative pe ValueError de.",
  "start": "class Account:\n    def __init__(self, start=0):\n        ...\n",
  "tests": [
   [
    "Account(100).balance",
    "100"
   ],
   [
    "(lambda a: (a.jama(50), a.balance)[1])(Account(10))",
    "60"
   ],
   [
    "raises(lambda: Account(0).jama(-5), ValueError)",
    "True"
   ]
  ],
  "sol": "class Account:\n    def __init__(self, start=0):\n        self._balance = start\n    @property\n    def balance(self):\n        return self._balance\n    def jama(self, x):\n        if x <= 0:\n            raise ValueError('amount positive hona chahiye')\n        self._balance += x",
  "hint": "Naam ke aage underscore matlab 'ye andar ka hai, bahar se mat chhuo'. @property lagane se method bina bracket ke value ki tarah padha jata hai. Galat input pe raise ValueError(...).",
  "bonus": "Bonus: nikaalo(x) bhi bana jo balance se zyada nikalne pe ValueError de.",
  "lesson": "Encapsulation matlab class ka andar ka data seedha bahar se na chhua jaye. Underscore wala naam ishara hai ki ye private hai, aur @property se use padhne ka safe darwaza milta hai, likhne ka nahi.",
  "example": "class Temp:\n    def __init__(self, c):\n        self._c = c\n    @property\n    def f(self):\n        return self._c * 9 / 5 + 32\n\nt = Temp(100)\nprint(t.f)          # 212.0  - bracket nahi lagaya"
 },
 {
  "t": "Generators",
  "ch": "advanced",
  "kind": "code",
  "brief": "Write `countdown(n)` yielding n, n-1, ... 1.",
  "start": "def countdown(n):\n    ...\n",
  "tests": [
   [
    "list(countdown(3))",
    "[3, 2, 1]"
   ],
   [
    "list(countdown(0))",
    "[]"
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
  "ch": "advanced",
  "kind": "code",
  "brief": "Write `twice` - a decorator that calls the function and returns its result doubled.",
  "start": "def twice(fn):\n    ...\n\n@twice\ndef n():\n    return 5\n",
  "tests": [
   [
    "n()",
    "10"
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
  "ch": "advanced",
  "kind": "code",
  "brief": "Write `counter()` returning a function that returns 1, 2, 3... on each call.",
  "start": "def counter():\n    ...\n",
  "tests": [
   [
    "[(lambda c: [c(), c(), c()])(counter())]",
    "[[1, 2, 3]]"
   ],
   [
    "counter()()",
    "1"
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
  "ch": "advanced",
  "kind": "code",
  "brief": "Write class `Tag(name)` usable with `with`, appending to `log`: 'open'/'close'.",
  "start": "log = []\n\nclass Tag:\n    ...\n",
  "tests": [
   [
    "(log.clear(), Tag('b').__enter__(), Tag('b').__exit__(None, None, None), log)[3]",
    "['open', 'close']"
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
  "ch": "advanced",
  "kind": "code",
  "brief": "Write `top(words, k)` -> k most common words, most common first (use Counter).",
  "start": "from collections import Counter\n\ndef top(words, k):\n    ...\n",
  "tests": [
   [
    "top(['a','b','a','c','a','b'], 2)",
    "['a', 'b']"
   ],
   [
    "top(['x'], 5)",
    "['x']"
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
  "ch": "advanced",
  "kind": "code",
  "brief": "`Point` dataclass with x: int, y: int and method `dist2()` -> x*x + y*y.",
  "start": "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    ...\n",
  "tests": [
   [
    "Point(3, 4).dist2()",
    "25"
   ],
   [
    "Point(1, 2) == Point(1, 2)",
    "True"
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
  "ch": "dsa",
  "kind": "code",
  "brief": "Write `flatten(x)` turning nested lists into one flat list.",
  "start": "def flatten(x):\n    ...\n",
  "tests": [
   [
    "flatten([1, [2, [3, 4]], 5])",
    "[1, 2, 3, 4, 5]"
   ],
   [
    "flatten([])",
    "[]"
   ]
  ],
  "sol": "def flatten(x):\n    out = []\n    for item in x:\n        if isinstance(item, list):\n            out.extend(flatten(item))\n        else:\n            out.append(item)\n    return out",
  "hint": "Har item pe dekh - agar wo list hai toh flatten(item) dubara bula ke extend kar, warna seedha append kar de.",
  "bonus": "Bonus: tuples ko bhi handle kar le.",
  "lesson": "Function khud ko bula sakta hai. Do cheez zaroori hai: ek rukne ki shart (base case), aur har baar problem chhoti honi chahiye - warna hamesha chalta rahega.",
  "example": "def fact(n):\n    if n <= 1:            # base case - yahi rokta hai\n        return 1\n    return n * fact(n - 1)\nprint(fact(5))            # 120"
 },
 {
  "t": "Stack & Queue",
  "ch": "dsa",
  "kind": "code",
  "brief": "List ko stack ki tarah use karo: 1,2,3 push karke `top` pop karo. deque ko queue ki tarah: 1,2,3 daal ke `pehla` nikalo (popleft).",
  "start": "from collections import deque\n\nstack = []\n# 1, 2, 3 push karo, fir top nikalo\ntop = ?\n\nq = deque()\n# 1, 2, 3 daalo, fir pehla nikalo\npehla = ?\n",
  "tests": [
   [
    "top",
    "3"
   ],
   [
    "stack",
    "[1, 2]"
   ],
   [
    "pehla",
    "1"
   ],
   [
    "list(q)",
    "[2, 3]"
   ]
  ],
  "sol": "from collections import deque\n\nstack = []\nstack.append(1)\nstack.append(2)\nstack.append(3)\ntop = stack.pop()\n\nq = deque()\nq.append(1)\nq.append(2)\nq.append(3)\npehla = q.popleft()",
  "hint": "Stack me aakhri wala pehle nikalta hai: .pop(). Queue me pehla wala pehle nikalta hai: deque ka .popleft(). List ka .pop(0) bhi chalta hai par slow hota hai.",
  "bonus": "Bonus: stack se brackets '((()))' balanced hai ya nahi check kar.",
  "lesson": "Stack matlab thali ka dher: jo upar rakha wahi pehle uthta hai (LIFO). Queue matlab line: jo pehle aaya wahi pehle jayega (FIFO). Python me stack ke liye list kaafi hai, queue ke liye deque tez hai.",
  "example": "from collections import deque\ns = [1, 2]\ns.append(3)\nprint(s.pop(), s)         # 3 [1, 2]   - aakhri gaya\n\nq = deque([1, 2, 3])\nprint(q.popleft(), list(q))   # 1 [2, 3]  - pehla gaya"
 },
 {
  "t": "Searching: linear & binary",
  "ch": "dsa",
  "kind": "code",
  "brief": "`linear(nums, target)` banao jo index de ya -1. `binary(nums, target)` banao jo sorted list me aadha-aadha kaat ke dhoondhe.",
  "start": "def linear(nums, target):\n    ...\n\ndef binary(nums, target):\n    ...\n",
  "tests": [
   [
    "linear([4, 8, 15], 8)",
    "1"
   ],
   [
    "linear([4, 8, 15], 99)",
    "-1"
   ],
   [
    "binary([1, 3, 5, 7, 9, 11], 9)",
    "4"
   ],
   [
    "binary([1, 3, 5, 7, 9, 11], 4)",
    "-1"
   ],
   [
    "binary([], 1)",
    "-1"
   ]
  ],
  "sol": "def linear(nums, target):\n    for i, n in enumerate(nums):\n        if n == target:\n            return i\n    return -1\n\ndef binary(nums, target):\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1",
  "hint": "Linear me bas ek-ek karke dekho, enumerate index bhi deta hai. Binary me lo aur hi rakho, beech ka mid nikalo, aur jis taraf target ho sakta hai udhar ka aadha hissa hi bachao.",
  "bonus": "Bonus: 1000000 items pe dono ko time kar ke dekh, farq saaf dikhega.",
  "lesson": "Linear search ek-ek karke dekhta hai, isliye 1000 items me 1000 kadam lag sakte hai. Binary search sirf sorted list pe chalta hai aur har kadam me aadha hissa phenk deta hai, isliye 1000 items sirf 10 kadam me nipat jate hai.",
  "example": "nums = [2, 4, 6, 8, 10]\nlo, hi = 0, len(nums) - 1\nwhile lo <= hi:\n    mid = (lo + hi) // 2\n    print('dekha', nums[mid])\n    if nums[mid] == 8:\n        break\n    if nums[mid] < 8:\n        lo = mid + 1\n    else:\n        hi = mid - 1\n# dekha 6, dekha 8  - sirf do kadam"
 },
 {
  "t": "Sorting algorithms",
  "ch": "dsa",
  "kind": "code",
  "brief": "`bubble(nums)` khud likho jo nayi sorted list de (original ko mat badlo), aur `builtin` me sorted() ka jawab rakho.",
  "start": "def bubble(nums):\n    ...\n\ndata = [5, 1, 4, 2]\nbuiltin = ?\n",
  "tests": [
   [
    "bubble([5, 1, 4, 2])",
    "[1, 2, 4, 5]"
   ],
   [
    "bubble([])",
    "[]"
   ],
   [
    "(lambda d: (bubble(d), d)[1])([3, 1])",
    "[3, 1]"
   ],
   [
    "builtin",
    "[1, 2, 4, 5]"
   ]
  ],
  "sol": "def bubble(nums):\n    arr = list(nums)\n    for i in range(len(arr)):\n        for j in range(len(arr) - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\ndata = [5, 1, 4, 2]\nbuiltin = sorted(data)",
  "hint": "Pehle list(nums) se copy bana warna original badal jayega. Fir paas-paas wale do compare karo aur ulta ho toh swap: arr[j], arr[j+1] = arr[j+1], arr[j].",
  "bonus": "Bonus: har round me kitne swap hue count kar ke print kar.",
  "lesson": "Bubble sort paas-paas wale do numbers ko compare karke swap karta hai, aur har round me sabse bada number aakhir me pahunch jata hai. Seekhne ke liye badhiya, asli kaam ke liye sorted() use karo, wo bahut tez hai.",
  "example": "arr = [3, 1, 2]\nfor i in range(len(arr)):\n    for j in range(len(arr) - i - 1):\n        if arr[j] > arr[j + 1]:\n            arr[j], arr[j + 1] = arr[j + 1], arr[j]\nprint(arr)              # [1, 2, 3]\nprint(sorted([3, 1, 2]))    # [1, 2, 3] - ek line me"
 },
 {
  "t": "HashMap problems",
  "ch": "dsa",
  "kind": "code",
  "brief": "`two_sum(nums, target)` banao jo un do numbers ke index de jinka jod target ho (dict se, ek hi chakkar me). Na mile toh None.",
  "start": "def two_sum(nums, target):\n    ...\n",
  "tests": [
   [
    "two_sum([2, 7, 11, 15], 9)",
    "[0, 1]"
   ],
   [
    "two_sum([3, 2, 4], 6)",
    "[1, 2]"
   ],
   [
    "two_sum([1, 2], 50)",
    "None"
   ]
  ],
  "sol": "def two_sum(nums, target):\n    dekha = {}\n    for i, n in enumerate(nums):\n        chahiye = target - n\n        if chahiye in dekha:\n            return [dekha[chahiye], i]\n        dekha[n] = i\n    return None",
  "hint": "Har number pe socho: iske saath kaunsa number chahiye? chahiye = target - n. Agar wo pehle dekha hua dict me hai toh jawab mil gaya. Warna is number ko dict me daal do.",
  "bonus": "Bonus: list me kaunsa item sabse zyada baar aaya, wo dict se nikal.",
  "lesson": "Dict me dhoondhna list me dhoondhne se bahut tez hai. Isliye 'pehle dekhe hue' items ko dict me rakh lo, fir dobara ghoomne ki zarurat hi nahi padti. Ye interview ka sabse aam trick hai.",
  "example": "nums = [2, 7, 11]\ndekha = {}\nfor i, n in enumerate(nums):\n    chahiye = 9 - n\n    if chahiye in dekha:\n        print([dekha[chahiye], i])   # [0, 1]\n        break\n    dekha[n] = i"
 },
 {
  "t": "Linked list",
  "ch": "dsa",
  "kind": "code",
  "brief": "`Node` class banao (value + next), teen node jodo, aur `to_list(head)` likho jo saari values list me de.",
  "start": "class Node:\n    def __init__(self, value):\n        ...\n\ndef to_list(head):\n    ...\n",
  "tests": [
   [
    "to_list(None)",
    "[]"
   ],
   [
    "(lambda a, b: (setattr(a, 'next', b), to_list(a))[1])(Node(1), Node(2))",
    "[1, 2]"
   ]
  ],
  "sol": "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\ndef to_list(head):\n    out = []\n    node = head\n    while node is not None:\n        out.append(node.value)\n        node = node.next\n    return out",
  "hint": "Har node apni value rakhta hai aur agle node ka pata (next), jo shuru me None hota hai. Ghoomne ke liye while node is not None: value lo, fir node = node.next.",
  "bonus": "Bonus: ek add(head, value) bana jo aakhir me naya node jode.",
  "lesson": "Linked list me items ek dusre ka pata pakde hue hote hai, ek line me nahi rakhe hote. Beech me daalna sasta hota hai, par kisi bhi item tak pahunchne ke liye shuru se chalna padta hai.",
  "example": "class Node:\n    def __init__(self, v):\n        self.value = v\n        self.next = None\n\na = Node('A'); b = Node('B')\na.next = b                  # A ne B ka haath pakda\nn = a\nwhile n:\n    print(n.value)          # A fir B\n    n = n.next"
 },
 {
  "t": "async / await",
  "ch": "concurrency",
  "kind": "code",
  "brief": "Write `async def fetch(x)` returning x*2, and `async def both(a, b)` returning [await fetch(a), await fetch(b)].",
  "start": "async def fetch(x):\n    ...\n\nasync def both(a, b):\n    ...\n",
  "tests": [
   [
    "drive(fetch(3))",
    "6"
   ],
   [
    "drive(both(1, 2))",
    "[2, 4]"
   ]
  ],
  "sol": "async def fetch(x):\n    return x * 2\n\nasync def both(a, b):\n    return [await fetch(a), await fetch(b)]",
  "hint": "async def ke andar return normal hi likhte hai. both() me [await fetch(a), await fetch(b)] ki list bana. await sirf async def ke andar chalta hai.",
  "bonus": "Bonus: teesra fetch add kar ke teen results return kar.",
  "lesson": "async def se coroutine banta hai - wo turant chalta nahi, chalane pe chalta hai. Uske andar await laga ke doosre coroutine ka result le sakte ho. Test me drive(...) usko chalata hai.",
  "example": "async def double(x):\n    return x * 2\n\nasync def total(a, b):\n    return await double(a) + await double(b)\n# drive(total(1, 2))  ->  6"
 },
 {
  "t": "Threading & the GIL",
  "ch": "concurrency",
  "kind": "quiz",
  "brief": "Python me ek normal program me do thread ek hi waqt me Python ka code chala sakte hai kya?",
  "choices": [
   "Haan, dono poora saath me chalte hai",
   "Nahi, GIL ki wajah se ek waqt me ek hi thread Python bytecode chalata hai",
   "Thread Python me hote hi nahi hai"
  ],
  "start": "# a, b ya c likho\nanswer = '?'\n",
  "tests": [
   [
    "answer",
    "'b'"
   ]
  ],
  "sol": "answer = 'b'",
  "hint": "GIL matlab Global Interpreter Lock, ek tala. Isi wajah se CPU ka bhaari kaam thread se tez nahi hota, par file ya internet ka intezaar wala kaam thread se tez ho jata hai.",
  "bonus": "Bonus: soch ke bata, 4 badi file download karni ho toh thread theek hai ya nahi?",
  "lesson": "Thread ek hi program ke andar kai kaam ek saath chalane ka tarika hai. Par Python me GIL naam ka tala hai, jiski wajah se ek waqt me ek hi thread Python code chalata hai. Isliye intezaar wale kaam (file, network) me thread madad karta hai, aur CPU ke bhaari hisaab me multiprocessing chahiye hoti hai.",
  "example": "import threading\n\ndef kaam(naam):\n    print('chal raha', naam)\n\nt = threading.Thread(target=kaam, args=('A',))\nt.start()\nt.join()      # khatam hone ka intezaar\n# CPU ka bhaari kaam? multiprocessing use karo, thread nahi"
 },
 {
  "t": "Multiprocessing vs asyncio",
  "ch": "concurrency",
  "kind": "quiz",
  "brief": "100 website se data laane ka kaam (zyadatar intezaar) sabse achha kis se hoga?",
  "choices": [
   "multiprocessing, kyunki wo 100 process banata hai",
   "asyncio, kyunki intezaar ke waqt dusra kaam chal jata hai",
   "Normal for loop, farq nahi padta"
  ],
  "start": "# a, b ya c likho\nanswer = '?'\n",
  "tests": [
   [
    "answer",
    "'b'"
   ]
  ],
  "sol": "answer = 'b'",
  "hint": "Jab kaam me zyadatar intezaar ho (network, file), tab asyncio best hai. Jab CPU ghis raha ho (bada hisaab, image processing), tab multiprocessing.",
  "bonus": "Bonus: ek line me likh ke rakh: intezaar = asyncio, hisaab = multiprocessing.",
  "lesson": "Teen tarike hai. Thread: ek hi process me, intezaar wale kaam ke liye theek. Multiprocessing: alag-alag process, har ek ka apna Python, CPU ke bhaari kaam ke liye. Asyncio: ek hi thread, par intezaar ke waqt dusra kaam pakad leta hai, network ke liye sabse halka aur tez.",
  "example": "import asyncio\n\nasync def laao(naam):\n    await asyncio.sleep(1)      # intezaar - yahi jagah dusro ko milti hai\n    return naam\n\nasync def main():\n    return await asyncio.gather(laao('a'), laao('b'))\n# dono ek saath, kul 1 second - 2 nahi"
 },
 {
  "t": "Testing with assert",
  "ch": "testing",
  "kind": "code",
  "brief": "`ulta(s)` banao jo string ulti kare, fir `test_ulta()` likho jo assert se use jaanche aur 'sab paas' return kare. `natija` me use chala ke rakho.",
  "start": "def ulta(s):\n    ...\n\ndef test_ulta():\n    ...\n\nnatija = test_ulta()\n",
  "tests": [
   [
    "ulta('abc')",
    "'cba'"
   ],
   [
    "natija",
    "'sab paas'"
   ]
  ],
  "sol": "def ulta(s):\n    return s[::-1]\n\ndef test_ulta():\n    assert ulta('abc') == 'cba'\n    assert ulta('') == ''\n    assert ulta('a') == 'a'\n    return 'sab paas'\n\nnatija = test_ulta()",
  "hint": "assert shart likho: assert ulta('abc') == 'cba'. Shart sach hui toh kuch nahi hota, jhooti hui toh AssertionError. Khali string aur ek letter wale case bhi jaanch.",
  "bonus": "Bonus: ulta() ko jaan bujh ke galat kar ke dekh, test turant pakad lega.",
  "lesson": "Test wo code hai jo tumhare code ko jaanchta hai. assert sabse simple tarika hai: shart sach toh chup, jhooti toh error. Bade project me pytest ya unittest use hota hai, par idea yahi rehta hai - khud likho, machine jaanche.",
  "example": "def jodo(a, b):\n    return a + b\n\nassert jodo(2, 2) == 4        # theek, kuch nahi hoga\nassert jodo(0, 0) == 0        # kinare wale case bhi jaanch\nprint('test paas')\n# assert jodo(2, 2) == 5  ->  AssertionError"
 },
 {
  "t": "pip, venv & requirements",
  "ch": "tools",
  "kind": "quiz",
  "brief": "Nayi project ke liye alag jagah banana jaha uske apne packages rahe, wo kis se hota hai?",
  "choices": [
   "pip install se",
   "python -m venv .venv se",
   "import se"
  ],
  "start": "# a, b ya c likho\nanswer = '?'\n",
  "tests": [
   [
    "answer",
    "'b'"
   ]
  ],
  "sol": "answer = 'b'",
  "hint": "venv ek alag dabba banata hai jisme sirf usi project ke packages rehte hai. pip us dabbe ke andar package daalta hai. Dono alag kaam hai.",
  "bonus": "Bonus: apne computer pe python -m venv .venv chala ke dekh, ek nayi folder banegi.",
  "lesson": "pip Python ka package installer hai: pip install requests. venv har project ke liye alag dabba banata hai, taki ek project ka package dusre ko na todhe. requirements.txt me list rehti hai taki dusra banda wahi setup bana sake.",
  "example": "# terminal me chalte hai, Python file me nahi:\n#   python -m venv .venv          alag dabba bana\n#   .venv\\Scripts\\activate       Windows pe chalu kar\n#   pip install requests          package daal\n#   pip freeze > requirements.txt list bana\n#   pip install -r requirements.txt   dusre computer pe wahi setup"
 },
 {
  "t": "Static typing & mypy",
  "ch": "tools",
  "kind": "quiz",
  "brief": "Agar def jodo(a: int, b: int) likha ho aur koi jodo('x', 'y') bulaye toh Python khud kya karega?",
  "choices": [
   "Turant error dega, kyunki type galat hai",
   "Chala dega, kyunki annotation sirf note hai. mypy jaisa tool hi pakadta hai",
   "Argument ko apne aap int bana dega"
  ],
  "start": "# a, b ya c likho\nanswer = '?'\n",
  "tests": [
   [
    "answer",
    "'b'"
   ]
  ],
  "sol": "answer = 'b'",
  "hint": "Python annotation ko chalate waqt check nahi karta. Wo sirf ishara hai, jise editor aur mypy jaise checker padh ke galti batate hai.",
  "bonus": "Bonus: apne computer pe pip install mypy karke mypy file.py chala ke dekh.",
  "lesson": "Annotation likhne se Python rukta nahi. 'x' + 'y' chal jayega aur 'xy' de dega. mypy alag se chalne wala checker hai jo poora code padh ke batata hai ki type kahan galat lag raha hai, bina program chalaye.",
  "example": "def jodo(a: int, b: int) -> int:\n    return a + b\n\nprint(jodo('x', 'y'))      # xy  - Python ne rok nahi lagayi\n# terminal me: mypy file.py\n# error: Argument 1 to \"jodo\" has incompatible type \"str\"; expected \"int\""
 }
];
window.CHAPTERS = [{"id": "basics", "name": "Basics", "desc": "Print se lekar dict tak. Koi function nahi, ek-ek cheez aaram se."}, {"id": "functions", "name": "Functions", "desc": "Apna kaam ek naam me baandhna: def, args, lambda, scope."}, {"id": "errors", "name": "Errors", "desc": "Program ko girne se bachana."}, {"id": "modules", "name": "Modules", "desc": "Dusro ka likha code import karke use karna."}, {"id": "files", "name": "Files", "desc": "Disk pe likhna aur padhna."}, {"id": "regex", "name": "Regex", "desc": "Text me pattern dhoondhna."}, {"id": "oop", "name": "OOP", "desc": "Apni cheezein banana: class, object, inheritance."}, {"id": "advanced", "name": "Advanced", "desc": "Generators, decorators, closures, dataclass."}, {"id": "dsa", "name": "DSA", "desc": "Stack, queue, search, sort, linked list, recursion."}, {"id": "concurrency", "name": "Concurrency", "desc": "Ek saath kai kaam: async, thread, process."}, {"id": "testing", "name": "Testing", "desc": "Apne code ko khud jaanchna."}, {"id": "tools", "name": "Tools", "desc": "pip, venv, type checker."}];
window.TRACKS = [{"id": "beginner", "name": "Beginner - kabhi Python nahi chhua", "start": 0, "desc": "Bilkul zero se: print, variables, + - * /, True/False, if-else, list, tuple, set, loop, dict. Koi function-wunction nahi, ek-ek cheez aaram se."}, {"id": "medium", "name": "Medium - basics aate hai", "start": 19, "desc": "print, if-else, loop pata hai. Yahan se: functions, lambda, scope, errors, modules, files, regex, classes."}, {"id": "advanced", "name": "Advanced - classes bhi aati hai", "start": 37, "desc": "Generators, decorators, closures, context managers, DSA, concurrency, testing, typing."}];
window.SCOLD = ["Arre bhai, ye toh galat ho gaya. Ek baar dhyan se dekh:", "Nahi bhai, abhi bhi kuch gadbad hai. Chal hint le:", "Bhai tu kar sakta hai - isko aise nahi, waise karte hai:", "Ruk ja bhai, jaldi mat kar. Error khud sab bata raha hai:", "Koi baat nahi bhai, galti se hi seekhte hai. Fir se try kar:"];
window.CHEER = ["Wah bhai wah! Ekdum sahi.", "Shabaash! Level nikal gaya.", "Kya baat hai bhai, mast solve kiya.", "Bilkul sahi bhai - agla level chalu.", "Zabardast! Python tere haath me aa raha hai."];
window.REVEAL = 10;
window.CHECK_SRC = "def check(level, src):\n    \"\"\"Run src, then every test. Returns None on pass, else a failure message.\"\"\"\n    ns = {}\n    out = io.StringIO()\n    try:\n        with contextlib.redirect_stdout(out):\n            exec(compile(src, \"work.py\", \"exec\"), ns)\n    except Exception:\n        # limit=-1: deepest frame, i.e. the user's line, not this checker's exec call\n        return \"your code crashed:\\n\" + traceback.format_exc(limit=-1).strip()\n    ns[\"__out__\"] = out.getvalue()\n\n    def drive(coro):\n        \"\"\"Run a coroutine that never really blocks. asyncio.run() is unusable in\n        the browser (Pyodide already owns the event loop), so step it by hand.\"\"\"\n        try:\n            coro.send(None)\n        except StopIteration as stop:\n            return stop.value\n        raise RuntimeError(\"coroutine awaited something that blocks\")\n\n    ns[\"drive\"] = drive\n\n    def raises(fn, exc):\n        \"\"\"True if calling fn() raises exc. Lets a test check error handling.\"\"\"\n        try:\n            fn()\n        except exc:\n            return True\n        except Exception:\n            return False\n        return False\n\n    ns[\"raises\"] = raises\n    for expr, want in level[\"tests\"]:\n        try:\n            got = eval(expr, ns)\n        except Exception as e:\n            return f\"{expr}  ->  raised {type(e).__name__}: {e}\"\n        if got != want:\n            return f\"{expr}  ->  got {got!r}, expected {want!r}\"\n    return None\n";
