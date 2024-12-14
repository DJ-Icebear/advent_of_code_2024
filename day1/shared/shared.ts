import { expect } from "jsr:@std/expect"

export const getNumberPair = (line: string): [number, number] => {
  const [left, right] = line.split("   ")

  return [parseInt(left), parseInt(right)]
}
  
Deno.test("getNumberPair strips spaces", () => {
    const line = "1    2"
    const pair = getNumberPair(line)
    expect(pair).toEqual([1, 2])
  })
  