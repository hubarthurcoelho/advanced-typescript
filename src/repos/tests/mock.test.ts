import { mockResolvedClass } from "../../mockedClass";
import { UserRepository } from "../originalClass";

describe('xd', () => {
  it('xd', async () => {
    const userRepo1 = mockResolvedClass(UserRepository, { getAvailable: true });


    const response = userRepo1.getAvailable('xd');

    expect(response).toEqual(true);
  })
});
