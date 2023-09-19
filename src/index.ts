function Result(bool: boolean) {
  if (bool) {
      return {data: bool };
  }

  return { error: true }
} 

const { data: dataGuy, error: errorGuy } = Result(true);

console.log(errorGuy);