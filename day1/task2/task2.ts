import { getNumberPair } from "../shared/shared.ts";

export const getArrays = (lines: string[]) => {
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

export const countSimilarity = (left: number[], right: number[]) =>
  left.reduce((acc, left) => {
    const frequence = right.filter((right) => right === left).length
    return acc + left * frequence
  }, 0)

export const getAnswer = (lines: Array<string>): number => {
  const [leftSorted, rightSorted] = getArrays(lines)
  const count = countSimilarity(leftSorted, rightSorted)
  return count
}
