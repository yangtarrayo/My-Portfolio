const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((i) => i.classList.remove("nav-item-active"));
    this.classList.add("nav-item-active");

    navLinks.classList.toggle("nav-active");
  });
});
const projectsTabBtns = document.querySelectorAll(".projects-tab-btn");
const projectsItems = document.querySelectorAll(".projects-item");


projectsTabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    projectsTabBtns.forEach((btn) =>
      btn.classList.remove("projects-tab-btn-active")
    );

    this.classList.add("projects-tab-btn-active");

    projectsItems.forEach((item) => {
      if (item.classList.contains(btn.id)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});