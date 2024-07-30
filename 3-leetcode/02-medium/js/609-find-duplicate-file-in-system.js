const findDuplicate = function (paths) {
  let result = [];
  let contentMap = new Map();
  let len = paths.length;
  paths = paths.map((path) => path.split(" "));
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < paths[i].length; j++) {
      let content = paths[i][j].split("(")[1];
      if (!contentMap.has(content)) contentMap.set(content, []);
      contentMap
        .get(content)
        .push(`${paths[i][0]}/${paths[i][j].split("(")[0]}`);
    }
  }

  for (let [key, value] of contentMap) {
    if (value.length > 1) result.push(value);
  }

  return result;
};
