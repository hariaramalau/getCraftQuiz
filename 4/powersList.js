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

var temp = [];

function allPowersList(){
    arr.forEach(function(element){
       temp.push.apply(element.powers);
    })
    return temp;
}

// function allPowersList() {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < i.powers; j++) {
//             temp.push.apply(i[j]);
//         }
//     }
//     return temp;
// }

console.log(allPowersList());