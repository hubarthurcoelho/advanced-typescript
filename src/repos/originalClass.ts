export class UserRepository {
  private api: any;
  constructor(private dbName: string, private model: any) {
    this.api = model.xd.xd.api;
  }

  public static getInstance() { return 'xd' }

  public async getUsers(xd: string): Promise<{ name: string, password: string }> {
    return { name: 'arthur', password: '1234444' };
  }

  public async getAvailable(xd: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  private xd() {}
}
