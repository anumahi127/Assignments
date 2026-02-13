let customerName:string = "John Doe";
let creditScore:number= 720;
let customerIncome:number = 55000.0;
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 55.0; 

function loanEvaluation(customerName:string,creditScore:number,customerIncome:number,isEmployed:boolean, debtToIncomeRatio:number)
{

if (creditScore >750)

{
    console.log("Loan is Approved for:"+customerName);
}

else if (creditScore>=650 && creditScore <= 750)
{
    if(customerIncome >= 50000)
    {
        if (isEmployed)
        {
            if(debtToIncomeRatio < 40)
            {
                console.log("Loan is Approved for:"+customerName);
            }
            else{
                console.log("loan is denied due to High Debt to Income Ration");
            }
        }else{
            {
                console.log("Loan is denied due to unemployeeemant");
            }
        }
    }else{
        console.log("Loan is denited due to Less Income");
    }
}else{
    console.log("Loan is denied due to Low Credit Score")
}



}

loanEvaluation(customerName,creditScore,customerIncome,isEmployed,debtToIncomeRatio);