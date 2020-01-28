/**
 * Given an integer array with no duplicates. A maximum
 * tree building on this array is defined as follow:
 * The root is the maximum number in the array.
 * The left subtree is the maximum tree constructed from left
 * part subarray divided by the maximum number. The right subtree
 * is the maximum tree constructed from right part subarray
 * divided by the maximum number.Construct the maximum tree by the
 * given array and output the root node of this tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const emptyNode = {
  value: null,
  left: null,
  right: null
}

function getMax (x) {
  return x.reduce((max, num, i) => num > max[0] ? [num, i] : max, [-1, -1])
}

function buildMaxBst (x) {
  if (x.length === 0) {
    return null
  }

  const root = { ...emptyNode }
  const [max, pos] = getMax(x)

  root.value = max
  root.left = buildMaxBst(x.slice(0, pos))
  root.right = buildMaxBst(x.slice(pos + 1, x.length))

  return root
}

// const treeRoot = buildMaxBst([1,2,3,4,1,2,3])
const treeRoot = buildMaxBst([2,3,1,6,2,3,2,4,1,3,2])

console.log(treeRoot)

