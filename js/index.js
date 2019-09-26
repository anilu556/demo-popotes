function showMenu() {
    console.log("click")
    var menu = document.getElementById("show-menu-dropdown");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

function toggleBtn(btn) {
    btn.classList.toggle("fa-times");
  }

  function openNav() {
    console.log("click")
    document.getElementById("banner-sidebar").style.width = "1200px";
    document.getElementById("banner-button").style.right = "1200px";
    document.getElementById("close").style.visibility = "visible";
  }
  
  function closeNav() {
    document.getElementById("banner-sidebar").style.width = "0";
    document.getElementById("banner-button").style.right = "0";
    document.getElementById("close").style.visibility = "hidden";
  }

  
