// ================== SHOW NAVBAR ===========================

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      toggle.classList.toggle("bx-x");
    });
  }
};

showMenu("header-toggle", "navbar");

const linkColor = document.querySelectorAll(".nav__link");
function activeLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}

linkColor.forEach((l) => l.addEventListener("click", activeLink));
