import { Hello } from '@/hello'

const helloWorld = new Hello().sayHelloWorld()

export class Person {
  public sayHello() {
    return helloWorld
  }
}

console.log(helloWorld)
