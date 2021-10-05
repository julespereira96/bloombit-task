const signupNav = document.querySelector(".signupNav");
const signupLink = document.querySelector(".switch");
const signupForm = document.querySelector(".signup");
const icon = document.querySelector(".icon");
const icon1 = document.querySelector(".icon1");

signupNav.addEventListener("click", () => {
  signupForm.classList.remove("display-none");
});

icon1.addEventListener("click", () => {
  signupForm.classList.add("display-none");
});
