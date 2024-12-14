import { expect } from "jsr:@std/expect"
import { fileLinesToArray } from "../../file_io/readFile.ts"
import { getAnswer } from "./task2.ts";

Deno.test("sample input gives correct output", async () => {
  const lines = await fileLinesToArray("day1/shared/sample.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(31)
})

Deno.test("puzzle input gives correct output", async () => {
  const lines = await fileLinesToArray("day1/shared/input.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(18997088)
})
