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
let totalgamescore = 0 

 
 playgame()
 

function playround(humanchoice, computerchoice) {

   if (humanchoice === 'paper' && computerchoice === 'rock') {
      console.log('you win, paper covers rock')
      humanscore =  Number(localStorage.getItem('localhumanscore'))
      computerscore = Number(localStorage.getItem('localcomputerscore'))

      localStorage.setItem('localhumanscore', ++humanscore)
      localStorage.setItem('localcomputerscore', computerscore + 0)

   }  else if (humanchoice === 'rock' && computerchoice === 'paper') {
      console.log('you lose, paper covers rock')
      computerscore = Number(localStorage.getItem('localcomputerscore'))
      humanscore =  Number(localStorage.getItem('localhumanscore'))

      localStorage.setItem('localcomputerscore', ++computerscore)
      localStorage.setItem('localhumanscore', humanscore + 0)

   }  else if (humanchoice === 'scissors' && computerchoice === 'paper') {
      console.log('you win, scissors cuts paper')
      humanscore =  Number(localStorage.getItem('localhumanscore'))
      computerscore = Number(localStorage.getItem('localcomputerscore'))

      localStorage.setItem('localhumanscore', ++humanscore)
      localStorage.setItem('localcomputerscore', computerscore + 0)

   }  else if (humanchoice === 'paper' && computerchoice === 'scissors') {
      console.log('you lose, scissors cuts paper')
      computerscore = Number(localStorage.getItem('localcomputerscore'))
      humanscore =  Number(localStorage.getItem('localhumanscore'))

      localStorage.setItem('localcomputerscore', ++computerscore)
      localStorage.setItem('localhumanscore', humanscore + 0)

   }  else if (humanchoice === 'rock' && computerchoice === 'scissors') {
      console.log('you win, rock crushes scissors')
      humanscore =  Number(localStorage.getItem('localhumanscore'))
      computerscore = Number(localStorage.getItem('localcomputerscore'))

      localStorage.setItem('localhumanscore', ++humanscore)
      localStorage.setItem('localcomputerscore', computerscore + 0)

   }  else if (humanchoice === 'scissors' && computerchoice === 'rock') {
      console.log('you lose, rock crushes scissors')
      computerscore = Number(localStorage.getItem('localcomputerscore'))
      humanscore =  Number(localStorage.getItem('localhumanscore'))

      localStorage.setItem('localcomputerscore', ++computerscore)
      localStorage.setItem('localhumanscore', humanscore + 0)

   }  else if (humanchoice === 'rock' && computerchoice === 'rock') {
      console.log('yap!, no winner here')
      humanscore =  Number(localStorage.getItem('localhumanscore'))
      computerscore = Number(localStorage.getItem('localcomputerscore'))

      localStorage.setItem('localhumanscore', humanscore + 0)
      localStorage.setItem('localcomputerscore', computerscore + 0)

   }  else if (humanchoice === 'scissors' && computerchoice === 'scissors') {
      console.log('yap!, no winner here')
      humanscore =  Number(localStorage.getItem('localhumanscore'))
      computerscore = Number(localStorage.getItem('localcomputerscore'))

      localStorage.setItem('localhumanscore', humanscore + 0)
      localStorage.setItem('localcomputerscore', computerscore + 0)

   }  else if (humanchoice === 'paper' && computerchoice === 'paper') {
      console.log('yap!, no winner here')
      humanscore =  Number(localStorage.getItem('localhumanscore'))
      computerscore = Number(localStorage.getItem('localcomputerscore'))

      localStorage.setItem('localhumanscore', humanscore + 0)
      localStorage.setItem('localcomputerscore', computerscore + 0)

   } 
    
console.log(humanchoice)
console.log(computerchoice)

}
 
 console.log(humanscore)
 console.log(computerscore)
 
 function playgame() {
     playround(gethumanchoice().toLowerCase(), getcomputerchoice())
      totalgamescore = Number(localStorage.getItem('localtotalgamescore'))
      
      localStorage.setItem('localtotalgamescore', ++totalgamescore)
      if (totalgamescore == 5) {
         localStorage.setItem('localtotalgamescore', 0)
      }
    console.log(totalgamescore)

     playround(gethumanchoice().toLowerCase(), getcomputerchoice())
      totalgamescore = Number(localStorage.getItem('localtotalgamescore'))
      
      localStorage.setItem('localtotalgamescore', ++totalgamescore)
      if (totalgamescore == 5) {
         localStorage.setItem('localtotalgamescore', 0)
      }
    console.log(totalgamescore)

     playround(gethumanchoice().toLowerCase(), getcomputerchoice())
      totalgamescore = Number(localStorage.getItem('localtotalgamescore'))
      
      localStorage.setItem('localtotalgamescore', ++totalgamescore)
      if (totalgamescore == 5) {
         localStorage.setItem('localtotalgamescore', 0)
      }
    console.log(totalgamescore)

     playround(gethumanchoice().toLowerCase(), getcomputerchoice())
      totalgamescore = Number(localStorage.getItem('localtotalgamescore'))
      
      localStorage.setItem('localtotalgamescore', ++totalgamescore)
      if (totalgamescore == 5) {
         localStorage.setItem('localtotalgamescore', 0)
      }
    console.log(totalgamescore)

     playround(gethumanchoice().toLowerCase(), getcomputerchoice())
      totalgamescore = Number(localStorage.getItem('localtotalgamescore'))
      
      localStorage.setItem('localtotalgamescore', ++totalgamescore)
      if (totalgamescore == 5) {
         localStorage.setItem('localtotalgamescore', 0)
      }
    console.log(totalgamescore)
 }

console.log(totalgamescore)




