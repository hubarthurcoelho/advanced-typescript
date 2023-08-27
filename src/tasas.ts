function print(value: string): string;
function print(value: number): number;
function print(value: string | number) {
  return value;
}

enum PdfType {
  hotel = 'hotel',
  flight = 'flight',
  car = 'car'
}

type Params<T = PdfType> = {
  pdfInfo: any;
  type: T;
}

type HotelPdf = {
  eliabe: boolean;
}

type FlightPdf = {
  arthur: boolean;
}

type Car = {
  devis: boolean;
}


class Eliabe {
  public print<T extends PdfType>(params: Params<T>): 
  T extends PdfType.hotel ? HotelPdf :
  T extends PdfType.flight ? FlightPdf :
  Car
  public print(params: Params): HotelPdf | FlightPdf | Car {
    if (params.type === PdfType.hotel) return { eliabe: true };
    if (params.type === PdfType.car) return { devis: true };
    return { arthur: true };
  }
}

const eliabe = new Eliabe().print({ pdfInfo: {}, type: PdfType.car });
