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
insert(r,75);
insert(r,95);
r1 =new Node(5);
insert(r1,3);
insert(r1,2);
insert(r1,4);
insert(r1,100);
insert(r1,90);
insert(r1,110);
console.log(r1);
function mergeBST(root1,root2){
    var list=[];
    function inorder(root){
        if(root){
            inorder(root.left);
            list.push(root.val);
            inorder(root.right);
        }
    }
    inorder(root1)
    inorder(root2)
    list.sort((a,b)=>{return a-b});
    console.log(list)
    function buildTree(list,start,end){
        if(start>end) return null;
        var mid=parseInt((start+end)/2);
        var node=new Node(list[mid]);
        node.left=buildTree(list,start,mid-1);
        node.right=buildTree(list,mid+1,end);
        return node;
    }
    return buildTree(list,0,list.length-1);
}
(mergeBST(r,r1));