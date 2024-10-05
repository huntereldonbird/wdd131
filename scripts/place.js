const lastModified = document.querySelector("#lastModified");
const copyright = document.querySelector("#copyright");

const today = new Date();

const windspeed = 5;
const temp = 10;

lastModified.innerHTML = `last modified: <span class="highlight">${document.lastModified}</span>`;

copyright.innerHTML = `&copy <span class="highlight">${today.getFullYear()}</span> Hunter Bird`;


const wind = document.querySelector("#windchill"); 

if (windspeed > 4.8 && temp <= 10){
    wind.innerHTML = `<strong>Wind Chill:</strong>${calculateWindChill()}`;
    
}
else{
    wind.innerHTML = `<strong>Wind Chill:</strong> N/A`;
}



function calculateWindChill(){
    return Math.round((13.12 + 0.6215 * temp - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temp * Math.pow(windspeed, 0.16)) * 100 ) / 100;
}
