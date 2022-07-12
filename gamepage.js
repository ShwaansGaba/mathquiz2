player1name=localStorage.getItem("player1");
player2name=localStorage.getItem("player2");

   player1score=0;
   player2score=0;

   document.getElementById("PLAYER1NAME").innerHTML=player1name+":";
   document.getElementById("PLAYER2NAME").innerHTML=player2name+":";

   document.getElementById("PLAYER1SCORE").innerHTML=player1score;
   document.getElementById("PLAYER2SCORE").innerHTML=player2score;

document.getElementById("Questionturn").innerHTML="Question Turn :"+player1name;
document.getElementById("Answerturn").innerHTML="Answer Turn :"+player2name;


function send (){

}