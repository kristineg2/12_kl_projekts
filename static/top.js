//no URL iegūst vārdu un ievieto virsrakstā, pārējo -> mainīgajos
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
        throw new Error('HTTP kļūda! Saturss: ${response.status}');
    }
    return await response.json();
    
}

async function atlasitTop() {
    let topJson = await iegutDatusNoApi('/topData');
    console.log('Top dati:', topJson);
    let tabula = document.querySelector('.tops');
    topJson.array.forEach(ieraksts => {
        tabula.innerHTML += `
        <tr>
        <td>${ieraksts.vards}</td>
        <td>${ieraksts.klikski}</td>
        <td>${ieraksts.laiks}</td>
        <td>${ieraksts.datums}</td>
        </tr>`;
    });
} catch (kluda) {console.error("Kluda iegustot top datus", kluda)};