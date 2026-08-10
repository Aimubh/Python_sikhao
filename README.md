# Python Sikhlo — Python Quest

Ek game jisse zero se Python seekh sakte ho. Har level pehle **sikhata** hai (Hinglish
explanation + example), fir usse **alag sawaal** ka test leta hai. Galat hua toh dost ki
tarah Hinglish me hint milta hai, 10 baar galat hua toh answer khud bata deta hai, aur
sahi hua toh points milte hai.

## Chalao

```bash
python learn.py --serve      # browser version  ->  http://localhost:8777/index.html
python learn.py              # terminal version (work.py edit karo, Enter dabao)
python learn.py --test       # self-check: sab levels + accounts
```

Sirf Python chahiye — koi pip install nahi. Browser version pehli baar Pyodide CDN se
Python download karta hai (internet chahiye), uske baad tera code browser me hi chalta hai.

## Levels (28)

| Track | Shuru | Kya seekhoge |
|---|---|---|
| Beginner | 1 | print, variables, `+ - * /`, strings, f-strings, True/False, if-else, list, slicing, for, while, dict |
| Medium | 13 | functions (`def`), default args, sorting, exceptions, comprehensions, classes, dunder, inheritance |
| Advanced | 21 | generators, decorators, closures, context managers, collections, dataclass, recursion, async |

Beginner track me koi function nahi hai — `def` tabhi aata hai jab level 13 use sikhata hai.

## Account

Login/signup server pe hota hai, progress `users.json` me disk pe save hota hai — browser
clear karo ya doosra browser kholo, progress wapas mil jayega. Passwords PBKDF2 se hash
hote hai. `users.json` git me nahi jata.

Server sirf `127.0.0.1` pe sunta hai (tera apna computer). Internet pe daalne se pehle
HTTPS aur login rate-limit zaroori hai.

## AI hints (optional)

Header me **AI hints** pe click kar ke apni Claude API key daal do — fir galat code pe
Claude tera code padh ke hint likhega. Key sirf tere browser ke localStorage me rehti hai.
Bina key ke bhi har level ka apna likha hua hint milta hai.

## Files

- `learn.py` — levels, lessons, hints, checker, accounts server. Sab kuch yahi hai.
- `index.html` — browser wala game.
- `levels.js` — `python learn.py --web` se banta hai (levels + checker ka copy).
  Level badlo toh ye command dubara chalao.
