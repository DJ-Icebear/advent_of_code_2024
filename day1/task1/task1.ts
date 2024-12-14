import { getNumberPair } from "../shared/shared.ts"

export const getSortedArrays = (lines: string[]) => {
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

export const countDistance = (leftSorted: number[], rightSorted: number[]) =>
  leftSorted.reduce((acc, left, index) => {
    const right = rightSorted[index]
    const distance = Math.abs(right - left)

    return acc + distance
  }, 0)

export const getAnswer = (lines: Array<string>): number => {
  const [leftSorted, rightSorted] = getSortedArrays(lines)
  const count = countDistance(leftSorted, rightSorted)
  return count
}
