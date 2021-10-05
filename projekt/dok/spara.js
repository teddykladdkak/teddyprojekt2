function sparaInsallningar(){
	var allData = {};
	for (var i = idToSave.length - 1; i >= 0; i--) {
		var informationFromLocal = localStorage.getItem(idToSave[i]);
		if(!informationFromLocal){}else{
			allData[idToSave[i]] = JSON.parse(informationFromLocal);
		};
	};
	var datumObj = getDate();
	var filename = 'AD_Sparfil_' + datumObj.datum + '_(' + datumObj.tid.replace(':', '-') + ').json';
	var pom = document.createElement('a');
		pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(allData, null, ' ')));
		pom.setAttribute('download', filename);
	if (document.createEvent) {
		var event = document.createEvent('MouseEvents');
			event.initEvent('click', true, true);
		pom.dispatchEvent(event);
	}else {
		pom.click();
	};
};
sparaInsallningar();
document.getElementById('sparaInstallningar').setAttribute('onclick', 'sparaInsallningar();');