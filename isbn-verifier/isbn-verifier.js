export const isValid = (serial) => {
  const splitedSerial = serial.replace(/-/g, "").split("");

  if (splitedSerial.length !== 10) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < 10; i++) {
    const digit =
      splitedSerial[i] === "X" && i === 9 ? 10 : parseInt(splitedSerial[i], 10);
    if (isNaN(digit)) {
      return false;
    }
    result += digit * (10 - i);
  }

  return result % 11 === 0;
};
