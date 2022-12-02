const number_to_string = (int) => {
  if (isInValidInput(int)) {
    return "Bad Request"
  }
  const stringnumber = new String(int)
  if (stringnumber < 20){
    return convertDigitToString(int);
  }
  else {
    result = ""
    result += convertDigitToString(stringnumber[0]+"0")
    if (stringnumber[1] == 0){
      return result
    }
    result += "-"
    result += convertDigitToString(stringnumber[1])
    return  result
  }
};

const isInValidInput =(int) =>{
  return typeof int !== "number" || int > 9999 || int < 0;
}

const convertDigitToString = (digit) => {
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
    19: "nineteen",
    20: "twenty"
  }

  return baseNumbers[digit];
}

module.exports = number_to_string;
