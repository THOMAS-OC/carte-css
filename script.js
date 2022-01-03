const card = document.querySelector(".carte")

console.log(card);

card.addEventListener("mouseover", () => {
    document.querySelector(".square_left").style.transform = "translate(-20px, -20px)";
    document.querySelector(".square_right").style.transform = "translate(20px, 20px)";
    document.querySelector(".circle_animation").style.border = "2px solid transparent";
    document.querySelector(".circle_animation2").style.border = "2px solid transparent";
    document.querySelector(".carte_invisible").style.transform = "translate(-50%, -50%) scale(1.05) rotate(2deg)";

})

card.addEventListener("mouseout", () => {
    document.querySelector(".square_left").style.transform = "translate(20px, 20px)";
    document.querySelector(".square_right").style.transform = "translate(-20px, -20px)";
    document.querySelector(".circle_animation").style.border = "2px solid white";
    document.querySelector(".circle_animation2").style.border = "2px solid white";
    document.querySelector(".carte_invisible").style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
})