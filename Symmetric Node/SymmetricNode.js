// Given two identical DOM tree structures, A and B, and a node from A.
// Find the corresponding node in B.

const rootA = document.getElementById("rootA");
const rootB = document.getElementById("rootB");
const nodeA = document.getElementById("nodeA");
const nodeB = document.getElementById("nodeB");

const symmetricNode = getSymmetricNode(rootA, rootB, nodeA);

function getSymmetricNode(rootA, rootB, nodeA) {
  let nodeAClone = nodeA;
  const path = [];

  while (nodeAClone !== rootA) {
    const parent = nodeAClone.parentElement;
    const children = parent.children;
    const index = Array.from(children).indexOf(nodeAClone);
    path.unshift(index);
    nodeAClone = parent;
  }

  let rootBClone = rootB;
  for (let i = 0; i < path.length; i++) {
    const children = rootBClone.children;
    rootBClone = children[path[i]];
  }
  return rootBClone;
}

console.log(nodeB === symmetricNode);
