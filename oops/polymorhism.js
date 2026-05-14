class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound.");
    }
}
class Dog extends Animal {
    sound() {
        console.log(this.name + " barks.");
    }
}
class Cat extends Animal {
    speak() {
        console.log(this.name + " meows.");
    }
    paw() {
        console.log(this.name + " uses it's paw to walk");
    }
}
let dog = new Dog("dogesh");
let cat = new Cat("");

dog.sound();
dog.speak();
cat.speak();
cat.paw();