//Declaring the person structure

const reviews = [
  {
    id:1,
name: "Bill anderson",
job:"the boss",
img:
"https://images.pexels.com/photos/9940878/pexels-photo-9940878.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
text:" ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed facilisis ligula. Phasellus nec placerat ante. Etiam leo lacus, dapibus a mi sit amet, faucibus commodo erat. Curabitur sit amet iaculis risus."
  },

 { id:2,
  name: "Dejo Totorino",
  job:"PDG",
  img:
  "https://images.pexels.com/photos/9107470/pexels-photo-9107470.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  text:"Pellentesque sed facilisis ligula. Phasellus nec placerat ante. "
    },
    
    { id:3,
      name: "Travis Victor",
      job:"Inverstor",
      img:
      "https://images.pexels.com/photos/9791010/pexels-photo-9791010.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

      text:"Phasellus nec placerat ante. Etiam leo lacus, dapibus a mi sit amet, faucibus commodo erat. Curabitur sit amet iaculis risus."
        },
      
        { id:4,
          name: "Julliet",
          job:"Manager",
          img:
          "https://images.pexels.com/photos/6785291/pexels-photo-6785291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
          text:"dolor sit amet, consectetur adipiscing elit. Pellentesque sed facilisis ligula. Phasellus nec placerat ante. Etiam leo lacus, dapibus a mi sit amet, faucibus commodo erat. Curabitur sit amet iaculis risus."
            },
  
]

// Selecting the items

const img= document.getElementById("person-img")
const info= document.getElementById("info")
const author= document.getElementById("author")
const job= document.getElementById("job")

//Selecting the buttons
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const RandomBtn = document.querySelector(".random-btn")

//Assigned the variable

let currentItems =0;

//Load the Items

window.addEventListener("DOMContentLoaded",function(){
  showPerson(currentItems)
})

//Select Person

function showPerson(person){
const items= reviews[person]
img.src= items.img
author.textContent= items.name

job.textContent= items.job
info.textContent = items.text
}


nextBtn.addEventListener("click",
function(){
  currentItems++;
  if(currentItems>reviews.length-1){
    currentItems=0
  }
  showPerson(currentItems);
})

prevBtn.addEventListener("click",
function(){
  currentItems--;
  if(currentItems<0){
    currentItems=reviews.length-1
  }
  showPerson(currentItems)
})

RandomBtn.addEventListener("click", function(){
  currentItems= Math.floor(Math.random()*reviews.length)
  showPerson(currentItems)
  console.log(currentItems);
})