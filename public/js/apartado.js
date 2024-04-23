 document.querySelector(".menu-btn").addEventListener("click", () => 
{document.querySelector(".nav-desplegable").classList.toggle("show-nav");
document.querySelector(".menu-btn").classList.toggle("change-cross");
document.querySelector(".srch-btn").classList.toggle("change-srch");
document.querySelector(".srch-btn2").classList.toggle("change-srch2");
});

document.querySelector(".srch-btn").addEventListener("click", () => 
{document.querySelector(".srch-desplegable").classList.toggle("show-srch");
});


document.querySelector(".srch-btn2").addEventListener("click", () => 
{document.querySelector(".srch-desplegable").classList.toggle("show-srch");
document.querySelector(".nav-desplegable").classList.toggle("show-nav");
document.querySelector(".menu-btn").classList.toggle("change-cross");
document.querySelector(".srch-btn").classList.toggle("change-srch");
document.querySelector(".srch-btn2").classList.toggle("change-srch2");
});

var containers = document.getElementsByClassName("grid-container");
var header = document.getElementsByClassName("change-page-btn");
var btns = header[0].getElementsByClassName("page");

//TODO: mirar como hacer con un bucle
btns[0].addEventListener("click", function() {
    var current = header[0].getElementsByClassName("active");
    var currentcontainer = document.getElementsByClassName("active-page");
    var newcontainer = document.getElementsByClassName("page1");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    currentcontainer[0].className = currentcontainer[0].className.replace(" active-page", "");
    newcontainer[0].className += " active-page";
  }
);

btns[1].addEventListener("click", function() {
    var current = header[0].getElementsByClassName("active");
    var currentcontainer = document.getElementsByClassName("active-page");
    var newcontainer = document.getElementsByClassName("page2");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    currentcontainer[0].className = currentcontainer[0].className.replace(" active-page", "");
    newcontainer[0].className += " active-page";
  }
);

btns[2].addEventListener("click", function() {
    var current = header[0].getElementsByClassName("active");
    var currentcontainer = document.getElementsByClassName("active-page");
    var newcontainer = document.getElementsByClassName("page3");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    currentcontainer[0].className = currentcontainer[0].className.replace(" active-page", "");
    newcontainer[0].className += " active-page";
  }
);

btns[3].addEventListener("click", function() {
  var current = header[0].getElementsByClassName("active");
  var currentcontainer = document.getElementsByClassName("active-page");
  var newcontainer = document.getElementsByClassName("page4");

  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  currentcontainer[0].className = currentcontainer[0].className.replace(" active-page", "");
  newcontainer[0].className += " active-page";
}
);
