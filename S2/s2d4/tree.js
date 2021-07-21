const NodeClass = require("./node.js");

class Tree {
  constructor() {
    this.root = null;
  }

  insert(int) {
    if (this.root == null) {
      this.root = new NodeClass(int);
    } else {
      const newNode = new NodeClass(int);
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.leftChild === null) node.leftChild = newNode;
      else this.insertNode(node.leftChild, newNode);
    } else {
      if (node.rightChild === null) node.rightChild = newNode;
      else this.insertNode(node.rightChild, newNode);
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.data) {
        current = current.leftChild;
      } else if (value > current.data) {
        current = current.rightChild;
      } else {
        found = current;
      }
    }
    if (!found) return false;
    return found;
  }






to_s(current){
  //console.log(`---- ${this.root.data} ----`)
  //console.log(`${this.root.leftChild.data} ------- ${this.root.rightChild.data}`)
  var currentRight = current;
  var currentLeft = current;
  var parentLeft = " ";
  var parentRight = " ";
  var spaceLeft = "  ";
  var spaceRight = "  ";
  if (current == null) {
  console.log("l'arbre est vide");
  return
  }
  else if (current == this.root && this.root != null){
  
    console.log(`${spaceLeft} ${spaceLeft} ${current.data} ${spaceRight}`)
  } 
  
  display(current)
  function display(current){
    
    if (current.leftChild != null && current.rightChild != null){
      if (parentRight != " " && parentRight != current.rightChild ){
      console.log (`a ${current.leftChild.data} ${current.rightChild.data}`)
        parentRight = parentRight.rightChild;
        parentLeft  = parentRight.leftChild;
    }else{
        console.log (`a ${current.leftChild.data} ${current.rightChild.data} `);
        parentRight = current.rightChild;
        parentLeft  = current.leftChild;
      }

      
      current = current.leftChild
      display(current);
    }
    
    else if (current.leftChild != null && current.rightChild == null){


      display(current);
    }

    else if (current.leftChild == null && current.rightChild != null){
      console.log(`c ${current.rightChild.data}`)
      current = current.rightChild
      display(current);
    }

    else if (current.leftChild == null && current.rightChild == null){
      return false
    }

  }
//if (current != currentParent){
//  displayLeft(current)

//}

  function displayLeft(current){
    if (current.leftChild !=null && current.rightChild ==null ){
      if (currentRightData!= " ") {
        console.log(`a${currentRightData} ${current.rightChild.data}\n`)
        
        }else {
      console.log(`b ${current.leftChild.data}\n `)
        }
      current = current.leftChild
      currentRightData = " ";
      displayLeft(current)

    }else if (current.leftChild !=null && current.rightChild !=null) {
      console.log(`c ${current.leftChild.data} ${current.rightChild.data} \n `)
      //spaceRight = spaceRight.concat(spaceRight,' ')
      currentRight = current.rightChild
      current = current.leftChild
      displayLeft(current)
      displayRight(current)
    }else{
      displayRight(current)
    }
  }

  function displayRight(current){  
    
    if(current.rightChild != null ) {
      if (currentLeftData!= " ") {
      console.log(`d${spaceLeft}/${currentLeftData} ${spaceRight}\\${current.rightChild.data}\n`)
      
      }
      if (currentLeftData == " "){
        console.log(`e ${current.rightChild.data}\n`)
        //spaceLeft = spaceLeft.concat(spaceLeft,' ')
        //spaceRight = spaceRight.concat(spaceRight,' ')
        
      } 
      spaceLeft = spaceLeft.concat(spaceLeft,' ')
      currentLeftData = " ";
    
      
      current = current.rightChild
      //currentRight = current
      displayLeft(current)
      //displayRight(current)
    } else if(current.rightChild != null && current.leftChild !=null) {
      console.log(`f${spaceLeft}${current.leftChild.data}${spaceRight}\\${current.rightChild.data}\n`)


    }
  
  }
  
}
}




module.exports = Tree;
