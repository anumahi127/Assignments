let studentNames: string [] = ["Suresh", "Mahesh", "Naresh"];
let studentMarks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];
let total:number = 0;

for (let i:number = 0; i<studentNames.length; i++)
{
    studentMarks[i]+=10;
    updatedMarks[i] = studentMarks[i];
    total+=updatedMarks[i]
}

let average:number = total/updatedMarks.length;

console.log("Updated Marks");

for (let i:number = 0; i<studentNames.length; i++)
{
    console.log(`${studentNames[i]}:${updatedMarks[i]}`);
}
console.log("Average Mark is:"+average);


