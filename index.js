// Your code here
class Cat {
  constructor (name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`
  }
}/////end class

class Dog {
  constructor (name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`
  }

}////end class


class Bird {
  constructor (name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex == 'male') {
      return `It's me! ${this.name}, the parrot!`
    } else {
      return `${this.name} says squawk!`
    }
  }
}///end class
