import { Person } from '@/index'

it('should say hello world!', () => {
  const person = new Person()

  expect(person.sayHello()).toBe('Hello World!')
})
