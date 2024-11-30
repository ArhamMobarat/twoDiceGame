function randomDice(){
    var diceValue = [];
    for(var i = 0 ; i<2; i++){
    var diceNumber =Math.floor(Math.random()*6)+1;
    diceValue.push(diceNumber);
    }
    var player1 = diceValue[0];
    var player2 = diceValue[1];
    document.querySelector(".img1").setAttribute("src","./images/dice"+player1+".png");
    document.querySelector(".img2").setAttribute("src","./images/dice"+player2+".png");
    if (player1>player2){
        document.querySelector("h1").textContent = "🚩Player 1 wins!";
    }else if(player1<player2){
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    }else{
        document.querySelector("h1").textContent = "Draw!";
    }
}



if (sessionStorage.getItem("hasRun")){
    randomDice();
}else{
    sessionStorage.setItem("hasRun", "True");
}
  