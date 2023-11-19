const InputCheckbox = document.querySelector("#flexSwitchCheckDefault");
const Icon = document.querySelector("#icon");

InputCheckbox.addEventListener("change", checkMoom);

function checkMoom(evt) {
  if (evt.target.checked) {
    lign();
  } else {
    dark();
  }
}

function dark() {
  Icon.classList.toggle("fa-moon");
  Icon.classList.remove("fa-sun");
  document.documentElement.setAttribute("data-theme", "dark");
}
function lign() {
  Icon.classList.add("fa-sun");
  Icon.classList.remove("fa-moon");
  document.documentElement.setAttribute("data-theme", "lignt");
}

