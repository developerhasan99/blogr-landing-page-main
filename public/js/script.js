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

//Mobile nav Scripts
var navOpener = document.getElementsByClassName("nav-open")[0];
var navCloser = document.getElementsByClassName("nav-close")[0];
var navBar = document.getElementById("navbar");

navOpener.addEventListener("click", () => {
  navOpener.style.display = "none";
  navCloser.style.display = "block";
  navBar.style.display = "block";
});

navCloser.addEventListener("click", () => {
  navCloser.style.display = "none";
  navOpener.style.display = "block";
  navBar.style.display = "none";
});
