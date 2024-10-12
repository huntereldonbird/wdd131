const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    { 
        templeName: "Dallas Texas Temple",
        location: "Dallas Texas Temple",
        dedicated: "19 October, 1984",
        area: 9999999,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/1200x1200/Dallas-Texas-Temple12.jpg"
    },
    { 
        templeName: "Draper Utah Temple",
        location: "Draper Utah Temple",
        dedicated: "20 March, 2009",
        area: 9999999,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/draper-utah/1280x800/draper-temple-759310-wallpaper.jpg"
    },
    { 
        templeName: "Idaho Falls Idaho Temple",
        location: "Idaho Falls Idaho Temple",
        dedicated: "23 September, 1945",
        area: 9999999,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/1280x800/1-Idaho-Falls-Temple-2097425.jpg"
    }
  ];
  

const lastModified = document.querySelector("#lastModified");
const copyright = document.querySelector("#copyright");

const today = new Date();

lastModified.innerHTML = `last modified: <span class="highlight">${document.lastModified}</span>`;

copyright.innerHTML = `&copy <span class="highlight">${today.getFullYear()}</span> Hunter Bird`;



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {

    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

createTempleCard(temples);


const nonutahlink = document.querySelector("#nonutah");
nonutahlink.addEventListener("click", () => {

    createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
    
});

const newLink = document.querySelector("#newer");
newLink.addEventListener("click", () =>{
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",").map(part => part.trim())) > 2000));
});
const largerLink = document.querySelector("#larger");
largerLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});
const smallerLink = document.querySelector("#smaller");
smallerLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 90000));
});
const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});


function createTempleCard(filteredTemples){

    document.querySelector(".Gallery").innerHTML = "";

    index = 0;

    filteredTemples.forEach(temple => {

        tmp = index % 3;


        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("height", "200px");
        

        card.setAttribute("class", "Card")

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".Gallery").appendChild(card);
        index++;
    });
}