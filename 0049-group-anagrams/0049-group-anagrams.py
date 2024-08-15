class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """

        hashmap = {}
        values = []
        for original in strs:
            orderedStrs = ''.join(sorted(original))
            values = hashmap.get(orderedStrs) or []

            values.append(original)
            hashmap[orderedStrs] = values
        return list(hashmap.values()) 
        