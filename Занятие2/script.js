let userAnswer = prompt('Зимой и летом одним цветом').toLowerCase();

if (!userAnswer) {
    alert("You have not texted anything(");
} else {
    alert((userAnswer === "ёлка") ? "that is right!" : "that is wrong!");
}
const button = document.getElementById("button")
button.addEventListener("click", function () {
    alert("You have clicked me!?")
});
