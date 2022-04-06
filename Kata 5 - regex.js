// COMPLETE THE SOLUTION SO THAT IT SPLITS THE
// STRING INTO PAIRS OF TWO CHARACTERS.
// IF THE STRING CONTAINS AN ODD NUMBER OF CHARACTERS
// THEN IT SHOULD REPLACE THE MISSING SECOND CHARACTER
// OF THE FINAL PAIR WITH AN UNDERSCORE ('_').
// EXAMPLES:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solutionOne(str) {
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

// A smarter way:

function solutionTwo(str) {
  return `${str}_`.match(/.{2}/g) || [];
}

// or: const solution = str => ((str+"_").match(/../g)||[]);

// Explanation:
// 1. (str+'_')
//  -> means add _ in s or string
// 2. /.{2}/g
//  -> this regexp means to return an array for all that matches the pattern (any 2 character)
//  -> . is a wildcard character (will match any one character)
//  -> {2} is a quantity specifier (specifies the lower and upper number of patterns - {lower, upper};
//      the one used on the above solution means it wants specific number of matches - {2} )
//  -> g means to look for all that matches the pattern which is to look for every 2 character,
//      without this, it'll return only the first match which is ['ab']
// 3. ||[]
//  -> means if no match found, it'll return empty array, without this,
//    if no match was found, it will return NULL ('cause of how match() works)

// solutionTwo
console.log(solutionTwo(""));
// console.log(solutionTwo("abc"));
// console.log(solutionTwo("abcd"));
