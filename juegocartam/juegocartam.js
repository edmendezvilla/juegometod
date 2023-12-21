"use strict"

function jugador(nickname, lives, cardValue) {
    this.nickname = nickname;
    this.lives = lives;
    this.cardValue = cardValue;

    this.decreaseLives = function() {
        if(this.lives > 0) {
            this.lives--;
            alert(this.nickname + " Perdio una vida, vidas restantes: " + this.lives );
        } else{ 
            alert(this.nickname + " Te quedaste sin vidas");
        }
     };

     this.showStatus = function() {
        alert(this.nickname + " - Vidas restantes: " + this.lives);
     };
     this.play = function () {
        
        let numeroCarta = prompt(this.nickname + " elige un numero de carta del 1 al 7: ")
        let numeroCartaPlayer2 = prompt("Otro jugador, elije un numero del 1 al 7: ");

        alert(this.nickname + " eligio: " + numeroCarta);
        alert("Otro jugador eligio: " + numeroCartaPlayer2);

        if (numeroCarta < numeroCartaPlayer2) {
            this.decreaseLives();
            this.showStatus();
        } else if (numeroCarta > numeroCartaPlayer2 ) {
            alert(this.nickname + " gano");
        } else{
            alert("Es un empate")
        }
    };
}


function determineWinner (player1, player2) {
    if(player1.lives === 0 && player2.lives === 0) {
        alert("Es un empate. Ambos jugadores se quedaron sin vidas.");
    } else if (player1.lives === 0) {
        alert (player2.nickname + " gano el juego");
    } else if (player2.lives === 0) {
        alert(player1.nickname + " gano el juego");
    }
}

let player1 = new jugador("player1", 3);
let player2 = new jugador("player2", 3)

while (player1.lives > 0 && player2.lives > 0) {
    player1.play();
    determineWinner(player1, player2);

    if (player1.lives > 0 && player2.lives > 0) {
        player2.play();
        determineWinner(player1, player2);
     }
     
}