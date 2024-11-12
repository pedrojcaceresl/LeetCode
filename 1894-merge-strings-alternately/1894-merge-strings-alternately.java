class Solution {
    public String mergeAlternately(String word1, String word2) {
        
        String result = "";
        int j = 0;
        int i = 0;

        while (i < word1.length() && j < word2.length()) {
            result += word1.charAt(i);
            i++;
            result += word2.charAt(j);
            j++;
        }


        if (i < word1.length()) {
            result += word1.substring(j);
        }

        if (j < word2.length()) {
            result += word2.substring(j);
        }
        
        return result;
    }
}