let displayedImage = document.getElementById('displayed-img');
let thumbBar = document.getElementsByClassName('thumb-bar')[0];

let button = document.getElementsByTagName('button')[0];
let overlay = document.getElementsByClassName('overlay')[0];

/* Looping through images */

for(let num: number = 1; num<=5; num++)
{
    let newImage = document.createElement('img');
        newImage.setAttribute('src', `images/pic${num}.jpg`);
        newImage.addEventListener('click', function() {
            displayedImage.src = newImage.src;
        });
        thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

button.addEventListener('click', function() {
    if(button.id=='dark')
    {
        button.id = 'light';
        button.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else
    {
        button.id = 'dark';
        button.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});