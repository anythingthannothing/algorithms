const combinationSum2 = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];

  candidates.sort((a: number, b: number) => a - b);

  const temp: number[] = [];

  backtrack(result, temp, candidates, target, 0);

  return result;
};

function backtrack(
  result: number[][],
  temp: number[],
  candidates: number[],
  target: number,
  index: number,
): void {
  if (target === 0) {
    result.push(temp.slice());
    return;
  }

  for (let i = index; i < candidates.length && target >= candidates[i]; i++) {
    if (i == index || candidates[i] != candidates[i - 1]) {
      temp.push(candidates[i]);
      backtrack(result, temp, candidates, target - candidates[i], i + 1);
      temp.pop();
    }
  }
}
