import { expect } from "jsr:@std/expect"
import { getAnswer } from "./task1.ts";
import { fileLinesToArray } from "../../file_io/readFile.ts";

Deno.test("sample input gives correct output", async () => {
  const lines = await fileLinesToArray("day_x/shared/sample.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(123)
})

Deno.test("real puzzle input gives correct output", async () => {
  const lines = await fileLinesToArray("day_x/shared/input.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(123)
})
