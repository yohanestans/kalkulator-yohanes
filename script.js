const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number");
// console.log(numbers);
numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        console.log(event.target.value);
    })
})

