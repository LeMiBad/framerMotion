export const getMatchPercentage = (input: string, target: string): number => {
  let matchCount = 0;
  for (let i = 0; i < input.length && i < target.length; i++) {
    if (input[i] === target[i]) {
      matchCount++;
    }
  }
  return (matchCount / target.length) * 100;
};
