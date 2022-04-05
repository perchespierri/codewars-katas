// COMPLETE THE SOLUTION SO THAT IT SPLITS THE
// STRING INTO PAIRS OF TWO CHARACTERS.
// IF THE STRING CONTAINS AN ODD NUMBER OF CHARACTERS
// THEN IT SHOULD REPLACE THE MISSING SECOND CHARACTER
// OF THE FINAL PAIR WITH AN UNDERSCORE ('_').
// EXAMPLES:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  if (!str.length) return [];

  const strToSplit = str.split("");
  let strInPairs = [];

  for (let i = 0; i <= strToSplit.length - 1; i += 2) {
    strInPairs.push(`${strToSplit[i]}${strToSplit[i + 1]}`);
  }

  finalStr = strInPairs.map((element) => {
    return element.replace(/undefined/g, "_");
  });

  return finalStr;
}
