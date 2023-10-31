function work(){
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6);
randomNumber1++;

document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6);
randomNumber2++;

document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText ="🚩🚩PLAYER 1 WINS!!";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerText="DRAW!!!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText="PLAYER 2 WINS!!🚩🚩";
}
}