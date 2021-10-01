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
    //Take wage, convert it into a yearly income
   console.log(wage)
    return wage*2080
}
//
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

//Elements to be made - return value to be added to div
function returnSalaryAmount(){
    
}
document.querySelector("input[value=Submit]").addEventListener('click',()=>{
    console.log("hello");
    console.log(
        wageSalaryConverter(wage2SalaryInput.value)
    )
    
})