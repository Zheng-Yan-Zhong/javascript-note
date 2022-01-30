# JavaScript Tutorial

## Declaration
變數(variable),我們可以稱為儲存資料的盒子

而變數需要被宣告(declare)並且告知編譯器

* 宣告方法
    * var
    * let
    * const

宣告temp變數
```javascript=
var temp
```
賦予其數值
```javascript=
var temp = "hello world!!!"
```
> JavaScript中我們不需要定義變數的資料型態(ex: string...)

## Variables
* var
* let
* const

### var 
> var為JavaScript(ES6)之前唯一的宣告方法

* 可重複宣告
* 可先宣告不給予初始值
* 全域變數

```javascript=
var temp

var temp = 10

var temp = 100
console.log(temp) //100
```

### let 
let為JavaScript(ES6)版本新增的變數宣告方法

考量到var會污染到全域變數和造成開發者重複定義變數之情形

現在基本上使用let為嚴謹宣告方法
* 區塊變數(block scope)
* 不可重複宣告
* 可宣告不給予初始值

var造成開發問題

```javascript=
var text = "Hello world";
var text = "What";
```

```javascript=
let text;
let text;
//SyntaxError: Identifier 'text' has already been declared
```

### const
* 不可重複宣告
* 不可修改數值(read only)
* 不可宣告而不給予數值

未給予初始值
```javascript=
const text;
//SyntaxError: Missing initializer in const declaration
```

重複宣告其變數
```javascript=
const text = '1';
const text = '1';
//SyntaxError: Identifier 'text' has already been declared
```
更改其數值
```javascript=
const text = '1';
text = '2';
//TypeError: Assignment to constant variable.
```

以下sum方法我們不會再更改其宣告內容

這時候確保sum是唯獨(read only)可保持開發流程的品質
```javascript=
const sum = (a,b) => {
    return a + b
}
```

更改陣列內容 為[5,7,3]
```javascript=
const array = [2,5,7]
array = [5,7,3] //error
```
可以發現array被const定義唯獨

我們可以使用更改index值
```javascript=
array[0] = 5
array[1] = 7
array[2] = 3
```

## Data Type
* Call by value
    * string
    * number
    * undefined
    * null
    * NaN
* Call by reference
    * array
    * object
    * function

### String
```javascript=
var text = String("Hello World")

var text = "Hello World"
```
#### Single quotes
```javascript=
var text = 'Hello World'
```
#### Double quotes
```javascript=
var text = "Hello World"
```

#### Escapes

|syntax| output|
|---| --- |
| `\'` |	single quote|
| `\"` |	double quote|
| `\\` |	backslash|
| `\n` |	newline|
| `\r` |	carriage return|
| `\t `|	tab|
| `\b` |	word boundary|
| `\f` |	form feed|


錯誤示範
```javascript=
var text = "Hello world "I am Ian""
```

使用跳脫字元 `\" `  +  `\"`
```javascript=
var text = "Hello world \"I am Ian\"."
```

---

### Number
```javascript=
var price = Number(100)

var price = 100
```

---

### Undefined
    未被賦值之變數
```javascript=
var value
console.log(value) //undefined
```

---

### Null
    與undefined差別在於, JavaScrip中變數未給初始值會被賦值undefined

    null類似直接宣告其為空值,類似暫時取代其它值的替代方案

---

### NaN
    NaN(Not a Number),通常非數值而做運算時,即被賦值NaN
```javascript=
var value = "我是中文"
const result = value / 100
console.log(result);// NaN
```

---

### Array
```javascript=
var temp = Array(1,2,3)

var temp = [1,2,3]
```

### Object
* `property : value`
```javascript=
var user = Object({name: "Ian", age: 22})

var user = {
    name: "Ian",
    age: 22
}

```
取得屬性
```javascript=
var user = {
    name: "Ian",
    age: 22
}

const result = user["name"]
console.log(result)//Ian
```


新增屬性

```javascript=
user.email = "test@gmail.com"

user["email"] = "test@gmail.com"
```


---


### Function
* declaration function
* expression function
* anonymous expression function
* arrow function (ES6)
* keyWord `return`

```javascript=
//declare
function sum(a,b) {
    return a + b
}
//expression
const sum = function sum(a,b) {
    return a + b
}
//anonymous expression
const sum = function(a,b) {
    return a + b
}

// arrow function
const sum = (a,b) => a + b

const sun = (a,b) => {
    return a + b
}
```

#### Return
```javascript=
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

#### Parameter

```javascript=
function shallow(n1,n2,n3) {
    const mix = [n1,n2,n3]
    console.log(mix);
}

shallow(20,30,40)
```
* shallow好處
    * 過多、參數傳遞問題
    * 更簡短語法

```javascript=
function shallowCP(...args) {
    console.log(args);//[ 20, 30, 40 ]
    console.log(args.forEach((item) => console.log(item)))
    //20
    //30
    //40
}
shallowCP(20,30,40)
```
## Operator
運算子在程式語言中(不限任何語言)都是十分重要

打好基本功,會讓後面學習更得心應手



`++`

```javascript=
let number = 10
number++
console.log(number);//11
```
`--`

```javascript=
let number = 10
number--
console.log(number);
```

`reference ++`
```javascript=
let temp = 10;
let value = temp++;
console.log(value,temp); //10 11
//先給予參考本身再遞增數值
```

`reference --`
```javascript=
let temp = 10;
let value = temp--;
console.log(value,temp);10 9
//先給予參考本身在遞減數值
```

那我們要怎麼依照原來的寫法正確傳遞呢？

```javascript=
let temp = 10;
let value = ++temp;
// or
let value += temp;
console.log(value,temp);//11 11
//把運算子放在前方,算好數值變數value才取得參考
```

這邊的觀念其實也是JavaScript本身運作的原理,

JavaScript傳遞以下類型資料時,都是淺參考(shallow reference)

也就是只傳遞數值,與Array, Object的原理不同

* Number
* String
* Undefined
* Null
* NaN

```javascript=
let number = 2
console.log(number * number);    //4
console.log(number ** number);   //4
console.log(number / number);    //1
console.log(number % number);    //0
```

## Comparation


| syntax | expression | ouput |
| -------- | -------- | -------       | 
| ==    | 1 == "1"      | true| 
| ===   | 1 === "1"     |false|
| \| \|  | result = 1 \|\| 2| 1|
| &&    | result = 1 && 2| 2|
| !=     | 1 != "1"        | false |
| !==    | 1 !== "1"      | true |
| >=| 1 >= "1"| true|
| <=| 1 <= "1" | false|
* Equal
    * `==` 
        使用` ==`  (自動轉型,不嚴謹的比對)
        ```javascript=
        let str = "12"
        console.log(str == 12) //true
        ```
    * `===`

        使用`===` (嚴謹比對資料型態)
        ```javascript=
        let str = "12"
        console.log(str === 12)// false
        ```

* Or
    ```javascript
    const result = false || true
    console.log(result)//true

    const result = true || false
    console.log(result)// true
    ```

* And
    * `&`
        自動轉型
        ```javascript
        const result = true & false
        console.log(result)//0
        const result = false & true
        console.log(result)//0
        const result = true & true
        console.log(result)//1
        ```

    * `&&`

        嚴格比對
        ```javascript
        const result = true && false
        console.log(result);//false

        const result = false && true
        console.log(result)//false

        const result = true && true
        console.log(result)//true
        ```
* Not Equal

    * `!=`
    ```javascript
    const result = 1 != "1"
    console.log(result)//false
    ```
    * `!==`
    ```javascipt
    const result = 1 !== "1"
    console.log(result)//true
    ```
---

## Conditional
* `if` 、 `else if` 、`else`
* `switch` 

`if`

    ```javascript=
    function compare(value) {
        if(value > 6) {
            return `over the ${value}` 
        } else {
            return `under the ${value}`
        }
    }
    ```
    
`switch`

    ```javascript=
    function compare(value) {
        switch(value) {
            case "1":
                return 1
        
            default:
                return -1
        } 
    }
    ```
---
## String methods
* slice(start, end)
* substring(start, end)
* substr(start, length)
* replace

### slice
```javascript=
var text = "Hello world"
console.log(text.slice(0,3)) //Hel
```
### substring
```javascript=
var text = "Hello world"
console.log(text.substring(3,8)) //lo wo
```
### substr
```javascript=
var text = "Hello world"
console.log(text.substr(3,4)) //lo wo
```
### replace
```javascript=
var text = "台灣新北市中和區"
var concat = text.replace("台灣", "中華民國")
console.log(concat);// 中華民國新北市中和區
```
### toLowerCase
```javascript=
var text = "Hello World"
console.log(text.toLowerCase()) //hello world
```
### toUpperCase
```javascript=
var text = "Hello World"
console.log(text.toUpperCase()) //HELLO WORLD
```
### split
```javascript=
var text = "Hello%World"
console.log(text.split('%')) //[ 'Hello', 'World' ]
```

---

## String search
* indexOf


### indexOf
```javascript=
var text = "Hello World"
console.log(text.indexOf('o')) //4
```

----

## Array methods
* toString
* pop
* push
* shift
* unshift
* filter
* map
* length
* concat
* splice
* slice
* every
* some
* foreach

### toString
```javascript=
 var temp = [1,2,3,4,5,6,7,8]
console.log(temp.toString())//1,2,3,4,5,6,7,8
```

### concat
```javascript=
var a = [1,2,3,4,5,6,7,8]
var b = [10,12]
console.log(a.concat(b))
//[1, 2, 3,  4, 5, 6, 7, 8, 10, 12]
```

### length
```javascript=
var a = [1,2,3,4,5,6,7,8]
console.log(a.length)//8
```

### pop
```javascript=
var a = [1,2,3,4,5,6,7,8]
a.pop()
console.log(a)
/*
[
  1, 2, 3, 4,
  5, 6, 7
]
*/
```

### push
```javascript=
var a = [1,2,3,4,5,6,7,8]
a.push(9)
console.log(a)
/*
[
  1, 2, 3, 4,
  5, 6, 7, 8 , 9
]
*/
```

### shift
```javascript=
var a = [1,2,3,4,5,6,7,8]
a.shift()
console.log(a)
/*
[
  2, 3, 4, 5,
  6, 7, 8
]
*/
```

### unshift
```javascript=
var a = [1,2,3,4,5,6,7,8]
a.unshift(9)
console.log(a)
/*
[
  9, 1, 2, 3, 4,
  5, 6, 7, 8
]
*/
```

### map
```javascript=
var a = [1,2,3,4,5,6,7,8]
console.log(a.map(function(item) {
    return item * 2
}));
/*[
   2,  4,  6,  8,
  10, 12, 14, 16
]
*/
```

### filter
```javascript=
var a = [1,2,3,4,5,6,7,8]
console.log(a.filter(function(item) {
    return item > 2
}));
//[ 3, 4, 5, 6, 7, 8 ]
```

### some
```javascript=
var a = [1,2,3,4,5,6,7,8]
console.log(a.some(function(item) {
    return item > 2
}));
//true
```

### every
```javascript=
var a = [1,2,3,4,5,6,7,8]
console.log(a.every(function(item) {
    return item > 2
}));
//false
```

### forEach
```javascript=
var a = [1,2,3,4,5,6,7,8]
console.log(a.forEach(function(item) {
    console.log(item);  
}));
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

## Object methods
* hasOwnProperty
* freeze

### freeze
freeze可以達成const的唯獨效果,避免物件被更改屬性值
```javascript=
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS)

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();//3.14
```

### hasOwnProperty
```javascript=
const user = {
    name: "Ian",
    age: 22
}
const checkResult = user.hasOwnProperty("name")
console.log(checkResult) //true
```

## Date

---
## Destructing
我們先了解JavaScript使用array或是object都是call by reference

### object
```javascript=
const user = {
    name: 'Ian',
    age: 22
}
const {name, age} = user
console.log(name, age); //Ian 22
```

rename the parameter
```javascript=
const user = {
    name: 'Ian',
    age: 22
}
const {age: user_age} = user
console.log(user_age)//22
```
### nested object
```javascript=
const user = {
    about: {
        email: "test@gmail.com",
        link: "a"
    },
    age: "22"
}
const { about: { email: user_email }} = user 
console.log(user_email);//test@gmail.com
```

### array
```javascript=
const array = [1,2,3]
const [a,b,c] = array
console.log(a,b,c); //1, 2, 3
```
解構過少
```javascript=
const array = [1,2,3]
const [a,b] = array
console.log(a,b); //1, 2
```

解構過多
```javascript=
const array = [1,2,3]
const [a,b,c,d] = array
console.log(a,b,c,d); //1, 2, 3 undefined
```


React中取用useState也是使用此方法
```jsx=
const [user, setUser] = useState(initialize)
```
### nested array
```javascript=
const array = [["dog","cat"], ["Apple", "banana"]]
const value = array[0[1]]
console.log(value)//cat
```
### function 
```javascript=
const user = {
    name: "Ian",
    age: 22
}

function test({name, age}) {
    console.log(name,age)
}
test(user)//Ian 22
```

### swap
```javascript=
const arr = [1,2,3]
const [a,b,c] = arr
[a,c,b] = [a,b,c]
console.log(a,b,c)//1,3,2
```
### shallow copy 
也就是當我執行以下操作,兩個參數牽一髮而動全身
```javascript=
const arr1 = [1,2,3]
const arr2 = arr1;
arr2.push(100)
console.log(arr1,arr2)//[1,2,3,100][1,2,3,100] 
```
但我只是想複製一份來做額外的操作

我們可以使用`...`來取得數值,也可以稱為shallow copy

```javascript=
const arr1 = [1,2,3]
const arr2 = [...arr1];
arr2.push(100)
console.log(arr1,arr2);//[ 1, 2, 3 ] [ 1, 2, 3, 100 ]
```

function parameter
```javascript=
function shallow(n1,n2,n3) {
    const mix = [n1,n2,n3]
    console.log(mix);
}

shallow(20,30,40)//[ 20, 30, 40 ]

function shallowCP(...args) {
    console.log(args);//[ 20, 30, 40 ]
    console.log(args.forEach((item) => console.log(item)))
    //20
    //30
    //40
}
shallowCP(20,30,40)
```

## Scope Chain

### Global Scope

### Local Scope

---

## Closure

---

## Asynchronous
* Callback
* Promise(ES6)
* Async / Await

### Callback

### Promise

### Async / Await

---
## Class
* `prototype sugar syntax`
* `keywords`
    * `class`
    * `constructor`
    * `super`
    * `extends`
    * `static`
    * `getter`、`setter`


```javascript=
// Only change code below this line
class Vegetable {
  constructor(para) {
    this.name = para
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

## Import / Export 
### ES6 Modules

### Common JS


## Set
* `new Set`
```javascript=
const array1 = [1,2,3]
const array2 = [10,2,1]

function setFunction(arr1, arr2) {
    return new Set(arr1.concat(arr2))
}
const result = setFunction(array1,array2)
console.log(result);//{ 1, 2, 3, 10 }
```

## Regular Expression
### test
* return `true` 、`false`
```javascript=
let words = "Hello I am Ian"
let keyword = /I/
let result = keyword.test(words)
console.log(result);//true
```
### match
* return `array`


```javascript=
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
* `|` or
* `i` 不分大小寫
* `g` 全局搜索
* `[range]` 特定範圍
* `^` 檢查字首
* `*` 匹配前個重複字元多次
* `?` 


 use `|`
```javascript=
let words = "apple banana guava"
let keyword = /cat|apple/
let result = keyword.test(words)
console.log(result);//true
```

use `i`

我們可以看到正則表達式確實回報錯誤
```javascript=
let words = "Apple"
let keyword = /apple/
let result = keyword.test(words)
console.log(result);//false
```
但如果今天我要確認使用者有這個單字,不論大、小寫

```javascript=
let words = "Apple"
let keyword = /apple/i
let result = keyword.test(words)
console.log(result);//true
```

use `[range]`
```javascript=
let quoteSample = "Blueberry 3.141592653s are delicious.";
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

`^` 檢查字首
```javascript=
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; 
let result = quoteSample.match(myRegex); 
console.log(result)
//[ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]
```

`*`
```javascript=
const str =  "Booooooooooo Booo boooooo"
const reg =  /Bo*/gi
result = str.match(reg)
console.log(result);
//[ 'Booooooooooo', 'Booo', 'boooooo' ]
```

`?`
```javascript=
const str =  "Booooooooooo Booo boooooo"
const reg =  /Bo?/gi
result = str.match(reg)
console.log(result);
//[ 'Bo', 'Bo', 'bo' ]
```

---

## JavaScript Package
* Babel

### Babel
[Babel offcial](https://babeljs.io/)

Babel是使JavaScript可以靈活運用且持續活躍的功臣之一

當瀏覽器看不懂最新發布的JavaScript stntax時,Babel可以轉換成較舊版本的語法

## Advanced Data
此章節為學習JavaScript特殊用法而額外拉出來之章節,
內也有FreeCodeCamp之課程筆記

---



### Recursive function
遞迴(Recursion)其實就是呼叫自己

主要切入點是把大問題分成小問題
![](https://i.imgur.com/FDf02Kt.png)
> sourse by https://www.programiz.com/javascript/recursion

```javascript=
function recursion(num) { 
    if(num == 0) {
        return ""
    } else {
        console.log(num);
        return recursion(num -1)
    }
}
const result = recursion(10)
console.log(result);

/*10
9
8
7
6
5
4
3
2
1
*/
```