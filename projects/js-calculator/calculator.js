const buttons = document.querySelectorAll(".button");
const equals = document.querySelector(".buttonequal");
const screen = document.querySelector(".line");
const value = screen.innerHTML;
const clear = document.querySelector(".buttonclear")

function getInput () {
  for (let button of buttons) {
    button.addEventListener("click", () => {
      screen.innerHTML += button.innerHTML;
});
  }
}

getInput();

function calculate () {
  let calculation = parseFloat(screen.innerHTML.slice(1));
  return calculation
}

equals.addEventListener("click", () => {
  let input = screen.innerHTML
  let calculation = parseFloat(screen.innerHTML.slice(1));
  let result = eval(screen.innerHTML.slice(1));
  screen.innerHTML = result ;
})
calculate();


clear.addEventListener ("click", () => {
  screen.textContent = "|";
})


/* function tipCalculator(getInput) {
 let tipPerPerson = totalBill * percentage / people; 
   tipPerPerson;
};

tipCalculator(); */

//buttonequal.addEventListener ("click", () => {

//})
