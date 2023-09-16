//declaring varable and selected elements using dom

let con = document.querySelector('img');
let love = document.querySelector('i');
let like = document.querySelector('.like');
let one = document.querySelector('#one');
let two = document.querySelector('#two');

//added event listner double click 

con.addEventListener('dblclick', function () {
    
     love.style.transform ='translate(-50%, -50%) scale(1)'
    love.style.opacity = 0.8
    two.style.opacity = 1
    setTimeout(function () {
    love.style.opacity = 0
},1000)
setTimeout(function () {
    love.style.transform ='translate(-50%, -50%) scale(0)'
},2000)
});

//added event listner single click 



let flag=0                  //this var use for vise versa for like unlike
like.addEventListener('click', function () {
    if(flag==0){
        two.style.opacity = 1
love.style.transform ='translate(-50%, -50%) scale(1)'
    love.style.opacity = 0.8
    two.style.opacity = 1
    setTimeout(function () {
    love.style.opacity = 0
},1000)


        flag=1
    } else {
        two.style.opacity = 0
        flag=0
        }
})