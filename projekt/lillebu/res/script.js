function scrollBottom(id) {
	var objDiv = document.getElementById(id);
		objDiv.scrollTop = objDiv.scrollHeight;
}
function addmap() {
	/*https://github.com/knreise/L.TileLayer.Kartverket*/
	var mymap = L.map('mapid').setView([59.481000, 8.991000], 13);
    var i, layer;
    var layers = L.tileLayer.kartverket.getLayers();
    var baseLayers = {};
    for (i = 0; i < layers.length; i++) {
        layer = layers[i];
        baseLayers[layer] = L.tileLayer.kartverket(layer);
    }
    baseLayers[layers[1]].addTo(mymap);
    L.control.layers(baseLayers).addTo(mymap);
    var LeafIcon = L.Icon.extend({
		options: {
			shadowUrl: '',
			iconSize:     [40, 40],
			shadowSize:   [0, 0],
			iconAnchor:   [20, 20],
			shadowAnchor: [0, 0],
			popupAnchor:  [0, -18]
		}
	});	
	var homesolid = new LeafIcon({iconUrl: 'res/karta/home-solid.png'}),
		mapmarkeraltsolid = new LeafIcon({iconUrl: 'res/karta/map-marker-alt-solid.png'}),
		mapsignssolid = new LeafIcon({iconUrl: 'res/karta/map-signs-solid.png'}),
		routesolid = new LeafIcon({iconUrl: 'res/karta/route-solid.png'}),
		runningsolid = new LeafIcon({iconUrl: 'res/karta/running-solid.png'}),
		parkingsolid = new LeafIcon({iconUrl: 'res/karta/parking-solid.png'});
	var lillebu = L.marker([59.487372, 8.982329], {icon: homesolid}).addTo(mymap);
		lillebu.bindPopup("Lillebu.");
	var parkering = L.marker([59.477125, 9.010378], {icon: parkingsolid}).addTo(mymap);
		parkering.bindPopup("Bautastenen Jönnbu parkering.");
	var klintokleiva = L.marker([59.483932, 9.002295], {icon: mapsignssolid}).addTo(mymap);
		klintokleiva.bindPopup("Vägvisaren i Toppen av Klintokleiva.");
	var sommarstigen = L.marker([59.484389, 8.996121], {icon: routesolid}).addTo(mymap);
		sommarstigen.bindPopup("Stället där man viker av från Rödmärkta leden till sommarstigen.");
	var hoppesten = L.marker([59.485448, 8.993446], {icon: runningsolid}).addTo(mymap);
		hoppesten.bindPopup("Jankas hoppesten över Gråstulbäcken.");
	var lillagula = [["59.48744662765932", "8.982594865796932"],["59.48741949056819", "8.982658397089795"],["59.4875091606592", "8.982923601240953"],["59.4874959567471", "8.983044654976892"],["59.48751788308377", "8.983049211013192"],["59.48747479289523", "8.983137079774279"],["59.48747171100533", "8.983231474108457"],["59.4873713254966", "8.983482293547393"],["59.48733269524216", "8.983541194386152"],["59.48733274933664", "8.983632613366186"],["59.48730515194826", "8.983723902136548"],["59.4873095426903", "8.98395171624966"],["59.48731188849907", "8.984001146951124"],["59.48730295207731", "8.984322373280808"],["59.48731922575539", "8.984345176840987"],["59.4873300207858", "8.984580318377423"],["59.48731047822861", "8.984634334447112"],["59.48724110344112", "8.984724490692084"],["59.48725595369763", "8.984729174029777"],["59.48728335983258", "8.985046670453924"],["59.48728939350301", "8.985035129585413"],["59.48729749243626", "8.985133704857923"],["59.48732098861578", "8.98522589736379"],["59.48732322214343", "8.985299594544012"],["59.48733193399404", "8.985358958528366"],["59.48734165495977", "8.985424160083365"],["59.48730788490644", "8.985514513262849"],["59.48728213404029", "8.985570643061319"],["59.48726556865887", "8.98554148154644"],["59.4872364558673", "8.985683931096723"],["59.48724767462608", "8.985707780661565"],["59.48723949501324", "8.98576685187674"],["59.48725057992808", "8.985850053202846"],["59.48725580842542", "8.985926396352147"],["59.4872495456265", "8.985994348029244"],["59.48724685838191", "8.986021427403594"],["59.48725651258768", "8.986079287564658"],["59.48729407175685", "8.986113484072048"],["59.4872893908189", "8.986166210530625"],["59.48727664668957", "8.986329523643253"],["59.4872748735749", "8.98635246500344"],["59.48725866379758", "8.986404418541269"],["59.48727506865762", "8.986478062160815"],["59.48727394860438", "8.986495387589832"],["59.48725274730811", "8.986709214069707"],["59.48722732789631", "8.986779681412745"],["59.4872407345366", "8.986849086713203"],["59.48724925459913", "8.986918139168578"],["59.48723663485446", "8.986982334990296"],["59.48723120637968", "8.987063137042776"],["59.48722192370085", "8.987133869112597"],["59.4872661400202", "8.98719561880365"],["59.4872793188423", "8.987251538501473"],["59.48723834966212", "8.987414318139509"],["59.4872449826863", "8.987400318889966"],["59.48722833479626", "8.987456042789615"],["59.48723056198369", "8.98752564894914"],["59.48720619256899", "8.987704571013053"],["59.48720347999696", "8.987720074546337"],["59.4872002011077", "8.98778945544964"],["59.48727827204512", "8.98791637033821"],["59.48725844021484", "8.987999415944291"],["59.48725952669125", "8.987997797450927"],["59.48726186954022", "8.988041484606212"],["59.48728624490133", "8.988236090652535"],["59.48732096732677", "8.988208070195897"],["59.4874462637848", "8.988467245299198"],["59.48746313995154", "8.988499732269402"],["59.48748827837633", "8.98855393401308"],["59.48746332101519", "8.988693179200295"],["59.48746574847155", "8.988777202690752"],["59.48747142544446", "8.988812918001102"],["59.48745687547181", "8.988851728208802"],["59.48744056663276", "8.989005571150695"],["59.48742143306023", "8.989143515470776"],["59.48745454390586", "8.989318284124257"],["59.48744712333131", "8.989381176388662"],["59.48742493771434", "8.989615453349472"],["59.48741358377858", "8.989755573647274"],["59.48740787520089", "8.989897604154628"],["59.48740152006197", "8.989986832486677"],["59.48741198946367", "8.990038706957325"],["59.48742823693634", "8.990174778240332"],["59.48744519105111", "8.990385854592455"],["59.48744742521948", "8.99046490555912"],["59.48747106514809", "8.990516324720559"],["59.48744746024605", "8.990580298095265"],["59.48744573635756", "8.990598408750994"],["59.48743599665504", "8.990833180803969"]];
		L.polyline(lillagula, {color: 'yellow', weight: 3}).addTo(mymap);
	var kortagula = [["59.48440013298219", "8.999725300406922"],["59.48441999674346", "8.999476287335199"],["59.48438794274117", "8.999240520082514"],["59.48440076347857", "8.999062389597112"],["59.48444005918925", "8.998776001640268"],["59.48445606075046", "8.998574614692931"],["59.48448152746141", "8.998286434852417"],["59.48448678957686", "8.998106810559916"],["59.48452440656595", "8.997897760085134"],["59.48452164730536", "8.997629760303882"],["59.48459125633498", "8.997455776057256"],["59.48463188027852", "8.997260076177126"],["59.48458530592239", "8.997203085176892"],["59.48455013418128", "8.996912505173899"],["59.48455368175097", "8.996688829412131"],["59.4845449285929", "8.996512672915022"],["59.48452741882252", "8.996281519944668"],["59.48449578652483", "8.996077756668171"],["59.4845129821709", "8.995934245475432"],["59.48454800738103", "8.995801718633832"],["59.48459161403289", "8.995652908979379"],["59.48461435983421", "8.995572313283011"],["59.48464203964573", "8.995549122763817"],["59.48468039535693", "8.995508807053179"],["59.484697530814", "8.99547119858825"],["59.48472020755877", "8.995404119016372"],["59.48475450403335", "8.995360199142986"],["59.48482828494957", "8.995195246674022"],["59.4848736505121", "8.995086684662532"],["59.48493844248974", "8.995003535366314"],["59.48498961632817", "8.994954594596518"],["59.48503726866441", "8.994915975630001"],["59.48508952808204", "8.99488286403135"],["59.48510933603069", "8.994831293248989"],["59.48514489362493", "8.994772861374264"],["59.4851855491865", "8.994733957247419"],["59.48525573218511", "8.994663117833335"],["59.48531116273011", "8.9946381658829"],["59.48534968180464", "8.994617701585046"],["59.48538788016329", "8.994626123416149"],["59.48550240203376", "8.994572561131594"],["59.48549175601846", "8.994462323548087"],["59.48548748315622", "8.994238587539545"],["59.48548241232749", "8.994140212106034"],["59.4854414970908", "8.994087667153744"],["59.48543994379986", "8.993902876712413"],["59.48546359968466", "8.993778222453857"],["59.48545407987901", "8.993630526070225"],["59.48548040913558", "8.993529973131148"],["59.48547905925309", "8.993420718486137"],["59.48550815697119", "8.99334857091381"],["59.48553126430181", "8.993317421338384"],["59.48552637823817", "8.993267632791948"],["59.48545479339756", "8.993182799991652"],["59.48544674833212", "8.993130385669158"],["59.48538012767784", "8.992943005722889"],["59.48532784751152", "8.992763732114879"],["59.48533314935406", "8.992627837824791"],["59.48538205983211", "8.992475358387011"],["59.48543117246", "8.992276844573578"],["59.48543227843862", "8.992120521852485"],["59.48542635693813", "8.991989790447079"],["59.48547991876276", "8.991921973103759"],["59.48546952853731", "8.991624710441457"],["59.48546179271013", "8.991440496422896"],["59.48547752946106", "8.991311347905095"],["59.48546704359769", "8.991203366490648"],["59.48546010094074", "8.991146955166011"],["59.4854631195974", "8.990961939488226"],["59.48546019375187", "8.990875424167221"],["59.48548146836701", "8.990861017426838"],["59.48550545384172", "8.990827579786151"],["59.48555847326968", "8.990752408017038"],["59.48560495193953", "8.990711601145962"],["59.48566772380003", "8.990712513825232"],["59.48572881234818", "8.990686888365966"],["59.48574299277897", "8.99058247793721"],["59.48574346896217", "8.990522576095691"],["59.48575990749067", "8.990405971056033"],["59.4857612515021", "8.990298150914446"],["59.48576708167755", "8.990220551805129"],["59.4857921969488", "8.990045698549753"],["59.48582183073017", "8.989955223727391"],["59.48581813039387", "8.989817908746637"],["59.48579938718766", "8.989690525485861"],["59.48581358717811", "8.989577316563922"],["59.48588025936284", "8.989393525708817"],["59.48593764236289", "8.989205385679318"],["59.4859361659599", "8.988985197516698"],["59.48592421534679", "8.988671946359226"],["59.48595244960375", "8.988572525713622"],["59.48598295650903", "8.988339676651293"],["59.48598002901777", "8.988268974242121"],["59.48597427760988", "8.988158971626415"],["59.48600826430349", "8.987983863434923"],["59.48599012450065", "8.9877731029394"],["59.48595715953876", "8.987547398194963"],["59.4859901900187", "8.987399033611089"],["59.48600971595846", "8.987180706878767"],["59.48604798250893", "8.986978097797509"],["59.48601792697254", "8.986668494678069"],["59.48599285878381", "8.986622855577799"],["59.48598243379079", "8.986586381282946"],["59.48598103842994", "8.986324749666091"],["59.48596951876088", "8.986269411489809"],["59.48594389722545", "8.986001784377644"],["59.48593451110075", "8.985847833547716"],["59.48598034392077", "8.985740690591465"],["59.48598900331554", "8.985542945583875"],["59.48594958648444", "8.985335931639447"],["59.48594542933953", "8.985182702308505"],["59.48595044684397", "8.985002365098387"],["59.48597388155843", "8.984896416562558"],["59.48609802849589", "8.984863619744072"],["59.48618347729028", "8.984880618547912"],["59.48631740996578", "8.984752058718977"],["59.48640410478069", "8.984518870325081"],["59.48647809206912", "8.984294191490617"],["59.48656025565738", "8.984038974016762"],["59.48661848485857", "8.983792570070754"],["59.48666654201401", "8.983690976191941"],["59.48670962732573", "8.983560645370771"],["59.48674043118438", "8.983419623319481"],["59.48681481810748", "8.983307822161356"],["59.48688213289488", "8.983217514658222"],["59.48696382483808", "8.983176993492069"],["59.48702979171554", "8.983017145420671"],["59.48706921919669", "8.982765533018393"],["59.48710558373013", "8.982605628179094"],["59.48718199844098", "8.982436978809764"]];
		L.polyline(kortagula, {color: 'yellow', weight: 3}).addTo(mymap);
	var rodgula = [["59.48736291668471", "8.982166517121986"],["59.48736279343967", "8.982150786945269"],["59.48734394262612", "8.981991357030321"],["59.4873895326491", "8.981825968091695"],["59.48731112453044", "8.98167505955843"],["59.48730854822622", "8.981436081788683"],["59.48727090066275", "8.981256492872433"],["59.48725629945515", "8.981095578200579"],["59.48731193541497", "8.980940235793605"],["59.48731108071749", "8.980757372016217"],["59.4872725808869", "8.980618121190174"],["59.48730285188849", "8.980481962081575"],["59.48737632505476", "8.980373496271358"],["59.48739315363513", "8.980236169743364"],["59.48735828487664", "8.980170263362524"],["59.48742352891223", "8.980050324583015"],["59.48747430659073", "8.979856465372297"],["59.48752663788711", "8.979711058857957"],["59.48746015775611", "8.979578228823099"],["59.48746100844267", "8.979439937679196"],["59.48741614765452", "8.97934953026606"],["59.48737572994553", "8.979250619413063"],["59.48742526638441", "8.979178002957973"],["59.48744521522042", "8.979088407384566"],["59.48746458985192", "8.978968194199552"],["59.48740558438343", "8.978842325681113"],["59.48735716609173", "8.978728408763549"],["59.48733380049492", "8.97859385710473"],["59.48726378738395", "8.978603316513881"],["59.48727900438768", "8.978503377765696"],["59.48722724873614", "8.978462939299108"],["59.48721308983411", "8.978363137013609"],["59.48717816998411", "8.978292371292492"],["59.48715057978578", "8.978341330880088"],["59.48716068259632", "8.978237408001036"],["59.48714332456009", "8.978149616028817"],["59.48714610457439", "8.977976692283281"],["59.48712465282696", "8.977930541478132"],["59.4871348599445", "8.977851449249794"],["59.48711420523536", "8.977792860515592"],["59.48715490932435", "8.977705443283243"],["59.48717010460393", "8.977646259863107"],["59.48716106307576", "8.977559381300695"],["59.48714969902556", "8.977354862155202"],["59.48709328836195", "8.977246760650072"],["59.4870328051548", "8.977113895853632"],["59.487038442863", "8.977012140166295"],["59.48703679020014", "8.976892657158839"],["59.48701848105316", "8.976706360663629"],["59.48703826383457", "8.976597599824013"],["59.48706813513882", "8.976473838408022"],["59.48707428957859", "8.976337074879808"],["59.4871017957438", "8.976161751436871"],["59.48706529434229", "8.975997530298415"],["59.48706786432371", "8.975882034648691"],["59.48706557708699", "8.975775579336934"]];
		L.polyline(rodgula, {color: 'red'}).addTo(mymap);

};
//Datum funktion.
function addzero(number){if(number <= 9){return "0" + number;}else{return number;};};
function getDatum(dateannan, timeannan, milisecsave){
	if(!dateannan && !timeannan && !milisecsave){var date = new Date();}else if(!milisecsave){var annatdatum = dateannan.split('-');var annattid = timeannan.split(':');var date = new Date(annatdatum[0], annatdatum[1] - 1, annatdatum[2], annattid[0], annattid[1]);}else{var date = new Date(parseInt(milisecsave));};
	return {"datum": date.getFullYear() + '-' + addzero(date.getMonth() + 1) + '-' + addzero(date.getDate()), "tid": addzero(date.getHours()) + ':' + addzero(date.getMinutes()), "milisec": date.getTime(), "manad": date.getFullYear() + '-' + addzero(date.getMonth() + 1)};
};
function cam() {
	var d = getDatum();
	var datum = d.datum;
	var t = parseInt(d.tid.split(':')[0]);
	if(t >= 18){
		var time = 16;
	}else if(t <= 8){
		var igar = getDatum(undefined, undefined, (d.milisec - 86400000));
		var datum = igar.datum;
		var time = 16;
	}else{
		var time = addzero(t - 2);
	};
	var url = 'https://www.skiinfo.no/webcams/2174/247/' + datum + '_' + time + '35/la.jpg';
	document.getElementById('cam').setAttribute('src', url);
};
function installMessage() {
	scrollBottom('meddelanden');
	if(!sessionStorage.getItem('user')){
		document.getElementById('namn').focus();
	}else{
		document.getElementById('registrera').setAttribute('style', 'display: none;');
		document.getElementById('registrerainne').setAttribute('style', 'display: none;');
		document.getElementById('text').focus();
	};
};
function skickaMeddelande() {
	if(document.getElementById('text').value == ''){}else{
		var text = getDatum().tid + ': ' + document.getElementById('text').value + ' /' + sessionStorage.getItem('user');
		var textp = document.createElement('p');
			var textel = document.createTextNode(text);
			textp.appendChild(textel);
		document.getElementById('meddelanden').appendChild(textp);
		document.getElementById('text').value = '';
		scrollBottom('meddelanden');
	};
};
function registrera() {
	sessionStorage.setItem('user', document.getElementById('namn').value);
	installMessage();
};
function checkkey(event, todo){
	if (event.which == 13 || event.keyCode == 13) {
		if(todo == 'skicka'){
			skickaMeddelande();
		}else if(todo == 'reg'){
			registrera();
		};
		event.preventDefault()
	};
};