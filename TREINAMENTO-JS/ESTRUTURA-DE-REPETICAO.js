
//FOR
const students = ['Bruna','Pedro','Paulo','Maria','João']

for(let i = 0; i < students.length; i++ ){

    console.log(`${students[i]} esta presente a aula`)
}

//WHILE

let i = 352637446
while(i > 20){
    console.log(i)
    i/=40
}

// FOR OF

let myName = 'Max'
let allNames = ['Bruna','Pedro','Paulo','Maria','João']

for(let my_names of myName)
{
    console.log(my_names)
}
for(let all_names of allNames)
{
    console.log(all_names)
}

// FOR IN

const student = {
    name:'Max',
    age: 30,
    genre: 'male',
}

for(let object in student)
{
    console.log(object)
}

for(let object in student)
{
    console.log(student[object])
}

for(let object in student)
{
    console.log(`${object}:${student[object]}`)
}

