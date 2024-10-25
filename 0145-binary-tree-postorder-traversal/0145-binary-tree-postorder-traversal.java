/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    List<Integer> mylist = new ArrayList();
    public List<Integer> postorderTraversal(TreeNode root) {
        
        if (root == null) {
            return mylist;
        }
        postorderTraversal(root.left);
        postorderTraversal(root.right);
        mylist.add(root.val);
        return mylist;
    }
}