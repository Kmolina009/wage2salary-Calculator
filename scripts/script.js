//Income Class
class IncomeEntry{
    constructor(wage, salary){
        this.wage = wage;
        this.salary = salary;
    }
};

//Conversion Functions
function wage2Weekly(){

}
function wage2Biweekly(){

}
//Monthly income
function wage2Monthly(){

}
function wageSalaryConverter(wage) {
    //Input check
    if(isNaN(wage)){
        return "I'm sorry, but that isn't a number"
    }
    //Take wage, convert it into a yearly income
    return wage*2080
}

function conversionTable(min,max) {
   let wageTable = [];
   for (let i = min; i <= max; i++) {
       let entry = wageSalaryConverter(i);
       wageTable.push(new IncomeEntry(i,entry))
   }
   return wageTable
}

// DOM ELEMENTS
const SALARY_FORM = document.querySelector("form[data-form=wage-2-yearly]")
const SALARY_CONTAINER = document.querySelector("div[data-container = wage-2-yearly-output]")
let wage2SalaryInput = SALARY_FORM.firstElementChild

//Clicking on Submit Button
document.querySelector("input[value=Submit]").addEventListener('click',()=>{
    SALARY_CONTAINER.innerText =`${wageSalaryConverter(wage2SalaryInput.value)}`
})

//Hitting the Eneter key while in the text input
document.querySelector("input[name=wage-2-salary-input]").addEventListener('keypress',(e)=>{
    e.preventDefault()
    if(e.key=="Enter"){
        SALARY_CONTAINER.innerText =`${wageSalaryConverter(wage2SalaryInput.value)}`
    }
})