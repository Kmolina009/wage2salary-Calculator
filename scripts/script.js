// DOM ELEMENTS
const SALARY_FORM = document.querySelector("form[data-form=wage-2-yearly]")
const SALARY_CONTAINER = document.querySelector("div[data-container = wage-2-yearly-output]")
let wage2SalaryInput = SALARY_FORM.firstElementChild

//------------------------------------------------------------------------------------------------------------

//Income Class
class IncomeEntry{
    constructor(wage, salary){
        this.wage = wage;
        this.salary = salary;
    }
};
function floatToCentValue(output){
    return output.toFixed(2)
}
//Conversion Functions
function wage2Weekly(){

}
function wage2Biweekly(){

}
//Monthly income
function wage2Monthly(){

}
// TODO - Fix bug located here
function wageSalaryConverter(wage) {
    let errMessage = "I'm sorry, but that isn't a number"
    //Input check
    if(isNaN(wage)){
        SALARY_CONTAINER.style.fontSize = "2rem";
        return errMessage
    }
    //Take wage, convert it into a yearly income
    SALARY_CONTAINER.style.fontSize = "5rem";
    return `$${floatToCentValue(wage*2080)}`
}

function conversionTable(min,max) {
   let wageTable = [];
   for (let i = min; i <= max; i++) {
       let entry = wageSalaryConverter(i);
       wageTable.push(new IncomeEntry(i,entry))
   }
   return wageTable
}
//Formatting Input before passing into dollar format

console.log(wage2SalaryInput.value)
//Clicking on Submit Button
// Resolve bug involving the input
document.querySelector("input[value='Submit!']").addEventListener('click',()=>{
    SALARY_CONTAINER.innerText =`${wageSalaryConverter(wage2SalaryInput.value)}`
})

//Hitting the Eneter key while in the text input
document.querySelector("input[name=wage-2-salary-input]").addEventListener('keypress',(e)=>{
    if(e.key=="Enter"){
        e.preventDefault()
        SALARY_CONTAINER.innerText =`${wageSalaryConverter(wage2SalaryInput.value)}`
    }
})