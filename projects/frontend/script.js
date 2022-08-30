var btnLogin = document.getElementById('do-login');
var username = document.getElementById('username');
var dis = document.getElementById("login");
var nav = document.getElementById("navbar")
var ani = document.getElementById("animation");
var head1 = document.getElementById("heading1");
var head2 = document.getElementById("heading2");

function mainPage() {
  if (dis.style.display === "none") {
    dis.style.display = "block";
  }
  else {
    dis.style.display = "none";
    nav.style.display = "block";
    ani.style.display = "flex";
    head1.style.display = "block";
    head2.style.display = "block";
  }
}
