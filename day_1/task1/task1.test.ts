import { expect } from "jsr:@std/expect";
import { getAnswer } from "./task1.ts";
import { fileLinesToArray } from "../../file_io/readFile.ts";

Deno.test("sample input gives correct output", async () => {
  const lines = await fileLinesToArray("day_1/shared/sample.txt");

  const answer = getAnswer(lines);
  expect(answer).toBe(11);
});

// Deno.test("real puzzle input gives correct output", async () => {
//   const lines = await fileLinesToArray("day_1/shared/input.txt");

//   const answer = getAnswer(lines);
//   expect(answer).toBe(2756096);
// });
