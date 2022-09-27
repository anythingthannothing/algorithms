const pushDominoes = function (dominoes) {
  let result = "";
  let len = dominoes.length;
  let forces = Array.from({ length: len }, (v) => 0);

  let force = 0;
  for (let i = 0; i < len; i++) {
    if (dominoes[i] === "R") force = len;
    else if (dominoes[i] === "L") force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] += force;
  }

  force = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (dominoes[i] === "L") force = len;
    else if (dominoes[i] === "R") force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] -= force;
  }

  for (let force of forces) {
    result += force > 0 ? "R" : force < 0 ? "L" : ".";
  }
  return result;
};
