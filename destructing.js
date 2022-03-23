const array = ["1", "2", "3"]
const [a,...b] = array
console.log(a, b)

const object = {
    name: 'Ian',
    age: 23,
    email: 'test@gmail.com'
}
const { name, ...age } = object
console.log(name, age);// Ian, { age: 23, email: 'test@gmail.com' }

function sayHi(...args) {
    console.log(args);
    args.forEach((item, index) => console.log(index+1 + '.', item))
}
sayHi("Ian", 22, "test@gmail.com")