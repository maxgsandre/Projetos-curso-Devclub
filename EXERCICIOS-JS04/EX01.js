


/*
1 - ADICIONE 10% DE MERCADO AO VALOR DE CADA COMPANIA
2 - MOSTRE TODAS COMPANIAS QUE FORAM FUNDADAS ANTES DO ANO 2000
3 - SOME O VALOR DE MERCADO DAS COMPANIAS SELECIONADAS
*/




const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Kyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
];

const add10PercentMarletValue = company => {
    company.marketValue = company.marketValue + company.marketValue /10
   return company
}

const oldCompanies = company => company.foundedOn < 2000 

const sumCompanies = (acc, current) => {
    return acc + current.marketValue
}


const myBestCompanies = companies
    .map(add10PercentMarletValue)
    .filter(oldCompanies)
    .reduce(sumCompanies,0)

console.log(myBestCompanies)

