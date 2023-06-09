let mouseCursor = document.querySelector('.mouse');
let mouseCursor2 = document.querySelector('.mouse2');
let mouseCursor3 = document.querySelector('.mouse3');
let mouseCursor4 = document.querySelector('.mouse4');


window.addEventListener("scrollY", cursor);
window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.left = e.screenX + "px";
    mouseCursor.style.top = e.screenY + 'px';
    mouseCursor2.style.left = e.screenX + "px";
    mouseCursor3.style.top = e.screenY + "px";
    mouseCursor4.style.left = e.screenX + "px";
    mouseCursor4.style.top = e.screenY + "px";
}


// var test = document.documentElement.style;
// document.addEventListener('mouseup',function(e){
//     test.setProperty('--mouse-x', e.clientX);

// })


















