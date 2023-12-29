let ruleButton = document.querySelector(".ruleBtn");
let rules = document.querySelector(".rules");
let exitButton = document.querySelector(".exit");


ruleButton.addEventListener("click",()=>{
    rules.style.visibility ="visible"
})

exitButton.addEventListener("click",()=>{
    rules.style.visibility ="hidden";

})