let studentName:string = "Rahul";
let totalMarks:number = 78;
let attendance:number = 80;

function examResultEvaluation(studentName:string, totalMarks:number,attendance:number )
{
    if (totalMarks>=90)

        console.log("Congratulations!!! you passed with DISTINCTION");

    else if(totalMarks>=50 && totalMarks<89)
    {
        if (attendance>=75)
        {
            console.log("Congratulations!!! you are passed based on your attendance")
        }
        else{
            console.log("You couldnt make it this time due to less attendance");
        }
    
    }
    else
    {
        console.log("You couldnt make it this time due to less Marks");
    }
    
}
examResultEvaluation(studentName, totalMarks,attendance )