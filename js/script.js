const choices = document.querySelector(".choices");
const playerChoiceElement = document.querySelector(".player-choice");
const computerChoiceElement = document.querySelector(".computer-choice");
const result = document.querySelector(".result");
const playAgainButton = document.querySelector(".play-again__button");

const options = [
    "paper",
    "rock",
    "scissor"
];
let playerChoice = "";
let computerChoice = "";

options.forEach(option => {
    const button = document.createElement("button");
    const span = document.createElement("span");
    if (option === "paper") {
        span.textContent = "✋";
    } else if (option === "rock") {
        span.textContent = "✊";
    } else if (option === "scissor") {
        span.textContent = "✌";
    }
    span.className = "choices__emoji";
    button.appendChild(span);
    button.className = "choices__choice";

    button.insertAdjacentText("afterbegin", option);
    choices.appendChild(button);
    button.addEventListener("click", (e) => {
        playerChoice = option;
        playerChoiceElement.textContent = `Your choice is ${option}`;
        computerChoice = randomChoice(options);
        computerChoiceElement.textContent = `Computer choice is ${computerChoice}`;
        const win = winner(playerChoice, computerChoice);
        if (win === "computer") {
            result.textContent = 'You lose, sucker!';
        } else if (win === "fair") {
            result.textContent = "No one win";
        } else {
            result.textContent = "You Win";
        }

    });
});


// to determine which user wins
function winner(playerChoice, computerChoice) {

    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return "player";
        } else if (computerChoice === "paper") {
            return "fair"
        } else {
            return "computer";
        }
    } else if (playerChoice === "rock") {
        if (computerChoice === "scissor") {
            return "player";
        } else if (computerChoice === "rock") {
            return "fair"
        } else {
            return "computer";
        }
    } else if (playerChoice === "scissor") {
        if (computerChoice === "paper") {
            return "player";
        } else if (computerChoice === "scissor") {
            return "fair"
        } else {
            return "computer";
        }
    }
}

//return random choice from array
function randomChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

playAgainButton.addEventListener("click", (e) => {
    playerChoiceElement.textContent = "";
    computerChoiceElement.textContent = "";
    result.textContent = "";
})