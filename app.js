let counter = 0
const circlePlace = document.querySelector(".round-button")
const btnRound = document.querySelector(".btn-round")

const other=function () {
    if (counter==0) {
        circlePlace.setAttribute("style", "margin-left:93%");
        counter++
    } else {
        circlePlace.setAttribute("style", "margin-right:0%")
    counter--
    
    }
}
btnRound.addEventListener("click", other)