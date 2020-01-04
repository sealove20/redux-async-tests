import users from "./store/reducers/users";

test("users reducer", () => {
  it("should return the initial state", () => {
    expect(users(undefined, {}).toEqual({}));
  });
});
