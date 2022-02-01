class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    sayHi() {
        console.log(`Helo I'm ${this.name}`)
    }
}

class copyUser extends User {
    constructor(name, age, email, background) {
        super(name, age, email);
        this.background = background;
        //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }
    static say() {
        console.log("static");
    }
    intro() {
        console.log(`I'm ${this.name} graduated from ${this.background} and ${this.age} old`);
    }
}

const user = new copyUser('Dennis', 22, "test@gmail.com", "JINWAN")
copyUser.say()//static
user.say()//user.say is not a function