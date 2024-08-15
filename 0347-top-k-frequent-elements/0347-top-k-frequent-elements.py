class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        mymap = {}
        k_elements = []
        pair = []

        for i in nums:
            mymap[i] = mymap.get(i, 0) + 1

        for key, value in mymap.items():
            pair.append([key, value])
        
        pair.sort(key=lambda x: x[1], reverse=True)

        for i in range(k):
            k_elements.append(pair[i][0])

        return k_elements
            