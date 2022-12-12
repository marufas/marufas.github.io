console.log("Finished loading");
let menuVisible = false;


function toggleMenu () {
  let navBar = document.querySelector("nav");

  if (menuVisible) {
    menuVisible = false;
    navBar.style.display = "none";
    
  } else {
    menuVisible = true;
    navBar.style.display = "flow-root";
  }
}