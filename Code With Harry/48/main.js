let x = function (e) {
  alert("Hello world!");
};
let y = function (e) {
  alert("Hello world2!");
};

btn.addEventListener("click", x);
btn.addEventListener("click", y);

let a = prompt("What is your favorite number?");
if (a == 2) {
  btn.removeEventListener("click", x);
}
