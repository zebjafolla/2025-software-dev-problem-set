/* Given an array of strings strs, group the anagrams
together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.
 */
let strs = ["eat","tea","tan","ate","nat","bat"];
groupAnagrams(strs);
    function groupAnagrams(strs){
        // i can use a iteration method to go through each string and split it into an array full of chars -- then I can sort and join each one, which would leave me with each string in the strs array as the same words if they are anagrams, then I can compare equality and group accordingly if they are the same

        // sort the array
        // compare i and j (two for loops)
        //if i and j are equal, remove i from the array
        //save i in variable
        //add i to grouped array
        //compare variable to next index in j
        //if equal add to to the same index in the grouped array
        //same process of removing from i
        // when it gets to an item that doesnt compare as equal, create a new index in the grouped array and add to that index, while removing from the i array
        //this will probably work because they are all sorted beforehand
       

    
        //im going to need a way to group the encoded strs with an index; perhaps a map?
        console.log(strs);
        sortedSplitStrs = [];
        groupedObject = {};
        for (str of strs){
            let newStr = str.split("").sort().join("");
            if(!groupedObject[newStr]){
                groupedObject[newStr] = [];
            }
            groupedObject[newStr].push(str);
        }
        console.log(Object.values(groupedObject));
        sortedSplitStrs.sort();
        //i need to look up a built in function to check if there is a duplicate of the string -- if there is then I know it has more than one anagram in the strs, then I can log it
        // find out if str is unique in the sortedStrs;
        let groupedArray = [];
        let temp;
        let copySortedSplitStrs = [...sortedSplitStrs];//at first this confused me because i didnt know without the spread operator it would modify the original
        let length = sortedSplitStrs.length
        let tempArray = [];
        console.log(sortedSplitStrs);
;        for (let i = 0; i < length; i++){
    // console.log(`iteration = ${i}`);
            temp = sortedSplitStrs[i];
            if(sortedSplitStrs[i] == sortedSplitStrs[i+1]){
                tempArray.push(temp);
            }
            else if (temp == tempArray[0]){
                tempArray.push(temp);
                    groupedArray.push(tempArray);
                    tempArray = [];
                }
                else{
                    tempArray.push(temp);
                    groupedArray.push(tempArray);
                    tempArray = [];
                }
        }
        console.log(groupedArray);
        }
    