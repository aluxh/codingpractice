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
        index -= 1;
        if (index < 0) {
            index = images.length - 1;
        }
        slider.src = images[index];
    }

    next.onclick = () => {
        index += 1;
        if (index > (images.length - 1)) {
            index = 0;
        }
        slider.src = images[index];
    }
}



