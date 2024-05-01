/*
Problem 1
Palindrome Checker Function

Objective: Write a JavaScript function isPalindrome(str) that checks
          if a given string str is a palindrome. 
          A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). 
          Example: Input: isPalindrome("racecar") Output: true Input: isPalindrome("hello") Output: false
*/

function PalindromeCheck(str){
    let j=str.length-1
    for(let i=0;i<str.length/2;i++){
        if(str[i] != str[j]){
            return false;
        }
        j--;
    }
    return true
    
}

PalindromeCheck("vishal");
