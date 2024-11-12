class Solution {
    public int findClosestNumber(int[] nums) {
        int closest = nums[0];

        for (int i = 0; i < nums.length; i++) {
            if (Math.abs(nums[i]) < Math.abs(closest)) {
                closest = nums[i];
            }
        }

        if (closest < 0 && checkNum(nums, Math.abs(closest))) {
            return Math.abs(closest);
        } else {
            return closest;
        }
    }

    public boolean checkNum(int[] nums, int value) {

        for (int num : nums) {
            if (num == value) {
                return true;
            }
        }
        return false;
    }
}

