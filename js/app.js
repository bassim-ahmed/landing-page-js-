/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const menu = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment(); //method to create empty document fragement object

// build the nav
function navMenu() {
  sections.forEach((section) => {
    const sectionName = section.getAttribute("data-nav");
    const sectionId = section.getAttribute("id");
    const li = document.createElement(`li`);
    li.innerHTML = `<a class ='menu__link' data-id='#${sectionId}'>${sectionName}</a>`; //Insert the html text to  the li
    fragment.appendChild(li);
  });
  menu.appendChild(fragment);

  // move to section when you click on link
  menu.addEventListener("click", function (event) {
    event.preventDefault;
    const click = document.getElementById(
      event.target.getAttribute("data-id").substring(1)
    );
    click.scrollIntoView({ behavior: "smooth" });
  });
}
// Add class 'active' to section when near top of viewport
//  add class " active_link" to highlight top menu
function ActiveClass() {
  const a = document.querySelectorAll(".menu__link");
  sections.forEach((section, i) => {
    const secPosition = section.getBoundingClientRect();
    if (secPosition.top <= 375 && secPosition.bottom >= 345) {
      if (!section.classList.contains("your-active-class"))
        section.classList.add("your-active-class"); //add active class to section
      a[i].classList.add("activeLink");
    } else {
      section.classList.remove("your-active-class"); //remove active class to section
      a[i].classList.remove("activeLink");
    }
  });
}
//Call Function To Start
navMenu();

// Set sections as active
document.addEventListener("scroll", ActiveClass);
