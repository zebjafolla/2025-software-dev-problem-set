/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109

 */

let nums = [1,1,1,3,3,4,3,2,4,2];

containsDuplicate(nums);
function containsDuplicate(nums){
    //I could use a data structure like a set that does not allow duplicate inputs and if it has the same number of elements, I could return true, if not I could return false
    let set = new Set();
    nums.forEach(ele => set.add(ele));
    console.log(set.size); //check the output (at first I tried using length, then found size because its a Set and not an Array)
    console.log(nums.length); // check the output
    if(set.size == nums.length){
        
        console.log("false"); //to check the output
        return false
    }
    else {
        console.log("true");// to check the output
        return true;
    }
}