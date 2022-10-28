
var questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++) {
  const element = questions[i];

  element.addEventListener("click", function () {

    this.classList.toggle("down");
    
    if (!this.classList.contains("questionJs")) {
      this.classList.add("questionJs");
    } else {
      this.classList.remove("questionJs");
    }
  });
}