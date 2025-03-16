function isPalindrome(str: string): boolean {
    // check the string is a palindrome or not
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // 
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // example
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("hello")); // false