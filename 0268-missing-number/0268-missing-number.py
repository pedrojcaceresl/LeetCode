class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        sum = 0
        sum_idx = 0
        for i, v in enumerate(nums):
            sum += v
            sum_idx += i
        sum_idx += len(nums)
        
        return sum_idx - sum