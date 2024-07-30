const isIsomorphic = (s: string, t: string): boolean => {
  const length = s.length;
  const sArr = [];
  const tArr = [];

  for (let i = 0; i < length; i++) {
    const sCode = s.charCodeAt(i);
    const tCode = t.charCodeAt(i);

    if (sArr[sCode] !== tArr[tCode]) {
      return false;
    }

    sArr[sCode] = i;
    tArr[tCode] = i;
  }

  return true;
};
