import { mockResolvedClass } from "../../mockedClass";
import { UserRepository } from "../originalClass";

describe('xd', () => {
  it('xd', async () => {
    const userRepo1 = new UserRepository("", "");

    const response = await userRepo1.getAvailable('xd');

    const response2 = await userRepo1.getUsers('xd');
    
    expect(response).toEqual(true);
    expect(response2).toStrictEqual({ name: "arthur", password: '123444'});
  })
});
