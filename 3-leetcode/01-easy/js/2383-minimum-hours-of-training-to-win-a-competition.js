const minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let answer = 0;
  let energySum = energy.reduce((acc, v) => acc + v, 0);

  while (initialEnergy < energySum) {
    initialEnergy++;
    answer++;
  }
  if (initialEnergy === energySum) answer++;

  while (experience.length) {
    if (initialExperience > experience[0]) {
      initialExperience += experience.shift();
    } else {
      initialExperience++;
      answer++;
    }
  }
  return answer;
};
