function AddUser(){

    player1name=document.getElementById("player1input").value;
    player2name=document.getElementById("player2input").value;
localStorage.setItem("player1",player1name);
localStorage.setItem("player2",player2name);

    window.location="gamepage.html"
}