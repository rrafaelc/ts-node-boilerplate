import { Person } from '@/index'

it('should say my name', () => {
  const person = new Person('Rafael')

  expect(person.name).toBe('Rafael')

  expect(person.sayMyName()).toBe('Rafael')
})
