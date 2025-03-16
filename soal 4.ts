
function removeFirstOccurrence(str: string, searchStr: string): string {
  return str.replace(searchStr, '');
}

//example
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"