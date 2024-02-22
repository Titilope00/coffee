//slideshow display

var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

//show the first slide
slides[currentSlide].style.display = "block";

//function to display the next slide
function showNextSlide(){
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
}
//change slide every 3 seconds
setInterval(showNextSlide, 3000);


function toggleFeatures(){
    var features = document.getElementById('features');
    if (features.style.display === "none"){
        features.style.display = "block";
    }
    else{
        features.style.display = "none";
    }
}


//scroll upward
window.addEventListener("scroll", function(){
    var scrollToTop = document.getElementById("scrollToTop");
    if(window.scrollY > 100) {
        scrollToTop.style.display ="block";
    } else{
        scrollToTop.style.display ="none";
    }
}
);

document.getElementById("scrollToTop"). addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//greetings
var greetingElement = document.getElementById("greeting");
var currentHour = new Date().getHours;

if (currentHour < 12){
    greetingElement.textContent = "Good Morning!!";
}
else if(currentHour < 18){
    greetingElement.textContent ="Good Afternoon!!"
}
else{
    greetingElement.textContent ="Good Evening!!"
}


//like 
function likeImage(){
    document.getElementsByClassName(".like-button").style.backgroundColor = "red";
}

// increase in font size
var zoomedText = document.getElementById('zoomed-text');
var fontSize = 24;
var zoomIn = true;

function zoom(){
    if (zoomIn){
        fontSize++; 
    }
    else{
        fontSize--;
    }

    if (fontSize>= 28){
        zoomIn = false;
    }
    else if(fontSize <= 24){
        zoomIn = true;
    }
    zoomedText.style.fontSize = fontSize 
    +"px";
    setTimeout(zoom, 300);
}
zoom();

//cart 
const plusSign= document.getElementById('plus-sign');
const cartCount = document.getElementById('cart-count');

let count =0;
plusSign.addEventListener('click', () =>{
    count ++;
    cartCount.textContent = count;
});


//description button

const buyNowButton = document.getElementsByClassName("buy-now");
const descriptionPage = document.getElementsByClassName("description-page");
const confirmButton = document.getElementsByClassName("confirm-button");

buyNowButton.addEventListener('click', ()=> {
    buyNowButton.style.display = 'none';
    descriptionPage.style.display ='block';
});

confirmButton.addEventListener('click', ()=>{
    //perform transaction process here

    alert('transaction confirmed!!');
});
//prompt pop-up box
//var firstName = prompt("what is your first name?");
//if(firstName == "" || firstName == "null"){
  //  alert("you did not enter a value.");
//}
//else{
  //  alert("Hi"+ " "+ firstName +" " + "always remember you are special.");
//}

//add to cart button
//const plusSigns = document.querySelector("plus-sign");
//const popup = document.querySelector(".popup");

//plusSigns.forEach(wallet) => {
  //  wallet.addEventListener('click', () => {
   //     popup.style.display ="block";
    //    setTimeout(() =>{
  //          popup.style.display = "none";
   //     }, 2000);
  //  });
//};