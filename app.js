
const btn = document.querySelectorAll(".btn");
// console.log(btn)
for (i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    if (this.lastElementChild.innerHTML === "Follow") {
      this.lastElementChild.innerHTML = "Già Segui";
    } else if (this.lastElementChild.innerHTML === "Send Message") {
      if (document.querySelector(".messageBox")) {
        document.querySelector(".messageBox").remove();
      } else {
        let textArea = document.querySelector(".textBox");
        let textBox = document.createElement("textarea");
        textBox.placeholder = "Your Message Here...";
        textBox.classList.add("messageBox");
        textBox.name = "message";
        textBox.type = "text";
        textArea.appendChild(textBox);
      }
    } else {
      this.lastElementChild.innerHTML = "Follow";
    }
  };
}
