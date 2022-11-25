const number_to_string = (number) => {
  digit_map = {0: "zero", 1: "one", 2: "two"}

  return digit_map[number];
};

module.exports = number_to_string;
