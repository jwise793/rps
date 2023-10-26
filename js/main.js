// Rock Paper Scissors game.

let rps = ["rock", "paper", "scissors"];
let ply_choice;
let cmp_choice;
let ply_wins = 0;
let cmp_wins = 0;
let draws = 0;
let game_num = 0;
let pChoice;
let game_over = false;
let name;

// function for computer choice.
function getComputerChoice(){
    let ai_choice = rps[Math.floor(Math.random() * rps.length)];
    cmp_choice = ai_choice
}

// function for player choice.
function playerChoice(){
    let pChoice = prompt("rock paper scissors")

    if (pChoice === null) {
        game_over = true;
        return; }
    if (pChoice == "rock"|| pChoice == "paper" || pChoice == "scissors") {
        return ply_choice = pChoice;}

    else if (pChoice == "") {
        alert("Enter a choice!");
        return playerChoice()}

    else if (pChoice != "rock"|| pChoice != "paper"|| pChoice != "scissors") {
        alert("Not an option!");
        return playerChoice() }   
}

// funtion for round.
function playround() {
    
    playerChoice()
    getComputerChoice()
    
    if (ply_choice == "rock" && cmp_choice == "scissors" || ply_choice == "paper" && cmp_choice == "rock" || ply_choice == "scissors" && cmp_choice == "paper") {
        console.log({ply_choice}," beats", {cmp_choice})
        console.log("Player Wins \n")
        ply_wins = ply_wins += 1; 
        game_num = game_num += 1;}

    else if (cmp_choice == "rock" && ply_choice == "scissors" || cmp_choice == "paper" && ply_choice == "rock" || cmp_choice == "scissors" && ply_choice == "paper") {
        console.log({cmp_choice}," beats", {ply_choice})
        console.log("Computer Wins \n")
        cmp_wins = cmp_wins += 1; 
        game_num = game_num += 1;}

    else if (ply_choice == cmp_choice) {
        console.log({cmp_choice}," draws", {ply_choice})
        console.log("It's a Draw! \n")
        game_num = game_num += 1;
        draws += 1}}

// function for game.
function game() {
    let name = prompt("Enter your name?")
    while (game_num < 5) {
        if (game_over === true) {
            return;}

        playround()
        
        alert(`${name} = ${ply_choice}\nComputer = ${cmp_choice}\nGame = ${game_num}\n${name} ${ply_wins}-Wins\nComputer ${cmp_wins}-Wins\nDraws ${draws}-Draws`)
        console.log("Games = ", game_num)
        console.log("Player = ", ply_wins)
        console.log("Computer = ", cmp_wins)
        console.log("Computer's choice", cmp_choice)
        if (game_num == 5) {
            if  (ply_wins > cmp_wins && game_num == 5) {
                alert(`${name} Wins!`)}

            if (cmp_wins > ply_wins && game_num == 5) {
                alert("Computer Wins!")}

            if (cmp_wins == ply_wins && game_num == 5) {
                alert("Draw")}
            
            
            }

        }
    }

console.log(game())