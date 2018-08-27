const checkAdult= (...args) => {
  return args.filter(el > 18);

}

console.log(checkAdult(10, 5 , 20, 30));
