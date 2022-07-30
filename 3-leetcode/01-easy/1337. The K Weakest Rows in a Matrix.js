let kWeakestRows = (mat, k) => {
    let newMat = mat.map((v, i) => [v.reduce((acc, v) => acc + v, 0), i]);
    newMat.sort((a, b) => {
      if (a[0] < b[0]) return a[0] - b[0];
      else if (a[0] === b[0]) return a[1] - b[1];
    });
    
    return newMat.slice(0, k).map(v => v[1]);
  };