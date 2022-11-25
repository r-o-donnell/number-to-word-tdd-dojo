const digit_map = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninty",
  100: "hundred"
}

const two_digit_number_to_string = (number) => {
  if (number in digit_map) {
    return digit_map[number];
  }
  tens_place = Math.floor(number/10)
  ones_place = number%10
  return digit_map[tens_place*10]+"-"+digit_map[ones_place];
}

const number_to_string = (number) => {
  if (number in digit_map) {
    return digit_map[number];
  }
  if (number <= 100 ) {
    return two_digit_number_to_string(number)
  }
  hundreds_place = Math.floor(number/100)
  return digit_map[hundreds_place * 100]+"-"+two_digit_number_to_string(number%100)
};

module.exports = number_to_string;
