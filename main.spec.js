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

  it("checks 5 as string five", () => {
    const number = number_to_string(5);
    expect(number).toBe("five");
  });

  it("checks 8 as string eight", () => {
    const number = number_to_string(8);
    expect(number).toBe("eight");
  });

  it("checks 10 as string ten", () => {
    const number = number_to_string(10);
    expect(number).toBe("ten");
  });

  it("checks 20 as string twenty", () => {
    const number = number_to_string(20);
    expect(number).toBe("twenty");
  });

  it("checks 21 as string twenty-one", () => {
    const number = number_to_string(21);
    expect(number).toBe("twenty-one");
  });

  it("checks 29 as string twenty-nine", () => {
    const number = number_to_string(29);
    expect(number).toBe("twenty-nine");
  });

  it("checks 30 as string thirty", () => {
    const number = number_to_string(30);
    expect(number).toBe("thirty");
  });

  it("checks 43 as string forty-three", () => {
    const number = number_to_string(43);
    expect(number).toBe("forty-three");
  });

  it("checks 54 as string fifty-four", () => {
    const number = number_to_string(54);
    expect(number).toBe("fifty-four");
  });

  it("checks 65 as string sixty-five", () => {
    const number = number_to_string(65);
    expect(number).toBe("sixty-five");
  });

  it("checks 76 as string seventy-six", () => {
    const number = number_to_string(76);
    expect(number).toBe("seventy-six");
  });

  it("checks 88 as string eighty-eight", () => {
    const number = number_to_string(88);
    expect(number).toBe("eighty-eight");
  });

  it("checks 99 as string ninty-nine", () => {
    const number = number_to_string(99);
    expect(number).toBe("ninty-nine");
  });

  it("checks 100 as string hundred", () => {
    const number = number_to_string(100);
    expect(number).toBe("hundred");
  });

  it("checks 111 as string hundred-eleven", () => {
    const number = number_to_string(111);
    expect(number).toBe("hundred-eleven");
  });

  it("checks 188 as string hundred-eighty-eight", () => {
    const number = number_to_string(188);
    expect(number).toBe("hundred-eighty-eight");
  });

});
