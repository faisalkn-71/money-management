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

// calculate total expenses

function getTotalExpenses(foodExpenses, rentExpenses, clothesExpenses) {
    const newTotalExpenses = foodExpenses + rentExpenses + clothesExpenses;

    const totalExpenses = document.getElementById("total-expenses");

    const previousTotalExpenses = totalExpenses.innerText;

    const totalExpensesAmount = parseFloat(previousTotalExpenses) + parseFloat(newTotalExpenses)
    
    totalExpenses.innerText = totalExpensesAmount;

    return totalExpensesAmount;
}


// update balance amount

function updateBalance(income, totalExpensesAmount) {
    const balance = document.getElementById("total-balance");

    const previousBalanceAmount = balance.innerText;

    if(income>=totalExpensesAmount){
        const newBalanceAmount = income - totalExpensesAmount;

        const totalBalanceAmount = parseFloat(previousBalanceAmount)  + parseFloat(newBalanceAmount);

        balance.innerText = totalBalanceAmount;
       
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


    // savings
    
    const savingsPercentage = getInputValue("savings-field");

    const savings = document.getElementById("saving-amount");

    const savingAmount = balance * (savingsPercentage / 100);

    console.log(savingAmount)

    

    
})