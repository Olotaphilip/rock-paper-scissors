function getcomputerchoice() {

    let computerchoice = Math.floor(Math.random() * 3 + 1)
    
    switch (computerchoice) {
       case 1: 
       return 'rock' 
       break;

       case 2: 
       return 'paper'
       break;

       case 3:
       return 'scissors'
       break;
    }  
}
console.log(getcomputerchoice())

function gethumanchoice() {
    let humanchoice = prompt('Rock, Paper or Scissors?')
    return humanchoice
}

console.log(gethumanchoice())

let computerscore = 0
let humanscore = 0

