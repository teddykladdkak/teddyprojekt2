(function(){
	var webappCache = window.applicationCache;
	
	function loaded()
	{
		var h2Title = document.querySelector("h2 a");
		var connectionStatus = ((navigator.onLine) ? 'online' : 'offline');
		
		h2Title.textContent = h2Title.textContent + " - currently: " + connectionStatus;
		document.title = document.title.replace(" | "," - currently: " + connectionStatus + " | ");
		
		switch(webappCache.status)
		{
			case 0:
				console.log("Cache status: Uncached");
				break;
			case 1:
				console.log("Cache status: Idle");
				break;
			case 2:
				console.log("Cache status: Checking");
				break;
			case 3:
				console.log("Cache status: Downloading");
				break;
			case 4:
				console.log("Cache status: Updateready");
				break;
			case 5:
				console.log("Cache status: Obsolete");
				break;
		}
	}
	function updateCache()
	{
		webappCache.swapCache();
		console.log("Cache has been updated due to a change found in the manifest");
	}
	function errorCache()
	{
		console.log("You're either offline or something has gone horribly wrong.");
	}

	window.addEventListener("load", loaded, false);
	webappCache.addEventListener("updateready", updateCache, false);
	webappCache.addEventListener("error", errorCache, false);
})();


function save(elementID) { var counterPage = document.getElementById(elementID); localStorage.setItem(elementID, counterPage.value); }
function count() { var kmtim = parseInt(document.getElementById("roadcounter-kmtim").value); var mil = parseInt(document.getElementById("roadcounter-mil").value); var km = parseInt(document.getElementById("roadcounter-km").value); if ( isNaN(mil) ) { var kmomil =  km; } else if ( isNaN(km) ) { var kmomil =  mil * 10; } else { alert("Anv\u00E4nd bara en av f\u00E4lten"); return false; } var timkvar = (kmomil / kmtim)*3600; if ( isNaN(timkvar) ) { alert("\u0044\u0075\u0020\u006D\u00E5\u0073\u0074\u0065\u0020\u0066\u0079\u006C\u006C\u0061\u0020\u0069\u0020\u0069\u006E\u0066\u006F\u0072\u006D\u0061\u0074\u0069\u006F\u006E\u0020\u0066\u00F6\u0072\u0020\u0061\u0074\u0074\u0020\u0074\u0069\u0064\u0065\u006E\u0020\u0073\u006B\u0061\u0020\u006B\u0075\u006E\u006E\u0061\u0020\u0072\u00E4\u006B\u006E\u0061\u0073\u0020\u0075\u0074"); return false; } else if ( isNaN(kmtim) ) { alert("\u0044\u0075\u0020\u006D\u00E5\u0073\u0074\u0065\u0020\u0066\u0079\u006C\u006C\u0061\u0020\u0069\u0020\u0069\u006E\u0066\u006F\u0072\u006D\u0061\u0074\u0069\u006F\u006E\u0020\u0066\u00F6\u0072\u0020\u0061\u0074\u0074\u0020\u0074\u0069\u0064\u0065\u006E\u0020\u0073\u006B\u0061\u0020\u006B\u0075\u006E\u006E\u0061\u0020\u0072\u00E4\u006B\u006E\u0061\u0073\u0020\u0075\u0074"); return false; } var countMinTime = timkvar; var countMinTimeH = Math.floor(countMinTime/3600); var countMinTimeMin = Math.floor(countMinTime/60)-(countMinTimeH*60); if (countMinTimeH == "0") { var countMinTimeHIf = ""; } else { var countMinTimeHIf = countMinTimeH + "h "; } var inMinTime = document.getElementById("roadcounter-resultat").value = countMinTimeHIf + countMinTimeMin + "min"; }
function blockMove() { event.preventDefault(); }