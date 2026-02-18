let employeeName:string = "Anusha";
let performanceRating: number = 4;
let yearsOfExperience : number = 6;
let attendancePercentage : number = 45;

function bonusCalculation (employeeName:string, performanceRating:number,yearsOfExperience:number, attendancePercentage:number ){

if (performanceRating === 5){
    console.log("Bonus is Approved for"+employeeName);
}

else if (performanceRating ==3 || performanceRating ==4 ){
    if (yearsOfExperience>=5)
    {
        if (attendancePercentage>=90){
        console.log("Bonus is Approved for "+employeeName)
    }
         else{
        console.log("Bonus is not approved due to Low attendance");
    
    }
    
    
} else {
      console.log("No Bonus (Less Experience)");
    }


}

else {
      console.log("No Bonus (Low Performance Rating)");
    }

}
bonusCalculation (employeeName, performanceRating,yearsOfExperience, attendancePercentage )

