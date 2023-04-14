import { Test } from './testing'

it('should work', () => {
  const test = new Test()

  expect(test.execute()).toBe('Testing')
})
