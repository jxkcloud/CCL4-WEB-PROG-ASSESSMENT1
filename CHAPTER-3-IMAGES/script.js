// gets all buttons inside every poster card
const buttons = document.querySelectorAll(".controls button");

buttons.forEach(button => {
  button.addEventListener("click", function () {

    // finds the image connected to the clicked buttons
    const image = this.parentElement.previousElementSibling;
    const effect = this.dataset.effect;

    if (effect === "grayscale") {
      image.style.filter = "grayscale(100%)";
    }

    if (effect === "sepia") {
      image.style.filter = "sepia(100%)";
    }

    if (effect === "contrast") {
      image.style.filter = "contrast(180%)";
    }

    // reset brings image back to normal
    if (effect === "reset") {
      image.style.filter = "none";
    }
  });
});
