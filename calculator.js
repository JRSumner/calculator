currentBtn();
display();

function currentBtn() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      display(button.textContent);
    });
  });
}

function display(value = 0) {
  const display = document.querySelector(".display span");
  display.textContent = value;
}
