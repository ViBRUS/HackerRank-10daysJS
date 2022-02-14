

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var x,y;
    var max=nums[0], ans=nums[0];
    for(x in nums)
    {
        if(max<nums[x])
        {
            max=nums[x];
        }
    }
    for(y in nums)
    {
        if(ans<max && ans<nums[y] && nums[y]<max)
        {
            ans=nums[y];
        }
    }
    return ans;
}

