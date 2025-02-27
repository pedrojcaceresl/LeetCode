class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                // retorna el valor del complemento que es el indice, y el indice actual
                return new int[]{map.get(complement), i};
            }
            // si no existe, se agrega el valor al map

            map.put(nums[i], i);
        }
        // si no se encuentra nada
        return new int[]{};
    }
}
