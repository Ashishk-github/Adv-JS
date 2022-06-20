const btn=document.getElementById('btn');
const container=document.getElementById('container');
const closebtn=document.getElementById('close');
btn.addEventListener('click',()=>{
    container.classList.add('active');
});
closebtn.addEventListener('click',()=>{
    container.classList.remove('active');
})


