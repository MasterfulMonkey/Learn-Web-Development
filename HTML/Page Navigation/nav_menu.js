var currentPage = document.title;
function drawMenu(menu) {
    if (menu === void 0) { menu = ""; }
    return "\n        <ul>\n            <li>" + addLink("Home", "index.html") + "</li>\n            <li>" + addLink("Pictures", "pictures.html") + "</li>\n            <li>" + addLink("Projects", "projects.html") + "</li>\n            <li>" + addLink("Social", "social.html") + "</li>\n        </ul>\n    ";
}
function addLink(pageTitle, path) {
    if (currentPage == pageTitle)
        return "" + pageTitle;
    else
        return "<a href=\"" + path + "\">" + pageTitle + "</a>";
}
var div = document.createElement('div');
div.className = "nav_menu";
div.innerHTML = drawMenu();
document.body.prepend(div);
