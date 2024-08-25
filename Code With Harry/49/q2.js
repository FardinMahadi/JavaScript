let click_btn = document.getElementById("bookmark");

click_btn.addEventListener("click", bookmark_func);

let bookmark_func = function (e) {
  let input = prompt("Enter a website: ");
  let target = document.getElementById("target");
  target.innerHTML += `<a href="#">${input}</a>`;
};
