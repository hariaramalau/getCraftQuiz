var arr = [
    {
        name: 'Clark Kent',
        alterEgo: 'Superman',
        gender: 'Male',
        powers: ['super human strength', 'flight', 'x-ray vision', 'heat vision']
    },
    {
        name: 'Barry Allen',
        alterEgo: 'The Flash',
        gender: 'Male',
        powers: ['super speed', 'phasing', 'time travel', 'dimensional travel']
    },
    {
        name: 'Diana Prince',
        alterEgo: 'Wonder Woman',
        gender: 'Female',
        powers: ['super human strength', 'super human reflexes', 'super human agility', 'flight']
    },
    {
        name: 'Bruce Banner',
        alterEgo: 'The Hulk',
        gender: 'Male',
        powers: ['super human strength', 'thunder clap', 'super healing factor']
    },
    {
        name: 'Wade Wilson',
        alterEgo: 'Deadpool',
        gender: 'Male',
        powers: ['super healing factor', 'super human agility']
    },
    {
        name: 'Jean Grey',
        alterEgo: 'Phoenix',
        gender: 'Female',
        powers: ['telepathy', 'telekinesis', 'rearrange matter at will']
    },
    {
        name: 'Wanda Maximoff',
        alterEgo: 'Scarlet Witch',
        gender: 'Female',
        powers: ['reality manipulation', 'astral projection', 'psionic']
    }
]

//---------Split by gender--------

let maleList = arr.filter(function (hero) {
    return hero.gender === 'Male';
})

let femaleList = arr.filter(function (hero) {
    return hero.gender === 'Female';
})

console.log(genderedList);