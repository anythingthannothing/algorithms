const countSeniors = (details: string[]): number => {
  let result = 0;
  details.forEach((v) => {
    if (+v.substring(11, 13) > 60) {
      result++;
    }
  });

  return result;
};
