class Solution {
    public int maxSubArray(int[] nums) {
        int currentSum = 0;
        int maxSubarray = nums[0];

        for (int i = 0; i < nums.length; i++) {
            if (currentSum < 0) {
                currentSum = 0;
            }
            currentSum += nums[i];
            maxSubarray = Math.max(maxSubarray, currentSum);
        }
        return maxSubarray;
    }
}
