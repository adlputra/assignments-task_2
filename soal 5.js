function isPalindrome(str) {
    // check the string is a palindrome or not
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 
    return str === str.split('').reverse().join('');
  }
  
  // example
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("hello")); // false
  