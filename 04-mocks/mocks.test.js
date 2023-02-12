const axios = require("axios");

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};
const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results.data;
};
test("mock callback", () => {
  const mockCalledback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCalledback);
  expect(mockCalledback.mock.calls.length).toBe(2);

  expect(mockCalledback.mock.calls[0][0]).toBe(0);

  expect(mockCalledback.mock.calls[1][0]).toBe(1);

  expect(mockCalledback.mock.results[0].value).toBe(42);
  expect(mockCalledback.mock.results[1].value).toBe(43);
});
it("mock return", () => {
  const mock = jest.fn();
  //you can append as many as you want
  //is related to how many times you call the mock function
  mock.mockReturnValueOnce(true).mockReturnValueOnce(false);
  const results = mock();
  const resultSecond = mock();
  expect(results).toBe(true);
  expect(resultSecond).toBe(false);
});
test("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Go to the grocery store",
    },
  });
  const results = await fetchData(1);
  expect(results.todo).toBe("Go to the grocery store");
});
