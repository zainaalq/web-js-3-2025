

const target = document.querySelector('#target');


// browser name and version

const userAgent = navigator.userAgent // merkkjono, jossa on tietoja selaimesta
let browser ="Unknown";
if (userAgent.includes("Chrome")) {
    browser = "Google Chrome";
} else if (userAgent.includes("Firefox")){
    browser="Mozilla Firefox";
} else if(userAgent.includes("Safari")){
    browser="Apple Safari";
} else if(userAgent.includes("Edg")){
    browser="Microsoft Edge";
}


const browserVersion = navigator.appVersion;
let os = "Unknown";
if (userAgent.includes("Win")) {
    os ="Windows";
} else if (userAgent.includes("Mac")) {
    os = "MacOS";
} else if (userAgent.includes("Linux")) {
    os = "Linux";
}else if (userAgent.includes("Android")){
    os = "Android";
}   else if (userAgent.includes("like Mac")){
    os = "iOS";
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;


// kertoo kuinka paljon tilaa selaimella on käytettävissä
const avaiWidth = window.screen.availWidth;
const avaiHeight = window.screen.availHeight;



// päivämäärä ja aika 

const now= new Date();

// vuosi:numerona , kk: sanana, pp: päivänä
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
// aika: tunnit, minuutit, sekunnit
const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

const date = now.toLocaleDateString("fi-FI", dateOptions); //tekee päivitys suomeksi
const time = now.toLocaleTimeString("fi-FI", timeOptions); // kee tekee ajan suomeksi



target.innerHTML = `
  <p>Selaimen nimi ja versio: ${browser}, ${browserVersion}</p>
  <p>Käyttöjärjestelmä: ${os}</p>
  <p>Näytön koko: ${screenWidth} x ${screenHeight}</p>
  <p>Selaimen käytettävissä oleva tila: ${avaiWidth} x ${avaiHeight}</p>
  <p>Päivämäärä: ${date}</p>
  <p>Aika: ${time}</p>
`;