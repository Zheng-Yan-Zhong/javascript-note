//! scope

function scope() {
    let str = "Hello world!";
    console.log(str);
}

scope()// Hello World
console.log(str)// undefined

// ! module
let sayModule = {
    sayHello: function(str) {console.log(str)} ,
    sayGoodbye: function(str) {console.log(str)}
}
sayModule.sayHello(1)


// ! for block
console.log(`globla a: ${a}`);//undefined
for(var a = 0; a < 10; a++) {
    setTimeout(() => {
        console.log(a)
        //10
        //10
        //10...
    },2000)
}
console.log(a); //10

//! scope chain

var name = "Ian"
a()

function a() {
    var name = "Dennis"
    b()
}
function b() {
    console.log(name)
}
