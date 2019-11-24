const romanNumeralMap = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
];

const convertToRomanNumerals = number => {
  let remaining = number;

  return romanNumeralMap.reduce((agg, [numeral, value]) => {
    const numeralAmount = Math.floor(remaining / value);
    remaining = remaining - numeralAmount * value;
    return agg.concat(numeral.repeat(numeralAmount));
  }, '');
};

export default convertToRomanNumerals;
