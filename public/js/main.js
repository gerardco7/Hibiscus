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
