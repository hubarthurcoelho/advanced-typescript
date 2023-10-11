export class UserRepository {
  private api: any;
  constructor(private dbName: string, private model: any) {
    // this.api = model.xd.xd.api;
  }

  public static getInstance() { return 'xd' }

  public async getUsers(xd: string): Promise<{ name: string, password: string }> {
    const name = 'arthur';
    return { name, password: '123444' };
  }

  public async getAvailable(xd: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  private xd() {}
}
