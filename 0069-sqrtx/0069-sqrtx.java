
class Solution {
    public int mySqrt(int x) {
        return getSqrt(x);
    }

    public int getSqrt(int x) {
        int left = 0;
        int right = x;
        int mid = 0;
        long midPower = 0;
        int res = 0;

        while (left <= right) {
            mid = left + ((right - left) / 2);
            midPower = (long) mid * mid;
            
            if (midPower > x) {
                right = mid - 1;
            } else if (midPower < x) {
                left = mid + 1;
                res = mid;
            } else {
                return mid;
            }
        }
        return res;
    }
}