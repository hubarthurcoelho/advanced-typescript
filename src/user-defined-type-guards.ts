interface IOffer {
  type: 'hotel' | 'flight'; // discriminative type
  name: string;
}

class Factory {
  constructor(){}
  static createOffer(offer: IOffer): OfferModel {
    if (offer.type === 'hotel') return new HotelOfferModel(offer);
    if (offer.type === 'flight') return new FlightOfferModel(offer);
    else throw new Error("Invalid offer type");
  }
}

class OfferModel {
  constructor(private offer: IOffer){}

  public isHotel(): this is HotelOfferModel {
    return this instanceof HotelOfferModel;
  }

  public isFlight(): this is FlightOfferModel {
    return this instanceof FlightOfferModel;
  }
}

class HotelOfferModel extends OfferModel {
  constructor(private hotelOffer: IOffer) {
    super(hotelOffer);
  }

  public getOffer(): IOffer {
    return this.hotelOffer;
  }

  public getHotelName(): string {
    return this.hotelOffer.name;
  }
}

class FlightOfferModel extends OfferModel {
  constructor(private flightOffer: IOffer) {
    super(flightOffer);
  }

  public getOffer(): IOffer {
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

function xd(newOffer: OfferModel) {
  if(!newOffer.isFlight()) {
    return;
  }
  newOffer.getFlightName();
}
