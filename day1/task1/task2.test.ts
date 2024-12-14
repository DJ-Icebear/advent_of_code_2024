import { expect } from "jsr:@std/expect"
import { fileLinesToArray } from "../../file_io/readFile.ts"

const getNumberPair = (line: string): [number, number] => {
  const [left, right] = line.split("   ")

  return [parseInt(left), parseInt(right)]
}

const getArrays = (lines: string[]) => {
  return lines.reduce(
    (acc: Array<Array<number>>, line: string) => {
      const [leftNum, rightNum] = getNumberPair(line)

      acc[0].push(leftNum)
      acc[1].push(rightNum)

      return acc
    },
    [[], []]
  )
}

const countSimilarity = (left: number[], right: number[]) =>
  left.reduce((acc, left) => {
    const frequence = right.filter((right) => right === left).length
    return acc + (left * frequence)
  }, 0)

Deno.test("getNumberPair strips spaces", () => {
  const line = "1    2"
  const pair = getNumberPair(line)
  expect(pair).toEqual([1, 2])
})

const getAnswer = (lines: Array<string>): number => {
  const [leftSorted, rightSorted] = getArrays(lines)
  const count = countSimilarity(leftSorted, rightSorted)
  return count
}

Deno.test("sample input gives correct output", async () => {
  const lines = await fileLinesToArray("./day1/task1/sample.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(31)
})

Deno.test("puzzle input gives correct output", async () => {
  const lines = await fileLinesToArray("./day1/task1/input.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(18997088)
})
