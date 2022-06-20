const container=document.getElementById('container');

const text='Hey people,how are you?';
let index=0;

function writer(){
    if(index===text.length) index=0;
    container.innerText=text.slice(0,index);
    index++;
}
setInterval(writer,100);