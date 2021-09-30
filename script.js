const colors= ['red','green','blue','rgba{100,23,120,200}','#ffaadd'];

const btn= document.getElementById('btn');
const color= document.querySelector('.color');


btn.addEventListener('click', function(){


// console.log( colors.length);

   
    const randomNumber=getRamdom();

   document.body.style.backgroundColor= colors[randomNumber];

   color.textContent= colors[randomNumber];

});



function getRamdom(){
 

    return Math.floor( Math.random()*colors.length);
}