import { Dog } from "./dog";

describe('dog', () => {
  it('dog bark', () => {
    expect(new Dog().bark()).toBe('auau');
  })
})
