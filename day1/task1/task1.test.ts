import { expect } from "jsr:@std/expect"
import { countDistance, getAnswer } from "./task1.ts";
import { fileLinesToArray } from "../../file_io/readFile.ts";

Deno.test("countDistance", () => {
  const leftSorted = [1, 2, 3]
  const rightSorted = [4, 5, 6]
  const count = countDistance(leftSorted, rightSorted)
  expect(count).toEqual(9)
})

Deno.test("sample input gives correct output", async () => {
  const lines = await fileLinesToArray("day1/shared/sample.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(11)
})

Deno.test("puzzle input gives correct output", async () => {
  const lines = await fileLinesToArray("day1/shared/input.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(1873376)
})
