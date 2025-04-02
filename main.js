let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
   
    
}

function receivePeopleValue(){
    numberOfPeople = document.querySelector("#numberOfPeople").valueAsNumber
   
    
}

function receivePercentageValue(value) {
    tipPercentage = value / 100

    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}
