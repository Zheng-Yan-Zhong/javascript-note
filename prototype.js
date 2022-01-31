function User(name, age) {
    this.name = name;
    this.age = age
}

const user = new User("Ian", 22)

User.prototype.sayHI = function() {
    console.log(`My name is ${this.name} `);
}
console.log(user);

user.sayHI()//My name is Ian 
console.log(user.__proto__ === User.prototype); //true