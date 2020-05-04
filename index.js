const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput
  }else if(userInput === 'bomb'){
    return userInput
  }
  else{
    console.log("ERROR ! ENTER EITHER ROCK,PAPER OR SCISSORS!")
  }
}

const getComputerChoice = () =>{
  const randomNum = Math.floor(Math.random() * 3);
  switch(randomNum){
    case 0: return 'rock';break;
    case 1: return 'paper';break;
    case 2: return 'scissors';break;
  }
}

const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
}else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}else if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}else if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}else if (userChoice === 'bomb') {
  return 'U WIN WIHTOUT TRYING';
}}

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
};

playGame()