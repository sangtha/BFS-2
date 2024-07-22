//Leetcode: https://leetcode.com/problems/cousins-in-binary-tree/
//T.C = O(n)
//SC = O(1)

//Logic: To find out if given values are cousins, we need to do: 
//1. Find x and y in the tree
//2. Find parent of x and parent of y
// 3. find level of x and level of y
// If x and y are on same level but do not have the same parent, then they are cousins else they are not. 
// We run a DFS to find the above values and if found, we compare the level and parent and determine cousin status

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    
    let xParent = null, yParent = null, xLevel = null, yLevel = null;

    const dfs = (root, x, y, level, parent) => {
        if(root == null) return;
        if(xParent!= null && yParent!= null) return; 

        if(xParent == null && root.val === x){
            xParent = parent;
            xLevel = level;
        }
        if(yParent == null && root.val === y){
            yParent = parent;
            yLevel = level;
        }

        dfs(root.left, x, y, level+1, root);
        dfs(root.right, x, y, level+1, root);
    }

    dfs(root, x, y, 0, null);

    if (xParent!== null && yParent !== null)
        return (xParent !== yParent && xLevel === yLevel)
    else
        return false;

};