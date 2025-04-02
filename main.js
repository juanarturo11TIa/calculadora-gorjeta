let bill = 0
let tip = 0
let numberOfPeople = 0

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", () => {
    bill = billInput.valueAsNumber

    console.log(bill)
})

let peopleInput = document.querySelector("#numberOfPeople")
peopleInput.addEventListener("input", () => {
    numberOfPeople = peopleInput.valueAsNumber

    console.log(numberOfPeople)
})

console.log(billInput)
