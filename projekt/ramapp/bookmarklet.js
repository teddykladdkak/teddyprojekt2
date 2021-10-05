javascript:(
	function(){
		var head = document.getElementsByTagName('head')[0];
			var viewport = document.createElement('meta');
				viewport.setAttribute('name', 'viewport');
				viewport.setAttribute('content', 'initial-scale=1, maximum-scale=1, user-scalable=no');
			head.appendChild(viewport);
			var webbcapable = document.createElement('meta');
				webbcapable.setAttribute('name', 'apple-mobile-web-app-capable');
				webbcapable.setAttribute('content', 'yes');
			head.appendChild(webbcapable);
			var statusbar = document.createElement('meta');
				statusbar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
				statusbar.setAttribute('content', 'black');
			head.appendChild(statusbar);
	})();

	//<link href="" class="ico1" sizes="152x152" rel="apple-touch-icon"><link href="" class="ico2" sizes="144x144" rel="apple-touch-icon"><link href="" class="ico3" sizes="120x120" rel="apple-touch-icon"><link href="" class="ico4" sizes="114x114" rel="apple-touch-icon"><link href="" class="ico5" sizes="76x76" rel="apple-touch-icon"><link href="" class="ico6" sizes="72x72" rel="apple-touch-icon"><link href="" class="ico7" sizes="60x60" rel="apple-touch-icon"><link href="" class="ico8" sizes="57x57" rel="apple-touch-icon">