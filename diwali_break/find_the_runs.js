function findRuns(a) {
  if (a.length < 2) return a.length === 1 ? [[a[0]]] : [];

  const runs = [];
  let currentRun = [a[0]];
  let isDecreasing = false;

  for (let i = 1; i < a.length; i++) {
    const isIncreasing = a[i - 1] <= a[i];
    const hasDirectionChanged = isDecreasing ? isIncreasing : !isIncreasing;

    if (hasDirectionChanged) {
      runs.push(currentRun);
      currentRun = [];
      isDecreasing = !isDecreasing;
    }
    currentRun.push(a[i]);
  }

  runs.push(currentRun);
  return runs;
}

console.log(findRuns([1, 2, 3, 4, 5, 5, 5, 4, 3, 4, 2, 1]));
