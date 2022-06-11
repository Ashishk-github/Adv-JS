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
function inorder(root){
    if(root){
        inorder(root.left);
        console.log(root.val);
        inorder(root.right);
    }
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
inorder(r)
function search(root,key){
    if(!root || root.val===key) return root
    else{
        if(root.val>key) return search(root.left,key)
        else return search(root.right,key)
    }
}
console.log(search(r,50))