//Leetcode: https://leetcode.com/problems/binary-tree-right-side-view/
//T.C = O(n)
//S.C = O(h) - height of the tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = [];
    // Run DFS to goto each level, if the result's size is same as level, then no element has been added yet to the result for level+1
    // We search right nodes of the tree and then the left side of the tree to find the view if right doesn't exist. 
    const dfs = (root, level) => {
        if(root === null) return;

        if(result.length === level){
            result.push(root.val)
        }
        
        dfs(root.right, level+1);
        dfs(root.left, level+1);
    }

    dfs(root, 0)
    return result;
};