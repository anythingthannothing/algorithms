const rotateString = (s: string, goal: string): boolean => {
  return s.length == goal.length && goal.repeat(2).includes(s);
};
