let rn1 = Math.floor((Math.random()*6)+1);
let rn2 = Math.floor((Math.random()*6)+1);

const img1 = document.getElementsByClassName("img1");
const img2 = document.getElementsByClassName("img2");
document.querySelector("img.img1").setAttribute("src","./images/dice"+rn1+".png");
document.querySelector("img.img2").setAttribute("src","./images/dice"+rn2+".png");
/*document.querySelector("h1").classList.add("result");*/
if(rn1>rn2){
    
    document.querySelector("h1").innerHTML="Player 1 Wins";
    }else if (rn2 > rn1) {
        document.querySelector("h1").innerHTML="Player 2 Wins";
}

