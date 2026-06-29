/*==========================================
        NAVBAR ACTIVE LINK
==========================================*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

navLinks.forEach(item => item.classList.remove("active"));

link.classList.add("active");

});

});

/*==========================================
        STICKY HEADER
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background = "#0b0b0b";
header.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";

}else{

header.style.background = "rgba(10,10,10,.95)";
header.style.boxShadow = "none";

}

});

/*==========================================
        HERO AUTO SLIDER
==========================================*/

const heroTitles = [

"The Last Of Us",
"Oppenheimer",
"Dune: Part Two",
"Interstellar",
"John Wick 4"

];

const heroDescriptions = [

"Twenty years after modern civilization has been destroyed.",
"The story of J. Robert Oppenheimer.",
"Paul Atreides joins the Fremen.",
"A journey beyond space and time.",
"The legendary assassin returns."

];

const heroHeading = document.querySelector(".hero-content h1");
const heroText = document.querySelector(".description");

let currentSlide = 0;

if(heroHeading && heroText){

setInterval(()=>{

currentSlide++;

if(currentSlide >= heroTitles.length){

currentSlide = 0;

}

heroHeading.textContent = heroTitles[currentSlide];
heroText.textContent = heroDescriptions[currentSlide];

},5000);

}

/*==========================================
        HERO BUTTONS
==========================================*/

const heroButtons = document.querySelectorAll(".hero-buttons a");

if(heroButtons.length){

heroButtons[0].addEventListener("click",(e)=>{

e.preventDefault();

alert("Trailer feature will be available after backend integration.");

});

heroButtons[1].addEventListener("click",(e)=>{

e.preventDefault();

alert("Added to Watchlist ❤️");

});

}

/*==========================================
        MOVIE DETAILS BUTTON
==========================================*/

const detailButtons = document.querySelectorAll(".movie-content button");

detailButtons.forEach(button=>{

button.addEventListener("click",()=>{

window.location.href="movie-details.html";

});

});
/*==========================================
        MOVIE SEARCH
==========================================*/

const movieSearch = document.getElementById("movieSearch");

if(movieSearch){

movieSearch.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".movie-card");

cards.forEach(card=>{

const title=card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}

/*==========================================
        GENRE FILTER
==========================================*/

const genreFilter=document.querySelectorAll("select")[0];

if(genreFilter){

genreFilter.addEventListener("change",()=>{

const value=genreFilter.value.toLowerCase();

const cards=document.querySelectorAll(".movie-card");

cards.forEach(card=>{

const genre=card.querySelector("p").textContent.toLowerCase();

if(value==="all genres"){

card.style.display="block";

}

else if(genre.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}

/*==========================================
        RATING FILTER
==========================================*/

const ratingFilter=document.querySelectorAll("select")[1];

if(ratingFilter){

ratingFilter.addEventListener("change",()=>{

const cards=document.querySelectorAll(".movie-card");

cards.forEach(card=>{

const rating=parseFloat(card.querySelector(".rating").textContent.replace("⭐",""));

const selected=ratingFilter.value;

if(selected==="IMDb Rating"){

card.style.display="block";

}

else{

const min=parseFloat(selected);

if(rating>=min){

card.style.display="block";

}

else{

card.style.display="none";

}

}

});

});

}

/*==========================================
        YEAR FILTER
==========================================*/

const yearFilter=document.querySelectorAll("select")[2];

if(yearFilter){

yearFilter.addEventListener("change",()=>{

alert("Year filter will work after backend integration.");

});

}

/*==========================================
        PAGINATION BUTTONS
==========================================*/

const pages=document.querySelectorAll(".pagination a");

pages.forEach(page=>{

page.addEventListener("click",(e)=>{

e.preventDefault();

pages.forEach(btn=>btn.classList.remove("active"));

page.classList.add("active");

});

});

/*==========================================
        MOVIE CARD HOVER EFFECT
==========================================*/

const cards=document.querySelectorAll(".movie-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});
/*==========================================
        LOGIN FORM VALIDATION
==========================================*/

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email = loginForm.querySelector("input[type='email']").value.trim();

const password = loginForm.querySelector("input[type='password']").value.trim();

if(email==="" || password===""){

alert("Please fill all fields.");

return;

}

alert("Login Successful 🎉");

window.location.href="profile.html";

});

}

/*==========================================
        SIGNUP FORM VALIDATION
==========================================*/

const signupForm=document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=signupForm.querySelectorAll("input");

const fullName=inputs[0].value.trim();

const username=inputs[1].value.trim();

const email=inputs[2].value.trim();

const password=inputs[3].value.trim();

const confirmPassword=inputs[4].value.trim();

if(fullName==="" || username==="" || email==="" || password===""){

alert("Please complete all fields.");

return;

}

if(password!==confirmPassword){

alert("Passwords do not match.");

return;

}

alert("Account Created Successfully 🎉");

window.location.href="login.html";

});

}

/*==========================================
        CONTACT FORM
==========================================*/

const contactForm=document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully ✅");

contactForm.reset();

});

}

/*==========================================
        NEWSLETTER
==========================================*/

const newsletter=document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=newsletter.querySelector("input").value.trim();

if(email===""){

alert("Enter your email.");

return;

}

alert("Subscribed Successfully 🎉");

newsletter.reset();

});

}

/*==========================================
        REVIEW FORM
==========================================*/

const reviewForm=document.querySelector(".write-review form");

if(reviewForm){

reviewForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Review Submitted Successfully ⭐");

reviewForm.reset();

});

}
/*==========================================
        WISHLIST (LOCAL STORAGE)
==========================================*/

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistButtons = document.querySelectorAll(".movie-content button");

wishlistButtons.forEach(button => {

button.addEventListener("dblclick", () => {

const movieCard = button.closest(".movie-card");

const title = movieCard.querySelector("h3").textContent;

if (!wishlist.includes(title)) {

wishlist.push(title);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

alert(title + " added to Wishlist ❤️");

} else {

alert(title + " is already in your Wishlist.");

}

});

});

/*==========================================
        PROFILE STATS ANIMATION
==========================================*/

const statNumbers = document.querySelectorAll(".stat-card h2");

statNumbers.forEach(stat => {

const target = parseFloat(stat.innerText);

let count = 0;

const increment = target / 50;

const updateCounter = () => {

if (count < target) {

count += increment;

if (target % 1 !== 0) {

stat.innerText = count.toFixed(1);

} else {

stat.innerText = Math.ceil(count);

}

requestAnimationFrame(updateCounter);

} else {

stat.innerText = target;

}

};

updateCounter();

});

/*==========================================
        STAR RATING SELECTOR
==========================================*/

const stars = document.querySelectorAll(".star");

stars.forEach((star,index)=>{

star.addEventListener("click",()=>{

stars.forEach(item=>{

item.classList.remove("selected");

});

for(let i=0;i<=index;i++){

stars[i].classList.add("selected");

}

});

});

/*==========================================
        SCROLL REVEAL EFFECT
==========================================*/

const revealElements = document.querySelectorAll(

".movie-card,.featured-card,.review-card,.news-card,.cast-card,.tech-card,.faq-item"

);

function revealOnScroll(){

const trigger = window.innerHeight * 0.85;

revealElements.forEach(element=>{

const top = element.getBoundingClientRect().top;

if(top < trigger){

element.classList.add("show");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/*==========================================
        LOADING SCREEN
==========================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

/*==========================================
        CURRENT YEAR IN FOOTER
==========================================*/

const footerYear=document.querySelector(".footer-year");

if(footerYear){

footerYear.textContent=new Date().getFullYear();

}
/*==========================================
        DARK MODE TOGGLE
==========================================*/

const darkToggle = document.querySelector(".dark-mode-btn");

if(darkToggle){

darkToggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

localStorage.setItem(

"theme",

document.body.classList.contains("light-mode") ? "light" : "dark"

);

});

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light-mode");

}

}

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================================
        BACK TO TOP BUTTON
==========================================*/

const backTop=document.createElement("button");

backTop.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

backTop.className="back-top";

document.body.appendChild(backTop);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================================
        IMAGE PREVIEW EFFECT
==========================================*/

const movieImages=document.querySelectorAll(".movie-image img");

movieImages.forEach(image=>{

image.addEventListener("click",()=>{

const preview=document.createElement("div");

preview.className="image-preview";

preview.innerHTML=`

<div class="preview-box">

<img src="${image.src}" alt="Preview">

<span class="close-preview">&times;</span>

</div>

`;

document.body.appendChild(preview);

document.body.style.overflow="hidden";

preview.querySelector(".close-preview").onclick=()=>{

preview.remove();

document.body.style.overflow="auto";

};

preview.onclick=(e)=>{

if(e.target===preview){

preview.remove();

document.body.style.overflow="auto";

}

};

});

});

/*==========================================
        BUTTON RIPPLE EFFECT
==========================================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*==========================================
        PAGE LOADED
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

console.log("MovieVerse Loaded Successfully ✅");

});

/*==========================================
        GLOBAL ERROR HANDLER
==========================================*/

window.addEventListener("error",(e)=>{

console.log("Handled Error:",e.message);

});

/*==========================================
        END OF main.js
==========================================*/

console.log("MovieVerse JavaScript Initialized 🚀");