// console.log("check js link ")
//get button from html

let colorBtn = document.querySelectorAll(".color-box")
let submitBtn = document.querySelector("#submit")

// Makes color clickable
colorBtn.forEach((color, i) => {
    color.addEventListener("click", ()=>{
      player.push(colorBtn[i]) 
      color.style.backgroundColor = "pink"
      setTimeout(()=>{
        color.style.backgroundColor = color.id
      }, 300)
    })
  })
  
  // Computer can have memory
  let saimon = []
  let player = []
  
  // add back to function
// make a turn 
const turn = true

// make computer chose a color by it self
function saimonChooses(){
  let randomColor = Math.floor(Math.random() * colorBtn.length);
  saimon.push(colorBtn[randomColor])
  flashOrder()
  startBtn.style.display = "none"
  submitBtn.style.display = "block"
  return saimon
}

// add Start startButton
//let saimon generate  value
const startBtn = document.querySelector("#start")
startBtn.addEventListener("click", saimonChooses)

// make them glow
function flashOrder (){
saimon.forEach((color, i) => {
  setTimeout(()=>{
    color.style.backgroundColor = color.id
  }, 500*(i+0.5) )
  setTimeout(()=>{
    color.style.backgroundColor = "black"
  }, 500*(i+1) )
  setTimeout(()=>{
    color.style.backgroundColor = color.id
  }, 500*(i+1.5) )
})
}

// Winning logic
function submit (){
  startBtn.style.display = "block"
  submitBtn.style.display = "none"
  for(let i = 0; i <player.length ; i++ ){
    if(saimon[i] !== player[i]){
  
    saimon = []
    player = []
    alert("OH No!!!. Back to level 1")
    return
  }
}
player = []
alert(`congratulations please click start to continue level ${saimon.length+1}`)
getScore()
}
//Make submit clickable
submitBtn.addEventListener("click", submit)

// creat High score board
let highestLevel =  1

function getScore (){
  highestLevel = highestLevel +1
  localStorage.setItem("board", highestLevel)
  localStorage.getItem("board")
  return
}
document.querySelector(".score-board").innerHTML =`Highest Level = ${localStorage.getItem("board")}` 