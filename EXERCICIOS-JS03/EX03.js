

const people = [
    {
        numberOfChildren: 0,
        salary: 2500
    },
    {
        numberOfChildren: 2,
        salary: 3200
    },
    {
        numberOfChildren: 1,
        salary: 2000
    },
    {
        numberOfChildren: 5,
        salary: 4300
    },
    {
        numberOfChildren: 3,
        salary: 1700
    },
    {
        numberOfChildren: 4,
        salary: 2200
    },
    {
        numberOfChildren: 0,
        salary: -100
    },
]

function find_average_and_highest_salary(people){
    let average_salary = 0
    let average_children = 0
    let highest_salary = 0

    for (i = 0; i < people.length; i++) {

        const salary = people[i].salary
        const children = people[i].numberOfChildren

        if (salary > highest_salary) highest_salary = salary

        if (salary < 0) {
            console.log(`Média de sálario R$ ${(average_salary / i).toFixed(0)}`)
            console.log(`Média de filhos R$ ${(average_children / i).toFixed(0)}`)
            console.log(`Maior Sálario R$ ${highest_salary}`)
            break
        } else {
            average_salary = average_salary + salary;
            average_children += children
        }
    }
}

find_average_and_highest_salary(people)