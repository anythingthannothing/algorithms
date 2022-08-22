const mirrorReflection = (p, q) => {
  // Set current position to [0, 0] meaning x axis, y axis
  let position = [0, 0];
  // Set counter to decide position[0]'s value
  let counter = 0;
  let yPosition = 0;
  // ligth reflect to upward when it starts
  let upward = true;

  while (true) {
    // counter is for counting round
    counter++;
    if (counter % 2 === 1) position[0] = p;
    else position[0] = 0;

    if (upward === true) yPosition += q;
    else yPosition -= q;

    if (yPosition > p) {
      yPosition = p - (yPosition - p);
      upward = false;
    } else if (yPosition < 0) {
      yPosition = -yPosition;
      upward = true;
    }

    position[1] = yPosition;

    if (position[0] === p && position[1] === 0) return 0;
    if (position[0] === p && position[1] === p) return 1;
    if (position[0] === 0 && position[1] === p) return 2;
  }
};
