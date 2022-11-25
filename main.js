const number_to_string = (int) => {
  if (typeof int !== "number") {
    return "Bad Request"
  } 
  if(int==1){
      return "one";
  }
  if(int==2){
    return "two";
}
};

module.exports = number_to_string;
