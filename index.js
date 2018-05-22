function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nestedNode = node.children[0]

  while (nestedNode) {
    node = nestedNode;
    nestedNode = node.children[0]
  }
  return node;
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list')
  rankedLists.forEach(function(list) {
    let children = list.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].innerHTML = parseInt(children[i].innerHTML) + n
    }
  })
}