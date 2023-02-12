let animals = ["elephant", "zebra", "bear", "tiger"];
beforeEach(() => {
  animals = ["elephant", "zebra", "bear", "tiger"];
});

// beforeAll(() => {});
// afterAllAll(() => {});
// afterEach(() => {});
beforeEach(() => {
  animals = ["elephant", "zebra", "bear", "tiger"];
});
describe("animals array", () => {
  it("should add animal to end of the array", () => {
    animals.push("alligator");
    expect(animals[animals.length - 1]).toBe("alligator");
  });
  it("should add animal to beginning of the array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
