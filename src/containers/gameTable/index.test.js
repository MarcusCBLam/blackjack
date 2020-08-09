import { GetUserScore } from "./helper";

test("test the return of the user's score, should be blank if the score is zero", () => {
  expect(GetUserScore(12)).toBe(12);
  expect(GetUserScore(0)).toBe("");
});
