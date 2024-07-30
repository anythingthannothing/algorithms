const haveConflict = function (event1, event2) {
  let event1Start = +event1[0].split(":")[0] * 60 + +event1[0].split(":")[1];
  let event1End = +event1[1].split(":")[0] * 60 + +event1[1].split(":")[1];
  let event2Start = +event2[0].split(":")[0] * 60 + +event2[0].split(":")[1];
  let event2End = +event2[1].split(":")[0] * 60 + +event2[1].split(":")[1];
  if (event2Start >= event1Start && event1End >= event2Start) return true;
  if (event1Start >= event2Start && event2End >= event1Start) return true;

  return false;
};
