console.log("JavaScript toimii!");

// Perustiedot konsoliin
const nimi = "Janica";
console.log("Tervetuloa sivulleni!");
console.log("Sivun tekijä on " + nimi);

const koira = "Armi";
console.log("Koirani nimi on " + koira + ".");

let koiranIka = 8; 
console.log("Armin ikä on " + koiranIka + " vuotta.");
if (koiranIka >= 8) {
    console.log("Armi on veteraani-ikäinen koira.");
} else {
    console.log("Armi ei vielä ole veteraani-ikäinen.");
}

// Funktio laskee koiran hinnan alennuksen jälkeen
function laskeKoiranHinta(hinta) {
    const alennus = 500;
    return hinta - alennus;
}
const lopullinenHinta = laskeKoiranHinta(2000);
console.log("Koiran alkuperäinen hinta on 2000 €.");
console.log("Terveystutkimuksiin sitoutumisesta saa 500 € alennuksen.");
console.log("Koiran lopullinen hinta on " + lopullinenHinta + " €.");

// Lista terveystutkimuksista konsoliin
const terveystutkimukset = [
    { tutkimus: "Olat", tulos: "Puhtaat" },
    { tutkimus: "Kyynärät", tulos: "2/0" },
    { tutkimus: "Polvet", tulos: "Puhtaat" },
    { tutkimus: "Selkä", tulos: "VA0 LTV0" },
    { tutkimus: "Lonkat", tulos: "B/B" }
];

console.log("Armin terveystutkimusten tulokset:");
terveystutkimukset.forEach(tutkimus => {
    console.log(tutkimus.tutkimus + ": " + tutkimus.tulos);
});

// Terveystulokset-painikkeen toiminnallisuus
function naytaViesti() {
    alert("Armi on terveystutkittu: Lonkat B/B, Kyynärät 2/0, Selkä VA0 LTV0");
}

// --- API 1: Neuvojen hakeminen (Advice API) ---
const haeNappi = document.getElementById("haeNappi");
const adviceContainer = document.getElementById("adviceContainer");
const maara = document.getElementById("maara");

if (haeNappi) {
    haeNappi.addEventListener("click", async () => {
        adviceContainer.innerHTML = ""; // Tyhjennetään laatikko
        const valittuMaara = Number(maara.value);
        
        try {
            for (let i = 0; i < valittuMaara; i++) {
            
                const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
                const data = await response.json();
                
                const li = document.createElement("li");
                li.textContent = data.slip.advice;
                adviceContainer.appendChild(li);
            }
        } catch (error) {
            console.error("Virhe haettaessa neuvoja:", error);
            adviceContainer.innerHTML = "<li>Tiedon hakeminen epäonnistui.</li>";
        }
    });
}

// --- API 2: Koiran kuvan hakeminen (Dog API) ---
const koiraNappi = document.getElementById("koiraNappi");
const koiraKuva = document.getElementById("koiraKuva");

if (koiraNappi) {
    koiraNappi.addEventListener("click", () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                koiraKuva.src = data.message;
            })
            .catch(error => {
                console.error("Virhe koiran kuvan haussa:", error);
            });
    });
}

console.log("JavaScript ladattu onnistuneesti!");