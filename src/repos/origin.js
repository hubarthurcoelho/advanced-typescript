export class UserRepositoryJS {
  static getInstance() { return 'xd' }

  async getUsers(xd) {
    return { name: 'arthur', password: '123444' };
  }

  async getAvailable(xd) {
    return Promise.resolve(false);
  }

  xd() {}
}
