var burger = document.getElementsByClassName("header__burger")[0];
var menu = document.getElementsByClassName("header__menu")[0];
var x = document.getElementsByClassName("header__x")[0];
var body = document.getElementsByTagName("body")[0];
burger.onclick = function() {
    menu.classList.add('active');
    x.classList.add('active');
    body.classList.add('lock');
}

x.onclick = function() {
    menu.classList.remove('active');
    x.classList.remove('active');
    body.classList.remove('lock');
}