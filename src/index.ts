import { Hello } from '@/hello'

export class Person {
  public sayHello() {
    return new Hello().sayHelloWorld()
  }
}
