/*Allt liten bokstav förutom första bokstaven*/String.prototype.storbokstav = function() {return this.charAt(0).toUpperCase() + this.slice(1);};
/*Gör första bokstaven liten*/function litenbokstav(value){return value.charAt(0).toLowerCase() + value.slice(1);};
/*Datumfunktion*/function treatAsUTC(date) {var result = new Date(date);result.setMinutes(result.getMinutes() - result.getTimezoneOffset());return result;};
/*Räknar dagar*/function daysBetween(startDate, endDate) {var millisecondsPerDay = 24 * 60 * 60 * 1000;return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;};
/*Ändrar formatet för funktionen "daysbeween"*/function predaysbetween(firststring, secondstring){var first = firststring.split('');if(first[2] == '0'){ first[2] = ''};if(first[4] == '0'){ first[4] = ''};first = first[2] + first[3] + '/' + first[4] + first[5] + '/20' + first[0] + first[1];var second = secondstring.split('');if(second[2] == '0'){ second[2] = ''};if(second[4] == '0'){ second[4] = ''};second = second[2] + second[3] + '/' + second[4] + second[5] + '/20' + second[0] + second[1];return daysBetween(first, second);};
/*Ändrar datumformat*/function andradatumstil(id){var elementvalue = document.getElementById(id).value;if(elementvalue == ''){return '';}else{return elementvalue.substring(2).split('-').join('');};};
/*Stylar datum för VC och flytt*/function styledate(date){var day = date.getDate();var month = date.getMonth() + 1;return day + '/' + month;};
/*Väljer datum från antaldagar*/function nextdate(date, days){var result = new Date(date);var milliseconds = Date.parse(date);var daysinmilliseconds = 86400000 * parseInt(days);result.setTime(milliseconds + daysinmilliseconds);if(result.getDay() === 0){result.setTime(milliseconds + daysinmilliseconds + 86400000);}else if(result.getDay() === 6){result.setTime(milliseconds + daysinmilliseconds + (86400000 * 2));};return styledate(result);};
/*Funktion som visar följdfrågor i smärta*/function showsmartinput(element){var targetelement = document.getElementsByClassName('smart')[0];if (element.value == "ja") {showelement('hide', targetelement);}else{showelement('show', targetelement);};};
/*Visa/dölj funktion för knappar i meny*/function tooglemenu(element){var getclass = element.getAttribute('name');var appinformation = document.getElementsByClassName('appinformation')[0];var nyheter = document.getElementsByClassName('nyheter')[0];if(getclass == 'nyheter'){var todo = nyheter.getAttribute('class');if (todo.indexOf('hide') === -1) {showelement('hide', nyheter);showelement('hide', appinformation);}else{showelement('show', nyheter);showelement('hide', appinformation);};}else if(getclass == 'appinformation'){var todo = appinformation.getAttribute('class');if (todo.indexOf('hide') === -1) {showelement('hide', nyheter);showelement('hide', appinformation);}else{showelement('hide', nyheter);showelement('show', appinformation);};}else{console.log('Något gick fel i tooglemenu.');};};
/*om drän ut registreras tas alternativ följ upp drän på vc*/function dranvc(element){var targetelement = document.getElementsByClassName('dranVC')[0];if(element.value == ''){showelement('show', targetelement);}else{showelement('hide', targetelement);};};
/*Om ord existerar i input visas det element som har den classen*/function kollaefterord(ord, inputelement){var inputelementvalue = inputelement.value.substr(0, ord.length).toLowerCase();var element = document.getElementsByClassName(ord)[0];if(inputelementvalue == ord){showelement('show', element);}else{showelement('hide', element);};};
/*Meny knapp fråga visa/dölj*/function fragavisa(element, todo){var allafragor = document.getElementsByClassName('link');if(todo == 'show'){element.setAttribute('onclick', 'fragavisa(this, "hide");');}else if(todo == 'hide'){element.setAttribute('onclick', 'fragavisa(this, "show");');};for (var i = allafragor.length - 1; i >= 0; i--) {showelement(todo, allafragor[i]);};};
/*Meny knapp förstoring*/function resize(element){if(element.value == '+'){document.getElementById('wrapper').setAttribute('class', 'zoom');element.setAttribute('value', '-');}else if(element.value == '-'){document.getElementById('wrapper').removeAttribute("class");element.setAttribute('value', '+');}else{alert('Något gick fel i zoom funktionen.')};};
/*Kollar ifall element är gömd*/function isHidden(el) {return (el.offsetParent === null)};
/*Kontrollerar att datum stämmer*/function checkdate(startid, slutid){var startidelement = document.getElementById(startid);var slutidelement = document.getElementById(slutid);var indat = andradatumstil(startid);var utdat = andradatumstil(slutid);if(isHidden(startidelement)){return false}else if(isHidden(slutidelement)){return false};if(indat == ''){}else if(utdat == ''){}else if(utdat - indat < 0){var startidelementoldclass = startidelement.getAttribute('class');if(!startidelementoldclass){startidelement.setAttribute('class', ' obs');}else{startidelement.setAttribute('class', startidelementoldclass + ' obs');};var slutidelementoldclass = slutidelement.getAttribute('class');if(!slutidelementoldclass){slutidelement.setAttribute('class', ' obs');}else{slutidelement.setAttribute('class', slutidelementoldclass + ' obs');};alert('Datum stämmer inte!');return false;};};
/*Funktion som visar följdfrågor till element med show som class*/function visafoljdfraga(element){var id = element.getAttribute('name');var targetelement = document.getElementsByClassName(id);for (var i = targetelement.length - 1; i >= 0; i--) {if(element.checked){showelement('show', targetelement[i]);}else{showelement('hide', targetelement[i]);};};};
/*visadöljfunktion*/function showelement(todo, element){var oldclass = element.getAttribute('class');if(todo == 'show'){element.setAttribute('class', oldclass.replace(' hide', ''));}else if(todo == 'hide'){if (oldclass.indexOf('hide') === -1) {element.setAttribute('class', oldclass + ' hide');};};};
/*Visar antal suturdagar "Annat"*/function showadddays(todo){var wrapper = document.getElementById('wrapperannat');if(todo == 'visa'){wrapper.setAttribute('style', 'display:;');}else if(todo == 'dolj'){wrapper.setAttribute('style', 'display:none;');}else{console.log('N\u00E5got gick fel i "showadddays()"');};};
/*Skriver VCremiss*/function sarremisswrite(){if(document.getElementsByName('op')[0].checked){if(document.getElementsByName('vc')[0].checked){var opdatelement = document.getElementById('dat3');var opdat = opdatelement.value;var ing = document.getElementsByName('ingrepp')[0].value;var pal = document.getElementsByName('lakare')[0].value;var sarkontr = document.getElementsByName('sar')[0].checked;var suttyp = document.getElementsByName('sutur')[0].value;var narsuturerskallavvecklas = document.getElementsByName('avvecklas');for(i=0;i<narsuturerskallavvecklas.length;i++){if(narsuturerskallavvecklas[i].checked){var suttid = narsuturerskallavvecklas[i].value;};};if (suttid == '=') {var suttid = document.getElementById('annat').value;};if (sarkontr) {var saruts = document.getElementsByName('sarstatus')[0].value;}else{var saruts = '';};var fardigtext = 'Patient var god att direkt vid hemg\u00E5ng best\u00E4lla tid p\u00E5 din v\u00E5rdcentral/hemsjukvård';if(sarkontr){var fardigtext = fardigtext + 'den ' + nextdate(opdat, suttid) + '.\n\n';var ordination = '';}else{var fardigtext = fardigtext + 'datumen ' + nextdate(opdat, config.sarkontroll[document.getElementsByName('omrade')[0].value]) + ' & ' + nextdate(opdat, suttid) + '.\n\n';var ordination = 'Tacksam för s\u00E5roml\u00E4ggning och s\u00E5rkontroll ' + config.sarkontroll[document.getElementsByName('omrade')[0].value] + ' dagar postoperativt den ' + nextdate(opdat, config.sarkontroll[document.getElementsByName('omrade')[0].value]) + '.\n';};var fardigtext = fardigtext + 'OPERATIONSDATUM: ' + opdat + '\n';var fardigtext = fardigtext + 'INGREPP: ' + ing + '\n';var fardigtext = fardigtext + 'PATIENTANSVARIG L\u00C4KARE: ' + pal + '\n';var fardigtext = fardigtext + '\nORDINATION:\n' + ordination + 'Tacksam för ' + suttyp + ' samt s\u00E5roml\u00E4ggning och s\u00E5rkontroll ' + suttid + ' dagar postoperativt den ' + nextdate(opdat, suttid) + '.\nTacksam för vidare uppföljning till s\u00E5rl\u00E4kning.\n\n';var fardigtext = fardigtext + 'BEHANDLING:\nTv\u00E4tta med Descutan. Steristrippa. T\u00E4ck s\u00E5r med Tegaderm Pad (eller liknande).\n\n';var fardigtext = fardigtext + 'S\u00C5R STATUS VID UTSKRIVNING:\n';if (sarkontr) {if(saruts.length === 0){var fardigtext = fardigtext + 'S\u00E5r omlagt postoperativt.';}else{var fardigtext = fardigtext + 'S\u00E5r omlagt postoperativt, ' + litenbokstav(saruts) + '.';};}else{var fardigtext = fardigtext + 'S\u00E5r \u00E4r inte omlagt postoperativt. Förband sluter t\u00E4tt.';};}else{var fardigtext = '';};}else{var fardigtext = '';};return fardigtext;};
/*Skriver Drämremiss*/function dranremisswrite(){if(document.getElementsByName('op')[0].checked){if(!isHidden(document.getElementsByName('drankvar')[0])){if(document.getElementsByName('drankvar')[0].checked){var drantillveckor = andradatumstil('dat9');var drantillveckor2 = drantillveckor.split('');if(drantillveckor2[2] == '0'){var drantillveckor2manad = drantillveckor2[3];}else{var drantillveckor2manad = drantillveckor2[2] + drantillveckor2[3];};if(drantillveckor2[4] == '0'){var drantillveckor2dag = drantillveckor2[5];}else{var drantillveckor2dag = drantillveckor2[4] + drantillveckor2[5];};var drantillveckordone = drantillveckor2dag + '/' + drantillveckor2manad;var drandygnsmangd = document.getElementsByName('drankvarmindre')[0].value;var opdatelement = document.getElementById('dat3');var opdat = opdatelement.value;var ing = document.getElementsByName('ingrepp')[0].value;var pal = document.getElementsByName('lakare')[0].value;var fardigtext = 'Patient var god att direkt vid hemgång beställa tid på din vårdcentral cirka den ' + drantillveckordone + '.\n\n';var fardigtext = fardigtext + 'OPERATIONSDATUM: ' + opdat + '\n';var fardigtext = fardigtext + 'INGREPP: ' + ing + '\n';var fardigtext = fardigtext + 'PATIENTANSVARIG L\u00C4KARE: ' + pal + '\n';var fardigtext = fardigtext + '\nORDINATION:\n' + 'Tacksam för avveckling av dränage ca den ' + drantillveckor + ', om eller senare när dyngsmängden i dränage är under ' + drandygnsmangd + ' ml.';var fardigtext = fardigtext + '\n\nBEHANDLING:\nÖppna enbart så mycket som behövs av förbandet, för att kunna avveckla dränaget. Tvätta område med descutan. Släpp ut vacum från dränaget. Klampa dränage-slangen med sittande klämmor. Håll aquacel eller kompress över ingångshålet. Dra ut slangen, håll tryck i ca 5 minuter efter. Täck sår med förband alternativt förstärk nuvarande förband med plastfilm.';}else{var fardigtext = '';};}else{var fardigtext = '';};}else{var fardigtext = '';};return fardigtext;};
/*Skapar infotext*/function createinfo(text){var inforutap = document.createElement('p');var inforutatext = document.createTextNode(text);inforutap.appendChild(inforutatext);return inforutap;};
/*Skapar textareor*/function createtextarea(head, text){var infowrapper = document.createElement('span');var header = document.createElement('h1');var headertext = document.createTextNode(head);header.appendChild(headertext);infowrapper.appendChild(header);var textarea = document.createElement('textarea');textarea.setAttribute('onclick', 'this.focus();this.select();document.execCommand("copy");');var textareatext = document.createTextNode(text);textarea.appendChild(textareatext);infowrapper.appendChild(textarea);return infowrapper;};
/*scrollfunktion*/function findPos(obj) {var curtop = 0;if (obj.offsetParent) {do {curtop += obj.offsetTop;} while (obj = obj.offsetParent);return [curtop];};};
/*Skapar options, kopplat till omrade();*/function addoptions(id, avd){var dataelement = document.getElementById(id);while (dataelement.firstChild) dataelement.removeChild(dataelement.firstChild);var findconfig = config[id][avd];for(i=0;i<findconfig.length;i++){var option = document.createElement('option');option.setAttribute('value', findconfig[i]);dataelement.appendChild(option);};};
/*Visar/döljer element beroende på område*/function omrade(element){for (i = 0; i < config.omrade.length; i++) {var elementstohide = document.getElementsByClassName('om' + config.omradeeng[i]);for (a = 0; a < elementstohide.length; a++) {showelement('hide', elementstohide[a]);};};var targetelement = document.getElementsByClassName('om' + element.value.toLowerCase());for (var i = targetelement.length - 1; i >= 0; i--) {showelement('show', targetelement[i]);};addoptions('orsak', element.value);addoptions('ingrepp', element.value);addoptions('lakare', element.value);};
/*lägger in hide på sidan*/function addhide(){var allheadelements = document.getElementsByClassName('show');for(i=0;i<allheadelements.length;i++){var elementtohide = document.getElementsByClassName(allheadelements[i].name);for(b=0;b<elementtohide.length;b++){hidetoelement(elementtohide[b]);};};var allquestions = document.getElementsByClassName('link');for(i=0;i<allquestions.length;i++){hidetoelement(allquestions[i]);};hidetoelement(document.getElementsByClassName('nyheter')[0]);hidetoelement(document.getElementsByClassName('appinformation')[0]);hidetoelement(document.getElementsByClassName('smart')[0]);hidetoelement(document.getElementsByClassName('dranVC')[0]);hidetoelement(document.getElementsByClassName('embo')[0]);for(i=0;i<config.omradeeng.length;i++){var allelementsconnectedtoavd = document.getElementsByClassName('om' + config.omradeeng[i]);for(b=0;b<allelementsconnectedtoavd.length;b++){hidetoelement(allelementsconnectedtoavd[b]);};};};
/*lägger till hide till önskat element*/function hidetoelement(element){var classbefore = element.getAttribute('class');element.setAttribute('class', classbefore + ' hide');};

/*Funktion som startar när sidan skapas*/
function onpagestart(){
	var allshowelements = document.getElementsByClassName('show');
	for (var i = allshowelements.length - 1; i >= 0; i--) {allshowelements[i].setAttribute('onchange', 'visafoljdfraga(this);');};
	var getsmartaelement = document.getElementsByName("smarta");
	for (var i = getsmartaelement.length - 1; i >= 0; i--) {getsmartaelement[i].setAttribute('onchange', 'showsmartinput(this)');};
	document.getElementsByName('nyheter')[0].setAttribute('onclick', 'tooglemenu(this);');
	document.getElementsByName('appinformation')[0].setAttribute('onclick', 'tooglemenu(this);');
	document.getElementById('dat11').setAttribute('onchange', 'dranvc(this);');
	var dranknapp = document.getElementsByName('dran')[0];
		var dranknappevents = dranknapp.getAttribute('onchange');
		dranknapp.setAttribute('onchange', dranknappevents + ' dranvc(document.getElementById("dat11"));')
	document.getElementsByName('orsak')[0].setAttribute('onchange', 'kollaefterord("embo", this);');
	document.getElementsByName('ingrepp')[0].setAttribute('onchange', 'kollaefterord("embo", this);');
	var allfrageelements = document.getElementsByClassName('link');
	for (var i = allfrageelements.length - 1; i >= 0; i--) {allfrageelements[i].setAttribute('onclick', 'alert(this.getAttribute("data"));');};
	document.getElementsByName('question')[0].setAttribute('onclick', 'fragavisa(this, "show");');
	document.getElementsByName('bigger')[0].setAttribute('onclick', 'resize(this);');
	document.getElementsByName('start')[0].setAttribute('onclick', 'start()');
	var selectomrade = document.getElementsByName("omrade")[0];selectomrade.setAttribute('onchange', 'omrade(this);');for (i = 0; i < config.omrade.length; i++) {var optionelement = document.createElement('option');optionelement.setAttribute('value', config.omradeeng[i]);var optionelementtext = document.createTextNode(config.omrade[i]);optionelement.appendChild(optionelementtext);selectomrade.appendChild(optionelement);};
	addhide();
};







function start(){
	/*Radera tidigare genererat*/var resultelement = document.getElementById('result');while (resultelement.firstChild) resultelement.removeChild(resultelement.firstChild);

	/*Ändra datum format*/
	var opdat = andradatumstil('dat3');
	var hbdat = andradatumstil('dat4');
	var kadindat = andradatumstil('dat5');
	var kadutdat = andradatumstil('dat6');
	var bladderdat = andradatumstil('dat7');
	var sarkontrolldat = andradatumstil('dat8');
	var dradrandat = andradatumstil('dat9');
	var dranindat = andradatumstil('dat10');
	var dranutdat = andradatumstil('dat11');
	/*Ändra datum format slut*/

	/*tar bort tidigare rödmarkerade inputs där text krävts*/var allobs = document.getElementsByClassName('obs');for (var i = allobs.length - 1; i >= 0; i--) {var oldclass = allobs[i].getAttribute('class');allobs[i].setAttribute('class', oldclass.replace(' obs', ''));};
	/*Kontrollera att allt är ifyllt*/var obligatoriskaelement = document.getElementsByClassName('obligatorisk');for (i = 0; i < obligatoriskaelement.length; i++) {var type = obligatoriskaelement[i].tagName.toLowerCase();if(!isHidden(obligatoriskaelement[i])){if(obligatoriskaelement[i].getAttribute('type') == 'checkbox'){if (!document.getElementsByName('eda')[0].checked && !document.getElementsByName('pca')[0].checked){alert('Val smärtpump inte gjord.');return false;};}else if(obligatoriskaelement[i].value == ''){var oldclass = obligatoriskaelement[i].getAttribute('class');if(!oldclass){obligatoriskaelement[i].setAttribute('class', ' obs');}else{obligatoriskaelement[i].setAttribute('class', oldclass + ' obs');};var meddelande = obligatoriskaelement[i].getAttribute('data');if(meddelande){alert(meddelande);};obligatoriskaelement[i].focus();return false;};};};	
	/*Kontrollerar att datum stämmer i dran*/checkdate('dat10', 'dat11');
	/*Kontrollerar att datum stämmer i kad*/checkdate('dat5', 'dat6');



/*Insammling av information*/
	/*Vårdhistoria (vardhistoria)*/
	var vardhistoria = document.getElementsByName('vardhistoria')[0].value;
	if(vardhistoria == ''){}else{if(vardhistoria.charAt(vardhistoria.length - 1) == '.'){var vardhistoria = vardhistoria.slice(0, - 1);};var vardhistoria = vardhistoria.storbokstav() + '.';};
//console.log(vardhistoria);
	/*Inskriven i slutenvård pga (inskriven)*/
	var inskriven = 'Inkommer på grund av ' + (document.getElementsByName('orsak')[0].value).toLowerCase() + '.';
	if (document.getElementsByName('op')[0].checked) {var inskriven = inskriven + '\nOpereras ' + opdat + ' ' + document.getElementsByName('ingrepp')[0].value + '.';};
	var undersok = document.getElementsByClassName('undersok')[0].value;if(undersok == ''){}else{if(undersok.charAt(undersok.length - 1) == '.'){var undersok = undersok.slice(0, - 1);};var undersok = undersok.storbokstav() + '.';var undersok = '\n' + undersok;};
	var inskriven = inskriven + undersok;
//console.log(inskriven);
	/*Kunskap, utveckling (kunskap)*/
	if (document.getElementsByName('kunskap')[0].checked){var kunskap = 'Patient har upplevts desorienterad under vårdtid.';}else{var kunskap = 'Orienterad i tid, rum och person.';};
//console.log(kunskap);
	/*Andning/cirkulation (cirkulation)*/
	if (document.getElementsByName('op')[0].checked) {
		/*peropblod*/if (document.getElementsByName('peropblod')[0].value == "0"){var peropblod = 'Förlorade enbart spår blod perop.';}else{var peropblod = 'Förlorade ' + document.getElementsByName('peropblod')[0].value + ' ml blod perop.';};
		/*cellsaver*/if (document.getElementsByName('cellsaver')[0].value == ''){var cellsaver = '';}else{var cellsaver = ' Fick tillbaka ' + document.getElementsByName('cellsaver')[0].value + ' ml i cellsaver.';};
		/*draninfo*/if (document.getElementsByName('dran')[0].checked){/*In*/if (dranindat == opdat){var dranin = ' Dränage sattes i samband med operation';}else if(dranindat == ''){var dranin = ' Dränage postoperativt';}else{var dranin = ' Dränage sattes den ' + dranindat;};/*Ut*/if(dranindat == ''){var dranut = '';}else if (dranindat == dranutdat){var dranut = ', avvecklades samma dag';}else if(predaysbetween(dranindat, dranutdat) == 1){var dranut = ', avvecklades efter ' + predaysbetween(dranindat, dranutdat) + ' dag';}else if(predaysbetween(dranindat, dranutdat) >= 2){var dranut = ', avvecklades efter ' + predaysbetween(dranindat, dranutdat) + ' dagar';}else if(dranutdat == ''){var dranut = '. Dränage kvar vid hemgång';};/*Dränförlust*/if(document.getElementsByName('dranforlust')[0].value == 0){if(dranutdat == ''){var dranforlust = '. Kom enbart spår i dränage innan hemgång.';}else{var dranforlust = '. Kom enbart spår i dränage innan avveckling.';};}else{if(dranutdat == ''){var dranforlust = '. Sammanlagd dränageförlust under vårdtiden blev ' + document.getElementsByName('dranforlust')[0].value + ' ml innan hemgång.';}else{var dranforlust = '. Sammanlagd dränageförlust blev ' + document.getElementsByName('dranforlust')[0].value + ' ml innan avveckling.';};};var draninfo = dranin + dranut + dranforlust;}else{var draninfo = ' Inget dränage postoperativt.';};
		/*eretrocyt*/if (document.getElementsByName('eretrocyt')[0].checked){var eretrocyt = ' Fått blod postoperativt.';}else{var eretrocyt = ' Har inte fått blod postoperativt.';};
		/*hb*/if (document.getElementsByName('hb')[0].value == ''){var hb = '';}else{if (hbdat == '') {var hbdat = '';}else{var hbdat = ' den ' + hbdat;};var hb = ' Senast tagna Hb' + hbdat + ' visade ' + document.getElementsByName('hb')[0].value + ' g/l.';};
		/*profylax*/var antibiotelement = document.getElementsByName('antibiot')[0].checked;var tromboselement = document.getElementsByName('trombos')[0].checked;if(antibiotelement && tromboselement){var profylax = 'Har fått antibiotika- och trombosprofylax postoperativt.';}else if(antibiotelement && !tromboselement){var profylax = 'Har fått antibiotikaprofylax postoperativt. Har inte fått trombosprofylax.';}else if(!antibiotelement && tromboselement){var profylax = 'Har fått trombosprofylax postoperativt. Har inte fått antibiotikaprofylax.';}else if(!antibiotelement && !tromboselement){var profylax = 'Har inte fått antibiotika- eller trombosprofylax postoperativt.';};
		var blod = peropblod + cellsaver + draninfo + eretrocyt + hb + '\n' + profylax;
	}else{var blod = ''};
	/*infart*/if (document.getElementsByName('cvk')[0].checked) {var infart = 'Haft CVK under vårdtiden.';}else if (document.getElementsByName('portacath')[0].checked) {var infart = 'Haft aktiv portacath under vårdtiden.';}else {var infart = ''};
	/*cirkstabil*/if (!document.getElementsByName('o2')[0].checked && !document.getElementsByName('cirk')[0].checked) {var cirkstabil = 'Cirkulatoriskt och respiratoriskt stabil.';}else{var cirkstabil = '';};
	var cirkulationnyrad = '\n';if(!infart == ''){if(!blod == ''){var blod = blod + cirkulationnyrad;};};if(!cirkstabil == ''){if(!infart == ''){var infart = infart + cirkulationnyrad;}else if(!blod == ''){var blod = blod + cirkulationnyrad;};};var cirkulation = blod + infart + cirkstabil;
//console.log(cirkulation)
	/*Nutrition (nutrition)*/
		/*matochvtsk*/var nutritionmat = document.getElementsByName('mat')[0].checked;var nutritionvtsk = document.getElementsByName('vatska')[0].checked;if (nutritionmat && nutritionvtsk) {var matochvtsk = 'Problem under vårdtid med vätske och matintaget.';}else if(nutritionmat){var matochvtsk = 'Äter snålt, vätskeintag är utan anmärkning.';}else if(nutritionvtsk){var matochvtsk = 'Äter utan anmärkning, nedsatt vätskeintag.';}else{var matochvtsk = 'Äter och dricker utan anmärkning.';};
		/*illamaende*/if (document.getElementsByName('illamaende')[0].checked){if (document.getElementsByName('illamaendebeh')[0].checked){var illamaendebehfunkelement = document.getElementsByName('illamaendebehfunk');for (var i = illamaendebehfunkelement.length - 1; i >= 0; i--) {if(illamaendebehfunkelement[i].checked){var illamaendebehfunkinfo = illamaendebehfunkelement[i].value;};};var illamaendebehfunk = ', fått antiemetika med ' + illamaendebehfunkinfo + ' effekt.';}else{var illamaendebehfunk = '. Har inte fått antiemetika.';};if (document.getElementsByName('illamaendehem')[0].checked){var illamaendehem = ' Fortsatt illamående problematik vid hemgång.';}else{var illamaendehem = ' Illamående har lagt sig vid hemgång.';};var illamaende = ' Illamående under vårdtid' + illamaendebehfunk + illamaendehem;}else{var illamaende = ' Förnekar illamående.';};
		var nutrition = matochvtsk + illamaende;
//console.log(nutrition);
	/*Elimination (elemination)*/
		/*kad*/if (document.getElementsByName('kad')[0].checked) {if (kadutdat == ''){var kadut = ', finns kvar vid utskrivning.';}else{var kadantaldagar = predaysbetween(kadindat, kadutdat);if(kadantaldagar == 0){var kadinfo = ', avvecklades samma dag';}else if(kadantaldagar == 1){var kadinfo = ', avvecklades efter ' + kadantaldagar + ' dag';}else if(kadantaldagar >= 2){var kadinfo = ', avvecklades efter ' + kadantaldagar + ' dagar';}else{var kadinfo = '';};var kadut = ', avvecklades den ' + kadutdat + kadinfo + '.';};var kad = 'Fick KAD den ' + kadindat + kadut + ' ';}else{var kad = '';};
		/*tappad*/if (document.getElementsByName('tappad')[0].checked) {if (document.getElementsByName('antaltappad')[0].value == '1'){var tappadantal = 'gång';}else{var tappadantal = 'gånger';};var tappad = 'Blivit tappad under vårdtiden ' + document.getElementsByName('antaltappad')[0].value + ' ' + tappadantal + '. ';}else{var tappad = 'Har inte blivit tappad under vårdtiden. ';};
		/*spontanmiktion*/if(kadutdat == '' && !isHidden(document.getElementById('dat6'))){var spontanmiktion = '';}else{if (document.getElementsByName('spontanmiktion')[0].checked) {var spontanmiktion = 'Under vårdtiden haft blåstömnings problematik. ';}else{var spontanmiktion = 'Spontan miktion. ';};};
		/*bladder*/if (document.getElementsByName('bladder')[0].checked) {var bladder = 'Senast tagna bladder den ' + bladderdat + ' visade ' + document.getElementsByName('resurin')[0].value + ' ml i resurin. ';}else{var bladder = '';};
		/*uvi*/if (document.getElementsByName('uvi')[0].checked) {if (document.getElementsByName('uvisticka')[0].checked) {var uvisticka = 'Urinsticka visar positiv nitrit, ';}else{var uvisticka = 'Urinsticka visar negativ nitrit, ';};if (document.getElementsByName('uviodling')[0].checked) {var uviodling = 'urinodling tagen, ';}else{var uviodling = 'urinodling inte tagen, ';};if (document.getElementsByName('uvibehandling')[0].checked) {var uvibehandling = 'behandlas för UVI';}else{var uvibehandling = 'behandling för UVI inte påbörjad.';};var uvi = '\n' + uvisticka + uviodling + uvibehandling + '.';}else{var uvi = '';};
		/*defekation*/if (document.getElementsByName('defekation')[0].checked) {var defekation='\nPatient har haft defekation postoperativt.';}else{var defekation='\nPatient har inte haft defekation postoperativt.';};
		/*Stomi*/if(!isHidden(document.getElementsByName('stomi')[0])){if(document.getElementsByName('stomi')[0].checked){if(document.getElementsByName('stomisort')[0].value == ''){var stomi = ' Patient har stomi.';}else{var stomi = ' Patient har ' + document.getElementsByName('stomisort')[0].value.toLowerCase() + '.';};}else{var stomi = '';};}else{var stomi = '';};
		var elemination = kad + tappad + spontanmiktion + bladder + uvi + defekation + stomi;
//console.log(elemination);
	/*Hud, vävnad (hud)*/
		/*opsar*/if (document.getElementsByName('op')[0].checked) {if (document.getElementsByName('sar')[0].checked) {if(sarkontrolldat == ''){var opsardat = '';}else{var opsardat = ' den ' + sarkontrolldat;};if(document.getElementsByName('sarstatus')[0].value == ''){var opsarstatus = '';}else{var opsarstatus = ', ' + document.getElementsByName('sarstatus')[0].value;};var opsar = 'Såromläggning gjord postoperativt' + opsardat + opsarstatus.toLowerCase() + '. ';}else{var opsar = 'Sår är inte omlagt postoperativt. ';};}else{var opsar = '';};
		/*sarkontroll & sutur & ordhud*/if(document.getElementsByName('op')[0].checked){var valdsutur = document.getElementsByName('sutur')[0].value;if(document.getElementsByName('sarkontroll2')[0].checked){var sarkontroll='Sårkontroll 2 veckor postoperativt gjord innan utskrivning. ';}else if (document.getElementsByName('sarkontroll1')[0].checked) {if (document.getElementsByName('flytt')[0].checked){var sarkontroll = '';}else{var sarkontroll='Sårkontroll ' + config.sarkontroll[document.getElementsByName('omrade')[0].value] + ' dagar postoperativt gjord, vidare uppföljning via vårdcentral. ';};}else{var sarkontroll='';};if (document.getElementsByName('flytt')[0].checked){var sjudagar = nextdate(document.getElementById('dat3').value, config.sarkontroll[document.getElementsByName('omrade')[0].value]);var narsuturerskallavvecklas = document.getElementsByName('avvecklas');for(i=0;i<narsuturerskallavvecklas.length;i++){if(narsuturerskallavvecklas[i].checked){var suttid = narsuturerskallavvecklas[i].value;};};if (suttid == '=') {var suttid = document.getElementById('annat').value;};var fjortondagar = nextdate(document.getElementById('dat3').value, suttid);if (document.getElementsByName('sarkontroll2')[0].checked){var ordhud = '';}else if (document.getElementsByName('sarkontroll1')[0].checked){var ordhud = '\n' + valdsutur.storbokstav() + ' samt såromläggning och sårkontroll, ska göras enligt gällande rutiner den ' + fjortondagar + '.';}else{var ordhud = '\nSåromläggning och sårkontroll ' + config.sarkontroll[document.getElementsByName('omrade')[0].value] + ' dagar postoperativt ska göras den ' + sjudagar + '. ' + valdsutur.storbokstav() + ' samt såromläggning och sårkontroll ' + suttid + ' dagar postoperativt ska göras den ' + fjortondagar + '.';};}else{var ordhud = '';};}else{var sarkontroll = ''; var ordhud = '';};
		/*hudkostym*/if (document.getElementsByName('hud')[0].checked){
			/*hudsar*/if (document.getElementsByName('hudsar')[0].checked){var hudsarvad = document.getElementsByName('hudsarvad')[0].value;var hudsarplats = document.getElementsByName('hudsarplats')[0].value;var hudsar = 'Har ' + (hudsarvad).toLowerCase() + ' på ' + (hudsarplats).toLowerCase() + '.';}else{var hudsar = '';};
			/*tryck*/if (document.getElementsByName('tryck')[0].checked){var tryckpunkt = '';if (document.getElementsByName('tryckankomst')[0].checked){var tryckankomst = 'Trycksår vid ankomst.';}else{var tryckankomst = 'Fått trycksår under vårdtiden.';};for (var i = document.getElementsByName('illalukt').length - 1; i >= 0; i--) {if(document.getElementsByName('illalukt')[i].checked){if(document.getElementsByName('illalukt')[i].value == 'ja'){var illalukt = ' Sår lucktar illa.';}else{var illalukt = ' Sår är inte illaluktande.';};};};if (document.getElementsByName('tryckplats')[0].value == '') {var tryckplats = '';}else{var tryckplats = ' Patient har trycksår i ' + document.getElementsByName('tryckplats')[0].value;var tryckpunkt = '.';};if (document.getElementsByName('tryckkategori')[0].value == '') {var tryckkategori = '';}else{var tryckkategori = ', kategori ' + document.getElementsByName('tryckkategori')[0].value;var tryckpunkt = '.';};if (document.getElementsByName('tryckl')[0].value == '' && document.getElementsByName('tryckh')[0].value == ''){var tryckstorlek = '';}else{var tryckstorlek = ', med storlek ' + document.getElementsByName('tryckl')[0].value + 'x' + document.getElementsByName('tryckh')[0].value + 'mm';var tryckpunkt = '.';};if (document.getElementsByName('tryckd')[0].value == '') {var tryckdjup = '';}else{var tryckdjup = ' och djup ' + document.getElementsByName('tryckd')[0].value + 'mm';var tryckpunkt = '.';};var tryck = tryckankomst + tryckplats + tryckkategori + tryckstorlek + tryckdjup + tryckpunkt + illalukt;}else{var tryck = '';};
			/*Mellanslag mellan hudsat & tryck*/if(tryck == '' || hudsar == ''){var hudkostym = tryck + hudsar;}else{var hudkostym = tryck + '\n' + hudsar;};
		}else{var hudkostym = 'Hel hudkostym.';};
		/*avvikandeforband*/if (document.getElementsByName('op')[0].checked){if (document.getElementsByName('forbandreaktion')[0].checked){var forbandreaktion = '\nHaft reaktion av sårförband under vårdtid.';}else{var forbandreaktion = '';};if (document.getElementsByName('blasbildning')[0].checked){var blasbildning = '\nFått blåsor av förband under vårdtid.';}else{var blasbildning = '';};if (document.getElementsByName('sarinf')[0].checked){if (document.getElementsByName('sarinfbeh')[0].checked){var sarinfbeh = ', behandling påbörjad.';}else{var sarinfbeh = '.';};var sarinf = '\nSårinfektion postoperativt' + sarinfbeh;}else{var sarinf = '';var sarinfbeh = ''};var avvikandeforband = forbandreaktion + blasbildning + sarinf;}else{var avvikandeforband = ''};
		if (opsar == '' && sarkontroll == '' &&  ordhud == ''){var hudnyrad = '';}else{var hudnyrad = '\n';};
		var hud = opsar + sarkontroll + ordhud + hudnyrad + hudkostym + avvikandeforband;
//console.log(hud);
	/*Aktivitet (aktivitet)*/
		/*mobord*/if (document.getElementsByName('mob')[0].checked){var mobrestriktioner = document.getElementById('mobrestriktioner').value;if(mobrestriktioner.charAt(mobrestriktioner.length - 1) == '.'){var mobrestriktioner = mobrestriktioner.slice(0, - 1);};var mobord = 'Restriktioner i sin mobilisering, följande gäller: ' + mobrestriktioner.toLowerCase() + '.';}else{var mobord = 'Fri mobilisering.';};
		/*hjalpmedel*/if (document.getElementsByName('hjalp')[0].checked){var hjalpmedel = ' Använder följande hjälpmedel: ' + document.getElementsByName('hjalpinfo')[0].value + '.';}else{var hjalpmedel = ' Går utan hjälpmedel.';};
		/*fall*/if (document.getElementsByName('fall')[0].checked){var fall = ' Fall registrerat under vårdtiden.';}else{var fall = ''};
		var aktivitet = mobord + hjalpmedel + fall;
//console.log(aktivitet);
	/*Sömn (somn)*/
		if (document.getElementsByName('somn')[0].checked){if (document.getElementsByName('somngo')[0].checked){var somn2 = ', fått sömntablett under vårdtiden.';}else{var somn2 = '.';};var somn = 'Dålig sömn' + somn2;}else{var somn = 'God nattsömn.';};
//console.log(somn)
	/*Smärta, sinnesintryck (smarta)*/
		/*smartapump*/if (document.getElementsByName('pump')[0].checked){if (document.getElementsByName('eda')[0].checked){for(i=0;i<document.getElementsByName('edafunk').length;i++){if(document.getElementsByName('edafunk')[i].checked){var pumpinfo = document.getElementsByName('edafunk')[i].value;};};var smartapump = 'Inledningsvis postoperativt hade patient EDA med ' + pumpinfo + ' funktion.\n';}else if (document.getElementsByName('pca')[0].checked){for(i=0;i<document.getElementsByName('pcafunk').length;i++){if(document.getElementsByName('pcafunk')[i].checked){var pumpinfo = document.getElementsByName('pcafunk')[i].value;};};var smartapump = 'Inledningsvis postoperativt hade patient PCA med ' + pumpinfo + ' funktion.\n';}else{console.log('NÅGOT GICK FEL I SMÄRTA');};}else{var smartapump = '';};
		/*smartainfo*/if(document.getElementsByName('smarta')[0].checked){var smartainfo = 'Stabil smärtlindring peros.';}else{if(document.getElementsByName('smartalos')[0].value == ''){var smartalos = '';}else{var smartalos = ', smärta har kuvats med ' + document.getElementsByName('smartalos')[0].value;};if(document.getElementsByName('smarta')[2].checked){var smartainfo = 'Smärtlindring peros är inte stabil' + smartalos + '.';}else{var smartainfo = 'Smärtlindring är relativt stabil' + smartalos + '.';};};if(document.getElementsByName('smartalok')[0].value == ''){var smartalok = '';}else{var smartalok = ' Smärta främst från ' + (document.getElementsByName('smartalok')[0].value).toLowerCase() + '.';};
		/*domning*/if (document.getElementsByName('domn')[0].checked){var domning = '\nPostoperativt domnad ' + (document.getElementsByName('domnlok')[0].value).toLowerCase() + '.';}else{var domning = '';};
		var smarta = smartapump + smartainfo + smartalok + domning;
//console.log(smarta);
	/*Psykosocialt (psykosocialt)*/
		/*oro*/if (document.getElementsByName('oro')[0].checked){if (document.getElementsByName('orobeh')[0].checked){var orobeh = 'blivit behandlad';}else{var orobeh = 'inte blivit behandlad';};var oro = 'Oro under vårdtiden som ' + orobeh + '.\n';}else{var oro = '';};
		/*narstaende*/if (document.getElementsByName('narstaende')[0].checked){var narstaende = 'Närstående har varit på besök under vårdtiden.';}else{var narstaende = '';};
		/*kurator*/if (document.getElementsByName('kurator')[0].checked){var kurator = 'Varit i kontakt med kurator.\n';}else{var kurator = '';};
		var psykosocialt = oro + kurator + narstaende;
//console.log(psykosocialt);
	/*Planering (planering)*/
		/*besok*/if (document.getElementsByName('besok')[0].checked){if(document.getElementsByName('besokveckor')[0].value == '1'){var besokveckorb = ' vecka';}else{var besokveckorb = ' veckor';};var besok = 'Patient skall på återbesök om ca ' + document.getElementsByName('besokveckor')[0].value + besokveckorb + '.\n';}else{var besok = '';};
		/*vc*/if (document.getElementsByName('vc')[0].checked){var vctext = 'Vidare uppföljning av sår via vårdcentral.\n';}else{var vctext = '';};
		/*drankvar*/if (document.getElementsByName('drankvar')[0].checked){var drankvar = 'Dränage kvar vid hemgång, skall avvecklas via vårdcentral den ' + dradrandat + ' om dygnsmängden är mindre än ' + document.getElementsByName('drankvarmindre')[0].value + ' ml.\n';}else{var drankvar = '';};
		/*ovrigplanering*/if (document.getElementsByName('ovrigplanering')[0].value == ''){var ovrigplanering = '';}else{var ovrigplanering = document.getElementsByName('ovrigplanering')[0].value;if(ovrigplanering.charAt(ovrigplanering.length - 1) == '.'){var ovrigplanering = ovrigplanering.slice(0, - 1);};var ovrigplanering = ovrigplanering.storbokstav() + '.\n';};
		var planering = (besok + vctext + drankvar + ovrigplanering).slice(0, - 1);
//console.log(planering);
	/*Närstående kontaktad (kontakt)*/
		/*kontakt*/if (document.getElementsByName('nar')[0].checked){var kontakt = document.getElementById('nar').value;}else{var kontakt = '';};
//console.log(kontakt);
	/*Information, undervisning (info)*/
		if (document.getElementsByName('info')[0].checked){
			/*infofolder*/if (document.getElementsByName('infofolder')[0].checked){var infofolder = ' Information vid hemgång folder,';}else{var infofolder = '';};
			/*infovc*/if (document.getElementsByName('infovc')[0].checked){var infovc = ' VC-remiss,';}else{var infovc = '';};
			/*infosjukintyg*/if (document.getElementsByName('infosjukintyg')[0].checked){var infosjukintyg = ' sjukintyg,';}else{var infosjukintyg = '';};
			/*inforeseintyg*/if (document.getElementsByName('inforeseintyg').checked){var inforeseintyg = ' intyg för sjukresa,';}else{var inforeseintyg = '';};
			/*infortg*/if (document.getElementsByName('infortg')[0].checked){var infortg = ' RTG-bilder,';}else{var infortg = '';};
			/*infofragmin*/if (document.getElementsByName('infofragmin')[0].checked){var infofragmin = ' Fragmin folder samt informerats hur det administreras,';}else{var infofragmin = '';};
			/*draninformation*/if (document.getElementsByName('draninformation')[0].checked){var draninformation = ' Dränage hanterings information,';}else{var draninformation = '';};
			/*fysioterapeut*/if (document.getElementsByName('fysioterapeut')[0].checked){var fysioterapeut = ' Fysioterapeut information,';}else{var fysioterapeut = '';};
			/*infoovrig*/if (document.getElementsByName('infoovrig')[0].value == ''){var infoovrig = '';}else{var infoovrig = document.getElementsByName('infoovrig')[0].value;if(infoovrig.charAt(infoovrig.length - 1) == '.'){var infoovrig = infoovrig.slice(0, - 1);};var infoovrig = ' ' + infoovrig + '.';};
			var info = infofolder + infovc + infosjukintyg + inforeseintyg + infortg + infofragmin + draninformation + fysioterapeut + infoovrig;
			if(!info == ''){var info = 'Patient får med sig,' + info;var info = info.substring(0, info.length-1) + '.';if(!embo == ''){var embomellan = '\n';};};
			/*embo*/if(!isHidden(document.getElementsByClassName('embo')[0])){if (document.getElementsByName('embo')[0].checked){var embo = 'Träffat emboliseringsläkare innan hemgång.';}else{var embo = 'Har inte träffat emboliseringsläkare innan hemgång.';};if(!info == ''){var embo = '\n' + embo;};}else{var embo = '';};
			var info = info + embo;
		}else{var info = ''}
//console.log(info);
	/*Läkemedelshantering (lkminfo)*/
		if (document.getElementsByName('lkm')[0].checked){var lkminfo = document.getElementsByName('lkminfo')[0].value;if(lkminfo.charAt(lkminfo.length - 1) == '.'){var lkminfo = lkminfo.slice(0, - 1);};var lkminfo = 'Patient får med sig följade läkemedel; ' + lkminfo + '.';}else{var lkminfo = '';};
//console.log(lkminfo);
	/*Samordning (sammordning)*/
		/*trnsp*/if (document.getElementsByName('trnsp')[0].checked){var trnsp = document.getElementById('trnsptyp').value + ' beställd.';}else{var trnsp = '';};
		/*rapport*/if (document.getElementsByName('flytt')[0].checked){if (document.getElementsByName('ssksjukhus')[0].value == ''){var ssksjukhus = '';}else{var ssksjukhus = ' ' + document.getElementsByName('ssksjukhus')[0].value;};if (document.getElementsByName('sskavd')[0].value == ''){var sskavd = '';}else{var sskavd = ' avdelning ' + document.getElementsByName('sskavd')[0].value;};if (document.getElementsByName('ssk')[0].checked){if (document.getElementsByName('ssknamn')[0].value == ''){var ssknamn = '';}else{var ssknamn = ' ' + document.getElementsByName('ssknamn')[0].value;};if (document.getElementsByName('ssktel')[0].value == ''){var ssktel = '';}else{var ssktel = ', telefonnummer till sjuksköterska: ' + document.getElementsByName('ssktel')[0].value;};if (document.getElementsByName('trnsp')[0].checked){var rapportnewline = '\n';}else{var rapportnewline = '';};var rapport = rapportnewline + 'Rapporterat till ansvarig sjuksköterska' + ssknamn + sskavd + ssksjukhus + ssktel + '.';}else{var rapport = '';};if(sskavd == '' || ssksjukhus == ''){var utskrivinfo = '.';}else{var utskrivinfo = ':' + sskavd + ssksjukhus;var planering = planering + '\nFlyttas till' + sskavd + ssksjukhus + ' för fortsatt vård.';};var utskriv = 'Annat sjukhus/avdelning' + utskrivinfo;}else{var utskriv = 'Hemmet.';var rapport = ''};
		var sammordning = trnsp + rapport;
//console.log(sammordning);
	/*Hjälpmedel (hjalpmedel)*/
		if (document.getElementsByName('hjalpmed')[0].checked){var hjalpmedel = document.getElementsByName('hjalpmedinfo')[0].value;var hjalpmedel = hjalpmedel.storbokstav();}else{var hjalpmedel = ''};
//console.log(hjalpmedel);
	/*Utskriven från slutenvård till (utskriv)*/
//console.log(utskriv);
	/*Sårremiss (sarremiss)*/
		var sarremiss = sarremisswrite();
//console.log(sarremiss;
	/*Dränremiss (dranremiss)*/
		var dranremiss = dranremisswrite();
//console.log(dranremiss);
	/*Skapar textrutor*/
	var inforuta = document.createElement('div');
		inforuta.setAttribute('class', 'information');
		inforuta.appendChild(createinfo('1. Klicka i textrutorna 1 gång, text markeras och kopieras automatiskt.'));
 		inforuta.appendChild(createinfo('(Om inte använd kortkommando "Ctrl + C", för att kopiera texten)'));
		inforuta.appendChild(createinfo('2. Gå in i Melior under Slutanteckning och aktuell underrubrik.'));
		inforuta.appendChild(createinfo('3. Klicka i skrivrutan så att man kan skriva där.'));
		inforuta.appendChild(createinfo('4. Använd kortkomando "Ctrl + V", texten klistras nu in i Melior.'));
	resultelement.appendChild(inforuta);
	resultelement.appendChild(createtextarea('Vårdhistoria', vardhistoria));
	resultelement.appendChild(createtextarea('Inskriven i slutenvård pga', inskriven));
	resultelement.appendChild(createtextarea('Kunskap, utveckling', kunskap));
	resultelement.appendChild(createtextarea('Andning/cirkulation', cirkulation));
	resultelement.appendChild(createtextarea('Nutrition', nutrition));
	resultelement.appendChild(createtextarea('Elimination', elemination));
	resultelement.appendChild(createtextarea('Hud, vävnad', hud));
	resultelement.appendChild(createtextarea('Aktivitet', aktivitet));
	resultelement.appendChild(createtextarea('Sömn', somn));
	resultelement.appendChild(createtextarea('Smärta, sinnesintryck', smarta));
	resultelement.appendChild(createtextarea('Psykosocialt', psykosocialt));
	resultelement.appendChild(createtextarea('Planering', planering));
	resultelement.appendChild(createtextarea('Närstående kontaktad', kontakt));
	resultelement.appendChild(createtextarea('Information, undervisning', info));
	resultelement.appendChild(createtextarea('Läkemedelshantering', lkminfo));
	resultelement.appendChild(createtextarea('Samordning', sammordning));
	resultelement.appendChild(createtextarea('Hjälpmedel', hjalpmedel));
	resultelement.appendChild(createtextarea('Utskriven från slutenvård till', utskriv));
	resultelement.appendChild(createtextarea('Sårremiss', sarremiss));
	resultelement.appendChild(createtextarea('Dränremiss', dranremiss));

	/*All info i samma ruta*//*var t1 = '\n\n';var t2 = '\n';var fardigtext = '';var radraknare = 0;var allinfo = 'VÅRDHISTORIA' + t2 + vardhistoria + t1 + 'INSKRIVEN I SLUTENVÅRD PGA' + t2 + inskriven + t1 + 'KUNSKAP, UTVECKLING' + t2 + kunskap + t1 + 'ANDNING/CIRKULATION' + t2 + cirkulation + t1 + 'NUTRITION' + t2 + nutrition + t1 + 'ELIMINATION' + t2 + elemination + t1 + 'HUD, VÄVNAD' + t2 + hud + t1 + 'AKTIVITET' + t2 + aktivitet + t1 + 'SÖMN' + t2 + somn + t1 + 'SMÄRTA, SINNESINTRYCK' + t2 + smarta + t1 + 'PSYKOSOCIALT' + t2 + psykosocialt + t1 + 'PLANERING' + t2 + planering + t1 + 'NÄRSTÅENDE KONTAKTAD' + t2 + kontakt + t1 + 'INFORMATION, UNDERVISNING' + t2 + info + t1 + 'LÄKEMEDELSHANTERING' + t2 + lkminfo + t1 + 'SAMORDNING' + t2 + sammordning + t1 + 'HJÄLPMEDEL' + t2 + hjalpmedel + t1 + 'UTSKRIVEN FRÅN SLUTENVÅRD TILL' + t2 + utskriv;var antalrader = allinfo.split('\n');for (var a = antalrader.length - 1; a >= 0; a--) {var radraknare = radraknare + 1;if(antalrader[a].length == 0){}else{var radraknare = radraknare + Math.ceil(antalrader[a].length/70) - 1;};if(radraknare >= 29){resultelement.appendChild(createtextarea('Test all info i samma ruta', fardigtext));var fardigtext = antalrader[a];var radraknare = 0;}else{var fardigtext = antalrader[a] + '\n' + fardigtext;};};*/

	window.scroll(0,findPos(document.getElementsByName('start')[0]));
};

var config = {
	omrade: ['Avdelning 16', 'Avdelning 349A', 'Annat'],
	omradeeng: ['avd16', 'avd349a', 'annat'],
	sarkontroll: {
		avd16:7,
		avd349a:5,
		annat:7
	},
	lakare: {
		avd16:[
			'Ada Kapetanovic',
			'Adad Baranto',
			'Ahmad Booshi',
			'Aina Danielsson',
			'Albert Modin',
			'Albin Jorméus',
			'Alicja Bojan',
			'Amanda Lahti',
			'Anders Jönsson',
			'Andreas Runge',
			'Anna Rubensson',
			'Ann-Charlott Söderpalm',
			'Anton Olsson',
			'Aras Yahyai',
			'Arun Patel',
			'Baldur Thorolfsson',
			'Bengt Eriksson',
			'Bertil Romanus',
			'Birgitta Gatenholm',
			'Björn Gunterberg',
			'Camilla Bergh',
			'Carl Bergdahl',
			'Carl Ekholm',
			'Carl Lundstam',
			'Carl Zetterberg',
			'Cecilia Olofsson',
			'Christer Strömberg',
			'Christina Berger',
			'Christofer Ståhlgren',
			'Claes Olsen',
			'Daniel Jonsson',
			'David Hengst',
			'David Wennergren',
			'Ebba Fridh',
			'Elias Thor Gudbrandsson',
			'Erica Axelsson',
			'Erik Malchau',
			'Erik Sjöstedt',
			'Eythór Jónsson',
			'Filip Nilsson',
			'Frank Eisenblätter',
			'Gabriella Berg',
			'Georgios Tsikandylakis',
			'Geza Wolf',
			'Giorgios Chatziagorou',
			'Goran Puretic',
			'Hanna Over',
			'Helena Brisby',
			'Henrik Hedelin',
			'Henrik Malchau',
			'Inger Malchau',
			'Irshad Mangal',
			'Jan Lidström',
			'Janos Solyom',
			'Jitka Zapletalóva',
			'Joel Beck',
			'Johan dAubigné',
			'Johan Fintland',
			'Johan Hallström',
			'Johan Kärrholm',
			'Johan Larsson',
			'Johan Sampson',
			'Jón Karlsson',
			'Jonas Carlsten',
			'Jonas Thanner',
			'Jorma Styf',
			'Kajsa Rennerfelt',
			'Kamal Kadum',
			'Karin Eskilsson',
			'Karin Frennered',
			'Karin Steen',
			'Katarina Silverplats',
			'Katarzyna Kulbacka-Ortiz',
			'Klas Halldin',
			'Knut Nordenström',
			'Kristian Samuelsson',
			'Kristin Bengtsson',
			'Kristina Rudin',
			'Lars Wramdemark',
			'Lisa Johansson',
			'Louise Bexander',
			'Lukas Barnisin',
			'Magdalena Sjöstrand',
			'Malin Carling',
			'Martin Paulsson',
			'Martin Ålund',
			'Mats Caap',
			'Maziar Mohaddes',
			'Michael Möller',
			'Michael Ullman',
			'Michael Ågren',
			'Mikael Dalén',
			'Mikael Sundfelt',
			'Mina Zafar',
			'Mohammed Abushal',
			'Moritz Knigge',
			'Neel Desai',
			'Nicklas Fagerberg',
			'Nicklas Olsson',
			'Nikolaos Papadimitriou',
			'Ola Rolfson',
			'Olle Bunketorp',
			'Olle Lansinger',
			'Olof Westin',
			'Pavel Antonsson',
			'Pavel Neumann',
			'Per Hulenvik',
			'Per Wessberg',
			'Per-Erik Johansson',
			'Peter Bergh',
			'Peter Grant',
			'Peter Kores',
			'Peter Nyberg',
			'Peter Söderman',
			'Ragnar Jerre',
			'Rickard Brånemark',
			'Rickard Sundberg',
			'Robért Mar Jóhansson',
			'Roberto Doria-Medina',
			'Rune Hedlund',
			'Sanna Neselius',
			'Sara Brandt Knutsson',
			'Sigvard Eriksson',
			'Simon Vikström',
			'Sindre Gunleiksrud',
			'Sofia Lindorsson',
			'Stina Stjernström',
			'Sven Stener',
			'Ted Eneqvist',
			'Tero Laine',
			'Thom Magnusson',
			'Thomas Stålarm',
			'Thorkell Snaebjörnsson',
			'Torsten Jonsson',
			'Tuuli Saari',
			'Vojtech Capek',
			'Yaser Tafnkji M',
			'Åke Blixt',
			'Örjan Berlin'
		],
		avd349a:[
			'Bjarne Melvås',
			'Erik Rådbo',
			'Helena Ohlson',
			'Jennifer Park',
			'Johan Tranberg'
		],
		annat:['']
	},
	ingrepp: {
		avd16:[
			'Amputation',
			'Apperius',
			'Bakre upprätning',
			'Biopsi',
			'Dekompression',
			'Diskektomi',
			'EMBO',
			'Excision',
			'Extirpation',
			'Fusion & fixation',
			'Fitbone',
			'Fixation & fusion',
			'Mutarsprotes',
			'Osteotomi',
			'Sår revision'
		],
		avd349a:[
			'Högersidig hemikolektomi',
			'Vänstersidig hemikolektomi',
			'Hög främre resektion',
			'Låg främre resektion',
			'Rektumextirpation',
			'Rektumamputation',
			'Nedläggning av stomi',
			'Total kolektomi'
		],
		annat:['']
	},
	orsak: {
		avd16:[
			'Diskbråck',
			'Embolisering',
			'Fraktur',
			'Idiopatisk scolios',
			'Kotkompression',
			'Lipom',
			'Metastas',
			'Misstänkt cauda equina',
			'Mjukdelstumör',
			'Neuromuskulär scolios',
			'Sarcom',
			'Scolios',
			'Skelettumör',
			'Smärtlindring & mobilisering',
			'Spinalstenos'
		],
		avd349a:[
			'Ulcerös kolit',
			'Crohns sjukdom',
			'Mikroskopiska koliter',
			'Ileostomi',
			'Kolostomi',
			'Divertikulit',
			'Kolondivertiklar',
			'Obstiperad'
		],
		annat:['']
	}
};
