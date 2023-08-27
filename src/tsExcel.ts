type AllowedTypes = string | string[] | boolean | number;

type Xd = [string, boolean, number];

function Parser<T extends AllowedTypes[]>(array: T[]) {}

const xd = Parser<Xd>([['Jhel', true, 12], ['arthur', 12, '']])
