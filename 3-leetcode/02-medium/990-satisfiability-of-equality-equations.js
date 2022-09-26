var equationsPossible = function (equations) {
  let p = new Map();

  for (let eq of equations) {
    let x = eq[0],
      y = eq[3],
      cond = eq[1];

    if (!p.has(x)) p.set(x, x);
    if (!p.has(y)) p.set(y, y);

    if (cond === "=") union(x, y);
  }

  for (let eq of equations) {
    let x = eq[0],
      y = eq[3],
      cond = eq[1];

    if (cond === "!" && find(x) === find(y)) return false;
  }

  function union(x, y) {
    p.set(find(x), find(y));
  }

  function find(letter) {
    while (p.get(letter) !== letter) {
      p.set(letter, p.get(p.get(letter))); // compress path
      letter = p.get(letter);
    }

    return letter;
  }

  return true;
};
