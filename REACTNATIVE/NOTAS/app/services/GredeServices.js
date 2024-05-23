let grades=[
    {subject:"Matematicas", grade:9.5},
    {subject:"Fisica", grade:9.2},
]

export const saveGrade=(grade)=>{
grades.push(grade);
}


export const getGrades=()=>{
    return grades;
}