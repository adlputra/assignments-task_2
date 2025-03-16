function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  // result
  const fahrenheitTemp = 100; // Fahrenheit temperature
  const celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
  
  console.log(`${fahrenheitTemp}°F is equal to ${celsiusTemp.toFixed(2)}°C`);
  