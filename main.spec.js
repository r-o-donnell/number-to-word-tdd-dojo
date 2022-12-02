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

describe("two-digit non-constructed numbers", () => {
  it("returns twenty if pass in 20", () => {
    const number = number_to_string(20);
    expect(number).toBe("twenty");
  });
  it("returns thirty if pass in 30", () => {
    const number = number_to_string(30);
    expect(number).toBe("thirty");
  });
  it("returns fourty if pass in 40", () => {
    const number = number_to_string(40);
    expect(number).toBe("fourty");
  });
  it("returns fifty if pass in 50", () => {
    const number = number_to_string(50);
    expect(number).toBe("fifty");
  });

  it("returns sixty if pass in 60", () => {
    const number = number_to_string(60);
    expect(number).toBe("sixty");
  });

  it("returns seventy if pass in 70", () => {
    const number = number_to_string(70);
    expect(number).toBe("seventy");
  });
  it("returns eighty if pass in 80", () => {
    const number = number_to_string(80);
    expect(number).toBe("eighty");
  });

  it("returns ninety if pass in 90", () => {
    const number = number_to_string(90);
    expect(number).toBe("ninety");
  });
});




describe("two-digit constructed numbers", () => {
  it("returns twenty-one if pass in 21", () => {
    const number = number_to_string(21);
    expect(number).toBe("twenty-one");
  });
});

describe("three-digit constructed numbers", () => {
  it("returns one-hundred if pass in 100", () => {
    const number = number_to_string(100);
    expect(number).toBe("one-hundred");
  });
  it("returns two-hundred if pass in 200", () => {
    const number = number_to_string(200);
    expect(number).toBe("two-hundred");
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
