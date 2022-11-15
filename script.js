// console.log("check js link ")
//get button from html

let colorBtn = document.querySelectorAll(".color-box")
let submitBtn = document.querySelector("#submit")

console.log(colorBtn)
console.log(submitBtn)

// Makes color clickable
colorBtn.forEach((color, i) => {
    color.addEventListener("click", ()=>{
      console.log(saimon.push(colorBtn[i].value) )})
  })

//Make submit clickable
submitBtn.addEventListener("click", ()=>{console.log("ho ho ho")})

// Computer can have memory

let saimon = []
let player = []

// add back to function