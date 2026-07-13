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

