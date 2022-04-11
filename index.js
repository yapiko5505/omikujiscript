
function drawkuji() {
    let randomNumber = Math.floor(Math.random() * 5 )+ 1;
    document.getElementsByClassName("kuji")[0].setAttribute('src', `images/omikuji${randomNumber}.png`);
    document.querySelectorAll("button")[0].innerHTML= "もう一度引く";
}




