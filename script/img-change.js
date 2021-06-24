window.onresize = function(event) {
    var img1 = document.getElementsByClassName("search__img")[0];
    var way1 = img1.getAttribute('src');
    if (window.innerWidth <= 1170 && way1 != './img/IMG-android.png')
        img1.setAttribute('src', './img/IMG-android.png');
    if (window.innerWidth > 1170 && way1 != './img/IMG.png')
        img1.setAttribute('src', './img/IMG.png');

    var img2 = document.getElementsByClassName("information__img")[0];
    var way2 = img2.getAttribute('src');
    if (window.innerWidth <= 1170 && way2 != './img/IMG2-android.png')
        img2.setAttribute('src', './img/IMG2-android.png');
    if (window.innerWidth > 1170 && way2 != './img/IMG2.png')
        img2.setAttribute('src', './img/IMG2.png');

    var img3 = document.getElementsByClassName("access__img")[0];
    var way3 = img3.getAttribute('src');
    if (window.innerWidth <= 1170 && way3 != './img/IMG3-android.png')
        img3.setAttribute('src', './img/IMG3-android.png');
    if (window.innerWidth > 1170 && way3 != './img/IMG3.png')
        img3.setAttribute('src', './img/IMG3.png');
}