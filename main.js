// let animal = {
//   name: 'Rex',
//   sayName() {
//     console.log('My name is ' + this.name);
//   },

// }

// let cat = {
//   sayHello() {
//     console.log('Hello from ' + this.name + ', I am a cat');
//   }
// }

// let dog = {
//   sayHello() {
//     console.log('Hello from ' + this.name + ', I am a dog');
//   }
// }



// cat.__proto__ = animal;
// dog.__proto__ = animal;


// console.log(animal.sayName());
// console.log(cat.sayHello());
// console.log(dog.sayName());

class Animal {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log('My name is ' + this.name);
  }
}

let animal = new Animal('qwery');

console.log(animal.sayName());

class Cat extends Animal {
  sayHello () {
    console.log('Hello from ' + this.name + ', I am a cat');
  }
}

let cat = new Cat('Santa');

class Dog extends Animal {
  sayHello () {
    console.log('Hello from ' + this.name + ', I am a dog');
  }
}

let dog = new Dog('Claus');

console.log(cat.sayName());
console.log(cat.sayHello());
console.log(dog.sayName());
console.log(dog.sayHello());
