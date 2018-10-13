window.onload = function() {
    let index = 0;
    let images = ["http://www.sololearn.com/uploads/slider/1.jpg", "http://www.sololearn.com/uploads/slider/2.jpg", "http://www.sololearn.com/uploads/slider/3.jpg"];
    
    let slider = document.getElementById("slider");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    slider.src = images[index];

    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));

    function move(direction) {
        index += direction;
        if (index < 0) {
            index = images.length - 1;
        } else if (index > images.length - 1) {
            index = 0;
        }
        slider.src = images[index];
    }
}