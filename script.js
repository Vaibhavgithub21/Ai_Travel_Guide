let text = document.getElementById('text');
let hil1 = document.getElementById('hil1');
let hil4 = document.getElementById('hil4');
let hil5 = document.getElementById('hil5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    hil5.style.left = value * -1.5 + 'px';
    hil4.style.left = value * 1.5 + 'px';
    hil1.style.top = value * 1 + 'px';

})