const navtoggle = document.querySelector(".nav-toggle");
const linkscontainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navtoggle.addEventListener("click",function(){
    const containerheight = linkscontainer.getBoundingClientRect().height;
    const linksheight = links.getBoundingClientRect().height;

if(containerheight === 0){
    linkscontainer.style.height = `${linksheight}px`}
else{
    linkscontainer.style.height = 0;
}

});

const navbar=document.getElementById("nav");
const toplink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset; // Get the scroll position
    const navHeight = navbar.getBoundingClientRect().height; // Get the navbar height

    if (scrollHeight > navHeight) { 
        navbar.classList.add("fixed-nav"); // Add fixed-nav class
    } else {
        navbar.classList.remove("fixed-nav"); // Remove fixed-nav class
    }
    if (scrollHeight > 500){
        toplink.classList.add("show-links");
    }else{
        toplink.classList.remove("show-links");
    }

});



const scrolllinks = document.queryselectorAll(".scroll-link");

scrolllinks .forEach(function(link){
    link.addEventlistner("click",function(e){
e.preventDefault();
const id = e.currentTarget.getAttribute("href").slice(1);
const element = document.getElementById(id);
//calculate the heights
const navHeight = navbar.getBoundingClientRect().height;
const containerheight = linkscontainer.getBoundingClientRect().height;
const fixedNav = navbar.classList.contains("fixed-nav");
let position = element.offsetTop - navHeight;
//console.log(position);

if(!fixedNav){
    position = position - navHeight;
}if(navHeight > 82){
    position = position + containerheight;
}

window.scrollTo({
    left:0,
    top:postion,

});
linkscontainer.style.height = 0;
    });
    });