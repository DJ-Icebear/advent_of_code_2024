export const getAnswer = (reports: Array<string>): number => {
  return reports.reduce((acc, report) => {
    if (isSafe(report)) {
      acc += 1
    }

    return acc
  }, 0)
}

export const isSafe = (report: string): boolean => {
  const digitsArray = report.split(' ').map((digit) => parseInt(digit))

  const increasing = isIncreasing(digitsArray)
  const decreasing = isDecreasing(digitsArray)

  const isSafe = increasing || decreasing

  return isSafe
}

export const isIncreasing = (digitsArray: Array<number>): boolean => {
  let removed = 0

  return digitsArray.every((digit, index) => {
    if (index === 0) {
      return true
    }

    const previousDigit = digitsArray[index - 1]

    const difference = digit - previousDigit

    if (difference <= 0 || difference > 3) {
      if (removed > 0) return false
      removed += 1
      digitsArray.splice(index, 1)
    }

    return true
  })
}

export const isDecreasing = (digitsArray: Array<number>): boolean => {
  let removed = 0

  return digitsArray.every((digit, index) => {
    if (index === 0) {
      return true
    }

    const previousDigit = digitsArray[index - 1]

    const difference = digit - previousDigit

    if (difference >= 0 || difference < -3) {
      if (removed > 0) return false
      removed += 1
      digitsArray.splice(index, 1)
    }

    return true
  })
}