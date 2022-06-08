let posts=[
    {title:'Post 1', body:'this is post 1',createAT:Date.now()},
    {title:'Post 2', body:'this is post 2',createAT:Date.now()}
    
]
function getPosts(){
    setTimeout(()=>{
        let output='';
        let x=Date.now();
        posts.forEach((post,index) => {
            output+=`<li>${post.title} : Created ${Math.round((x-post.createAT)/1000)} seconds ago.</li>`;
        });
        document.body.innerHTML=output;
    },1000);
    var t=setTimeout(()=>{getPosts()},1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        post['createAT']=Date.now();
        posts.push(post);
        callback();
    },5000);
}
createPost({title:'Post 3', body:'this is post 3'},getPosts);
function create4thPost(post){
        createPost(post,getPosts);
}
create4thPost({title:'Post 4', body:'this is post 4'});
