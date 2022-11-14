// console.log("check js link ")
//get button from html

let colorBtn = document.querySelectorAll(".color-box")
let submitBtn = document.querySelector("#submit")

console.log(colorBtn)
console.log(submitBtn)

// Makes color clickable
colorBtn.forEach((color) => {
    color.addEventListener("click", ()=>{console.log(colorBtn.innerText)})
  })

//Make submit clickable
  submitBtn.addEventListener("click", ()=>{console.log("ho ho ho")})
  