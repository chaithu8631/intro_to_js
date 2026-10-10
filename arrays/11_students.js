function studentScoredAtLeast70(students){
    const studentNames=[];
    for(let i=0;i<students.length;i++){
        if(hasScoredAtLeast70(students, i))
            studentNames.push(students[i].name);
    }
    return studentNames;
}

function hasScoredAtLeast70(students, i) {
    return students[i].marks >= 70;
}

const students = [
  { name: "Anu", marks: 80 },
  { name: "Rahul", marks: 65 },
  { name: "Meera", marks: 91 },
  { name: "Vikram", marks: 72 },
];

console.log(studentScoredAtLeast70(students));