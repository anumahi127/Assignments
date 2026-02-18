let customerName:string = "John";
let age:number = 28;
let monthlySalary:number = 40000;
let hasExistingLoan:boolean = true;
let creditScore: number = 700;

function carLoanEligibility(customerName:string, age:number, monthlySalary:number, hasExistingLoan:boolean, creditScore: number)
{
    if (age < 21){
        console.log("Customer is Not Eligible for Car Loan due to age constrain")
    }

    else if (age >=21)
    {
        if (monthlySalary>=30000)
        {
            if (hasExistingLoan && creditScore<700)
            {
                console.log("Customer is Not Eligible for Car Loan due to less credit score");

            }
            else if (creditScore>=750)
            {
                console.log("Customer is  Eligible for Car Loan due to great credit score");

            }
            else if(creditScore >= 700 && creditScore < 750)
            {
                console.log("Do a Manual Review");
            }
            else{

                console.log("Loan is Rejected");
            }
        } else 
        {
            console.log("Customer is Not Eligible for Car Loan due to less salary");
        }

    } 
}

carLoanEligibility(customerName, age, monthlySalary, hasExistingLoan, creditScore);