let player = {
    name : prompt("entrer votre nom"),
    health : 200, 
    potion : 1,
}
console.log(player)

special = 2

let dragon = {
    name : "Pandalf",
    health : 250

}
console.log(dragon)

function showState() {
    console.log(`votre vie est de ${player.health}`)
    console.log(`la vie du dragon est de ${dragon.health}`)
}

displayStateInConsole = showState
showState (displayStateInConsole)

function playerAttack (){
    console.log ("selectionner votre attaque")
    playerCombo = prompt ("entrer l'action")
    if (combo === "punch") {
        dragon.health = dragon.health - 20
    }
    else if (combo === "kick"){
        dragon.health = dragon.health - 25
    }

    else if (combo === "special") {
        dragon.health = dragon.health - 35
        special = special - 1
    }
    else if (combo == "null") {
        alert ("vous recevez des dommages")
        player.health = player.health - 10
    }
}

function specialAttack(){
    if (special = 0){
        alert ("vous n'avez plus d'attaques spéciales")
    }
}

function dragonAttack (){
    dragonCombo = prompt ("entrer votre ")
}
