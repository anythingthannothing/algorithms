const countTime = function (time) {
  const [hh, mm] = time.split(":");
  let h, m;
  if (time[0] === "?") {
    if (time[1] === "?") {
      h = 24;
    } else if (time[1] !== "?" && +time[1] < 4) {
      h = 3;
    } else {
      h = 2;
    }
  } else {
    if (time[1] !== "?") {
      h = 1;
    } else {
      if (time[0] === "2") {
        h = 4;
      } else {
        h = 10;
      }
    }
  }

  if (time[3] === "?") {
    if (time[4] === "?") {
      m = 60;
    } else {
      m = 6;
    }
  } else {
    if (time[4] === "?") {
      m = 10;
    } else {
      m = 1;
    }
  }
  return h * m;
};
