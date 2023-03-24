

let userName:string = "Shawn Michael Sudaria";
let hoursRendered:number = 10;
let loan:number = 100.00;
let health_insurance:number = 100.00
let rate:number = 500;


// Payslip app
function GrossSalary(rate:number, hoursRendered:number){
// for computing the gross salary(Rate x Hours Rendered)
    return rate * hoursRendered;
}

let grossSalary:number = GrossSalary(rate, hoursRendered);
console.log(`Gross Salary: Php ${grossSalary}`);
let tax:number = 0.12 * grossSalary
console.log(`Tax: Php ${tax}`);
console.log(`Loan: Php ${loan}`);
console.log(`Insurance: Php ${health_insurance}`);




function SalaryDeduction(tax, loan, health_insurance){
// Computing the deductions

    return tax + loan + health_insurance;    
}

let deductions:number = SalaryDeduction(tax, loan, health_insurance);

function NetSalary(grossSalary:number, deductions:number){
//computing the net salary(netSal = Gross - Deductions)
    return grossSalary - deductions;
}

console.log(`Net Salary: Php ${NetSalary(grossSalary, deductions)}`);