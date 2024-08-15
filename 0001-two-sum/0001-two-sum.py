class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      obj = {}

      for i in range(len(nums)):
        temp = target - nums[i]

        if temp in obj:
            return [i, obj[temp]]
        obj[nums[i]] = i

