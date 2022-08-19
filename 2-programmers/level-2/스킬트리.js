function solution(skill, skill_trees) {
  let answer = skill_trees.length;
  let map = new Map();

  for (let i = skill.length - 1; i > 0; i--) {
    map.set(skill[i], skill[i - 1]);
  }

  for (let str of skill_trees) {
    let index = [];
    for (let i = 0; i < str.length; i++) {
      if (!map.has(str[i])) index.push(str[i]);
      else if (map.has(str[i]) && index.indexOf(map.get(str[i])) == -1) {
        answer--;
        break;
      } else {
        index.push(str[i]);
      }
    }
  }
  return answer;
}
