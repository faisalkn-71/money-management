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
        // inputField.value = "";
    
        if(inputNumber<0){
            alert("Plesas, enter a positive number.")
        }
        else{
            return inputNumber;
        }
    
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

    if(income>=totalExpensesAmount){
        const totalBalanceAmount = income - totalExpensesAmount;

        balance.innerText = totalBalanceAmount;

        return totalBalanceAmount;
       
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