# Javascript noteð

> é¦åå¾æè¬å¤§å®¶è§çæç­è¨,å¦ææä»éº¼éè¦ä¿®æ­£çè« issue

> ææ¯ `e-mail` : `ococo09000@gmail.com`

> åæ­¥æ¼"https://hackmd.io/K07_sinJS52I0t4M3gVqQQ"

---

## Table of Contents

- [Declaration](#Declaration)
- [Variables](#Variables)
- [Data Type](#Data-Type)
- [Operators](#Operators)
- [ES6](#ES6)
- [String methods](#String-methods)
- [Array methods](#Array-methods)
- [Object methods](#Object-methods)
- [Scope Chain](#Scope-Chain)
- [Closure](#Closure)
- [Callback](#Callback)
- [Prototype](#Prototype)
- [BOM & DOM](#bom--dom)
- [Web APIs](#web-apis)
- [Regular-Expression](#Regular-Expression)

## Declaration

è®æ¸(variable),æåå¯ä»¥ç¨±çºå²å­è³æççå­

èè®æ¸éè¦è¢«å®£å(declare)ä¸¦ä¸åç¥ç·¨è­¯å¨

- å®£åæ¹æ³
  - var
  - let
  - const

å®£å temp è®æ¸

```javascript
var temp;
```

è³¦äºå¶æ¸å¼

```javascript
var temp = 'hello world!!!';
```

> JavaScript ä¸­æåä¸éè¦å®ç¾©è®æ¸çè³æåæ(ex: string...)

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## Variables

- var
- let
- const

### var

> var çº JavaScript(ES6)ä¹åå¯ä¸çå®£åæ¹æ³

- å¯éè¤å®£å
- å¯åå®£åä¸çµ¦äºåå§å¼
- å¨åè®æ¸

```javascript
var temp;

var temp = 10;

var temp = 100;
console.log(temp); //100
```

### let

let çº JavaScript(ES6)çæ¬æ°å¢çè®æ¸å®£åæ¹æ³

èéå° var ææ±¡æå°å¨åè®æ¸åé æéç¼èéè¤å®ç¾©è®æ¸ä¹æå½¢

ç¾å¨åºæ¬ä¸ä½¿ç¨ let çºå´è¬¹å®£åæ¹æ³

- åå¡è®æ¸(block scope)
- ä¸å¯éè¤å®£å
- å¯å®£åä¸çµ¦äºåå§å¼

var é æéç¼åé¡

```javascript
var text = 'Hello world';
var text = 'What';
```

```javascript
let text;
let text;
//SyntaxError: Identifier 'text' has already been declared
```

### const

- ä¸å¯éè¤å®£å
- ä¸å¯ä¿®æ¹æ¸å¼(read only)
- ä¸å¯å®£åèä¸çµ¦äºæ¸å¼

æªçµ¦äºåå§å¼

```javascript
const text;
//SyntaxError: Missing initializer in const declaration
```

éè¤å®£åå¶è®æ¸

```javascript
const text = '1';
const text = '1';
//SyntaxError: Identifier 'text' has already been declared
```

æ´æ¹å¶æ¸å¼

```javascript
const text = '1';
text = '2';
//TypeError: Assignment to constant variable.
```

ä»¥ä¸ sum æ¹æ³æåä¸æåæ´æ¹å¶å®£åå§å®¹

éæåç¢ºä¿ sum æ¯å¯ç¨(read only)å¯ä¿æéç¼æµç¨çåè³ª

```javascript
const sum = (a, b) => {
  return a + b;
};
```

æ´æ¹é£åå§å®¹ çº[5,7,3]

```javascript
const array = [2, 5, 7];
array = [5, 7, 3]; //error
```

å¯ä»¥ç¼ç¾ array è¢« const å®ç¾©å¯ç¨

æåå¯ä»¥ä½¿ç¨æ´æ¹ index å¼

```javascript
array[0] = 5;
array[1] = 7;
array[2] = 3;
```

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## Data Type

- Call by value
  - string
  - number
  - undefined
  - null
  - NaN
- Call by reference
  - array
  - object
  - function

### String

```javascript
var text = String('Hello World');

var text = 'Hello World';
```

#### Single quotes

```javascript
var text = 'Hello World';
```

#### Double quotes

```javascript
var text = 'Hello World';
```

#### Escapes

| syntax | output          |
| ------ | --------------- |
| `\'`   | single quote    |
| `\"`   | double quote    |
| `\\`   | backslash       |
| `\n`   | newline         |
| `\r`   | carriage return |
| `\t `  | tab             |
| `\b`   | word boundary   |
| `\f`   | form feed       |

é¯èª¤ç¤ºç¯

```javascript
var text = "Hello world "I am Ian""
```

ä½¿ç¨è·³è«å­å `\" ` + `\"`

```javascript
var text = 'Hello world "I am Ian".';
```

---

### Number

```javascript
var price = Number(100);

var price = 100;
```

---

### Undefined

æªè¢«è³¦å¼ä¹è®æ¸

```javascript
var value;
console.log(value); //undefined
```

---

### Null

    èundefinedå·®å¥å¨æ¼, JavaScripä¸­è®æ¸æªçµ¦åå§å¼æè¢«è³¦å¼undefined

    nullé¡ä¼¼ç´æ¥å®£åå¶çºç©ºå¼,é¡ä¼¼æ«æåä»£å¶å®å¼çæ¿ä»£æ¹æ¡

---

### NaN

    NaN(Not a Number),éå¸¸éæ¸å¼èåéç®æ,å³è¢«è³¦å¼NaN

```javascript
var value = 'ææ¯ä¸­æ';
const result = value / 100;
console.log(result); // NaN
```

---

### Array

```javascript
var temp = Array(1, 2, 3);

var temp = [1, 2, 3];
```

---

### Object

- `property : value`

```javascript
var user = Object({ name: 'Ian', age: 22 });

var user = {
  name: 'Ian',
  age: 22,
};
```

åå¾å±¬æ§

```javascript
var user = {
  name: 'Ian',
  age: 22,
};

const result = user['name'];
console.log(result); //Ian
```

æ°å¢å±¬æ§

```javascript
user.email = 'test@gmail.com';

user['email'] = 'test@gmail.com';
```

---

### Function

- declaration function
- expression function
- anonymous expression function
- arrow function (ES6)
- keyWord `return`

```javascript
//declare
function sum(a, b) {
  return a + b;
}
//expression
const sum = function sum(a, b) {
  return a + b;
};
//anonymous expression
const sum = function (a, b) {
  return a + b;
};

// arrow function
const sum = (a, b) => a + b;

const sun = (a, b) => {
  return a + b;
};
```

---

### Return

```javascript
const sum = (a,b) => {
    console.log(a+b)
}
const value = sum(2,2) //print 4
//value equal function


const sum = (a,b) =>  {
    retunr a+b
}

const value = sum(2,2) //4
//value eauql 4
//and
const result = value * value
console.log(result) //16
```

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## Operators

- [Assignment operator](#assignment-operator)
- [Logic operator](#logic-operator)
- [Arithmetic operators](#arithmetic-operator)

### Assignment operator

| éç®å­                      | æè¿°                           | ä¾å­      | çµæ  |
| --------------------------- | ------------------------------ | --------- | ----- |
| (equal) ==                  | åå³ true or false             | 1 == "1"  | true  |
| (equal) ===                 | æ¯å°æ¯å¦åè³æé¡ååæ¸å¼       | 1 === "1" | false |
| (not equal to) !=           | æ¯å°æ¯å¦ä¸ç­æ¼æ¸å¼             | 1 != "1"  | false |
| (not equal to) !==          | æ¯å°æ¯å¦ä¸ç­æ¼åè³æé¡ååæ¸å¼ | 1 !== "1" | true  |
| (more than) >               | å¤§æ¼                           | 1 > 1     | false |
| (more than equal to) >=     | å¤§æ¼ç­æ¼                       | 1 >= 1    | true  |
| (less than) <               | å°æ¼                           | 1 < 1     | false |
| (less than not equal to) <= | å°æ¼ç­æ¼                       | 1 <= 1    | true  |

---

[â¬ï¸ Back to Opeatators](#operators)

### Logic operator

| éç®å­    | æè¿°                                                          | ä¾å­                  | çµæ      |
| --------- | ------------------------------------------------------------- | --------------------- | --------- |
| (and)&&   | ç¶æ¢ä»¶ 1 æç«ä¾¿æå·è¡æ¢ä»¶ 2, ä½ç¶æ¢ä»¶ 1 å°±ä¸ç¬¦å,å³åå³æ¢ä»¶ 1 | undefined && true     | undefined |
| (or) \|\| | ä»»ææ¢ä»¶æç«ä¾¿å·è¡,ä½è¥é½çºä¸æç«åå·è¡æ¢ä»¶ 2                 | NaN \|\| 10           | 10        |
| (not) !   | åè½è©²æ¸å¼                                                    | x = false, !x == true | true      |

---

[â¬ï¸ Back to Opeatators](#operators)

### Arithmetic operator

| éç®å­        | æè¿°         | ä¾å­                 | çµæ                |
| ------------- | ------------ | -------------------- | ------------------- | --- |
| (mod) %       | åé¤æ¸       | 10 % 2               | 0                   |
| (increase) ++ | åè³¦å¼åéå¢ | x = 10, result = x++ | result = 10, x = 11 |
| ++            | åéå¢åè³¦å¼ | x = 10, result = ++x | result = 11, x = 11 |
| (decrease) -- | åè³¦å¼åéæ¸ | x = 10, result = x-- | result = 10, x = 9  |     |
| --            | åéæ¸åè³¦å¼ | x = 10, result = --x | result = 9, x = 9   |
| (cube) \* \*  | è©²æ¸çç«æ¹   | 3 \* \* 5            | 243                 |

---

[â¬ï¸ Back to Opeatators](#operators)[â¬ï¸ Back to Contents](#table-of-contents)

## ES6

JavaScript ECMAScript 2015(ES6) æ¯éå¸¸éè¦ççæ¬,ç±æ¼ ES6 è§£æ±ºäºä¹åçæ¬ççé»,ä¿ä½¿äº JS æºè«ä¹åçæ¥­é.

- [Class](#class)
- [Modules](#modules)
- [Destructing](#destructing)
- [Parameter](#parameter)
- [Promise](#promise)
- [Fetch](#fetch)
- [Proxy](#proxy)

---

## Class

- ååçèªæ³ç³
- è½çè§£æ±ºç©ä»¶å°åå¯«æ³
- `keywords`
  - class
  - constructor
  - super
  - extends
  - static

```javascript
class User {
  constructor(name, age, sex) {
    this.name = name;
    (this.age = age), (this.sex = sex);
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name} `);
  }
}
```

extends æ¯ç¹¼æ¿é¡å¥,è super æ¯ç¹¼æ¿å»ºæ§å­

```javascript
class User {
  constructor(name, age, sex) {
    this.name = name;
    (this.age = age), (this.sex = sex);
  }
}

class UserCopy extends User {
  constructor(name, age, sex, email) {
    super(name, age, sex);
    this.email = email;
  }
}
```

---

[â¬ï¸ Back to ES6](#es6)

## Modules

å¨ä»¥å JavaScript ä¸¦ä¸éè¦åå²æå¤ªå¤çæªæ¡,åç«¯ç¼å±æ¥çè¬å,å¨é¨æªå¨ä¸èµ·æå°è´ç¶­è­·å°é£.

æ¼æ¯ JavaScript æäºå¤æ¨£åçæªæ¡å¯å¥æ¹å¼

- Common JS(Node.js)
- ES6 module(å®æ¹çµ±ä¸æ¨æº)

## Common JS

- `Keywords`
  - `module`
  - `exports`
  - `require`

```javascript
// commonEx.js
module.exports.data = {
  value: 2,
};
module.exports.fuc = function (params) {
  console.log('Hello commonJS');
};

//commonIm.js
const result = require('./commonEx');
console.log(result);
//{ data: { value: 2 }, fuc: [Function (anonymous)] }
```

---

## ES6 Modules

- `keywords`
  - `import`
  - `export`
  - `default`
  - `fileName.mjs`

æååä¾çå¦æå¨æ²æ package å®è£å¥ä»¶çææ³ä¸,æªåæ²ææ´æ¹æ`.mjs`

```javascript
//esExport.js
const data = {
  value: 2,
};

const sayHi = function () {
  console.log('Hello ES6');
};

export { data, sayHi };

//esImport.js
import { data, sayHi } from './esExport.js';
console.log(data);
//Error: Cannot find module '/Users/zhengyanzhong/Note-JS/modules/esImport.mjs'
```

æ´æ¹æ`.mjs`

```javascript
//esExport.mjs
const data = {
  value: 2,
};

const sayHi = function () {
  console.log('Hello ES6');
};

export { data, sayHi };
//esImport.mjs
import { data, sayHi } from './esExport.mjs';
console.log(data);
//{ value: 2 }
```

å¦ææååªæå¯åºä¸åæ¨¡çµ,å¯ä»¥ä½¿ç¨`default`è¨­çºè©²æªçé è¨­

```javascript
//esExport.mjs
const data = {
  value: 2,
};
export default data;
```

import å³å¯ä¸å å¤§æ¬è

```javascript
//esImport.mjs
import data from './esExport.mjs';
console.log(data);
//{ value: 2 }
```

---

[â¬ï¸ Back to ES6](#es6)

## Destructing

- ä½¿ç¨`[ ]`ä¸­æ¬èè§£æ§é£å
- ä½¿ç¨`{ } `å¤§æ¬èè§£æ§ç©ä»¶
- ä½¿ç¨`...`æ·ºè¤è£½(shallow copy)

é£åè§£æ§

```javascript
const array = ['1', '2', '3'];
const [a, b] = array;
console.log(a, b); // 1, 2
```

é£åä½¿ç¨ shallow copy

```javascript
const array = ['1', '2', '3'];
const [a, ...b] = array;
console.log(a, b); //1, ["2","3"]
```

ç©ä»¶è§£æ§

```javascript
const object = {
  name: 'Ian',
  age: 23,
};
const { name, age } = object;
console.log(name, age); // Ian, 23
```

ç©ä»¶ä½¿ç¨ shallow copy

```javascript
const object = {
  name: 'Ian',
  age: 23,
  email: 'test@gmail.com',
};
const { name, ...age } = object;
console.log(name, age); // Ian, { age: 23, email: 'test@gmail.com' }
```

---

[â¬ï¸ Back to ES6](#es6)

## Parameter

```javascript
function sayHi(...args) {
  console.log(args);
  //[ 'Ian', 22, 'test@gmail.com' ]
  args.forEach((item, index) => console.log(index + 1 + '.', item));
}
sayHi('Ian', 22, 'test@gmail.com');
/*
1. Ian
2. 22
3. test@gmail.com
*/
```

---

[â¬ï¸ Back to ES6](#es6)

## Promise

- è§£æ±ºä½¿ç¨ callback é£æé±è®
- status
  - pedding
  - fulfill
  - reject
- `then`ã`catch` æååå³ç promise
- method
  - Promise.all([Promise array])

```javascript
function getStatus() {
  return new Promise(function (resolve, reject) {
    let num = true;
    if (num) {
      resolve('Success status: 200');
    }
    reject('Error status: 500');
  });
}

const result = getStatus();
console.log(result); // Promise { 'Success status: 200' }
result.then(function (response) {
  console.log(response); //Success status: 200
});
result.catch((error) => console.log(error));
```

æåä½¿ç¨`setTimeout`ä¾æ¼ç·´æåå¾ç«¯è³ææ pedding ççæ

```javascript
function getStatus() {
  return new Promise(function (resolve, reject) {
    let num = false;
    setTimeout(() => {
      num = true;
      if (num) {
        resolve('Success status: 200');
      }
      reject('Error status: 500');
    }, 2000);
  });
}

const result = getStatus();
console.log(result); // Promise { 'Success status: 200' }
result.then(function (response) {
  console.log(response); //Success status: 200
});
result.catch((error) => console.log(error));
```

## ![](gif/timeoutPromise.gif)

[â¬ï¸ Back to ES6](#es6)

## Fetch

```javascript
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
```

å¯¦éä½¿ç¨ mongoose æ¼ç·´ä¸ä¸

```javascript
async function register(event) {
  event.preventDefault();
  await fetch('http://localhost:3001/register', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      userName: user.userName,
      passWord: user.passWord,
      email: user.email,
      country: user.country,
    }),
  });
  alert('successful');
  setUser({
    ...user,
    userName: '',
    passWord: '',
    email: '',
    country: 'Taiwan',
  });
  router('/user/signin');
}
```

---

[â¬ï¸ Back to ES6](#es6)

## Proxy

proxy æ¯ ES6 æ°å¢çä»£çæ¹å¼

```javascript
new Proxy(target, handler);
```

[handler methods](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

```javascript
const object = { name: 'Dennis' };
const copyA = new Proxy(object, {
  get: (obj, prop) => console.log(obj, prop),
});
copyA.name; //{ name: 'Dennis' } name
```

æåä½¿ç¨ proxy ä¾å»ºç«ä¸åä¾å­,éé copyA å»ä»£ç object å·è¡ç¸éåä½

```javascript
const object = { name: 'Dennis' };
const copyA = new Proxy(object, {
  get: (obj, property) => {
    return property in obj ? obj[property] : 'null';
  },
});
console.log(copyA.user, copyA.name); // null Dennis
```

proxy ä»£çæ´æ¹ object æ¸å¼

```javascript
const object = { name: 'Dennis' };
const copyA = new Proxy(object, {
  get: (obj, property) => {
    return property in obj ? obj[property] : 'null';
  },
  set: (object, property, value) => {
    return (object[property] = value);
  },
});
console.log(copyA.user, copyA.name); // null Dennis
copyA.user = 3;
console.log(copyA.user, copyA.name); // 3 Dennis
copyA.name = 'IAN';
console.log(copyA.user, copyA.name); // 3 IAN
```

---

[â¬ï¸ Back to ES6](#es6) [â¬ï¸ Back to Contents Tables](#table-of-contents)

## String methods

- includes
- slice(start, end)
- substring(start, end)
- substr(start, length)
- replace

### includes

```javascript
const string = 'abcde';
console.log(string.toLowerCase().includes('a')); //true
```

### slice

```javascript
var text = 'Hello world';
console.log(text.slice(0, 3)); //Hel
```

### substring

```javascript
var text = 'Hello world';
console.log(text.substring(3, 8)); //lo wo
```

### substr

```javascript
var text = 'Hello world';
console.log(text.substr(3, 4)); //lo wo
```

### replace

```javascript
var text = 'å°ç£æ°åå¸ä¸­åå';
var concat = text.replace('å°ç£', 'ä¸­è¯æ°å');
console.log(concat); // ä¸­è¯æ°åæ°åå¸ä¸­åå
```

### toLowerCase

```javascript
var text = 'Hello World';
console.log(text.toLowerCase()); //hello world
```

### toUpperCase

```javascript
var text = 'Hello World';
console.log(text.toUpperCase()); //HELLO WORLD
```

### split

```javascript
var text = 'Hello%World';
console.log(text.split('%')); //[ 'Hello', 'World' ]
```

### indexOf

```javascript
var text = 'Hello World';
console.log(text.indexOf('o')); //4
```

---

[â¬ï¸ Back to String](#string-methods) [â¬ï¸ Back to Contents](#Table-of-Contents)

## Array methods

- toString
- pop
- push
- shift
- unshift
- filter
- map
- length
- concat
- splice
- slice
- every
- some
- foreach

### toString

```javascript
var temp = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(temp.toString()); //1,2,3,4,5,6,7,8
```

### concat

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
var b = [10, 12];
console.log(a.concat(b));
//[1, 2, 3,  4, 5, 6, 7, 8, 10, 12]
```

### length

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a.length); //8
```

### pop

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
a.pop();
console.log(a);
/*
[
  1, 2, 3, 4,
  5, 6, 7
]
*/
```

### push

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
a.push(9);
console.log(a);
/*
[
  1, 2, 3, 4,
  5, 6, 7, 8 , 9
]
*/
```

### shift

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
a.shift();
console.log(a);
/*
[
  2, 3, 4, 5,
  6, 7, 8
]
*/
```

### unshift

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
a.unshift(9);
console.log(a);
/*
[
  9, 1, 2, 3, 4,
  5, 6, 7, 8
]
*/
```

### map

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(
  a.map(function (item) {
    return item * 2;
  })
);
/*[
   2,  4,  6,  8,
  10, 12, 14, 16
]
*/
```

### filter

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(
  a.filter(function (item) {
    return item > 2;
  })
);
//[ 3, 4, 5, 6, 7, 8 ]
```

### some

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(
  a.some(function (item) {
    return item > 2;
  })
);
//true
```

### every

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(
  a.every(function (item) {
    return item > 2;
  })
);
//false
```

### forEach

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(
  a.forEach(function (item) {
    console.log(item);
  })
);
/*
1
2
3
4
5
6
7
8
*/
```

---

[â¬ï¸ Back to Array methods](#array-methods) [â¬ï¸ Back to Contents](#Table-of-Contents)

## Object methods

- hasOwnProperty
- freeze

### freeze

freeze å¯ä»¥éæ const çå¯ç¨ææ,é¿åç©ä»¶è¢«æ´æ¹å±¬æ§å¼

```javascript
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj(); //3.14
```

### hasOwnProperty

```javascript
const user = {
  name: 'Ian',
  age: 22,
};
const checkResult = user.hasOwnProperty('name');
console.log(checkResult); //true
```

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## Scope Chain

Scope å¶å¯¦å°±æ¯å®ç¾©ä¸ååå¡,åªè½å§å±¤å­å,ä¹å¯ä»¥ç¨±çºæå°æ´é²åå

- åªå¢
  - æ¸å°å½åè¡çª
  - éå°æ´é²æå°åå
  - é¿åæ±¡æå¨åè®æ¸
- åå¡ç¯å
  - `function scope`
  - `block scope`
  - `global`
- scope chain
  - å¼å«ä¹è®æ¸ãå½å¼å¨åªåä½ç¨å

`å½å¼ç®¡ç`

```javascript
function scope() {
  let str = 'Hello world!';
  console.log(str);
}

scope(); // Hello World
console.log(str); // undefined
```

`æ¨¡çµåç®¡ç`

```javascript
let sayModule = {
  sayHello: function (str) {
    console.log(str);
  },
  sayGoodbye: function (str) {
    console.log(str);
  },
};
sayModule.sayHello(1);
```

`è¿´å`

```javascript
console.log(`globla a: ${a}`); //undefined
for (var a = 0; a < 10; a++) {
  setTimeout(() => {
    console.log(a);
    //10
    //10
    //10...
  }, 2000);
}
console.log(a); //10
```

æåå¯ä»¥ç¼ç¾å¶å¯¦è¿´åä¸¦æ²æèªå·±ç block

å°è´ a ç´æ¥æ±¡æ global,æå¾éåæ­¥å½å¼åªææå°æå¾ stack(å çå¥½ç)
`var a = 10 a < 10 `åä¾åºå·è¡å°±æ¯æ¯æ¬¡é½æå° 10 çæ¸å¼

èè§£æ³æåå¯ä»¥ä½¿ç¨

- `let`
- `IIFE(Immediately invoked function expression)`

```javascript
for (let a = 0; a < 10; a++) {
  setTimeout(() => {
    console.log(a);
  }, 1000);
  //1
  //2
  //3...
}
```

æå¾æåè¦ä¾è§£é `scope chain`

- `å¼å«ä¹è®æ¸ãå½å¼å¨åªåä½ç¨å`

```javascript
var name = 'Ian';
a(); //Ian

function a() {
  var name = 'Dennis';
  b();
}
function b() {
  console.log(name);
}
```

æåå¯ä»¥ç¼ç¾å çº function b è¢«å®ç¾©å¨ global,æ¼æ¯èªç¶èç¶ç¡è«å¨ä½èå¼å«,åå¾çè®æ¸é½æ¯ global name

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## Closure

- ä½¿ç¨æåå¦ä¸å function ä¹æ¹å¼å³é
- é¿åè¢«åå¾åæ¶æ©å¶åæ¶,éå°ç¹¼çºå­åæåè®æ¸
- æå°æé²åå

é¦åæååçä¸é¢çä¾å­

```javascript
var count = 0;
function counter() {
  count += 1;
  console.log(count);
}

counter(); //1
counter(); //2
```

éæ¨£åçå£èå¨æ¼åªè¦å¨åè®æ¸ä¸­æä¸æ¨£ç count,å°±æé æå½åè¡çª.

æ¥èæåæ function ç¶ä½åå³å¼

- countFn ææ¥ä½ counter()
- counterFn å°±ææåè£¡é¢ç anonymous function

```javascript
function counter() {
  var count = 0;
  //å»ºç«ç§æè®æ¸
  return function (x) {
    //å©ç¨return æfunctionå³åºå»
    count += x;
    return count;
    //æå¾åæå¼åå³
  };
}

const countFn = counter();
const result = countFn(5);
console.log(result);
```

ç¶ç¶ä½ ä¹å¯ä»¥å®ç¾©å¥½å½å¼ååå³

```javascript
function counter() {
  var count = 0;
  //å»ºç«ç§æè®æ¸
  function inner(x) {
    count += x;
    return count;
    //æå¾åæå¼åå³
  }
  return inner;
  //å©ç¨return æfunctionå³åºå»
}

const countFn = counter();
const result = countFn(5);
console.log(result);
```

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## Callback

ç±æ¼ JavaScript æ¯ä½¿ç¨èé¿æèªè¨

å¸¸å¸¸å¯¦ä½æ,æåéè¦ç£è½ä½¿ç¨èæ¯å¦é»ææé

èé»ææéé¿æçäºä»¶å°±æ¯ä½¿ç¨ callback å·è¡

- åèª¿ä¹åæ¸
- è§£æ±º step by step

```javascript
function buttonEvent(callback) {
  callback();
}
```

ä¸åçç¤ºç¯æåå¯ä»¥æ´äºè§£

æè¦åå·è¡

1. wash hands
2. eat dinner
3. studying

```javascript
function todo(callback) {
  console.log('studying');
  callback;
}

function eat(callback) {
  console.log('eat dinner');
  callback;
}

function study() {
  console.log('wash hands');
}

todo(eat(study()));
/*
studying
eat dinner
wash hands
*/
```

å¦ä½ä½¿ç¨ callback åå¾è³æ

```javascript
function buttonEvent(callback) {
  let result = 2;
  callback(result);
}

const getData = (data) => {
  let value = data;
  console.log('value is: ' + value);
};

buttonEvent(getData);
```

æåä¾å°å¯¦è¸å¹³å¸¸ä¸äº API ç callback

æåè¦ä¾å¯«åèªå·±éç¼çå°åè½

- data æ¥åä¸ååæ¸ (number, array , callback)
- callback å¯ä»¥åå¾å®æå¾çé£å,è·åå§é£å

```javascript
function data(num, arr, callback) {
  let copyArr = [...arr];
  arr.push(num);
  callback(arr, copyArr);
}

function getData(data, oldData) {
  console.log(`data: ${data}, the oldData ${oldData}`);
}
let number = 100;
let array = [1, 2, 3];
data(number, array, getData);
//data: 1,2,3,100 , the oldData: 1,2,3
```

å¦ææååªæ³åå¾ææ°çé£åå°±å¥½,åå§é£åä¸éè¦åå¾

ä¹å°±æ¯ callback åªéè¦ä¸ååæ¸åå¾å³å¯

```javascript
function data(num, arr, callback) {
  let result = [...arr]; //shallow copy array
  arr.push(num);
  callback(result, arr);
}

function getData(data) {
  console.log(`data: ${data}`);
}
let number = 100;
let array = [1, 2, 3];
data(number, array, getData);
// data: 1,2,3
```

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## Prototype

JavaScript ä¸­ææè¬çå»ºæ§å½æ¸å prototype(åå)éæé¡ä¼¼ class çææ

- `prototype`
- `__proto__`

æååå»ºç«ä¸å User ç constructor function

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user = new User('Ian', 22);
```

ç®å User æ¬èº«æ²æ method å¯ä»¥ä½¿ç¨

æåä½¿ç¨ prototype çµ¦äº method

```javascript
User.prototype.sayHI = function () {
  console.log(`My name is ${this.name} `);
};

user.sayHI(); //My name is Ian
```

æ user æå°åºä¾å¯ä»¥ç¼ç¾ prototype æåæåæ`åè`çç©ä»¶

![](images/proto_js.png)

### `prototype chain`

æåå¯ä»¥ä½¿ç¨`__proto__`

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user = new User('Ian', 22);

User.prototype.sayHI = function () {
  console.log(`My name is ${this.name} `);
};

user.sayHI(); //My name is Ian
console.log(user.__proto__ === User.prototype); //true
```

![](images/__proto__.png)

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## BOM & DOM

BOM(Browser Object Model)ä¹å°±æ¯æè¬ççè¦½å¨è¦çª

properties:

- screen.width
- screen.height
- screen.availWidth
- screen.availHeight
- screen.colorDepth
- screen.pixelDepth

DOM(Document Object Model)æ¯æç®¡ HTML element çç©ä»¶

è DOM æ¯ä¾æ W3C æå®ç¾©,æ¯å HTML element é½æ¯ç¯é»

å¯ä»¥çå° html æ¯ head å body çç¶ç¯é»

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root">add</div>
    <script src="./let.js"></script>
  </body>
</html>
```

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## Web APIs

---

[â¬ï¸ Back to Contents](#Table-of-Contents)

## Regular Expression

### test

- return `true` ã`false`

```javascript
let words = 'Hello I am Ian';
let keyword = /I/;
let result = keyword.test(words);
console.log(result); //true
```

### match

- return `array`

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log(result);
/*
[
  'coding',
  index: 18,
  input: "Extract the word 'coding' from this string.",
  groups: undefined
]
*/
```

### tags

- `|` or
- `i` ä¸åå¤§å°å¯«
- `g` å¨å±æç´¢
- `[range]` ç¹å®ç¯å
- `^` æª¢æ¥å­é¦
- `*` å¹éååéè¤å­åå¤æ¬¡
- `?`

use `|`

```javascript
let words = 'apple banana guava';
let keyword = /cat|apple/;
let result = keyword.test(words);
console.log(result); //true
```

use `i`

æåå¯ä»¥çå°æ­£åè¡¨éå¼ç¢ºå¯¦åå ±é¯èª¤

```javascript
let words = 'Apple';
let keyword = /apple/;
let result = keyword.test(words);
console.log(result); //false
```

ä½å¦æä»å¤©æè¦ç¢ºèªä½¿ç¨èæéåå®å­,ä¸è«å¤§ãå°å¯«

```javascript
let words = 'Apple';
let keyword = /apple/i;
let result = keyword.test(words);
console.log(result); //true
```

use `[range]`

```javascript
let quoteSample = 'Blueberry 3.141592653s are delicious.';
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);
/*
[ 'l',
  'r',
  'r',
  '3',
  '4',
  '5',
  '2',
  '6',
  '5',
  '3',
  's',
  'r',
  'l',
  'i',
  'i',
  'o',
  's' ]
  */
```

`^` æª¢æ¥å­é¦

```javascript
let quoteSample = '3 blind mice.';
let myRegex = /[^aeiou^0-9]/gi;
let result = quoteSample.match(myRegex);
console.log(result);
//[ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]
```

`*`

```javascript
const str = 'Booooooooooo Booo boooooo';
const reg = /Bo*/gi;
result = str.match(reg);
console.log(result);
//[ 'Booooooooooo', 'Booo', 'boooooo' ]
```

`?`

```javascript
const str = 'Booooooooooo Booo boooooo';
const reg = /Bo?/gi;
result = str.match(reg);
console.log(result);
//[ 'Bo', 'Bo', 'bo' ]
```

---

[â¬ï¸ Back to Contents](#Table-of-Contents)
