const number_to_string = (int) => {
  if (isInValidInput(int)) {
    return "Bad Request"
  }
  const stringnumber = new String(int)
  if (stringnumber < 20){
    return baseNumbers[int];
  }else if(stringnumber > 99){
    result = ""
    result += baseNumbers[stringnumber[0]]
    result += "-hundred"
    return result
  }else {
    result = ""
    result += baseNumbers[stringnumber[0]+"0"]
    if (stringnumber[1] == 0){
      return result
    }
    result += "-"
    result += baseNumbers[stringnumber[1]]
    return  result
  }
};

const isInValidInput =(int) =>{
  return typeof int !== "number" || int > 9999 || int < 0;
}

const baseNumbers = {
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
  40: "fourty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
}

module.exports = number_to_string;
