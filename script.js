const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
