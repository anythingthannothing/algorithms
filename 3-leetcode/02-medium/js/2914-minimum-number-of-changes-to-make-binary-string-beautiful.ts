const minChanges = (s: string): number => {
  let minimumChangesRequired = 0;

  for (let i = 0; i < s.length; i += 2) {
    if (s[i] != s[i + 1]) {
      minimumChangesRequired++;
    }
  }

  return minimumChangesRequired;
};
