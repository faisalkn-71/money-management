//   get input value 

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    
    if(isNaN(inputFieldText)){
        inputField.value = "";
        alert("Please, enter a positive number. Otherwise it doesn't work.")
    }
    else{
        const inputNumber = parseFloat(inputFieldText);
        inputField.value = "";
    
        if(inputNumber<0){
            alert("Plesas, enter a positive number.")
        }
        else{
            return inputNumber;
        }
    
    }
}


// handle calculate button event

document.getElementById("calculate-btn").addEventListener("click", function(){
    const income = getInputValue("income-field");

    const foodExpenses = getInputValue("food-field");

    const rentExpenses = getInputValue("rent-field");
   
    const clothesExpenses = getInputValue("clothes-field");
   
})

// handle save button event

document.getElementById("save-btn").addEventListener("click", function(){
    
    const savingsPercentage = getInputValue("savings-field");
    
    
})