// console.log("check js link ")
//get button from html

let colorBtn = document.querySelectorAll(".color-box")
let submitBtn = document.querySelector("#submit")

console.log(colorBtn)
console.log(submitBtn)

// Makes color clickable
colorBtn.forEach((color, i) => {
    color.addEventListener("click", ()=>{
      console.log(player.push(colorBtn[i].value) )})
  })

//Make submit clickable
submitBtn.addEventListener("click", ()=>{console.log("ho ho ho")})

// Computer can have memory

let saimon = []
let player = []

// add back to function
// make a turn 
const turn = true
// make computer chose a color by it self

function saimonChooses(){
  let randomColor = Math.floor(Math.random() * colorBtn.length);
  return saimon.push(colorBtn[randomColor].value)
}

// add Start startButton
const startBtn = document.querySelector("#start")
startBtn.addEventListener("click", ()=>{console.log("ho ao ha")})

//let saimon generate  value
