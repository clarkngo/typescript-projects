function factorial(num: number) {

  if (num <= 1) {

    return 1;

  } else {

    return (num * factorial(num - 1));
  }
};

console.log(factorial(5));
