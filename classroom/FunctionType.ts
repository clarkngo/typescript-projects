interface SearchFn {
  (array: number[], target: number): boolean;
}

const isNumberExist: SearchFn = (array, target) => array.includes(target);
console.log(isNumberExist([1, 2, 3], 3));
console.log(isNumberExist([1, 2, 3], 4));
