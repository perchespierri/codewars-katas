const countBits = (n) => {
  const countOnesInArray = (str) => str.match(/[1]/g) || 0;

  const nInBinary = n.toString(2);

  if (countOnesInArray(nInBinary) === 0) return 0;

  return countOnesInArray(nInBinary).length;
};

// Cool other ways:

// const countBits = (n) => {
//   return n.toString(2).replace(/0/g,'').length;
// };
