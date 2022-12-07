

/*
MAP 
- Cria um novo array, a partir do array percorrido (array orgininal)
- Cria um novo array com a mesma quantidade de itens do array original
- Aceita 3 parametros
    - item
    - index
    - array completo
*/

const numbers = [1,2,3,4]

const students = [
    {name:'paulo', age: 17 },
    {name:'pedro', age:24 },
    {name:'maria', age: 32 },
    {name:'joao', age: 54 },
    {name:'marcos', age: 41 },
    {name:'gustavo', age: 26 },
    {name:'debora', age: 35 },
    {name:'andrer', age: 14 },
]

const newArray = numbers.map ( (number) => {
    return number
})

console.log(newArray)

const newStudents = students.map ( (student) => {
        const newStudent = {
            name: student.name + ' da Silva',
            age: student.age - 2
        }
        return newStudent
})

console.log(newStudents)