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

conversionTable(1, 8)
console.log(conversionTable(18, 25))
