let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');

let btn = document.getElementById('btn');

btn.onclick = function(){
    // box.style.transform = "translatex(100%)";
    box1.style.transform = "translatex(200px)";
    box2.style.transform = "translatex(400px)";
    box3.style.transform = "translatex(600px)";
    box4.style.transform = "translatex(800px)";
}
box1.onclick = function(){
    box1.style.transform = "scale(5)"
}