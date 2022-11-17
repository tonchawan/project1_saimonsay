// console.log("check js link ")
//get button from html

let colorBtn = document.querySelectorAll(".color-box")
let submitBtn = document.querySelector("#submit")

console.log(colorBtn)
console.log(submitBtn)

// Makes color clickable
colorBtn.forEach((color, i) => {
    color.addEventListener("click", ()=>{
      console.log(player.push(colorBtn[i]) )
      color.style.backgroundColor = "pink"
      setTimeout(()=>{
        color.style.backgroundColor = color.id
      }, 300)
      console.log(player)
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
  console.log(saimon)
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
    
    console.log(saimon[i])
    console.log(player[i])
    if(saimon[i] !== player[i]){
  
    saimon = []
    player = []
    alert("OH ON!!!. Back to level 1")
    return
  }
}
player = []
alert("Pass ")
}
//Make submit clickable
submitBtn.addEventListener("click", submit)
