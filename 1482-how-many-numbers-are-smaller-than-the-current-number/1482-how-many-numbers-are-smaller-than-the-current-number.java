class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] temp = Arrays.copyOf(nums, nums.length);  // Copia el array
        Arrays.sort(temp);

        HashMap<Integer, Integer> map = new HashMap<>(); // Uso de operador diamante

        for (int i = 0; i < temp.length; i++) {
            map.putIfAbsent(temp[i], i);  // Evita el uso innecesario de containsKey
        }

        int[] result = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            result[i] = map.get(nums[i]); // Obtiene el índice desde el HashMap
        }

        return result;
    }
}
