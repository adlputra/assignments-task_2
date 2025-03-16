function convertLength(value: number, fromUnit: string): string {
    let result: number;
  
    if (fromUnit === "cm") {
      result = value / 100000; // centimeters to kilometers
      return `${value} cm is equal to ${result} km`;
    } else if (fromUnit === "km") {
      result = value * 100000; // kilometers to centimeters
      return `${value} km is equal to ${result} cm`;
    } else {
      return "Invalid unit. Please use 'cm' or 'km'.";
    }
  }
  
  // example
  console.log(convertLength(100000, "cm")); // 100000 cm is equal to 1 km
  console.log(convertLength(1, "km"));    // 1 km is equal to 100000 cm
  