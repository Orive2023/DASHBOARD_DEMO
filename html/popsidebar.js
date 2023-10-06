function openNav() {
    var sidebar = document.getElementById("mySidenav");
    var navIcon = document.querySelector(".nav-icon");
    sidebar.style.width = "250px";
    navIcon.classList.add("open");
  }
  
  function closeNav() {
    var sidebar = document.getElementById("mySidenav");
    var navIcon = document.querySelector(".nav-icon");
    sidebar.style.width = "0";
    navIcon.classList.remove("open");
  }
  
  function toggleNav() {
    var sidebar = document.getElementById("mySidenav");
    var navIcon = document.querySelector(".nav-icon");
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
      openNav();
    } else {
      closeNav();
    }
  }