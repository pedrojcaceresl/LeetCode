/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  1 2 3 4 5 6
//   3 <-- 2 <-- 1 <-- null
var reverseList = function(head) {
    let node = head;
    let prev = null;
    let next;
    
    while (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
};