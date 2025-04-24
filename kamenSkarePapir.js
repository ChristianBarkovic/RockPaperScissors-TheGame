let options = ["rock", "paper", "scissors"];
document.getElementById("btnConfirm").addEventListener("click", winner);
function winner() {
    let selectionPC = options[Math.floor(Math.random() * options.length)];
    let rps = document.getElementById("player1");
    let selectionPlayer = rps.options[rps.selectedIndex].value;
    document.getElementById("user").innerHTML =  selectionPlayer;
    document.getElementById("PC").innerHTML =  selectionPC;
    if (selectionPlayer === "rock" && selectionPC === "rock") {
        document.getElementById("user").src = "Rock.png";
        document.getElementById("PC").src = "Rock.png";
        document.getElementById("result").src = "rpsDraw.png";
        }
        else if (selectionPlayer === "paper" && selectionPC === "paper") {
            document.getElementById("user").src = "Paper.png";
            document.getElementById("PC").src = "Paper.png";
            document.getElementById("result").src = "rpsDraw.png";
        }
        else if (selectionPlayer === "scissors" && selectionPC === "scissors") {
            document.getElementById("user").src = "Scissors.png";
            document.getElementById("PC").src = "Scissors.png";
            document.getElementById("result").src = "rpsDraw.png";
        }
        else if (selectionPlayer === "rock") {
            document.getElementById("user").src = "Rock.png";
            if (selectionPC === "scissors") {
                document.getElementById("PC").src = "Scissors.png";
                document.getElementById("result").src = "rockWin.png";
            }
            else if (selectionPC === "paper") {
                document.getElementById("PC").src = "Paper.png";
                document.getElementById("result").src = "paperWin.png";
            };
        }
        else if (selectionPlayer === "scissors") {
            document.getElementById("user").src = "Scissors.png";
            if (selectionPC === "paper") {
                document.getElementById("PC").src = "Paper.png";
                document.getElementById("result").src = "scissorsWin.png";
            }
            else if (selectionPC === "rock") {
                document.getElementById("PC").src = "Rock.png";
                document.getElementById("result").src = "rockWin.png";
            };
        }
        else if (selectionPlayer === "paper") {
            document.getElementById("user").src = "Paper.png";
            if (selectionPC === "rock") {
                document.getElementById("PC").src = "Rock.png";
                document.getElementById("result").src = "paperWin.png";
            }
            else if (selectionPC === "scissors") {
                document.getElementById("PC").src = "Scissors.png";
                document.getElementById("result").src = "scissorsWin.png";
            };
        };
    };
    
    // Ako zelis puno kraci kod i bez fotki.
    /*if (selectionPlayer === selectionPC) {
        document.getElementById("result").innerHTML = "DRAW!";
    }
    else if (
        (selectionPlayer === "rock" && selectionPC === "scissors") ||
        (selectionPlayer === "scissors" && selectionPC === "paper") ||
        (selectionPlayer === "paper" && selectionPC === "rock")) {
            document.getElementById("result").innerHTML = "The User has WON!";
        }
        else {
            document.getElementById("result").innerHTML = "The Computer has WON!";
        };
};*/ 






