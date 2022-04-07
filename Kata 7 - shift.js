// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortArray = (numbers) => {
  const oddNumbers = numbers.filter((number) => number % 2);
  const oddNumbersAscending = oddNumbers.sort((a, b) => a - b);

  const resultingArray = numbers.map((number) =>
    number % 2 ? oddNumbersAscending.shift() : number
  );

  return resultingArray;
};

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [ 1, 3, 2, 8, 5, 4 ]

// Shift modifies the original array, returning the first element
// and removign it from said array
