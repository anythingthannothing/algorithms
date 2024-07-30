const matchPlayersAndTrainers = function (players, trainers) {
  let result = 0;
  players.sort((a, b) => b - a);
  trainers.sort((a, b) => b - a);

  while (true) {
    if (!players.length || !trainers.length) break;
    let len = trainers.length;
    let player = players.pop();
    while (trainers.length) {
      if (player > trainers[len - 1]) {
        trainers.pop();
        len--;
        continue;
      } else {
        result++;
        trainers.pop();
        break;
      }
    }
  }

  return result;
};
