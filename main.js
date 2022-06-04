let obj={num:10};
function forCall(a){
    return this.num+a;
}
console.log(forCall.call(obj,1));
let arr=[1,2,3];
function forApply(a,b,c){
    return this.num+a+b+c;
}
console.log(forApply.apply(obj,arr));
function forBind(a,b){
    return this.num+a+b;
}
let forBindobj=forBind.bind(obj);
console.log(forBindobj);
//student obj
let student={age:20};
function studentBind(){
    console.log(this.age);
}
const a=studentBind.bind(student);
a()
let multiply=function (x,y){
    return x*y
}
let multiplybyTwo=multiply.bind(this,2)
console.log(multiplybyTwo(3))
let multiplybyThree=multiply.bind(this,3)
console.log(multiplybyThree(10))