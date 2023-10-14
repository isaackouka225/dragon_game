let playerHealth = 202;
let enemyHealth = 250;
let regenerationCount = 3;
let gameTurn = 1;
let playerName = "";

const attackPlayerAudio = document.getElementById("playerAttackAudio");
const attackDragonAudio = document.getElementById("dragonAttackAudio");
const gameBackgroundAudio = document.getElementById("gameAudio");

function playAttackSound(audioElement) {
    audioElement.play();
}

function playGameBackgroundSound() {
    gameBackgroundAudio.play();
}

function getPlayerName() {
    playerName = prompt("Entrez votre nom :");
    if (playerName === null || playerName.trim() === "") {
        playerName = "Joueur";
    }
}