function fahrenheitToCelsius(fahrenheit) {
    // Fahrenheit to Celsius
    return (fahrenheit - 32) * 5 / 9;
  }
  
  // example case:
  const fahrenheit = 100; 
  const celsius = fahrenheitToCelsius(fahrenheit);
  console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`); 
  