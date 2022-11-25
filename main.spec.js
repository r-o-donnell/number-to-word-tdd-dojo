const number_to_string = require("./main");

describe("number to string", () => {
  it("checks 0 as string zero", () => {
    const number = number_to_string(0);
    expect(number).toBe("zero");
  });

  it("checks 1 as string one", () => {
    const number = number_to_string(1);
    expect(number).toBe("one");
  });

  it("checks 2 as string two", () => {
    const number = number_to_string(2);
    expect(number).toBe("two");
  });
});
