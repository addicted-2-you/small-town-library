export function createIncremenator(seed = 0, defaultStep = 1) {
  let count = seed;

  return (step = defaultStep) => {
    count += step;
    return count;
  };
}
