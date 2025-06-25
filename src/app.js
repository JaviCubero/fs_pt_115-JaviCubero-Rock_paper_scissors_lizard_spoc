/* Código antiguo
const options = ["rock", "paper", "scissors", "lizard", "spock"]

const getRandomOption = () => {
    const index = Math.floor(Math.random() * options.length)

    return options[index]
}

const checkUserOption = (userOption) => {
    const computerOption = getRandomOption()

    console.log(`User chose: ${userOption}`);
    console.log(`Computer chose: ${computerOption}`);

    if ((userOption == "rock" && (computerOption == "scissors" || computerOption == "lizard")) || (userOption == "paper" && (computerOption == "rock" || computerOption == "spock")) || (userOption == "scissors" && (computerOption == "paper" || computerOption == "lizard")) || (userOption == "lizard" && (computerOption == "paper" || computerOption == "spock")) || (userOption == "spock" && (computerOption == "scissors" || computerOption == "rock"))) {
        console.log("You win! 🎉");
    } else if (userOption === computerOption) {
        console.log("It's a draw! 🤝");
    } else {
        console.log("You lose 😢");
    }
}

checkUserOption("scissors")
*/


// Código mejorado
const options = ["rock", "paper", "scissors", "lizard", "spock"]

const winningCombinations = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"]
};

const getRandomOption = () => {
    const index = Math.floor(Math.random() * options.length)

    return options[index]
}

const checkUserOption = (userOption) => {
    const computerOption = getRandomOption()

    console.log(`User chose: ${userOption}`);
    console.log(`Computer chose: ${computerOption}`);

    if (userOption === computerOption) {
        console.log("It's a draw! 🤝");
    } else if (winningCombinations[userOption].includes(computerOption)) {
        console.log("You win! 🎉");
    } else {
        console.log("You lose 😢");
    }
}

const userOption = prompt("Choose one option: rock, paper, scissors, lizard or spock.").toLowerCase();

checkUserOption(userOption)

/*
- **Rock** aplasta a **Scissors** y a **Lizard**.  
- **Paper** cubre a **Rock** y desautoriza a **Spock**.  
- **Scissors** cortan a **Paper** y decapitan a **Lizard**.  
- **Lizard** devora a **Paper** y envenena a **Spock**.  
- **Spock** rompe a **Scissors** y vaporiza a **Rock**.  

Si ambas opciones son iguales, es un empate.
*/