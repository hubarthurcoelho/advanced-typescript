import { mockResolvedClass, mockClass, rawInstance } from "../mockedClass";
import { UserRepository } from "../originalClass";

describe('', () => {
  it('', async () => {
    const userRepo = rawInstance(UserRepository);
    jest.spyOn(UserRepository, 'getInstance').mockReturnValue('xd2')

    const userRepo1 = mockResolvedClass(UserRepository, { getAvailable: true });


    const response = UserRepository.getInstance();

    expect(response).toEqual('xd2');
  })
});
