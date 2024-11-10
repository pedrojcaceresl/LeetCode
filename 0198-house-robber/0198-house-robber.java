class Solution {
    public int rob(int[] nums) {

        if (nums.length == 1) return nums[0];

        int prev1 = 0;
        int prev2 = 0;
        int current = nums[0];

        for (int num : nums) {
            current = Math.max(prev1, prev2 + num);

            prev2 = prev1;
            prev1 = current;
        }

        return current;        
    }
}