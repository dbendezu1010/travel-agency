//QUOTES SLIDESHOW
//Declare variables
var slideIndex = 0;
//Create function
function showSlides() {
    //Declare local variables 
    var i;
    var slides = document.getElementsByClassName("review");
    //Create a for loop, *for* every item in length of slides\
    if (slides.length > 0) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        //Reset index to loop
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 5000); //Change image every 5 seconds (change number if you'd like)
    }
}
//Call function
showSlides();

//GET WEATHER 
const apiKey = "208dc54aefe8af836e590922a2d8082f";
const inputVal = document.title;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;	
fetch(url)
.then(response => response.json())
.then(data => {
  // do stuff with the dat
  const { main, name, sys, weather } = data;
  document.getElementById("city").innerHTML = data.name;
  document.getElementById("city-temp").innerHTML = Math.round((data.main.temp) * 9/5 + 32);
  document.getElementById("city-weather-type").innerHTML = data.weather[0]["description"];
  document.getElementById("city-country").innerHTML = data.sys["country"];
  document.getElementById("weater-icon").src = `http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;
})
.catch(() => {
  msg.textContent = "Please search for a valid city 😩";
});
