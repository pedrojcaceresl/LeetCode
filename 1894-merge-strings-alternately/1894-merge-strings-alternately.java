class Solution {
    public String mergeAlternately(String word1, String word2) {
        
        List<Character> merged = new ArrayList<>();
        int i = 0;

        if (word1.length() > word2.length()) {
            for (i = 0; i < word2.length(); i++) {
                merged.add(word1.charAt(i));
                merged.add(word2.charAt(i));
            }
            while (i < word1.length()) {
                merged.add(word1.charAt(i));
                i++;
            }
        } else {
            for (i = 0; i < word1.length(); i++) {
                merged.add(word1.charAt(i));
                merged.add(word2.charAt(i));
            }
            
            while (i < word2.length()) {
                merged.add(word2.charAt(i));
                i++;
            }
        }

        String result = merged.stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining());

        return result;
    }
}