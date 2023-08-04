// Assertions can be useful when writing tests, given that a throw is handled as a failure
// by most test frameworks
type Person = {
  name: string;
  bith?: Date;
}

function assertDate(date: unknown, message: string): asserts date is Date {
  if (!(date instanceof Date)) throw new Error(message);
}

const newPerson: Person = {
  name: 'John',
  bith: new Date() // if commented, throws an error
}

assertDate(newPerson.bith, 'invalid date');

console.log(newPerson.bith); // safe after assertion
