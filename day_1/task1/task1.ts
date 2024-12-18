export const getAnswer = (lines: Array<string>): number => {
  // sort arrays
  const one = [];
  const two = [];
  for (const line of lines) {
    const [x,y] => line.split("   ").map(Number);
    one.push(x);
    two.push(y);
  }

  one.sort();
  two.sort();

  return one.reduce((acc, val, idx) => acc + Math.abs(val - two[idx]), 0);
  // compare the distance for each location pair
  // sum the distances
};
