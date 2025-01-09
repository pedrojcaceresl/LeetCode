class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        myset = set(nums)

        return  len(nums) > len(myset)
        