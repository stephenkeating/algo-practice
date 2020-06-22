// DFS:

// Runtime: 60 ms, faster than 97.15% of JavaScript online submissions for Find Largest Value in Each Tree Row.
// Memory Usage: 38.7 MB, less than 100.00% of JavaScript online submissions for Find Largest Value in Each Tree Row.

function largestValues(root) {
  let arr = [];
  dfs(root, 0);
  return arr;
  
  function dfs(node, d) {
    if (!node) return null;
    const max = arr[d] === undefined ? -Infinity : arr[d];
    arr[d] = Math.max(max, node.val);
    dfs(node.left, d + 1);
    dfs(node.right, d + 1);
  }
}


// BFS:

// Runtime: 64 ms, faster than 88.97% of JavaScript online submissions for Find Largest Value in Each Tree Row.
// Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions for Find Largest Value in Each Tree Row.

function largestValues(root) {
  let ret = [];
  bfs(root ? [root] : [], 0);
  return ret;
  
  function bfs(nodes, d) {
    if (nodes.length === 0) return;
    const newNodes = [];
    let max = -Infinity;
    nodes.forEach(node => {
      max = Math.max(max, node.val);
      node.left && newNodes.push(node.left);
      node.right && newNodes.push(node.right);
    });
    ret[d] = max;
    return bfs(newNodes, d + 1);
  }
}
