let game = document.getElementById("game")
let punchButton = document.getElementById("punchButton")
let kickButton = document.getElementById("kickButton")
let specialButton = document.getElementById("specialButton")
let playerNameEl = document.getElementById("playerName")
let playerHealthEl = document.getElementById("playerHealth")
let playerHealthBar = document.getElementById("playerHealthBar")
let dragonNameEl = document.getElementById("dragonName")
let dragonHealthEl = document.getElementById("dragonHealth")
let dragonHealthBar = document.getElementById("dragonHealthBar")


let special = 7
let playerTour = true


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
    playerNameEl.textContent = player.name;
    playerHealthEl.textContent = `Santé : ${player.health}`;
    playerHealthBar.style.width = `${(player.health / 200) * 100}%`;
    dragonNameEl.textContent = dragon.name;
    dragonHealthEl.textContent = `Santé : ${dragon.health}`;
    dragonHealthBar.style.width = `${(dragon.health / 250) * 100}%`;
}

function showGameText(message) {
    game.textContent = message;
}


function disableButtons() {
    punchButton.disabled = true;
    kickButton.disabled = true;
    specialButton.disabled = true;
}

function playerAttack(attack) {
    showGameText("selectionner votre attaque")
    if (attack === "punch") {
        showGameText(`vous avez donné une punch à ${dragon.name}`)
        dragon.health = dragon.health - 20
    } else if (attack === "kick") {
        showGameText(`vous avez donné un kick à ${dragon.name}`)
        dragon.health = dragon.health - 25
    } else if (attack === "special") {
        showGameText(`vous avez fait votre combo special sur ${dragon.name}`)
        dragon.health = dragon.health - 35
        special = special - 1
    } else if (attack === "null") {
        showGameText("vous recevez des dommages")
        player.health = player.health - 10
    }
    showCharacterState()

    if (dragon.health <= 0) {
        showGameText(`Félicitations ! Vous avez vaincu ${dragon.name}`);
        return;
    }
    if (player.health <= 0) {
        showGameText(`Dommage, ${dragon.name} vous a vaincu.`);
        return;
    }
    if (player.health <= 0 || dragon.health <= 0) {
        disableButtons()
        return;
    }

}

    function specialAttack() {
        if (special === 0) {
            showGameText("vous n'avez plus d'attaques spéciales")
        }
    }

    function dragonAttack() {
        let dragonDammage = 20
        let dragonSpecialDammage = 30
        let dragonAttackDammage = Math.random()
        if (dragonAttackDammage < 0.7) {
            player.health = player.health - dragonDammage
            showGameText(`vous recevez une attaque de ${dragon.name}`)
        } else {
            player.health = player.health - dragonSpecialDammage
            showGameText(`vous recevez la spéciale de ${dragon.name}`)
        }
        showCharacterState()

        if (dragon.health <= 0) {
            showGameText(`Félicitations ! Vous avez vaincu ${dragon.name}`);
            return;
        }
        if (player.health <= 0) {
            showGameText(`Dommage, ${dragon.name} vous a vaincu.`);
            return;
        }
        if (player.health <= 0 || dragon.health <= 0) {
            disableButtons()
            return;
        }
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
        showCharacterState()
        playRound()
    }

    gameLoop();