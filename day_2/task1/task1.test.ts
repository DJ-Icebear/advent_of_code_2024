import { expect } from "jsr:@std/expect"
import { getAnswer, isDecreasing, isIncreasing, isSafe } from "./task1.ts";
import { fileLinesToArray } from "../../file_io/readFile.ts";

Deno.test("isIncreasing returns true for increasing line", () => {
  const line = [1, 3, 6, 7, 9]

  expect(isIncreasing(line)).toBe(true)
})

Deno.test("isIncreasing returns false for non-increasing line", () => {
  const line = [8, 6, 4, 4, 1]

  expect(isIncreasing(line)).toBe(false)
})

Deno.test("isDecreasing returns true for increasing line", () => {
  const line = [7, 6, 4, 2, 1]

  expect(isDecreasing(line)).toBe(true)
})

Deno.test("isDecreasing returns false for non-increasing line", () => {
  const line = [1, 3, 2, 4, 5]

  expect(isDecreasing(line)).toBe(false)
})

Deno.test("isSafe returns safe for safe line", () => {
  const line = '7 6 4 2 1'

  expect(isSafe(line)).toBe(true)
})


Deno.test("isSafe returns false for unsafe line", () => {
  const line = '1 2 7 8 9'

  expect(isSafe(line)).toBe(false)
})

Deno.test.only("sample input gives correct output", async () => {
  const reports = await fileLinesToArray("day_2/shared/sample.txt")

  const answer = getAnswer(reports)
  expect(answer).toBe(2)
})

Deno.test("real puzzle input gives correct output", async () => {
  const lines = await fileLinesToArray("day_2/shared/input.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(334)
})
