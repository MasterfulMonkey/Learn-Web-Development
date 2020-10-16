function yodaler(): void
{
    let img: HTMLElement = document.getElementsByTagName('img')[0];
    
    img.style.visibility = (img.style.visibility=='hidden') ? 'visible' : 'hidden';
}

// when "World, hello." is clicked, toggles visibility of Yoda image