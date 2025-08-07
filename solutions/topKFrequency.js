/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let nums = [1,1,1,2,2,3];
let k = 2;

 var topKFrequent = function(nums, k) {
    // i need to count each occurence of the integers in the nums array occuring k times
    // for this example, i would need the top two most frequent occurences of the int, in this case just by looking at it we can say it would be 1: @ 3 times which is the top most frequent, the second would be 2, which occurs two times
    //i could use a hashmap/object to find the ints in the nums array, and the values would be how many times they show up
    //then i could sort the length of the values of each key, so that theyre in descending order
    //then i could just return to the top two keys of the hashmap in an array, in this case the answer would be [1, 2]
    //im going to to have to brush up on big o notation in order to beat rhe follow up
    let output = []; 

    if(nums.length == 1){ //check if theres not more than one element in the array nums, checks for negative cases, or identical cases of negatives
        output.push(Number(nums[0]));
        return output;// returns the array which is full of exactly one number so its automatically in order
    }
    if (nums.length == 2 && nums[0] == nums[1]){
        output.push(Number(nums[0]));
        return output;
    }
    let obj = {};
    for (num of nums){
        // if(!(num in obj)){
        //     obj[num] = 1;
        // }
        if(!obj[num]){
            obj[num] = 1;
        }
        else {
            obj[num] += 1;
        }

    }
    let sortedObjArray = Object.entries(obj).sort((value, nextValue) => Number(value[1]) - Number(nextValue[1])); //now its sorted from the amount of times the number shows up, so its the reverse order of what we need, the [1] here pulls out the value instead of the key (which would be [0])

    for (let i = 0; i < k; i++){
        output.push(Number(sortedObjArray[sortedObjArray.length - (i + 1)][0]));
    }//only executes the amount of times for 'k'
    console.log(output);
    return output;
};
topKFrequent(nums, k);