/* A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false */


var checkIfPangram = function (sentence) {

  if (sentence.length < 26) return false;
  return new Set(sentence.split("")).size === 26;

};



/* To solve this problem, we can use a Hash table (in this case, I use Set()).
The first thing to do is check for the number of characters in the string,
if it is less than 26, it makes no sense to check it.
If the string is still larger, we create a new Set(), 
filling it with characters from the string, and setting its size to 26, 
since Set() can only store unique values, 26 unique letters will fall into it, 
which will mean the true in this task, otherwise, if there are less than 26 unique letters - false. */


