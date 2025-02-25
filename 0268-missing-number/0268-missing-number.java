class Solution {
    public int missingNumber(int[] nums) {
        // suma esperada s = n(n + 1) / 2
        int n = nums.length;
        int expectedSum = (n * (n + 1)) / 2;
        int actualSum = 0;

        for (int num : nums) {
            actualSum += num;
        }
        // retorna suma esperada - suma actual;
        return expectedSum - actualSum;
    }
}