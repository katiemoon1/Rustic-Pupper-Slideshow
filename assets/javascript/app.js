$(document).ready(() => {

// Array with pictures of Lux
var luxPhotos = ["assets/images/lux-1.jpg", "assets/images/lux-2.jpg", "assets/images/lux-3.jpg", "assets/images/lux-4.jpg", "assets/images/lux-5.jpg", "assets/images/lux-7.jpg"];

// Setting up the counter variable
var count = 0;

// Variable to hold the interval
var showPicture;

// Creating a function to show the pictures
var displayPictures = function() {
    $(".pupper-div").html("<img src=" + luxPhotos[count] + " width='400px'>");
}

// Creating a function to go to the next picture after a set interval
var nextPicture = function() {
    count++;
    setTimeout(displayPictures, 2000);

    if (count === luxPhotos.length) {
        count = 0;
    }
}

// Creating a function to start the slideshow
var startShow = function() {
    showPicture = setInterval(nextPicture, 2000);
}

// Clearing the interval
var stopShow = function() {
    clearInterval(showPicture);
}

// Calling functions to run the slideshow
displayPictures();
startShow();


})