const number_to_string = (int) => {
  if (isInValidInput(int)) {
    return "Bad Request"
  }
  return convertDigitToString(int);

};

const isInValidInput =(int) =>{
  return typeof int !== "number";
}

const convertDigitToString = (digit) => {
  const library = {
    0: "zero",
    1: "one",
    2: "two",
    // 3: "three",
    // 4: "four",
    // 5: "five",
    // 6: "six",
    // 7: "seven",
    // 8: "eight",
    // 9: "nine",
  }

  return library[digit];
}

module.exports = number_to_string;
