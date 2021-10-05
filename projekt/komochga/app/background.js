// this is the background code...

// listen for our browerAction to be clicked
/*chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, {
		file: 'inject.js'
	});
});*/

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
	chrome.tabs.executeScript(tab.id, {
		file: 'inject.js'
	});
  }
})