const Projects = [];



function CreateProjectSection(){

    document.querySelector(".ProjectsContainer").innerHTML = '';

    let pSection = documnet.createElement("section");
    let pTitle = document.createElement("h2");

    pTitle.textContent = "Palimpsest";

    pSection.appendChild(pTitle);


    document.querySelector(".ProjectContainer").appendChild(pSection);

}

CreateProjectSection();