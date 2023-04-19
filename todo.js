let button=document.getElementById('button');
let container=document.getElementById('container');
let input=document.getElementById('input');
let items=document.getElementById('items');

button.addEventListener('click',function(){
    var para=document.createElement('li');
    para.classList.add('x');
    para.innerText=input.value;
    
    items.appendChild(para);
    input.value="";
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
        para.classList.add('y');
    })
    para.addEventListener('dblclick',function(){
        items.removeChild(para);
    })
})

document.addEventListener('keypress',(event)=>{
    let a=event.key;
    if(a=='Enter'){
    var para=document.createElement('li');
    para.classList.add('x');
    para.innerText=input.value;
    
    items.appendChild(para);
    input.value="";
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
        para.classList.add('y');
    })
    para.addEventListener('dblclick',function(){
        items.removeChild(para);
    })}
})