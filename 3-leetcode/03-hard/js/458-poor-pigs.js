let poorPigs = (buckets, minutesToDie, minutesToTest) => {
  let pigs = 0;
  let tests = Math.floor(minutesToTest / minutesToDie);
  while ((tests + 1) ** pigs < buckets) pigs++;
  return pigs;
};
