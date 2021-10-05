//Kontroll funktion (.ForceNumericOnly())
jQuery.fn.ForceNumericOnly =
	function() {
		return this.each(function() {
			$(this).keydown(function(e) {
				var key = e.charCode || e.keyCode || 0;
				// allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
				// home, end, period, and numpad decimal
				return (
					key == 8 ||
					key == 9 ||
					key == 46 ||
					key == 110 ||
					key == 190 ||
					(key >= 35 && key <= 40) ||
					(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105));
			});
		});
};
$(document).ready(function() {
	$('span.version').html($('head meta[name=generator]').attr('content').split(' ')[1]);
	$('.menu').click(function() {
		$('body').scrollTop(0);
	});
	$('nav ul li').click(function() {
		var elementtoshow = '#' + $(this).text().toLowerCase().replace("å", "a").replace("ä", "a").replace("ö", "o").replace(" ", "");
		if (elementtoshow == '#movicol') {
			$('#movicol img').attr('src', 'movicol.png');
		} else if (elementtoshow == '#karta') {
			$('#karta img').attr('src', 'karta-su-sahlgrenska_min.gif');
		} else if (elementtoshow == '#youtube') {
			$('#youtube').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/N-myaFNL0A0" frameborder="0" allowfullscreen></iframe><br/><iframe width="560" height="315" src="https://www.youtube.com/embed/YmhY4J_AZnQ" frameborder="0" allowfullscreen></iframe><br/><iframe width="560" height="315" src="https://www.youtube.com/embed/Q3DjYqjy9XU" frameborder="0" allowfullscreen></iframe><br/><iframe width="560" height="315" src="https://www.youtube.com/embed/b-0YgALgWT0" frameborder="0" allowfullscreen></iframe>');
		};
		$('.content > div:visible').fadeOut(function() {
			$(elementtoshow).fadeIn(function() {
				$('#menu').attr('checked', false);
			});
		});
		return false;
	});
	$('#dokumentation h2').click(function() {
		//$('#dokumentation span').fadeOut();
		$(this).next().fadeToggle();
		return false;
	});
	$('#dropptakt input[name=liter], #dropptakt input[name=time], #dropptakt input[name=volume], #dropptakt input[name=hormin]').ForceNumericOnly().change(function() {
		if ($('#dropptakt input[name=volume]:checked').val() == 'ml') {
			var l = $('#dropptakt input[name=liter]').val() / 1000;
		} else {
			var l = $('#dropptakt input[name=liter]').val();
		};
		if ($('#dropptakt input[name=hormin]:checked').val() == 'min') {
			var t = $('#dropptakt input[name=time]').val() / 60;
		} else {
			var t = $('#dropptakt input[name=time]').val();
		};
		if (l && t) {
			var droppimin = (((l * 1000) * 20) / (t * 60)).toFixed(0);
			$('#dropptakt .resultat').html('<p><b>Svar: ' + droppimin + ' dropp/min</b><br/><br/>(' + (droppimin / 4).toFixed(0) + ' dropp/15sek)</p>');
		} else {
			$('#dropptakt .resultat').html('');
		};
		$(window).scrollTop($(window).height());
	});
	$('#vas input').change(function() {
		var statments = ['ingen', 'lätt', 'lätt', 'måttlig', 'måttlig', 'medelsvår', 'medelsvår', 'svår', 'svår', 'outhärdlig', 'outhärdlig'];
		var number = $('#vas input[type=range]').val();
		$('#vas .resultat').html('<p>Patient klassar VAS: <b>' + number + '</b>.<br/>Enligt VAS har patient troligen <b>' + statments[number] + ' smärta</b>.</p>');
		/*$(window).scrollTop($(window).height());*/
		return false;
	});
	$('#fallrisk button').click(function() {
		var number = $('#fallrisk input[type=checkbox]:checked');
		if (number) {
			var kat = '';
			for (var i = number.length - 1; i >= 0; i--) {
				var oldkat = kat;
				var kat = '<li>' + $('#fallrisk label[for=' + number[i].name + ']').text() + '</li>' + oldkat;
			};
		};
		if (number.length >= 2) {
			var html = 'Enligt PM ingår patient under minst 2 kategorier. Patient bedöms för tillfället ha <b>Fallrisk!</b> Individuella åtgärder skall vidtas i enlighet med sida 8, Sveriges Kommuner och Landstings skrift; "Förebygg fall och fallskador i samband med vård". Ätgärder krävs i följande områden:<ul>' + kat + '</ul>';
		} else if (number.length == 1) {
			var html = 'Enligt PM uppfyller patient 1 kategori och detta medfar att patient bedöms som <b>fallriskbenägen</b>. Observation samt uppföljning av eventuella nyuppkommna faktorer senare under vårdtiden.';
		} else {
			var html = 'Enligt PM uppfyller patient inga kategorier och där av tolkas patient ej som fallriskbenägen. OBSERVERA att det främst är du som gör beslutet om eventuell risk finns.';
		}
		$('#fallrisk .resultat').html(html);
		$(window).scrollTop($(window).height());
		return false;
	});
	var avd = '';
	for (var i = avdelningar.length - 1; i >= 0; i--) {
		var avdold = avd;
		var avd = '<option value="' +
			'<p><b>' + avdelningar[i].Avd + ' - ' + avdelningar[i].Namn + '</b><br/><span>' + avdelningar[i].Strakfarg + '</span> stråket <span>' + avdelningar[i].Straknummer + '</span><br/>Målpunkt <span>' + avdelningar[i].Malpunkt + '</span><br/>Plan ' + avdelningar[i].Plan + '</p>' + '">' + avdelningar[i].Avd + ' - ' + avdelningar[i].Namn + '</option>' + avdold;
	};
	$('#karta select').html('<option value="">Välj avdelning</option>' + avd);
	$('#karta select').change(function() {
		$('#karta button:eq(0)').text('Markera plats');
		$('#karta img').attr('src', 'karta-su-sahlgrenska_min.gif');
		$('#karta .resultat').html($(this).val());
	});
	$('#karta button').click(function() {
		var wattodo = $(this).text();
		if (wattodo == '+') {
			var widthofimg = $('#karta img').width() + 20;
			$('#karta img').width(widthofimg);
		} else if (wattodo == '-') {
			var widthofimg = $('#karta img').width() - 20;
			$('#karta img').width(widthofimg);
		} else if (wattodo == 'Markera plats') {
			$(this).text('Ta bort markering');
			var farg = $('#karta .resultat span:eq(0)').text().replace("å", "a").replace("ä", "a").replace("ö", "o").toLowerCase();
			var nr = $('#karta .resultat span:eq(1)').text();
			var malpunkt = $('#karta .resultat span:eq(2)').text();
			if (malpunkt == "?") {
				var link = 'map_location/' + farg + '/karta-su-sahlgrenska-' + nr + '.gif';
			} else {
				var link = 'map_location/karta-su-sahlgrenska-' + malpunkt + '.gif';
			};
			$('#karta img').attr('src', link);
		} else {
			$(this).text('Markera plats');
			$('#karta img').attr('src', 'karta-su-sahlgrenska_min.gif');
		};

	});
	$('#mews input[name=temp], #nutrition input[name=temp]').keyup(function() {
		var $element = $(this).val();
		var lastChar = $element.substr($element.length - 1);
		if (lastChar == ",") {
			var string = $element.slice(0, -1);
			$(this).val(string);
		};
	});
	$('#mews input[name=temp], #nutrition input[name=temp]').keypress(function() {
		var $element = $(this).val();
		if ($element.length > 2) {
			return false;
		}
		if ($element.length > 1) {
			if ($element.indexOf(',') === -1) {
				var delat = $element.split('');
				$(this).val(delat[0] + delat[1] + ',');
			}
		}
	});
	$('#mews input').ForceNumericOnly();
	$('#mews button').click(function() {
		var inputs = $('#mews input');
		var selects = $('#mews select');
		var head = ["AF", "Puls", "Bltr", "Temp", "Urin", "CNS"];

		var af = inputs[0].value;
		var pox = inputs[1].value;
		var syrgas = selects[0].value;
		if (!pox) {} else {
			var poxcolor = '#2cff3b';
			var syrobs = false;
			if (pox <= 90 && syrgas == "ja") {
				var poxcolor = '#ff0000';
				var syrobs = true;
			} else if (pox <= 90) {
				var poxcolor = '#efff2c';
			};
			var pox = pox + '%';
		};
		var pls = inputs[2].value;
		var typpls = selects[1].value;
		var sysbltr = inputs[3].value;
		var diabltr = inputs[4].value;
		if (!sysbltr) {
			var bltrpaste = '';
		} else {
			var bltrpaste = sysbltr + '/' + diabltr;
		};
		var temp = inputs[5].value.replace(",", ".");
		var timurin = selects[2].value;
		var urincheck = inputs[6].value;
		if (!urincheck) {
			var urin = "";
			var urinnon = true;
		} else {
			var urin = (urincheck / timurin).toFixed(0);
			var urinnon = false;
		};
		var medvet = selects[3].value.split('|');

		if (!af) {
			var afp = 0;
		} else if (af <= 8) {
			var afp = 2;
		} else if (af >= 9 && af <= 14) {
			var afp = 0;
		} else if (af >= 15 && af <= 20) {
			var afp = 1;
		} else if (af >= 21 && af <= 29) {
			var afp = 2;
		} else if (af >= 30) {
			var afp = 3;
		};
		if (!pls) {
			var plsp = 0;
		} else if (pls <= 40) {
			var plsp = 2;
		} else if (pls >= 41 && pls <= 50) {
			var plsp = 1;
		} else if (pls >= 51 && pls <= 100) {
			var plsp = 0;
		} else if (pls >= 101 && pls <= 110) {
			var plsp = 1;
		} else if (pls >= 111 && pls <= 129) {
			var plsp = 2;
		} else if (pls >= 130) {
			var plsp = 3;
		};
		if (!sysbltr) {
			var sysbltrp = 0;
		} else if (sysbltr <= 70) {
			var sysbltrp = 3;
		} else if (sysbltr >= 71 && sysbltr <= 80) {
			var sysbltrp = 2;
		} else if (sysbltr >= 81 && sysbltr <= 100) {
			var sysbltrp = 1;
		} else if (sysbltr >= 101 && sysbltr <= 199) {
			var sysbltrp = 0;
		} else if (sysbltr >= 200) {
			var sysbltrp = 2;
		};
		if (!temp) {
			var tempp = 0;
		} else if (temp <= 35) {
			var tempp = 2;
		} else if (temp >= 35.1 && temp <= 36) {
			var tempp = 1;
		} else if (temp >= 36.1 && temp <= 38) {
			var tempp = 0;
		} else if (temp >= 38.1 && temp <= 38.5) {
			var tempp = 1;
		} else if (temp > 38.5) {
			var tempp = 2;
		};
		if (urinnon) {
			var urinp = 0;
			var urin = '';
		} else if (urin <= 0) {
			var urinp = 3;
		} else if (urin >= 1 && urin <= 40) {
			var urinp = 2;
		} else if (urin >= 41 && urin <= 80) {
			var urinp = 1;
		} else if (urin >= 81 && urin <= 149) {
			var urinp = 0;
		} else if (urin >= 150) {
			var urinp = 1;
		};

		var summ = parseInt(afp) + parseInt(plsp) + parseInt(sysbltrp) + parseInt(tempp) + parseInt(urinp) + parseInt(medvet[0]);
		var bgcolor = ['#2cff3b', '#efff2c', '#ffa52c', '#ff0000'];

		if (summ >= 0 && summ <= 1) {
			var summcolor = bgcolor[0];
		} else if (summ >= 2 && summ <= 3) {
			var summcolor = bgcolor[1];
		} else if (summ == 4 || afp == 3 || plsp == 3 || sysbltrp == 3 || tempp == 3 || urinp == 3 || medvet[0] == 3) {
			var summcolor = bgcolor[3];
		} else if (summ >= 5) {
			var summcolor = bgcolor[3];
			alert('Obs');
		};
		// MIG team förslag
		var mig = '';
		if (!urincheck || !temp || !sysbltr || !pls || !af || !pox) {} else {
			if (syrobs == true || af <= 8 || af >= 30 || pls <= 40 || pls >= 130 || sysbltr <= 90 || medvet[0] >= 2) {
				var mig = '<tr><td colspan="4" style="background-color:' + bgcolor[3] + ';">Kontakta MIG team?</td></tr>';
			};
		};

		$('#mews .resultat').html('<table><tr><th>Analys</th><th>Svar</th><th>Poäng</th><th>Kommentar</th></tr><tr style="background-color:' + bgcolor[afp] + '"><td>' + head[0] + '</td><td>' + af + '</td><td>' + afp + '</td><td style="background-color:' + poxcolor + ';">' + pox + '</td></tr><tr style="background-color:' + bgcolor[plsp] + '"><td>' + head[1] + '</td><td>' + pls + '</td><td>' + plsp + '</td><td>' + typpls + '</td></tr><tr style="background-color:' + bgcolor[sysbltrp] + '"><td>' + head[2] + '</td><td>' + bltrpaste + '</td><td>' + sysbltrp + '</td><td></td></tr><tr style="background-color:' + bgcolor[tempp] + '"><td>' + head[3] + '</td><td>' + temp.replace(".", ",") + '</td><td>' + tempp + '</td><td></td></tr><tr style="background-color:' + bgcolor[urinp] + '"><td>' + head[4] + '</td><td>' + urin + '</td><td>' + urinp + '</td><td></td></tr><tr style="background-color:' + bgcolor[medvet[0]] + '"><td>' + head[5] + '</td><td>' + medvet[1] + '</td><td>' + medvet[0] + '</td><td></td></tr><tr style="font-weight:bold;background-color:' + summcolor + ';"><td colspan="2">Summering:</td><td colspan="2">' + summ + '</td></tr>' + mig + '</table>');
		$(window).scrollTop($(window).height());
		return false;
	});
	$('#eda input[name=frag]').ForceNumericOnly().keyup(function() {
		var $element = $(this).val();
		var lastChar = $element.substr($element.length - 1)
		if (lastChar == ":") {
			var string = $element.slice(0, -1);
			$(this).val(string)
		};
	});
	$('#eda input[name=frag]').keypress(function() {
		var $element = $(this).val();
		if ($element.length > 4) {
			return false;
		}
		if ($element.length > 1) {
			if ($element.indexOf(':') === -1) {
				var delat = $element.split('');
				$(this).val(delat[0] + delat[1] + ':')
			}
		}
	});
	$('#eda input[name=frag]').change(function() {
		var $timefrag = $(this).val();
		//Kontroll funktion - Visar meddelande om avvikande tal
		if ($timefrag >= 24) {
			$('#eda input[name=draeda]').val('Fel tid');
			return false;
		} else if ($timefrag == '') {
			$('#eda input[name=draeda]').val('Skriv tid');
			return false;
		};
		//Auto text
		if ($timefrag.length == 1) {
			var $timefrag = $timefrag + '0:00';
			$(this).val($timefrag);
		} else if ($timefrag.length == 2) {
			var $timefrag = $timefrag + ':00';
			$(this).val($timefrag);
		} else if ($timefrag.length == 4) {
			var $timefrag = $timefrag + '0';
			$(this).val($timefrag);
		};

		var divided = $timefrag.split(":");
		if (parseInt(divided[0]) + 10 >= 24) {
			var timefordrag = '0' + ((parseInt(divided[0]) + 10) - 24);
		} else {
			var timefordrag = parseInt(divided[0]) + 10;
		}
		var timefordragout = timefordrag + ':' + divided[1];
		$('#eda input[name=draeda]').val(timefordragout);
	});
	$('#eda input[name=tideda]').ForceNumericOnly().keyup(function() {
		var $element = $(this).val();
		var lastChar = $element.substr($element.length - 1)
		if (lastChar == ":") {
			var string = $element.slice(0, -1);
			$(this).val(string)
		};
	});
	$('#eda input[name=tideda]').keypress(function() {
		var $element = $(this).val();
		if ($element.length > 4) {
			return false;
		}
		if ($element.length > 1) {
			if ($element.indexOf(':') === -1) {
				var delat = $element.split('');
				$(this).val(delat[0] + delat[1] + ':')
			}
		}
	});
	$('#eda input[name=tideda]').change(function() {
		var $timefrag = $(this).val();
		//Kontroll funktion - Visar meddelande om avvikande tal
		if ($timefrag >= 24) {
			$('#eda input[name=draeda]').val('Fel tid');
			return false;
		} else if ($timefrag == '') {
			$('#eda input[name=draeda]').val('Skriv tid');
			return false;
		};
		//Auto text
		if ($timefrag.length == 1) {
			var $timefrag = $timefrag + '0:00';
			$(this).val($timefrag);
		} else if ($timefrag.length == 2) {
			var $timefrag = $timefrag + ':00';
			$(this).val($timefrag);
		} else if ($timefrag.length == 4) {
			var $timefrag = $timefrag + '0';
			$(this).val($timefrag);
		};

		var divided = $timefrag.split(":");
		if (parseInt(divided[0]) <= 03) {
			var timefordrag = '0' + ((parseInt(divided[0]) + 6));
		} else if (parseInt(divided[0]) >= 18) {
			var timefordrag = '0' + ((parseInt(divided[0]) + 6) - 24);
		} else {
			var timefordrag = parseInt(divided[0]) + 6;
		};
		var timefordragout = timefordrag + ':' + divided[1];
		$('#eda input[name=drakad]').val(timefordragout);
		var andrakontroll = parseInt(timefordrag) + 2;
		if (andrakontroll >= 24) {
			var andrakontroll = andrakontroll - 24;
		};
		if (andrakontroll <= 9) {
			var andrakontroll = '0' + andrakontroll;
		};
		var tregjekontroll = parseInt(timefordrag) + 6;
		if (tregjekontroll >= 24) {
			var tregjekontroll = tregjekontroll - 24;
		};
		if (tregjekontroll <= 9) {
			var tregjekontroll = '0' + tregjekontroll;
		};
		$('#eda input[name=neuroeda]').val(timefordrag + ':00 | ' + andrakontroll + ':00 | ' + tregjekontroll + ':00');
	});
	$('#trycksar .pageone button').click(function() {
		var whattodo = $(this).text().toLowerCase();
		//$('#trycksar .pageone').fadeOut();
		if (whattodo == 'ja') {
			$('#trycksar .pageone').fadeOut(function() {
				var where = $('#trycksar .gradering img');
				for (var i = where.length - 1; i >= 0; i--) {
					var element = $('#trycksar .gradering img:eq(' + i + ')');
					var adress = 'tryck/' + element.attr('alt') + '.png';
					element.attr('src', adress);
				};
				$('#trycksar .gradering').fadeIn();
			});
		} else if (whattodo == 'nej') {
			//$('#trycksar .norton h1').fadeIn();
			$('#trycksar .pageone').fadeOut(function() {
				$('#trycksar .norton h1,#trycksar .norton span:nth-child(2)').fadeIn();
			});
		} else {
			console.log('Något har gått fel i trycksar funktionen!')
		};
	});
	$('#trycksar .gradering input').click(function() {
		$('#trycksar .gradering').fadeOut(function() {
			$('#trycksar .norton h1,#trycksar .norton span:nth-child(2)').fadeIn();
		});
	});
	$('#trycksar .norton input').click(function() {
		if ($(this).closest('span').next().length == 0) {
			var graderingorg = $('#trycksar .gradering input[name=gradering]:checked').val();
			var gradering = '<p>Trycksars klacifieras som nummer: ' + graderingorg + '</p>';
			if (!graderingorg) {
				var gradering = '';
			};
			var psyk = $('#trycksar .norton input[name=psyk]:checked').val();
			var aktiv = $('#trycksar .norton input[name=aktiv]:checked').val();
			var mov = $('#trycksar .norton input[name=mov]:checked').val();
			var mat = $('#trycksar .norton input[name=mat]:checked').val();
			var vtsk = $('#trycksar .norton input[name=vtsk]:checked').val();
			var inkont = $('#trycksar .norton input[name=inkont]:checked').val();
			var allm = $('#trycksar .norton input[name=allm]:checked').val();
			$('#trycksar .norton').fadeOut(function() {
				var riskanalys = parseInt(psyk) + parseInt(aktiv) + parseInt(mov) + parseInt(mat) + parseInt(vtsk) + parseInt(inkont) + parseInt(allm);
				if (riskanalys <= 20) {
					var analys = 'Patient har under 20 poäng vilket innebär att patient har <b>ökad risk för tryckskada</b>. Mycket aktiv trycksarsprofylax/skärpt totalomvårdnad.'
				} else {
					var analys = 'Patient är över 20 poäng och enligt Nortonskalan har patient inte ökad risk för tryckskada.'
				};
				$('#trycksar .resultat').html('<h1>Resultat</h1>' + gradering + '<p>Patient har ' + riskanalys + ' poäng, enligt Nortonskalan.<p></p>' + analys + '</p><button type="submit" onclick="borjaom()">Börja om</button>').fadeIn();
			});
		} else {
			$(this).closest('span').fadeOut(function() {
				$(this).next().fadeIn();
			});
		};
	});
	$('#preoprutin input[name=born]').ForceNumericOnly().keypress(function() {
		if ($(this).val().length >= 4) {
			return false;
		}
	});
	$('#preoprutin button').click(function() {
		var select = $('#preoprutin select').val().split('|');
		if (select[0] == "true") {
			var age = (new Date().getFullYear()) - $('#preoprutin input[name=born]').val();
			var frisk = select[1];
			var h = ['POX', 'HB TPK (1 mån)', 'PK APTT (1 mån)', 'Na K Krea (1 mån)', 'Asat Alat Alp Bili (1 mån)', 'SR CRP LPK (1 mån)', 'Blodgruppering BAS-test', 'Bladderscan', 'Nitur', 'EKG', 'MRSA?'];
			var ekg = ['Inget EKG', 'Inte äldre än 6 mån EKG', 'Inte äldre än 3 mån EKG']
			if (age < 60) {
				var textEKG = ekg[0];
			} else if (age >= 60 && frisk == 'frisk') {
				var textEKG = ekg[1];
			} else if (age >= 60 && frisk == 'sjuk') {
				var textEKG = ekg[2];
			}
			if (age < 65) {
				if (frisk == "frisk") {
					var text = ['Ja', 'Ja', 'Ja', 'Nej (Undantag Aperius)', 'Nej', 'Nej', 'Ja', 'Vid svårighet att kissa, misstänkt blåsstörning.', 'Vid miktionsproblem', textEKG, 'Utomlandsvård senaste 10 år = Odl'];
					var r = 'Under 65 och frisk';
				} else {
					var text = ['Ja', 'Ja', 'Ja', 'Ja', 'Ev. läk ord', 'Ev. läk ord', 'Ja', 'Vid svårighet att kissa, misstänkt blåsstörning.', 'Vid miktionsproblem', textEKG, 'Utomlandsvård senaste 10 år = Odl'];
					var r = 'Under 65 med annan typ av sjukdom'
				};
			} else if (age >= 65) {
				if (frisk == "frisk") {
					var text = ['Ja', 'Ja', 'Ja', 'Ja', 'Nej', 'Nej', 'Ja', 'Vid svårighet att kissa, misstänkt blåsstörning.', 'Vid miktionsproblem', textEKG, 'Utomlandsvård senaste 10 år = Odl'];
					var r = 'Över 65 och frisk'
				} else {
					var r = 'Över 65 med annan typ av sjukdom'
					var text = ['Ja', 'Ja', 'Ja', 'Ja', 'Ev. läk ord', 'Ev. läk ord', 'Ja', 'Vid svårighet att kissa, misstänkt blåsstörning.', 'Vid miktionsproblem', textEKG, 'Utomlandsvård senaste 10 år = Odl'];
				};
			} else {
				alert('Något har gått fel i Preop Rutin');
			};
			var table = '</table>';
			for (var i = h.length - 1; i >= 0; i--) {
				var oldtable = table;
				var table = '<tr><td>' + h[i] + '</td><td>' + text[i] + '</td></tr>' + oldtable;
			};
			var oldtable = table;
			var table = '<table><th colspan="2">' + r + '</th>' + oldtable;
			console.log(table);
			$('#preoprutin div.resultat').html(table);
			$(window).scrollTop($(window).height());
		};
	});
	$('#nutrition input, #nutrition select').ForceNumericOnly().bind("click change", function() {
		//bmr = Basal Metabolic Rate
		//kbmr = Harris Benedict Equation
		//bmi = Body mass index
		var cm = $('#nutrition input[name=cm]').val();
		var kg = $('#nutrition input[name=kg]').val();
		var ar = $('#nutrition input[name=ar]').val();
		var kon = $('#nutrition select[name=kon]').val();
		var aktiv = $('#nutrition select[name=aktiv]').val();
		var mager = $('#nutrition input[name=mager]').is(':checked');
		var temp = $('#nutrition input[name=temp]').val().replace(",", ".");
		var peros = $('#nutrition input[name=peros]').val();
		var inflkm = $('#nutrition input[name=inflkm]').val();
		var urinmangd = $('#nutrition input[name=urinmangd]').val();
		if (!cm || !kg || !ar || !kon || !aktiv || !temp) {
			$('#nutrition .resultat').html('')
		} else {
			if (kon == 'man') {
				var bmr = (66.4730 + kg * 13.7516 + cm * 5.0033 - ar * 6.7550).toFixed(0);
			} else if (kon == 'kvinna') {
				var bmr = (655.0955 + kg * 9.5634 + cm * 1.8496 - ar * 4.6756).toFixed(0);
				//var bmr = (655+(9.6*kg)+(1.8*cm)-(4.7*ar)).toFixed(0);
			} else {
				console.log('Något gick fel i val av kön');
			}
			var kbmr = (parseInt(bmr) + (bmr * (aktiv / 100))).toFixed(0);
			if (mager) {
				var kbmr = (parseInt(kbmr) + (bmr * 0.1)).toFixed(0);
			};
			if (ar >= 18 && ar <= 30) {
				var kbmr = (parseInt(kbmr) + (bmr * 0.1)).toFixed(0);
			} else if (ar >= 70) {
				var kbmr = (parseInt(kbmr) - (bmr * 0.1)).toFixed(0);
			};
			var feber = (parseInt(temp) - 37).toFixed(0);
			if (feber >= 1) {
				var kbmr = (parseInt(kbmr) + (parseInt(bmr) * (0.1 * feber))).toFixed(0);
				var graderfeber = feber;
			}else{var graderfeber = 0};

			var bmi = (kg / ((cm / 100) * (cm / 100))).toFixed(1);
			if (ar >= 19) {
				if (bmi <= 16.4) {
					var bmiresult = 'Kraftig undervikt';
				} else if (bmi >= 16.5 && bmi <= 18.4) {
					var bmiresult = 'Undervikt';
				} else if (bmi >= 18.5 && bmi <= 24.9) {
					var bmiresult = 'Normal';
				} else if (bmi >= 25 && bmi <= 29.9) {
					var bmiresult = 'Övervikt';
				} else if (bmi >= 30 && bmi <= 34.9) {
					var bmiresult = 'Övervikt klass 1';
				} else if (bmi >= 35 && bmi <= 39.9) {
					var bmiresult = 'Övervikt klass 2';
				} else if (bmi >= 40) {
					var bmiresult = 'Övervikt klass 3';
				};
			} else {
				var bmiresult = 'BMI är gjord för åldrar över 19 år. Var god se <a href="http://www.who.int/growthref/who2007_bmi_for_age/en/index.html">WHO referenser</a>';
			};
			if (kg <= 10) {
				var vtsk = 100 * kg;
			} else if (kg >= 11 && kg <= 20) {
				var minuskg = kg - 10;
				var vtsk = (minuskg * 50) + 1000;
			} else if (kg > 20) {
				var minuskg = kg - 20;
				var vtsk = (minuskg * 20) + 1500;
			}
			var vtskdag = (vtsk / 24).toFixed(0);
			var perispiratio = (12*kg)+(graderfeber*250)+200;
			if (!peros || !inflkm || !urinmangd) {
				var vtskebalans = '';
			}else{
				var vtskebalans = (parseInt(peros) + parseInt(inflkm) - parseInt(urinmangd) - parseInt(perispiratio));
				var sign = "";	if (vtskebalans > 0) {var sign = "+";};
				var vtskebalanshtml = '<tr><td>Vätskebalans</td><td>' + sign + vtskebalans + ' ml</td></tr>';
			};
			$('#nutrition .resultat').html('<table><tbody><tr><td>BMR</td><td>' + bmr + ' kcal/dygn</td></tr><tr><td>KBMR</td><td>' + kbmr + ' kcal/dygn</td></tr><tr><td>BMI</td><td>' + bmi + '</td></tr><tr><td>BMI status</td><td>' + bmiresult + '</td><tr><td rowspan="2">Vätskebehov</td><td>' + vtsk + ' ml/dag</td></tr><tr><td>' + vtskdag + ' ml/h</td></tr><tr><td>Perspiratio</td><td>'+perispiratio+' ml/dygn</td></tr>'+vtskebalanshtml+'</tbody></table><p>BMR = Basal Metabolic Rate | KBMR = Korrigering för be-räknat behov (BMR + Energibehovet) | BMI = Body Mass Index</p>');
			$(window).scrollTop($(window).height());
		};
	});
	$('#kcalcal input[name=antal]').ForceNumericOnly();
	$('#kcalcal select').change(function() {
		var text = $(this).find('option:selected').text();
		var kcal = $(this).val().split('|');
		if ($(this).attr('name') == 'mat') {
			var $findoption = $('#kcalcal select[name=mellan] option:selected');
		} else if ($(this).attr('name') == 'mellan') {
			var $findoption = $('#kcalcal select[name=mat] option:selected');
		} else {
			var $findoption = '';
		};
		if ($findoption.val() == "") {} else {
				$findoption.removeAttr('selected');
		};
		$('#kcalcal input[name=antal]').val('');
		$('#kcalcal span').attr('placeholder', kcal[0]+'|'+kcal[1]+'|'+text)
		$('#kcalcal span').html(kcal[0]);
	});
	$('#kcalcal button[type=submit]').click(function() {
		var $input = $('#kcalcal input[name=antal]').val();
		if ($input == "") {} else {
			var $enhetandkcalandname = $('#kcalcal span').attr('placeholder').split('|');
			var sammankcal = $input * $enhetandkcalandname[1];
			console.log(sammankcal);
			$('#kcalcal table tbody').append('<tr><td>' + $enhetandkcalandname[2] + ' ('+$input+$enhetandkcalandname[0]+')</td><td>' + sammankcal + '</td><td><button>Delete</button></td></tr>');
			$('#kcalcal .resultat table tbody button').click(function() {
				$(this).parent().parent().remove();
				raknakcal();
			});
		};
		raknakcal();
	});
	/*$('#losenord input[type=checkbox]').click(function() {
		Dator/ELVIS
		Det nya lösenordet måste uppfylla följande krav:
			• minst 7 tecken långt
			• inte identiskt med något av dina 24 senaste lösenord
			• inte har ändrats de senaste 24 timmarna
			• inte samma som ditt namn eller inloggningsnamn
			• lösenordet måste uppfylla minst tre av nedan fyra kriterier:
				- innehålla stora bokstäver (versaler) i alfabetet (A-Z)
				- innehålla små bokstäver (gemener) i alfabetet (a-z)
				- innehålla utökat tecken (t.ex. kommatecken och dollartecken)
				- innehålla minst en siffra (0-9)
		var $pwelement = $('#losenord input[name=psw]');
		var info = $pwelement.val();
		console.log(info);
		if ($(this).is(':checked')) {
			var change = 'text';
		}else{
			var change = 'password';
		};
		$pwelement.parent().html('<input type="'+change+'" name="psw" />');
		$('#losenord input[name=psw]').val(info);
	});*/
	$('#vatskefordelning select, #vatskefordelning input').change(function() {
		var konstatus = $('#vatskefordelning select').val();
		var kgvtsk = $('#vatskefordelning input[name=kg]').val();
		if (konstatus && kgvtsk) {
			var utrak = konstatus * kgvtsk;
			$('#vatskefordelning .resultat').html('<h2>Resultat</h2><p><ul><li>'+((utrak*12)/1000).toFixed(0)+' l vätska i kroppen (60%)</li><li>'+((utrak*8)/1000).toFixed(0)+' l vätska finns i cellerna (40%)</li><li>'+((utrak*4)/1000).toFixed(0)+' l vätska i kroppen utanför cellerna (20%)</li><ul><li>'+((utrak*3)/1000).toFixed(0)+' l vävnadsvätska mellan celler (15%)</li><li>'+(utrak/1000).toFixed(0)+' l blod (5%)</li></ul></ul></p>'+'<table border="1"><tr><td>Blödningsmängd (ml)</td><td>Stadie & symtom</td></tr><tr><td>' + (utrak*0.1).toFixed(0)+'-'+(utrak*0.15).toFixed(0)+'</td><td><b>Stadium 1</b><br/>Blodtryck, puls- och andningsfrekvens förblir normala.</td></tr><tr><td>'+(utrak*0.15).toFixed(0)+'-'+(utrak*0.3).toFixed(0)+'</td><td><b>Stadium 2</b><br/>Oftast noteras lätt ångest eller oro och en ökad andningsfrekvens till ca 20-30/min. Blodtrycket kan vara normalt eller lätt sänkt, pulsen har ökat till > 100/min. Huden perifert är sval och blek.</td></tr><tr><td>'+(utrak*0.3).toFixed(0)+'-'+(utrak*0.4).toFixed(0)+'</td><td><b>Stadium 3</b><br/>Det ger en markerad hypovolemi som inte kan kompenseras genom en redistribution av blodflöden och en mobilisering av extravaskulära vätskor till blodbanan. Den skadades medvetandegrad är nu påtagligt påverkad, pulsen är snabb och svag. Blodtrycket är < 90 mm Hg och extremiteter är kalla och bleka.</td></tr><tr><td>'+(utrak*0.4).toFixed(0)+' eller mer</td><td><b>Stadium 4</b><br/>Livshotande blödning. Blodtryck kan vara omätbara eller så kan endast karotispulsen kännas svag och snabb. Pulsen är över 140, den skadade ter sig letargisk.</td></tr></table>');
		};
	});
});

function borjaom() {
	$('#trycksar .resultat').fadeOut(function() {
		$('#trycksar .norton h1, #trycksar .norton span').fadeOut();
		$('#trycksar input[type=radio]').removeAttr('checked');
		$('#trycksar .pageone, #trycksar .norton').fadeIn();
	});
};

function raknakcal() {
	var alladded = $('#kcalcal table tbody tr');
	var summ = 0;
	for (var i = alladded.length - 1; i >= 0; i--) {
		var number = $(alladded[i]).find('td:nth-child(2)').text();
		var summ = parseInt(number) + parseInt(summ);
	};
	$('#kcalcal table tfoot tr td:nth-child(2)').html(summ);
};