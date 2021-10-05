var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
var recognition;
var idtopaste = '';
function activateSpeechToText(){
	var installCheckbox = document.getElementById('speech');
		installCheckbox.setAttribute('onclick', 'activateSpeechToText();');
	if(!installCheckbox.checked){
		removeButtons();
		addSettingButton();
		addInformationButton();
		notification('"Tal till text" är borttagen.', 'green');
	}else{
		if (!('webkitSpeechRecognition' in window)) {
			notification('Tyvärr stödjer inte din webbläsare tal till text.', 'red');
		}else{
			var allhead = document.getElementsByClassName('elem');
			for (var i = allhead.length - 1; i >= 0; i--) {
				var tagid = allhead[i].getAttribute('id');
				if(tagid == 'aktuellt' || tagid == 'bedomning' || tagid == 'atgard' || tagid == 'uppfoljning') {
					var head = allhead[i].getElementsByTagName('h2')[0];
						var icon = makeSVG('0 0 352 512', 'M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z');
							icon.setAttribute('class', 'headbutton');
							icon.setAttribute('onclick', 'startSpeech(this, event, "' + allhead[i].getAttribute('id') + '");')
						head.appendChild(icon);
				};
			};
			recognition = new webkitSpeechRecognition();
			recognition.continuous = true;
			recognition.interimResults = true;

			recognition.onstart = function() {
				recognizing = true;
				// Visa att den lyssnar!
			};

			recognition.onerror = function(event) {
				if (event.error == 'no-speech') {
					ignore_onend = true;
				}
				if (event.error == 'audio-capture') {
					ignore_onend = true;
				}
				if (event.error == 'not-allowed') {
					if (event.timeStamp - start_timestamp < 100) {
					} else {
					}
					ignore_onend = true;
				}
			};

			recognition.onend = function() {
				recognizing = false;
				if (ignore_onend) {
					return;
				}
				if (!final_transcript) {
					return;
				}
				if (window.getSelection) {
					console.log(window.getSelection);
				}
			};

			recognition.onresult = function(event) {
				var interim_transcript = '';
				if (typeof(event.results) == 'undefined') {
					recognition.onend = null;
					recognition.stop();
					return;
				}
				console.log(event.results);
				var print = false;
				for (var i = event.resultIndex; i < event.results.length; ++i) {
					if (event.results[i].isFinal) {
						final_transcript += event.results[i][0].transcript;
						print = true;
					};
				};
				if(print){
					var textarea = document.getElementById(idtopaste).getElementsByTagName('textarea')[0]
					textarea.value = textarea.value + final_transcript;
					final_transcript = '';
				};
			};
			notification('"Tal till text" är aktiverad.', 'green');
		};
	};
};
function stopSpeech(element, event, id){
	recognition.stop();
	element.setAttribute('class', element.getAttribute('class').replace(' record', ''));
	element.setAttribute('onclick', 'startSpeech(this, event, "' + id + '")');
};
function startSpeech(element, event, id) {
	idtopaste = id;
	if (recognizing) {
		recognition.stop();
		return;
	}
	final_transcript = '';
	recognition.lang = 'sv-SE';
	recognition.start();
	ignore_onend = false;
	start_timestamp = event.timeStamp;
	element.setAttribute('class', element.getAttribute('class') + ' record');
	element.setAttribute('onclick', 'stopSpeech(this, event, "' + id + '")');
};
activateSpeechToText();