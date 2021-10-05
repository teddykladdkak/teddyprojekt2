window.onscroll = function() {
	if(window.pageYOffset == 0){
		document.getElementById('meny').removeAttribute('class');
	}else{
		document.getElementById('meny').setAttribute('class', 'floating');
	};
};
function visameny(){
	document.getElementById('meny').setAttribute('style', 'display: block;');
	document.getElementById('mobilemenyicon').setAttribute('onclick', 'doljmeny();');
	scrollTop();
};
function doljmeny(){
	document.getElementById('meny').removeAttribute('style');
	document.getElementById('mobilemenyicon').setAttribute('onclick', 'visameny();');
	scrollTop();
};
function scrollTop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
function internlink(element, event){
	event.preventDefault();
	window.location.href = element.getAttribute('href');
};
function dyslexie(){
	var local = localStorage.getItem('dyslexie');
	if(!local || local == 'nej'){
		localStorage.setItem('dyslexie', 'ja');
		adddyslexie();
	}else if(local == 'ja'){
		localStorage.setItem('dyslexie', 'nej');
		location.reload();
	}else{
		console.log('Dyslexie(), vill inte fungera.');
	};
};
function adddyslexie(){
	var head = document.getElementsByTagName('head')[0];
		var contelem = document.createElement('link');
			contelem.setAttribute('rel', 'stylesheet');
			contelem.setAttribute('href', 'css/dyslexie/dyslexie.css');
		head.appendChild(contelem);
};
function startdyslexie(){
	var local = localStorage.getItem('dyslexie');
	if(!local || local == 'nej'){}else if(local == 'ja'){
		adddyslexie();
	}else{
		console.log('Dyslexie(), vill inte ladda.');
	};
};
startdyslexie();