import { expect } from "jsr:@std/expect"
import { fileLinesToArray } from "../../file_io/readFile.ts"

const getNumberPair = (line: string): [number, number] => {
  const [left, right] = line.split("   ")

  return [parseInt(left), parseInt(right)]
}

const getSortedArrays = (lines: string[]) => {
  const [left, right] = lines.reduce(
    (acc: Array<Array<number>>, line: string) => {
      const [leftNum, rightNum] = getNumberPair(line)

      acc[0].push(leftNum)
      acc[1].push(rightNum)

      return acc
    },
    [[], []]
  )
  return [left.sort(), right.sort()]
}

const countDistance = (leftSorted: number[], rightSorted: number[]) =>
  leftSorted.reduce((acc, left, index) => {
    const right = rightSorted[index]
    const distance = Math.abs(right - left)

    return acc + distance
  }, 0)

Deno.test("getNumberPair strips spaces", () => {
  const line = "1    2"
  const pair = getNumberPair(line)
  expect(pair).toEqual([1, 2])
})

Deno.test("countDistance", () => {
  const leftSorted = [1, 2, 3]
  const rightSorted = [4, 5, 6]
  const count = countDistance(leftSorted, rightSorted)
  expect(count).toEqual(9)
})

const getAnswer = (lines: Array<string>): number => {
  const [leftSorted, rightSorted] = getSortedArrays(lines)
  const count = countDistance(leftSorted, rightSorted)
  return count
}

Deno.test("sample input gives correct output", async () => {
  const lines = await fileLinesToArray("./day1/task1/sample.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(11)
})

Deno.test("puzzle input gives correct output", async () => {
  const lines = await fileLinesToArray("./day1/task1/input.txt")

  const answer = getAnswer(lines)
  expect(answer).toBe(1873376)
})
