special = 7
playerTour = true
let player = {
    name: prompt("entrer votre nom"),
    health: 200,
    potion: 1,
}
console.log(player)

let dragon = {
    name: "Pandalf",
    health: 250

}
console.log(dragon)

console.log(`${player.name} vous affrontez le dragon ${dragon.name} pour sauver votre peuple`)
console.log("fight")

function showState() {
    console.log(`votre vie est de ${player.health}`)
    console.log(`la vie du dragon est de ${dragon.health}`)
}


function playerAttack() {
    console.log("selectionner votre attaque")
    playerCombo = prompt("entrer le combo")
    if (playerCombo == "punch") {
        console.log(`vous avez donné une punch à ${dragon.name}`)
        dragon.health = dragon.health - 20
    }
    else if (playerCombo == "kick") {
        console.log(`vous avez donné un kick à ${dragon.name}`)
        dragon.health = dragon.health - 25
    }

    else if (playerCombo == "special") {
        console.log(`vous avez fait votre combo special sur ${dragon.name}`)
        dragon.health = dragon.health - 35
        special = special - 1
    }
    else if (playerCombo == "null") {
        console.log("vous recevez des dommages")
        player.health = player.health - 10
    }
}

function specialAttack() {
    if (special == 0) {
        alert("vous n'avez plus d'attaques spéciales")
    }
}

function dragonAttack() {
    dragonDammage = 20
    dragonSpecialDammage = 30
    dragonAttackDammage = Math.random()
    if (dragonAttackDammage < 0.7) {
        player.health = player.health - dragonDammage
        console.log(`vous recevez une attaque de ${dragon.name}`)
    }
    else {
        player.health = player.health - dragonSpecialDammage
        alert(`vous recevez la spéciale de ${dragon.name}`)
    }
}

function playRound() {
    if (playerTour) {
        playerAttack()
    }
    else {
        dragonAttack()
    }
    playerTour = !playerTour;
}

function gameLoop() {
    while (player.health > 0 && dragon.health > 0) {
        showState()
        playRound()
        specialAttack()
    }
    showState
    if (player.health < 0) {
        player.health = 0
        showState()
        alert("le jeux est terminé, vous avez perdu")
    }
    else if (dragon.health < 0) {
        dragon.health = 0
        showState()
        console.log("vous avez terrassé le dragon")
    }
}
gameLoop()
