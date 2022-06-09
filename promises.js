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
const updateLastUserActivityTime=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },1000)
})
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
        if(!error){
            resolve();
        }else{
            reject('Error found');
        }
        },1000);
        
    })
    
}
//createPost({title:'Post 3', body:'this is post 3'}).then(getPosts)
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            const error=false;
        if(!error){
            resolve();
        }else{
            reject('Error found');
        }
        },0)
        
    })
}
let createPromise=Promise.all([createPost({title:'Post 3', body:'this is post 3'}),updateLastUserActivityTime]).then(()=>{
    getPosts();
    posts.forEach((post,index)=>{
    console.log(`${post.title}`)
});
console.log(Date.now())
})
//deletePost().then(getPosts);
// DELETING ALL THE POSTS
function deleteAllPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length===0){
                reject('Array is now empty');
                return
            }
            posts.pop();
            deleteAllPosts().then(getPosts).catch(err=>console.log(err))
            resolve();
            
        },1000)
    })
}
//deleteAllPosts().then(getPosts).catch(err=>console.log(err))
//createPost({title:'Post 3', body:'this is post 3'}).then(deletePost).then(getPosts)
Promise.all([createPromise]).then(()=>{Promise.all([deletePost(),updateLastUserActivityTime]).then(()=>{
    getPosts();
    posts.forEach((post,index)=>{
    console.log(`${post.title}`)
});
console.log(Date.now())
})});
    