// function overloading will correctly infer the type based on the param received
function reverse(param: string): string
function reverse(param: string[]): string[]
function reverse(param: string | string[]): string | string[] {
  if (typeof param === 'string') {
    return param.split('').reverse().join('');
  } else {
    return param.slice().reverse();
  }
}

const hello = reverse('hello world'); // hello is inferred as a string
const h_e_l_l_o = reverse(['a', 'b', 'c', 'd', 'e', 'f']); // h_e_l_l_o is inferred as a string[]
