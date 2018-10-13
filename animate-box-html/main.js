window.onload = function() {
    let box = document.getElementById("box");
    let container = document.getElementById("container");
    let boxLength = container.style.width;

    alert(container.style.width);

    let pos = 0;
    let timer = setInterval(move, 10);

    function move(){
        if(pos >= 149){
            clearInterval(timer);
        }
        pos++;
        box.style.left = pos + "px";
    }
}