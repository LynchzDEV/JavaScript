function calculateBMI(weight, height) {
  return weight / parseFloat(height * height);
}

function getBMIMeaning(weight, height) {
  let BMI = calculateBMI(weight, height);
  if (BMI < 18.5) {
    console.log("Under Weight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal weight");
  } else if (BMI > 25.0) {
    console.log("Overweight");
  }
}

// getBMIMeaning(60, 1.7);

// ------------------------------------------------- //

function concatArray(arr1, arr2) {
  if ([arr1, arr2].every((arr) => arr === null || arr === undefined)) {
    return undefined;
  }

  arr1 = arr1 ?? [];
  arr2 = arr2 ?? [];

  let combined = arr1.concat(arr2).sort();

  if (combined.length === 0) {
    return "empty arr";
  }

  return combined;
}

let arr1 = null;
let arr2 = [2, 4, 6, 8, 0];

console.log(concatArray(arr1, arr2));

// ------------------------------------------------- //

