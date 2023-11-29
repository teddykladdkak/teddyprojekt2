function oppnaSpelareInstallning(el){
    if(el.checked){
        localStorage.setItem('sagor_internSpelare', 'Ja');
    }else{
        localStorage.removeItem('sagor_internSpelare');
    };
};
if(!localStorage.getItem('sagor_internSpelare')){}else{
    document.getElementById('playerOpen').checked = true;
};
function oppnaMeny(el){
    document.getElementById('menyContent').setAttribute('class', 'mobile-show');
    el.innerHTML = '<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 5)"><path d="m10.5 10.5-10-10z"/><path d="m10.5.5-10 10"/></g></svg> Stäng meny';
    el.setAttribute('onclick', 'stangMeny(this);');
};
function stangMeny(el){
    document.getElementById('menyContent').removeAttribute('class');
    el.innerHTML = '<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 6.5h12"/><path d="m4.498 10.5h11.997"/><path d="m4.5 14.5h11.995"/></g></svg> Meny';
    el.setAttribute('onclick', 'oppnaMeny(this);');
};
function hidePlayer(){
    document.getElementById('playerWrapper').setAttribute('style', 'display: none;');
    document.getElementById('player').innerHTML = '';
};
function openPlayer(el){
    if(document.getElementById('playerOpen').checked){
        if (el.getAttribute('data-player') != null) {
            document.getElementById('playerWrapper').removeAttribute('style');
            document.getElementById('player').innerHTML = `<svg height="30" viewBox="0 0 21 21" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8"/><g transform="matrix(0 1 -1 0 17 0)"><path d="m5.5 11.5 6-6"/><path d="m5.5 5.5 6 6"/></g></g></svg><a href="${el.getAttribute('href')}"><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><path d="m15.5.5v5h-5" transform="matrix(1 0 0 -1 0 6)"/><path d="m12-.95v9.9" transform="matrix(.70710678 .70710678 -.70710678 .70710678 6.343146 -7.313708)"/><path d="m7.5.5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h11c1.1045695 0 2-.8954305 2-2v-4"/></g></svg></a>${el.getAttribute('data-player')}`;
        }else{
            return false;
        };
    }else{
        showAlternatives(el);
    };
    event.preventDefault();
};
function showAlternatives(el){
    closeAlternatives();
    var menu = el.parentElement.getElementsByClassName('alternativesMenu')[0].setAttribute('style', 'display: block;');
    responsiveVoice.cancel();
};
function closeAlternatives(){
    var allAltMenu = document.getElementsByClassName('alternativesMenu');
    for (let i = 0; i < allAltMenu.length; i++) {
        allAltMenu[i].removeAttribute('style');
    };
};
function openLink(el){
    window.open(el.parentElement.parentElement.getAttribute('data-link'), '_self');
};
function tala(el){
    responsiveVoice.speak(el.parentElement.parentElement.getAttribute('data-title'), 'Swedish Female', {onend: stoptala});
};
function stoptala(){
    //responsiveVoice.cancel();
};
function startLoad(){
    document.getElementById('wrapper').setAttribute('style', 'display: none;');
    document.getElementById('loader').removeAttribute('style');
};
function stopLoad(){
    document.getElementById('wrapper').removeAttribute('style');
    document.getElementById('loader').setAttribute('style', 'display: none;');
};
var sagor = [];
function andra(){
    startLoad();
    if(document.getElementById('inst_typ1').checked){
        var img_typ = 'img_rek';
    }else if(document.getElementById('inst_typ2').checked){
        var img_typ = 'img_full';
    }else{
        console.log('Kunde inte hitta typ av bild');
    };
    if(document.getElementById('inst_qr').checked && window.innerWidth > 600){
        var qr_on = true;
    }else{
        var qr_on = false;
    };
    if(window.innerWidth <= 600){
        document.getElementById('inst_qr').checked = false;
    };
    skapa(
        document.getElementById('inst_size').value,
        document.getElementById('inst_size_typ').value,
        img_typ,
        qr_on,
        document.getElementById('inst_qr_size').value
    );
};
function skapa(img_size, img_size_typ, img_typ, qr_on, qr_size){
    var dolda = [];
    if(!localStorage.getItem('sagor_dold')){}else{
        dolda = JSON.parse(localStorage.getItem('sagor_dold'));
    };
    var wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = '';
    for (let i = 0; i < sagor.length; i++) {
        var w = 0;
        var h = 0;
        var l = '';
        if(img_typ == 'img_rek'){
            if(sagor[i].img_rek == ''){
                l = 'https://drive.google.com/uc?export=view&id=1dBBl3leRM-bcnY4UnSuENwLNj_CZFCxh';
                a.setAttribute('class', 'link missing');
                var missing = document.createElement('p');
                    var missing_t = document.createTextNode(sagor[i].alt);
                    missing.appendChild(missing_t);
                a.appendChild(missing);
            }else{
                l = sagor[i].img_rek;
            };
            w = img_size + img_size_typ;
            h = img_size + img_size_typ;
        }else if(img_typ == 'img_full'){
            if(sagor[i].img_full == ''){
                l = 'https://drive.google.com/uc?export=view&id=1UorOs1E2Ulayw9DUJwttXk3FbemjB90T';
                a.setAttribute('class', 'link missing');
                var missing = document.createElement('p');
                    var missing_t = document.createTextNode(sagor[i].alt);
                    missing.appendChild(missing_t);
                a.appendChild(missing);
            }else{
                l = sagor[i].img_full;
            };
            w = img_size + img_size_typ;
            h = Math.round(img_size * 1.3333) + img_size_typ;
        };
        var imageWrp = document.createElement('div');
            imageWrp.setAttribute('class', 'imageWrp');
            imageWrp.setAttribute('style', `width: ${w};height: ${h};`);
            var a = document.createElement('a');
                a.setAttribute('href', sagor[i].link);
                a.setAttribute('onclick', 'openPlayer(this);');
                if(sagor[i].html != ''){
                    a.setAttribute('data-player', sagor[i].html);
                };
                a.setAttribute('class', 'link');
                a.setAttribute('title', sagor[i].alt);
                a.setAttribute('style', `width: ${w};height: ${h};`);
                var img = document.createElement('img');
                    img.setAttribute('alt', sagor[i].alt);
                    img.setAttribute('src', l);
                    img.setAttribute('width', w);
                    img.setAttribute('height', h);
                a.appendChild(img);
                var qr = document.createElement('div');
                    qr.setAttribute('class', 'qr');
                a.appendChild(qr);
                var source = document.createElement('img');
                    source.setAttribute('class', 'source');
                    source.setAttribute('src', getIcon(sagor[i].link));
                    source.setAttribute('alt', sagor[i].link);
                a.appendChild(source);
            imageWrp.appendChild(a);
            var imageMenu = document.createElement('div');
                imageMenu.setAttribute('class', 'imageMenu');
                var dolj = document.createElement('input');
                    dolj.setAttribute('type', 'button');
                    dolj.setAttribute('value', 'Dölj');
                    dolj.setAttribute('onclick', 'dolj(this);');
                    dolj.setAttribute('data-link', sagor[i].link);
                    if(!dolda[sagor[i].link]){}else{
                        dolj.setAttribute('class', 'doljDessa');
                    };
                imageMenu.appendChild(dolj);
            imageWrp.appendChild(imageMenu);
            var altMenu = document.createElement('div');
                altMenu.setAttribute('class', 'alternativesMenu');
                altMenu.setAttribute('onclick', 'closeAlternatives();');
                altMenu.setAttribute('data-title', sagor[i].alt);
                altMenu.setAttribute('data-link', sagor[i].link);
            imageWrp.appendChild(altMenu);
        wrapper.appendChild(imageWrp);
        if(qr_on){
            new QRCode(qr, {
                text: sagor[i].link,
                width: qr_size,
                height: qr_size,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.L
            });
        };
    };
    spara(img_size, img_size_typ, img_typ, qr_on, qr_size);
    doljSparade();
    var allaAlternativMenyer = document.getElementsByClassName('alternativesMenu');
    for (let i = 0; i < allaAlternativMenyer.length; i++) {
        allaAlternativMenyer[i].innerHTML = `
        <svg height="30" viewBox="0 0 21 21" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8"></circle><g transform="matrix(0 1 -1 0 17 0)"><path d="m5.5 11.5 6-6"></path><path d="m5.5 5.5 6 6"></path></g></g></svg>
        <div class="alternativesButtons">
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" onclick="tala(this);"><g fill="none" fill-rule="evenodd" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="m8.5 9.5v-1l1.41421356-1.41421356c.37507274-.37507276.58578644-.88378059.58578644-1.41421356v-.17157288c0-.61286606-.3462631-1.17313156-.89442719-1.4472136l-.21114562-.1055728c-.56305498-.2815275-1.2257994-.2815275-1.78885438 0l-.10557281.0527864c-.61286606.30643303-1 .9328289-1 1.61803399v.88196601" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8.5" cy="12.5" fill="currentColor" r="1"/></g></svg>
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" onclick="openLink(this);"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8"/><path d="m7 11.5 4-3-4-3z" fill="currentColor"/></g></svg>
        </div>
        `;
    };
    stopLoad();
};
function doljSparade(){
    var allaAttDolja = document.getElementsByClassName('doljDessa');
    for (let i = 0; i < allaAttDolja.length; i++) {
        dolj(allaAttDolja[i]);
    };
};
function bildURL(url){
    if(!url || url == ""){
        return '';
    };
    if(url.includes('https://drive.google.com')){
        var id = url.split('/d/')[1].split('/view?')[0];
        return 'https://drive.google.com/uc?export=view&id=' + id;    
    };
    return url;
};
const start = () => {
    gapi.client.init({
        'apiKey': 'AIzaSyBVaHVdl9RZ51x2GDvCKPv9HBmTOJh0WdM',
        'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    }).then(() => {
        return gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1HpH8xDiPDaFSpR3YUbQwIhTgHAt2nOMBw-XRE5otnFU',
            range: 'Installningar', // for example: List 1!A1:B6
        })
    }).then((response) => {
        const r = response.result.values;
        for (var a = 0; a < r.length; a++){
            if(r[a][0] == 'Namn'){}else{
                sagor.push({
                    "alt": r[a][0],
                    "img_full": bildURL(r[a][1]),
                    "img_rek": bildURL(r[a][2]),
                    "link": r[a][3],
                    "html": r[a][4]
                });
            };
        };
        sagor.sort(function(a, b){
            let x = a.alt.toLowerCase();
            let y = b.alt.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        kollaSpara();
    }).catch((err) => {
        console.log('Något gick fel');
        stopLoad();
    });
};
gapi.load('client', start);
function dolj(el){
    var dolda = {};
    if(!localStorage.getItem('sagor_dold')){}else{
        dolda = JSON.parse(localStorage.getItem('sagor_dold'));
    };
    if(!el.getAttribute('data-dold')){
        el.parentElement.parentElement.setAttribute('class', 'imageWrp dold');
        el.setAttribute('data-dold', 'true');
        el.value = 'Visa';
        dolda[el.getAttribute('data-link')] = true;
    }else{
        el.parentElement.parentElement.setAttribute('class', 'imageWrp');
        el.removeAttribute('data-dold');
        el.value = 'Dölj';
        dolda[el.getAttribute('data-link')] = false;
    };
    localStorage.setItem('sagor_dold', JSON.stringify(dolda));
};
function spara(img_size, img_size_typ, img_typ, qr_on, qr_size){
    var inst = {"img_size": img_size, "img_size_typ": img_size_typ, "img_typ": img_typ, "qr_on": qr_on, "qr_size": qr_size};
    localStorage.setItem('sagor_inst', JSON.stringify(inst))
};
function kollaSpara(){
    if(!localStorage.getItem('sagor_inst')){}else{
        var inst = JSON.parse(localStorage.getItem('sagor_inst'));
        if(inst.img_typ == 'img_rek'){
            document.getElementById('inst_typ1').checked = true;
        }else if(inst.img_typ = 'img_full'){
            document.getElementById('inst_typ2').checked = true;
        };
        if(inst.qr_on){
            document.getElementById('inst_qr').checked = true;
        };
        document.getElementById('inst_size').value = inst.img_size;
        document.getElementById('inst_size_typ').value = inst.img_size_typ;
        document.getElementById('inst_qr_size').value = inst.qr_size;
    };
    andra();
};
function raderaSpara(){
    localStorage.removeItem('sagor_inst');
    localStorage.removeItem('sagor_dold');
    location.reload();
};
function getIcon(t){
    for (let i = 0; i < icons.length; i++) {
        if(t.includes(icons[i].search)){
            return icons[i].svg;
        };
    };
    return "img/sources/unknown.svg";
};
var icons = [{
    "search": "sverigesradio",
    "svg": "img/sources/sverigesradio.svg"
},{
    "search": "spotify",
    "svg": "img/sources/spotify.svg"
},{
    "search": "bookbeat",
    "svg": "img/sources/bookbeat.svg"
},{
    "search": "nextory",
    "svg": "img/sources/nextory.svg"
},{
    "search": "storytel",
    "svg": "img/sources/storytel.svg"
},{
    "search": "bokus",
    "svg": "img/sources/bokus.svg"
},{
    "search": "urplay",
    "svg": "img/sources/ur.svg"
}];
if((("standalone" in window.navigator) && !window.navigator.standalone) || (!window.matchMedia('(display-mode: standalone)').matches)){
    addToHomescreen();
};