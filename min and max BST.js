class Node{
    constructor(key){
        this.left = null;
        this.right = null;
        this.val=key;
    }
}
function insert(root,key){
    if(root===null){
        return new Node(key);
    }
    else{
        if(root.val===key) return root;
        else if(root.val<key) root.right=insert(root.right,key);
        else root.left = insert(root.left,key);
    }
    return root;
}
r =new Node(50);
insert(r,20);
insert(r,30);
insert(r,15);
insert(r,80);
insert(r,28);
insert(r,95);
insert(r,75);
insert(r,65);
function findMin(root){
    let min=root
    while(min.left){
        min=min.left;
    }
    return(min.val)
}
console.log(findMin(r));
function findMax(root){
    let max=root
    while(max.right){
        max=max.right;
    }
    return(max.val)
}
console.log(findMax(r));