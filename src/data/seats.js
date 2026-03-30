const ROW_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

// Deterministic pseudo-random based on seat id
function seededRandom(seed) {
  let x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export function generateSeats(concert) {
  const { id, rows, seatsPerRow, joyPassSeats, regularPrice, joyPassPrice } = concert;

  // JoyPass seats occupy the first N seats (rows A & B front)
  const joyPassSeatCount = joyPassSeats;

  const seats = [];
  let seatIndex = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < seatsPerRow; col++) {
      const isJoyPass = seatIndex < joyPassSeatCount;
      const seatId = `${id}-${ROW_LABELS[row]}${col + 1}`;
      // Deterministically mark some seats as taken
      const rand = seededRandom(seatIndex * 17 + id.charCodeAt(id.length - 1));
      const isTaken = isJoyPass ? false : rand < 0.3;

      seats.push({
        id: seatId,
        row: ROW_LABELS[row],
        col: col + 1,
        rowIndex: row,
        colIndex: col,
        isJoyPass,
        isTaken,
        price: isJoyPass ? joyPassPrice : regularPrice,
        type: isJoyPass ? 'joypass' : 'regular',
      });

      seatIndex++;
    }
  }

  return seats;
}
