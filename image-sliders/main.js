/**
 * Building an Image Slider in the Javascript course, using all the lesson learnt.
 * 1. Load all the URLs for the images
 * 2. Initialized an index for manipulating the image to show
 * 3. Add events handling on Prev and Next button
 */

window.onload = function() {
    let index = 0;
    let images = ["http://www.sololearn.com/uploads/slider/1.jpg", "http://www.sololearn.com/uploads/slider/2.jpg", "http://www.sololearn.com/uploads/slider/3.jpg"];
    
    let slider = document.getElementById("slider");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    slider.src = images[index];

    prev.onclick = () => {
        // (1) Decrease index by 1 
        // (2) Test whether decreased index go below 0, and if it does, reset it to the index of last image 
        // (3) assign the image to the img src.
        index -= 1;
        if (index < 0) {
            index = images.length - 1;
        }
        slider.src = images[index];
    }

    next.onclick = () => {
        // (1) Increase index by 1 
        // (2) Test whether increased index go beyond the last index, and if it does, reset it to the 1st image 
        // (3) assign the image to the img src.
        index += 1;
        if (index > (images.length - 1)) {
            index = 0;
        }
        slider.src = images[index];
    }
}



