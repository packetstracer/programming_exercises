/**
 * Given a binary tree, return the inorder traversal of its nodes' values.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function traverseTree (tree) {
  let res = []

  if (!tree) {
    return []
  }

  const left = traverseTree(tree.left)
  const current = tree.val
  const right = traverseTree(tree.right)

  return [ ...left, current, ...right]
}

function traverseTreeNonRecursive (tree) {
  if (!tree) {
    return null
  }

  let res = []
  let nodes = [ tree ]

  while (nodes.length > 0) {
    const node = nodes.shift()

    if (!!node && node.val >= 0) {
      res.push(node.val)
      nodes = [ node.left , ...nodes, node.right ]
    }
  }

  return res.sort((a, b) => a - b)
}

const inputTree = {
  val: 8,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 12,
    left: {
      val: 10,
      left: {
        val: 9,
        left: null,
        right: null
      },
      right: {
        val: 11,
        left: null,
        right: null
      }
    },
    right: {
      val: 14,
      left: null,
      right: null
    },
  }
}

// const treeRoot = traverseTree(inputTree)
const treeRoot = traverseTreeNonRecursive(inputTree)

console.log(treeRoot)
