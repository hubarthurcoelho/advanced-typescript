import { mockResolvedClass } from "../../mockedClass";
import { UserRepository } from "../originalClass";

describe('xd', () => {
  it('xd', async () => {
    const userRepo1 = mockResolvedClass(
      UserRepository, { getAvailable: true, getUsers: { name: "arthur", password: '123444'}},
    );


    const response = userRepo1.getAvailable('xd');

    const response2 = userRepo1.getUsers('xd');
    
    expect(response).toEqual(true);
    expect(response2).toStrictEqual({ name: "arthur", password: '123444'});
  })
});
