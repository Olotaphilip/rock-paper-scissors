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


function gethumanchoice() {
    let humanchoice = prompt('Rock, Paper or Scissors?')
    return humanchoice
}


let computerscore = 0
let humanscore = 0

function playround(humanchoice, computerchoice) {

   if (humanchoice === 'paper' && computerchoice === 'rock') {
      console.log('you win, paper covers rock')
      ++humanscore
   }  else if (humanchoice === 'rock' && computerchoice === 'paper') {
      console.log('you win, paper covers rock')
      ++computerscore
   }  else if (humanchoice === 'scissors' && computerchoice === 'paper') {
      console.log('you win, scissors cuts paper')
      ++humanscore
   }  else if (humanchoice === 'paper' && computerchoice === 'scissors') {
      console.log('you lose, scissors cuts paper')
      ++computerscore
   }  else if (humanchoice === 'rock' && computerchoice === 'scissors') {
      console.log('you win, rock crushes scissors')
      ++humanscore
   }  else if (humanchoice === 'scissors' && computerchoice === 'rock') {
      console.log('you lose, rock crushes scissors')
      ++computerscore
   }  else if (humanchoice === 'rock' && computerchoice === 'rock') {
      console.log('yap!, no winner here')
   }  else if (humanchoice === 'scissors' && computerchoice === 'scissors') {
      console.log('yap!, no winner here')
   }  else if (humanchoice === 'paper' && computerchoice === 'paper') {
      console.log('yap!, no winner here')
   } 
    
console.log(humanchoice)

}




const humanpick = gethumanchoice()
const computerpick = getcomputerchoice()
 
let humanpicklowercase = humanpick.toLowerCase()

playround(humanpicklowercase, computerpick)

 console.log(humanscore)
 console.log(computerscore)
 console.log(humanpicklowercase)
 console.log(computerpick)
 

 function playgame() {
 
 }

