const menuButtonRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-mobile-menu]");
const companyMenuButtonRef = document.querySelector(
  "[data-company-menu-button]"
);
const companyMobileMenuRef = document.querySelector(".company-mobile-menu");
const dropdownArrowRef = document.querySelector(".dropdown-arrow");
const menuNavButtonRef = document.querySelector(".menu-navigation-button");
const menuNavButtonDropdownArrow = document.querySelector(
  "[menu-nav-button-dropdown-arrow]"
);

menuButtonRef.addEventListener("click", () => {
  const expanded =
    menuButtonRef.getAttribute("aria-expanded") === true || false;

  menuButtonRef.classList.toggle("is-open");
  menuButtonRef.setAttribute("aria-expanded", !expanded);
  mobileMenuRef.classList.toggle("is-open");
  companyMobileMenuRef.classList.remove("is-open");
  companyMenuButtonRef.setAttribute("aria-expanded", false);
  companyMenuButtonRef.classList.remove("is-open");
  dropdownArrowRef.classList.remove("is-open");
});

companyMenuButtonRef.addEventListener("click", () => {
  const expanded =
    companyMenuButtonRef.getAttribute("aria-expanded") === true || false;

  companyMenuButtonRef.classList.toggle("is-open");
  companyMenuButtonRef.setAttribute("aria-expanded", !expanded);
  companyMobileMenuRef.classList.toggle("is-open");
  dropdownArrowRef.classList.toggle("is-open");
});

menuNavButtonRef.addEventListener("click", () => {
  const expanded =
    menuNavButtonRef.getAttribute("aria-expanded") === true || false;
  companyMenuButtonRef.setAttribute("aria-expanded", !expanded);
  menuNavButtonDropdownArrow.classList.toggle("is-open");
});
