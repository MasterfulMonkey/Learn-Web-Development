let text = document.getElementById('stannis');

let img = document.createElement('img');
    img.setAttribute('src', 'images/stannis.png');
    img.setAttribute('alt', '"What?" "Nothing."');
    img.setAttribute('title', '"What?" "Nothing."');

function weStan(): void
{
    text.textContent = "fewer";
        text.removeEventListener('click', weStan);
        text.style.textDecoration = "unset";
        text.style.cursor = "initial";
    
    text.appendChild(img);
}

text.addEventListener('click', weStan);