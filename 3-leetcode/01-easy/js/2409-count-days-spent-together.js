const countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob
) {
  let result = 0;
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let aliceDate = [];
  let bobDate = [];

  let aliceAD = arriveAlice.split("-");
  let aliceDD = leaveAlice.split("-");
  let bobAD = arriveBob.split("-");
  let bobDD = leaveBob.split("-");
  let aliceTotal = 0;
  let bobTotal = 0;
  let aliceTotal2 = 0;
  let bobTotal2 = 0;
  for (let i = 0; i < +aliceAD[0] - 1; i++) aliceTotal += days[i];
  aliceTotal += +aliceAD[1];
  for (let i = 0; i < +bobAD[0] - 1; i++) bobTotal += days[i];
  bobTotal += +bobAD[1];
  for (let i = 0; i < +aliceDD[0] - 1; i++) aliceTotal2 += days[i];
  aliceTotal2 += +aliceDD[1];
  for (let i = 0; i < +bobDD[0] - 1; i++) bobTotal2 += days[i];
  bobTotal2 += +bobDD[1];

  for (let i = aliceTotal; i <= aliceTotal2; i++) {
    aliceDate.push(i);
  }
  for (let i = bobTotal; i <= bobTotal2; i++) {
    bobDate.push(i);
  }
  for (let i = 0; i < aliceDate.length; i++) {
    if (bobDate.includes(aliceDate[i])) result++;
  }
  return result;
};
