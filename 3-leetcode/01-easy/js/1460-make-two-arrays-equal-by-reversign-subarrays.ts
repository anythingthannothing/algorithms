const canBeEqual = (target: number[], arr: number[]): boolean => {
  const targetFreq = Array.from({length: 1001}, v => 0);
  
  for (let value of target) {
    targetFreq[value]++;
  }
  
  for (let value of arr) {
    if (!targetFreq[value]) {
      return false;
    }
    
    targetFreq[value]--;
  }
  
  return true;
};