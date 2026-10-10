function studentScoredMoreThan70(students){
    const studentNames=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=70)
            studentNames.push(students[i].name);
    }
    return studentNames;
}

const students = [
  { name: "Anu", marks: 80 },
  { name: "Rahul", marks: 65 },
  { name: "Meera", marks: 91 },
  { name: "Vikram", marks: 72 },
];

console.log(studentScore70(students));