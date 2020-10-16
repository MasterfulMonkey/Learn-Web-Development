function drawMenu(): string
{
    return `
        <ul>
            <li>${addLink("Home", "index.html")}</li>
            <li>${addLink("Pictures", "pictures.html")}</li>
            <li>${addLink("Projects", "projects.html")}</li>
            <li>${addLink("Social", "social.html")}</li>
        </ul>
    `;
}

    function addLink(pageTitle: string, path: string): string
    {
        return (document.title==pageTitle) ? `${pageTitle}` : `<a href="${path}">${pageTitle}</a>`;
    }

let div = document.createElement('div');
    div.className = "nav_menu";
    div.innerHTML = drawMenu();

document.body.prepend(div);

// this file creates a navigation menu, hyperlinking to other pages in the directory
    // taken from https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#Active_learning_creating_a_navigation_menu