// Type annotations
function annotationPractice() {
    var userName = "Shawn Michael A. Sudaaria";
    var age = 18;
    var girlfriendName = "Zyra Dauplo";
    // for(let i:number = 1; i<=10; i++){
    //     console.log(`I love you ${girlfriendName}`);
    // }
    return userName;
}
var userName = annotationPractice();
var hoursRendered = 10;
var loan = 100.00;
var health_insurance = 100.00;
var rate = 500;
// Payslip app
function GrossSalary(rate, hoursRendered) {
    // for computing the gross salary(Rate x Hours Rendered)
    return rate * hoursRendered;
}
var grossSalary = GrossSalary(rate, hoursRendered);
console.log("Gross Salary: Php ".concat(grossSalary));
var tax = 0.12 * grossSalary;
console.log("Tax: Php ".concat(tax));
console.log("Loan: Php ".concat(loan));
console.log("Insurance: Php ".concat(health_insurance));
function SalaryDeduction(tax, loan, health_insurance) {
    // Computing the deductions
    return tax + loan + health_insurance;
}
var deductions = SalaryDeduction(tax, loan, health_insurance);
function NetSalary(grossSalary, deductions) {
    //computing the net salary(netSal = Gross - Deductions)
    return grossSalary - deductions;
}
console.log("Net Salary: Php ".concat(NetSalary(grossSalary, deductions)));
