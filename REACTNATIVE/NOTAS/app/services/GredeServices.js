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

export const updateGrade = (nota) => {
    // Encontrar la materia en el arreglo
    let gradeRetrieved = find(nota.subject);
    
    // Si se encuentra, actualizar la nota
    if (gradeRetrieved != null) {
        gradeRetrieved.grade = nota.grade;
    }

    // Mostrar el arreglo actualizado
    console.log("Arreglo actualizado:", grades);
};

// Función para buscar una materia en el arreglo
const find = (subject) => {
    // Recorrer el arreglo para encontrar la materia
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].subject === subject) {
            return grades[i];
        }
    }
    return null;
};