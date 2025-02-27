class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        // brute force
        
        int[] smaller = new int[nums.length];

        for (int i= 0; i < nums.length; i++) {
            int current = nums[i];

            for (int j = 0; j < nums.length; j++) {
                if (nums[j] < current) {
                    smaller[i] = smaller[i] + 1;
                }
            }
        }
        return smaller;
    }
}