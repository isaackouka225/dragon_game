game = document.getElementById(game)
punchButton = document.getElementById(punchButton)
kick = document.getElementById(kickButton)
specialButton = document.getElementById(specialButton)
playerNameEl = document.getElementById(playerName)
playerHealthEl = document.getElementById(playerHealth)
playerHealthBar = document.getElementById(playerHealthBar)
dragonNameEl = document.getElementById (dragonName)
dragonHealthEl = document.getElementById(dragonHealth)
dragonHealthBar = document.getElementById(dragonHealthBar)


special = 7
playerTour = true


let player = {
    name: prompt("entrer votre nom"),
    health: 200,
    potion: 1,
}



let dragon = {
    name: "Pandalf",
    health: 250

}


function showCharacterState() {
    playerNameElement.textContent = player.name;
    playerHealthElement.textContent = `Santé : ${player.health}`;
    playerHealthBar.style.width = `${(player.health / 200) * 100}%`;
    dragonNameElement.textContent = dragon.name;
    dragonHealthElement.textContent = `Santé : ${dragon.health}`;
    dragonHealthBar.style.width = `${(dragon.health / 250) * 100}%`;
}

function showGameText(message) {
    gameText.textContent = message;
}

function playerAttack(attack) {
    showGameText("selectionner votre attaque")
    if (attack == "punch") {
        showGameText(`vous avez donné une punch à ${dragon.name}`)
        dragon.health = dragon.health - 20
    }
    else if (attack == "kick") {
        showGameText(`vous avez donné un kick à ${dragon.name}`)
        dragon.health = dragon.health - 25
    }

    else if (attack == "special") {
        showGameText(`vous avez fait votre combo special sur ${dragon.name}`)
        dragon.health = dragon.health - 35
        special = special - 1
    }
    else if (attack == "null") {
        showGameText("vous recevez des dommages")
        player.health = player.health - 10
    }
    showCharacterState()
}

function specialAttack() {
    if (special == 0) {
        showGameText("vous n'avez plus d'attaques spéciales")
    }
}

function dragonAttack() {
    dragonDammage = 20
    dragonSpecialDammage = 30
    dragonAttackDammage = Math.random()
    if (dragonAttackDammage < 0.7) {
        player.health = player.health - dragonDammage
        showGameText(`vous recevez une attaque de ${dragon.name}`)
    }
    else {
        player.health = player.health - dragonSpecialDammage
        showGameText(`vous recevez la spéciale de ${dragon.name}`)
    }
    showCharacterState
}


punchButton.addEventListener("click", function () {
    if (playerTour) {
        playerAttack("punch");
        playerTour = false;
        setTimeout(playRound, 1000);
    }
});

kickButton.addEventListener("click", function () {
    if (playerTour) {
        playerAttack("kick");
        playerTour = false;
        setTimeout(playRound, 1000);
    }
});

specialButton.addEventListener("click", function () {
    if (playerTour) {
        playerAttack("special");
        playerTour = false;
        setTimeout(playRound, 1000);
    }
});


function playRound() {
    if (!playerTour) {
        dragonAttack();
        playerTour = true;
    }
}


function gameLoop() {
        showCharacterState
        playRound()
    }

    
gameLoop()
