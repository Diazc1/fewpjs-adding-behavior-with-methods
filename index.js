// Your code here

// cat
// ✓ has a class of cat
// ✓ cat.speak() returns '[name]' says meow!
class Cat {
    constructor(name) {
    this.name = name;
    }

    speak() {
        return `${this.name} says meow!`
    }
}


// dog
// ✓ has a class of dog
// ✓ dog.speak() returns '[name] says woof!'
class Dog {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} says woof!`
    }
}



class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex =  sex;
    }

    speak() {
        if (this.sex == "male") {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}

