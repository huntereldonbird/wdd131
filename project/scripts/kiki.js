const Projects = [];

const lastModified = document.querySelector("#lastModified");
const copyright = document.querySelector("#copyright");

const today = new Date();

lastModified.innerHTML = `last modified: <span class="highlight">${document.lastModified}</span>`;

copyright.innerHTML = `&copy <span class="highlight">${today.getFullYear()}</span> Hunter Bird`;


let pCard = document.createElement("section");
let title = document.createElement("h2");
let firstBreak = document.createElement("hr");
let secondBreak = document.createElement("hr");

let articlebutton = document.createElement("button");
let gallerybutton = document.createElement("button");
let gitbutton = document.createElement("button");

let articletext = document.createElement("p");
let projectphoto = document.createElement("img");

title.textContent = "Palimpsest";
articletext.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor tellus, tempus vitae sollicitudin ac, imperdiet eu dolor. Ut sagittis ut augue a tristique. Sed rhoncus est eget ligula tempor posuere. Nam tincidunt posuere nisi ornare porta. Maecenas lobortis lacinia diam sit amet dictum. Curabitur sodales purus libero, at aliquet purus feugiat vel. Suspendisse et interdum nisi, vitae iaculis lacus. Vivamus ipsum velit, consectetur nec ipsum quis, lacinia finibus nulla. Vivamus volutpat purus eget ipsum lobortis mollis. Nullam tincidunt lectus felis, non blandit arcu rhoncus ac.";

articlebutton.textContent = "Article";
gallerybutton.textContent = "gallery";
gitbutton.textContent = "git";

articlebutton.setAttribute("class", "articlebuttons");
gallerybutton.setAttribute("class", "articlebuttons");
gitbutton.setAttribute("class", "articlebuttons");








pCard.appendChild(title);
pCard.appendChild(firstBreak);
pCard.appendChild(articlebutton);
pCard.appendChild(gallerybutton);
pCard.appendChild(gitbutton);
pCard.appendChild(secondBreak);
pCard.appendChild(articletext);
pCard.appendChild(projectphoto);



document.querySelector(".ProjectContainers").appendChild(pCard);

