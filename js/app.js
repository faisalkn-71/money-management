//   get input value 

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;

    const inputNumber = parseFloat(inputFieldText);
    
    if(isNaN(inputNumber)){
        inputField.value = "";
        alert("Please, enter a positive number in " + inputId + ". Otherwise it doesn't work.")

    }

    else if(inputNumber<0){
        inputField.value = "";
        alert("Plesas, enter a positive number in " + inputId)

    }

    else{
        return inputNumber;
    }

    
}

// calculate total expenses

function getTotalExpenses(foodExpenses, rentExpenses, clothesExpenses) {
    const totalExpensesAmount = foodExpenses + rentExpenses + clothesExpenses;

    const totalExpenses = document.getElementById("total-expenses");

    
    totalExpenses.innerText = totalExpensesAmount;

    return totalExpensesAmount;
}


// update balance amount

function updateBalance(income, totalExpensesAmount) {
    const balance = document.getElementById("total-balance");
   
        if(income >= totalExpensesAmount){
            const totalBalanceAmount = income - totalExpensesAmount;
    
            balance.innerText = totalBalanceAmount;
    
            if(totalBalanceAmount > 0){
                return totalBalanceAmount;
            }
           
        }
    
       else{
           alert("Total expenses is more than income.")
       }
    
}
    
// handle calculate button event

document.getElementById("calculate-btn").addEventListener("click", function(){
    
    // call the getInputValue function

    const income = getInputValue("income-field");

    const foodExpenses = getInputValue("food-field");

    const rentExpenses = getInputValue("rent-field");
   
    const clothesExpenses = getInputValue("clothes-field");

    // call the getTotalExpenses function

    const totalExpensesAmount = getTotalExpenses(foodExpenses, rentExpenses, clothesExpenses);

    // call the updateBalance function

    const balance = updateBalance(income, totalExpensesAmount);
    
    
    
})

// handle save button event

document.getElementById("save-btn").addEventListener("click", function(){
    
    // call the getInputValue function

    const income = getInputValue("income-field");

    const foodExpenses = getInputValue("food-field");

    const rentExpenses = getInputValue("rent-field");
   
    const clothesExpenses = getInputValue("clothes-field");

    // call the getTotalExpenses function

    const totalExpensesAmount = getTotalExpenses(foodExpenses, rentExpenses, clothesExpenses);

    // call the updateBalance function

    const balance = updateBalance(income, totalExpensesAmount);

    // saving amount calculation
    
    const savingsPercentage = getInputValue("savings-field");

    const savings = document.getElementById("saving-amount");

    const savingAmount = income * (savingsPercentage / 100);

    if(savingAmount <= balance){
        savings.innerText = savingAmount;
    }
    else{
        alert("You don't have enough amount of money for saving.")
    }


    // remaining balance calculation

    const remainingBalance = document.getElementById("remaining-balance");

    const remainingBalanceAmount = balance - savingAmount;

    if(remainingBalanceAmount >= 0){
        remainingBalance.innerText = remainingBalanceAmount;
    }
    
})