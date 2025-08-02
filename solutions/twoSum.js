/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */

let nums = [2,5,5,11];
let target = 10;

twoSums(nums, target);
function twoSums(nums, target){
    //(Input: nums = [2,7,11,15], target = 9)Im thinking I could use a nested for loop to add each element together for example in i for loop I could start with element at index 0 which here would be '2'. Then in my j loop at 2 to 7 which would equal 9, in this case I would have found the answer and returned the indexes at i and j

    let indexArray = [];
    for (let i = 0; i < nums.length; i++){
        for (let j = 1; j < nums.length; j++){
            console.log(nums[i], nums[j]);
            if(nums[i] + nums[j] == target && i != j){
                console.log("pushed" + i); // check when the if statement is stepped into
                indexArray.push(i);//having issue of same indexes producing the wrong result for example [2, 5, 5, 11] -- maybe can have an extra case of indexes are found to be at the same location to ignore (not push to the indexArray)
                indexArray.push(j);
                break;
            };
            
        }
        if(indexArray.length > 0){
            break; //breaks out of the loop when there is a solution found too avoid duplicates
        }
    }
    console.log(indexArray);
    return indexArray;
}