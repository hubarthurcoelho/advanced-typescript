import { Dog } from "./dog";

describe('dog', () => {
  it('dog bark', () => {
    expect(new Dog().bark()).toBe('auau');
  })

  it('dog walk', () => {
    expect(new Dog().walk()).toBe('walk');
  })
})
