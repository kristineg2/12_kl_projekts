//no URL iegūst vārdu
let adrese = window.location.hash.substring(1);
adrese = decodeURI(adrese.split(',')[0]);


//mainīgie spēles darbībai
let laiks = 0
let klikski = 0
//masīvi spēles darbībai

const laukumi = ['L01','L02','L03','L04','L05','L06','L07','L08','L09','L10','L11','L12']
const laukumiSaturs = ['🐭','🐼','🦋','🐭','🐣','🦔','🐼','🦞','🦞','🦋','🦔','🐣']
let atvertieLaukumi = []
let pedejieDivi = []


//Sajauc smailikus nejaušā secībā(Fisher-yates algoritms)
let laukumiSajaukti = laukumiSaturs.sort(() => Math.random() - 0.5);

//Generē spēles laukumu dinamiski
document.addEventListener("DOMContentLoaded", function() {
    let spelesLauks = document.querySelector('.speles_lauk');
    spelesLauks.innerHTML = '';
    laukumiSajaukti.forEach((emoji, index) => {
        let bloks = document.createElement("div");
        bloks.classList.add("bloks");
        bloks.setAttribute("data-index", index);
        bloks.innerText = "";
        bloks.addEventListener("click",function() {
            veiktGajienu(bloks, emoji);
        });
        spelesLauks.appendChild(bloks);
    });
});

function veiktGajienu(bloks, emoji) {
    if (bloks.classList.contains("atverts") || pedejieDivi.length === 2) {
        return //neļauj klikškimāt uz jau atvērtām kartītēm un vai jau ir atvertas 2 kartītes
    }
    //parāda emoji tikai uzklikškinot
    bloks.innerText = emoji;
    bloks.classList.add("atverts");
    klikski++;

    //saglabā 2 pedējās kartītes
    pedejieDivi.push({bloks, emoji});

    //ja atveras 2 kartīte pārbauda vai sakrīt
    if (pedejieDivi.length == 2) {
        let [pirmais, otrais] = pedejieDivi;
        if (pirmais.emoji === otrais.emoji) {
            atvertieLaukumi.push(pirmais, otrais);
            pedejieDivi = [];

            //parbauda vai spele pabeigta (vai visi laukumi ir atvērti)
            if (atvertieLaukumi.length === laukumiSajaukti.length) {
                setTimeout(() => {
                    alert(`Apsveicu, ${vards}! Tu pabeidzi speli ar ${klikski} klikšķiem!`);
                }, 500);
            }
        } else {
            //ja atvērtie 2 laukumi nav vienādi 
            setTimeout(() => {
                pirmais.bloks.innerText = "";
            })
        }

    }
}