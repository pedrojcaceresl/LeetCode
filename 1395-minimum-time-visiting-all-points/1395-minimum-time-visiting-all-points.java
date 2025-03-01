class Solution {
    // time complexity O(n) space complexity O(1)
    public int minTimeToVisitAllPoints(int[][] points) {
        int result = 0;

        double  x1 = points[0][0];
        double  y1 = points[0][1];
        
        for (int i = 1; i < points.length; i++) {
            int x2 = points[i][0];
            int y2 = points[i][1];
            // se aplica la distancia de Chebyshev d = max(|x2 - x1|, |y2 - y1|)
            result += Math.max(Math.abs(y2 - y1), Math.abs(x2 - x1));

            x1 = x2;
            y1 = y2;
        }

        return result;
    }
}

