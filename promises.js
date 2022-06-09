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
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
        },1000);
        const error=false;
        if(!error){
            resolve();
        }else{
            reject('Error found');
        }
    })
    
}
createPost({title:'Post 3', body:'this is post 3'},getPosts)
.then(getPosts)
.catch(err=>console.log(err));

