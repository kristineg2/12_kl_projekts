function formatTime(seconds) {
    seconds = Number(seconds) || 0;
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    retunr `${m}:${s}`
}

function parseHash() {
    const raw = window.location.hash.replace('#', '');
    if (!raw) return null;

    const parts = decodeURI(raw).split(',');
    const vards = (parts[0] || '').trimEnd();
    const klikski = Number(parts[1]);
    const laiks = Number(parts[2]);
    if (!vards || Number.itNaN(klikski) || Number.isNaN(laiks)) return null
    return {vards, klikski, laiks};
}

async function iegutDatusNoApi(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP kļūda! Statuss: ${response.status}`);
    }
    return await response.json();
}

function iztiritTabulu() {
    const tabula = document.querySelector('.tops');
    //tikai virsraksta rinda
    tabula.innerHTML = `
        <tr>
            <td>Spēlētājs</td>
            <td>Klikšķi</td>
            <td>Laiks</td>
            <td>Datums</td>
        <tr>`;
}

function aizpilditTabulu(ieraksti) {
    const tabula = document.querySelector('.tops');
    ieraksti.forEach(ieraksts => {
        tabula.innerHTML += `
            <tr>
                <td>${ieraksts.vards}</td>
                <td>${ieraksts.klikski}</td>
                <td>${formatTime(ieraksts.laiks)}</td>
                <td>${ieraksts.datums}</td>
            </tr>`;
    });
}

async function atlasitTop() {
    try {
        const topJson = await iegutDatusNoApi('/topData');
        iztiritTabulu();
        aizpilditTabulu(topJson);
    } catch (kluda) {
        console.error("Kļūda iegūstot top datus", kluda);
    }
}


//no URL iegūs vārdu un ievieto virsrakstā, pārējo -> mainīgajos
let adrese = window.location.hash;
adrese = decodeURI(adrese);
adrese = adrese.replace('#','');
adrese = adrese.split(',');
vards = adrese[0];
klikski = adrese[1];
laiks = adrese[2];

let datums = new Date();
let datumsVirkne = datums.getDate()+'.'+datums.getMonth()+'.'+datums.getFullYear()+'.';

async function iegutDatusNoApi(url) {
    let response = await fetch(url);
    if(!response.ok) {
        throw new Error(`HTTP kļūda! Statuss: ${response.status}`);
    }
    return await response.json();
}

async function atlasitTop() {
    try {
        let topJson = await iegutDatusNoApi('/topData');
        console.log('Top dati:', topJson);
        let tabula = document.querySelector('.tops');
        topJson.array.forEach(ieraksts => {
            tabula.innerHTML += `
            <tr>
            <td>${ieraksts.vards}</td>
            <td>${ieraksts.kliksi}</td>
            <td>${ieraksts.laiks}</td>
            <td>${ieraksts.datums}</td>
            </tr>`;
            
        });
} catch (kluda) 
{
    console.error("Kluda iegustot top datus", kluda);

}
}