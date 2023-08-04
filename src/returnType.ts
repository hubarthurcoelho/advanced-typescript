class OfferCommand {
  constructor() {}

  public execute() {}

  private getRelatedEntities() {
    return {
      id: 10
    }
  }

  private mapFromEntitiesResponse(entities: ReturnType<typeof this.getRelatedEntities>) {

  }
}
