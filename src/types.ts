// descriminated unions
type HotelPolicy = {
  hotelStars: number;
}

type FlightPolicy = {
  stopOvers: number;
}

type Policy = HotelPolicy | FlightPolicy;

function isHotel(policy: Policy): policy is HotelPolicy {
  return 'hotelStars' in policy;
}

function isFlight(policy: Policy): policy is FlightPolicy {
  return 'stopOvers' in policy;
}

const policy: Policy = { hotelStars: 0 };

console.log(isHotel(policy)); // true;
