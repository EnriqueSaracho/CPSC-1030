let btn = true;

function showNavbar() {
  if (btn) {
    document.getElementById("secondaryNav").style.top = 0;
  } else {
    document.getElementById("secondaryNav").style.top = "-91.5vh";
  }
  btn = !btn;
}
