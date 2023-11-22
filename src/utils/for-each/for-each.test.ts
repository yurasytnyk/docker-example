import { forEach } from "./for-each";

const mockCallback = jest.fn((x) => 42 + x);

// const myMock1 = jest.fn();
// const a = new myMock1();
// console.log(myMock1.mock.instances);

// const myMock2 = jest.fn();
// const b = {};
// const bound = myMock2.bind(b);
// bound();
// console.log(myMock2.mock.contexts);

// const myMock3 = jest.fn();
// myMock3.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

// console.log(myMock3(), myMock3(), myMock3(), myMock3());

const filterTestFn = jest.fn();

filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter((num) => filterTestFn(num));
console.log(result);

console.log(filterTestFn.mock.calls[0][0]);
console.log(filterTestFn.mock.calls[1][0]);

describe("forEach module", () => {
  it("forEach mock function", () => {
    forEach([0, 1], mockCallback);

    expect(mockCallback.mock.calls).toHaveLength(2);

    expect(mockCallback.mock.calls[0][0]).toBe(0);

    expect(mockCallback.mock.calls[1][0]).toBe(1);

    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
