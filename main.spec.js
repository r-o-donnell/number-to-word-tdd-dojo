const number_to_string = require("./main");

describe("number to string", () => {
  it("returns one if pass in 1", () => {

    const number = number_to_string(1);
    expect(number).toBe("one");

  });

  it("returns two if pass in 2", () => {
    const number = number_to_string(2);
    expect(number).toBe("two");
  })
});


describe("input validation", () => {  
  it("returns bad request for string inputs", () => {
    const number = number_to_string("#");
    expect(number).toBe("Bad Request");
  })
  it("returns bad request for boolean", () => {
    const number = number_to_string(false);
    expect(number).toBe("Bad Request");
  })
});
