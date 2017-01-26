const getScoreOfChar = (letter) => {
  const index = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż"
    .indexOf((letter || '%').toLowerCase());

  const score = index + 1;

  return score;
};

const sum = (a, b) => a + b;

const getScoreOfSentence = (sentence) => 
  sentence
    .split('')
    .map(getScoreOfChar)
    .reduce(sum, 0);
