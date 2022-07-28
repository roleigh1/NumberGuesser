let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = (number) =>{

   return Math.floor(Math.random()* 9);; 
    }
console.log(generateTarget());

const compareGuesses = (humanGuess,computerGuess,targetGuess) => {
  const humanDiffrence = Math.abs(targetGuess - humanGuess);
  const computerDiffrence = Math.abs(targetGuess - computerGuess);
if (humanDiffrence <= computerDiffrence){
  return true ; 
} else {
  return false ;
}
}
const updateScore = winner =>  {
if (winner === 'Human'){
  humanScore++;
} else if (winner ==='Computer'){
  computerScore++
}
}
const advanceRound = () =>{
  if (humanScore >= computerScore){
    currentRoundNumber++
  } else {
    currentRoundNumber++
  }
}