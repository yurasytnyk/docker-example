import axios from "axios";

import Users from "./users.api";

jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({ data: [] }),
}));

describe("users api", () => {
  it("should fetch users", () => {
    const users = [{ name: "Bob" }];
    const res = { data: users };

    return Users.all().then((data) => expect(data).toEqual(users));
  });
});
