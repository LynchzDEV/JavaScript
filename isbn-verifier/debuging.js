const serials = "3-598-21508-X";
const splitedSerial = [];

const isValid = (serial) => {

  const temp = serial.replace(/-/g, '').split('');

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "X") {
      splitedSerial.push(10); 
    } else {
      splitedSerial.push(parseInt(temp[i], 10)); 
    }
  }
};

isValid(serials);

console.log(splitedSerial);
