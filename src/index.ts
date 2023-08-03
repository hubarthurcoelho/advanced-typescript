interface iOffer {
  type: 'hotel' | 'flight';
  name: string;
}

class Factory {
  constructor(){}
  static createOffer(offer: iOffer): OfferModel {
    if (offer.type === 'hotel') return new HotelOfferModel(offer);
    if (offer.type === 'flight') return new FlightOfferModel(offer);
    else throw new Error("Invalid offer type");
  }
}

class OfferModel {
  constructor(private offer: iOffer){}

  public isHotel(): this is HotelOfferModel {
    return this instanceof HotelOfferModel;
  }

  public isFlight(): this is FlightOfferModel {
    return this instanceof FlightOfferModel;
  }
}

class HotelOfferModel extends OfferModel {
  constructor(private hotelOffer: iOffer) {
    super(hotelOffer);
  }

  public getOffer(): iOffer {
    return this.hotelOffer;
  }

  public getHotelName(): string {
    return this.hotelOffer.name;
  }
}

class FlightOfferModel extends OfferModel {
  constructor(private flightOffer: iOffer) {
    super(flightOffer);
  }

  public getOffer(): iOffer {
    return this.flightOffer;
  }

  public getFlightName(): string {
    return this.flightOffer.name;
  }
}

const newOffer = Factory.createOffer({ type: "hotel", name: "airport" });

if(newOffer.isHotel()) {
  //  in this scope, newOffer is now a hotelOffer
  console.log(newOffer.getHotelName());
}

if(newOffer.isFlight()) {
  //  in this scope, newOffer is now a flightOffer
  console.log(newOffer.getFlightName());
}
