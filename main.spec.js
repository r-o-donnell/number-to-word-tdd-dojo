const number_to_string = require("./main");

describe("input numbers with one digit", () => {
  it("returns one if pass in 1", () => {

    const number = number_to_string(1);
    expect(number).toBe("one");

  });

  it("returns two if pass in 2", () => {
    const number = number_to_string(2);
    expect(number).toBe("two");
  })
});

describe("input numbers with less than 20", () => {
  it("returns eleven if pass in 11", () => {
    const number = number_to_string(11);
    expect(number).toBe("eleven");
  });

  it("returns nineteen if pass in 19", () => {
    const number = number_to_string(19);
    expect(number).toBe("nineteen");
  });
});

describe("input number two digits 20 or over", () => {
  it("returns twenty if pass in 20", () => {
    const number = number_to_string(20);
    expect(number).toBe("twenty");
  });

  it("returns twenty-one if pass in 21", () => {
    const number = number_to_string(21);
    expect(number).toBe("twenty-one");
  });
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

  it("returns bad request for number greater than 4 digits", () => {
    const number = number_to_string(10000);
    expect(number).toBe("Bad Request");
  })

  it("returns bad request for negative numbers", () => {
    const number = number_to_string(-1);
    expect(number).toBe("Bad Request");
  })
});
