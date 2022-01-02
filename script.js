const card = document.querySelector(".carte")

console.log(card);

card.addEventListener("mouseover", () => {
    document.querySelector(".square_left").style.transform = "translate(-20px, -20px)";
    document.querySelector(".square_right").style.transform = "translate(20px, 20px)";
    document.querySelector(".circle_animation").style.border = "2px solid transparent";
    document.querySelector(".circle_animation2").style.border = "2px solid transparent";
})

card.addEventListener("mouseout", () => {
    document.querySelector(".square_left").style.transform = "translate(20px, 20px)";
    document.querySelector(".square_right").style.transform = "translate(-20px, -20px)";
    document.querySelector(".circle_animation").style.border = "2px solid white";
    document.querySelector(".circle_animation2").style.border = "2px solid white";

})