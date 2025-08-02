/* Given two strings s and t, return true if t is an anagram
of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case? */
let s = "rat";
let t = "car";


//I could sort the strings first so that all  elements are all in the same order, then just count compare the strings for equality, if equal, then they should be anagrams of eachother
validAnagram(s, t);
function validAnagram(s, t){
    sortedSArray = s.split("").sort();
    sortedTArray = t.split("").sort();
    //tried sort() on the string at first, then realized you can only sort on Arrays (I have to split the string into an Array first and then use sort()))

    //now I have to recombine the arrays back into strings to compare them
     s = sortedSArray.join("");
    t = sortedTArray.join("");
    console.log(s); //check output
    console.log(t);// check output
    if (s === t){
        console.log("true");
        return true
    }
    else{
        console.log("false");
        return false
    }

}