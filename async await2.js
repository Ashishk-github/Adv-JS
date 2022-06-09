let posts=[
    {title:'Post 1', body:'this is post 1'},
    {title:'Post 2', body:'this is post 2'}
    
]
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index) => {
            output+=`<li>${post.title} </li>`;
        });
        document.body.innerHTML=output;
    },0);

}

async function features(){
async function createPost(post){
    await new Promise(()=>{
    setTimeout(()=>{
    posts.push(post);
    console.log(post);
    },1000)
}
)};
//createPost({title:'Post 3', body:'this is post 3'}).then(getPosts)


async function deletePost() {
    await new Promise((resolve,reject)=>{
    setTimeout((post)=>{
        posts.pop();
        console.log('in delete')
    if(posts.length>0){
        resolve();
    }else{
        reject('Array is empty');
    }
    },1000)
    
})}

createPost({title:'Post 3', body:'this is post 3'});
getPosts();
await deletePost();
getPosts();
await deletePost();
getPosts();
}
features();
