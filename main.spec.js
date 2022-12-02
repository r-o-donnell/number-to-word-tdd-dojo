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

  it("returns three if pass in 3", () => {
    const number = number_to_string(3);
    expect(number).toBe("three");
  })

  it("returns four if pass in 4", () => {
    const number = number_to_string(4);
    expect(number).toBe("four");
  })

  it("returns five if pass in 5", () => {
    const number = number_to_string(5);
    expect(number).toBe("five");
  })

  it("returns six if pass in 6", () => {
    const number = number_to_string(6);
    expect(number).toBe("six");
  })

  it("returns seven if pass in 7", () => {
    const number = number_to_string(7);
    expect(number).toBe("seven");
  })

  it("returns eight if pass in 8", () => {
    const number = number_to_string(8);
    expect(number).toBe("eight");
  })

  it("returns nine if pass in 9", () => {
    const number = number_to_string(9);
    expect(number).toBe("nine");
  })
});

describe("input numbers with less than 20", () => {
  it("returns ten if pass in 10", () => {
    const number = number_to_string(10);
    expect(number).toBe("ten");
  });

  it("returns eleven if pass in 11", () => {
    const number = number_to_string(11);
    expect(number).toBe("eleven");
  });
  it("returns twelve if pass in 12", () => {
    const number = number_to_string(12);
    expect(number).toBe("twelve");
  });
  it("returns thirteen if pass in 13", () => {
    const number = number_to_string(13);
    expect(number).toBe("thirteen");
  });
  it("returns fourteen if pass in 14", () => {
    const number = number_to_string(14);
    expect(number).toBe("fourteen");
  });
  it("returns fifteen if pass in 15", () => {
    const number = number_to_string(15);
    expect(number).toBe("fifteen");
  });
  it("returns sixteen if pass in 16", () => {
    const number = number_to_string(16);
    expect(number).toBe("sixteen");
  });
  it("returns seventeen if pass in 17", () => {
    const number = number_to_string(17);
    expect(number).toBe("seventeen");
  });
  it("returns eighteen if pass in 18", () => {
    const number = number_to_string(18);
    expect(number).toBe("eighteen");
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

  //  it("returns twenty-five if pass in 25", () => {
  //    const number = number_to_string(25);
  //    expect(number).toBe("twenty-five");
  //  });
});

describe("input number two digits 30 or over", () => {
  it("returns thirty if pass in 30", () => {
    const number = number_to_string(30);
    expect(number).toBe("thirty");
  });

})

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
