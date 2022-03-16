const result = require("./exercise-4");

describe("Exercise 4", () => {
  it("destructure the correct data", () => {
    const answer = ["Michael", true, "Scranton"];
    expect(result).toStrictEqual(answer);
  });
});
