const number_to_string = require("./main");

describe("number to string", () => {
  it("passes", () => {
    const number = number_to_string();
    expect(number).toBe("number");
  });
});
