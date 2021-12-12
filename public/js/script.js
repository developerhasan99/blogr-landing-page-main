//Navbar scripts
var navLinks = document.getElementsByClassName("navlink");
var subMenus = document.getElementsByClassName("sub-nav");

var linksLength = navLinks.length;

for (let i = 0; i < linksLength; i++) {
  navLinks[i].addEventListener("click", () => {
    [...subMenus].forEach((element) => {
      element.classList.remove("active");
    });
    subMenus[i].classList.add("active");
  });
}