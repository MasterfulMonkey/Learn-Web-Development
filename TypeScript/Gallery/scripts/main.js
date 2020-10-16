var displayedImage = document.getElementById('displayed-img');
var thumbBar = document.getElementsByClassName('thumb-bar')[0];
var button = document.getElementsByTagName('button')[0];
var overlay = document.getElementsByClassName('overlay')[0];
var _loop_1 = function (num) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + num + ".jpg");
    newImage.addEventListener('click', function () {
        displayedImage.src = newImage.src;
    });
    thumbBar.appendChild(newImage);
};
/* Looping through images */
for (var num = 1; num <= 5; num++) {
    _loop_1(num);
}
/* Wiring up the Darken/Lighten button */
button.addEventListener('click', function () {
    if (button.id == 'dark') {
        button.id = 'light';
        button.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
        button.id = 'dark';
        button.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
