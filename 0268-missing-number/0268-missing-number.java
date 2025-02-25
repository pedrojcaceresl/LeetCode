class Solution {
    public int missingNumber(int[] nums) {
        // sort the numbers
        Arrays.sort(nums);
        // iterate them
        for (int i = 0; i < nums.length; i++) {
        // verify if the number i is equal to n[i], if it's missing, return the missing number
            int value = nums[i];

            if (i != value) {
                return i;
            }
        }

        // if not found, return i + 1
        return nums.length;

    }
}