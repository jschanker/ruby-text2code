var tokenPatterns = {
  integer                :  [/-\d+|\d+/],
  "float"                :  [/-\d*\.\d+|\d*\.\d+/],
  variable               :  [/[A-Za-z_]\w*/],
  word                   :  [/[^""''\n\r\u2028\u2029]*/],
  equals                 :  ["is equal to", "equals to", "equals", "equal to", "equal", "=", "to"],
  comma                  :  [","],
  semicolon              :  [";"],
  "if"                   :  ["if"],
  "else"                 :  ["otherwise", "else"],
  print                  :  ["print", "output"],
  set                    :  ["set", "let", /s*/],
  then                   :  ["then"],
  commaThen              :  [", then", ",then", ",", "then"],
  "while"                :  ["repeat while", "do while", "while", "keep going while"],
  until                  :  ["repeat until", "do until", "until", "keep going until"],
  "for"                  :  ["for each", "for every", "go through every", "go through each", 
                             "go through", "every", "for all", "all", "each", "for"],
  "true"                 :  ["true", "yes"],
  "false"                :  ["false", "no"],
  number                 :  ["at position number", "at position #", "at position", "at number", 
                             "number", "at #", "#", "position"],
  "substring"            :  ["substring"],
  from                   :  ["from"],
  to                     :  ["to"],
  "in"                   :  ["in"],
  increase               :  ["increase", "augment", "increment"],
  decrease               :  ["decrease", "decrement"],
  by                     :  ["by"],
  of                     :  ["of"],
  not                    :  ["is not", "not"],
  or                     :  ["or"],
  and                    :  ["and"],
  lessThan               :  ["is less than", "less than", "<"],
  lessThanOrEq           :  ["is less than or equals", "is less than or equal to", "less than or equals", 
                             "less than or equal to", "<=", "is not greater than", "is not more than"],
  greaterThan            :  ["is greater than", "greater than", "is more than", "exceeds", "more than", ">"],
  greaterThanOrEq        :  ["is greater than or equals", "is greater than or equal to", "greater than or equals", 
                             "greater than or equal to", ">=", "is not less than"],
  notEquals              :  ["is not equal to", "does not equal", "not equal to"],
  divisibleBy            :  ["is divisible by", "divisible by", "is a multiple of", "is multiple of"],
  factorOf               :  ["is a factor of", "is factor of"],
  plus                   :  ["\\+", "plus", "add"],
  minus                  :  ["-", "minus", "subtract"],
  multiply               :  ["\\*", "multiply", "times"],
  divide                 :  ["\\/", "divided by", "divide"],
  intDivide              :  ["\\//"],
  modulo                 :  ["modulo", "mod", "modulus"],
  squareRoot             :  ["the square root of", "square root of", "square root", "sqrt"],
  even                   :  ["is even", "even"],
  odd                    :  ["is odd", "odd"],
  negative               :  ["is negative", "negative"],
  positive               :  ["is positive", "positive"],
  prime                  :  ["is prime", "prime"],
  remainderOf            :  ["the remainder of", "remainder of"],
  power                  :  ["\\^", "raised to the", "to the", "power"],
  first                  :  ["the first", "first"],
  last                   :  ["the last", "last", "final"],
  character              :  ["the character", "character", "the letter", "letter"],
  length                 :  ["the length of", "length of", "length", "len"],
  //concatenate            :  ["joined with", "concatenated with", "concatenate", "join", "with", "plus", "\\+"],
  concatenate            :  ["concatenated with", "concatenate with", "concatenate"],//, "plus", "\\+"],
  join                   :  ["joined with", "join with", "join"],
  quotationMark          :  ['\\"', "\\'"],
  openBracket            :  ["{"],
  closeBracket           :  ["}"],
  openParenthesis        :  ["\\("],
  closeParenthesis       :  ["\\)"],
  statementSeparator     :  [/\.|;|\r\n|\r|\n/],
  fullStatementSeparator :  [/\.\s+|\r\n|\r|\n/]
};

var tokens = Object.keys(tokenPatterns);
var regExTokenMatches = {};
var tokenMatches = {};
tokens.forEach(function(token) {
  tokenPatterns[token].forEach(function(pattern) {
    if(typeof pattern === "string") {
      var current = tokenMatches;
      pattern.split(" ").forEach(function(part, index, partsArr) {
        if(!current[part]) {
          current = current[part] = {};
        } else {
          current = current[part];
        }
        if(index === partsArr.length - 1) {
            // end of match, add token string indentifier as possibility
            current[token] = true;
        }
      });
    }
    else if(pattern instanceof RegExp) {
      // pattern Regular Expression should not match whitespace
      if(regExTokenMatches[token]) {
        regExTokenMatches[token].push(pattern);
      } else {
        regExTokenMatches[token] = [pattern];
      }
    }
    else {
      throw "Pattern must be string or Regular Expression";
    }
  });
});
