// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
  if (!parens.length) return true;

  const splitParens = parens.split("");

  const parensTypeA = splitParens.filter((element) => element === "(");
  const parensTypeB = splitParens.filter((element) => element === ")");

  if (parensTypeA.length === parensTypeB.length) return true;
  return false;
}
