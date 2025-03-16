function convertLength(value, unit) {
    if (unit === "cm") {
      // centimeters to kilometers
      return value / 100000;
    } else if (unit === "km") {

      // kilometers to centimeters
      return value * 100000;
    } else {
      throw new Error("Invalid unit. Use 'cm' for centimeters or 'km' for kilometers.");
    }
  }
  
  // example :
  console.log(convertLength(100000, "cm")); // 1 (100,000 cm = 1 km)
  console.log(convertLength(1, "km")); // 100000 (1 km = 100,000 cm)
  