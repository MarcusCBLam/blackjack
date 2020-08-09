import { GetCardPoints, suits, faces } from "./index";

test("test GetCardPoints - return the correct value from the cardID", () => {
  expect(GetCardPoints("spade7")).toBe(7);
  expect(GetCardPoints("diamondA")).toBe(11);
  expect(GetCardPoints("diamondX")).toBe(10);
  expect(GetCardPoints("heartJ")).toBe(10);
  expect(GetCardPoints("heartQ")).toBe(10);
  expect(GetCardPoints("clubK")).toBe(10);
});

test("test suits - correct array of suits", () => {
  const result1 = ["spade", "heart", "club", "diamond"];
  expect(suits).toStrictEqual(result1);
});

test("test faces - correct array of faces", () => {
  const result2 = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "X", "J", "Q", "K"];
  expect(faces).toStrictEqual(result2);
});
