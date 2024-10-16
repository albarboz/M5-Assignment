function getUserChoice() {
    let userInput = prompt("Choose rock, paper, or scissors:").toLowerCase();
    
    // Validate input
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
        userInput = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase();
    }

    return userInput;
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return "You win! Rock destroys scissors.";
        } else {
            return "You lose! Paper covers rock.";
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "You win! Paper covers rock.";
        } else {
            return "You lose! Scissors cut paper.";
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You win! Scissors cut paper.";
        } else {
            return "You lose! Rock destroys scissors.";
        }
    }
}

// Main game function
function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    
    const result = determineWinner(userChoice, computerChoice);
    alert(result);
}


playGame();
