let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function game() {
    function playRound(e) {
        if (playerScore >= 5 || computerScore >= 5) return;

        let result = 0; // 0 means draw, 1 means win, -1 means lose
        let playerSelection = e.currentTarget.textContent;
        let computerSelection = getComputerChoice();
        const para = document.createElement("p");

        if (playerSelection == computerSelection) result = 0;
        else if (playerSelection == "Rock") result = (computerSelection == "Scissors") ? 1 : -1;
        else if (playerSelection == "Paper") result = (computerSelection == "Rock") ? 1 : -1;
        else if (playerSelection == "Scissors") result = (computerSelection == "Paper") ? 1 : -1;
        
        if (result == 0) para.textContent = "Draw!"
        if (result == 1) {
            playerScore += 1;
            para.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
        if (result == -1) {
            computerScore += 1;
            para.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        }

        para.textContent += ` Player: ${playerScore}; Computer: ${computerScore}`;
        results.appendChild(para);
        
        if (playerScore >= 5) {
            const winner = document.createElement('p');
            winner.textContent = 'Player wins!'
            results.appendChild(winner);
        }
        if (computerScore >= 5) {
            const winner = document.createElement('p');
            winner.textContent = 'Computer wins!'
            results.appendChild(winner);
        }
    }

    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";

    rock.addEventListener('click', playRound);
    paper.addEventListener('click', playRound);
    scissors.addEventListener('click', playRound);

    const results = document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);
    body.appendChild(results);

    let playerScore = 0;
    let computerScore = 0;
}

game();