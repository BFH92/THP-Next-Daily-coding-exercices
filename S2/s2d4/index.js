const TreeClass =  require('./tree.js')
const NodeClass =  require('./node.js')
const tree = new TreeClass();




tree.insert(15)
tree.insert(21)
tree.insert(11)
tree.insert(19)
tree.insert(23)
tree.insert(25)
tree.insert(28)
tree.insert(10)
tree.insert(6)
tree.insert(13)
tree.insert(8)
tree.insert(13)
tree.insert(138)
tree.insert(15)
tree.insert(2)
tree.insert(1)



console.log(tree.find(21))
tree.to_s(tree.root)