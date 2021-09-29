const hex=[ 0,1,2,3,4,5,6,7,8,9,'A','B', 'C' , "D" , 'E' , 'F' ];



const btn = document.getElementById('btn');
const color= document.querySelector('.color');

btn.addEventListener('click',function(){

    let hexNum= '#';

    for( let i=0; i<6; i++){
        hexNum += hex[getRam()];

     
    };
  
document.body.style.backgroundColor=hexNum;

color.textContent=hexNum;


});





function getRam(){

    return Math.floor(Math.random() * hex.length)
};