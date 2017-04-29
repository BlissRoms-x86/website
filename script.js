// JavaScript Document
$(document).ready(function(e) {
   /* Todo:
 • Merge this with Node.js, almost done
 • Webpages in a database/more editable version
 • Add cookies to track previous commands? (You can press up and down to browse previous commands this session)
*/
   var faviconnumber = 1;
	function favicon() {
		favicon = favicon == 1 ? 2 : 1;
		$('.favicon').attr('href','favicon' + favicon + ".png");
	}
   console.clear();
   var commandlist = [ /*Can be populated with various methods*/
      ["/help", "Show commands"],
      ["/list", "List all pages on the website"],
      ["/nav &lt;location&gt;", "Navigate to location"],
	   ["/gl", "Generate a url for the current page - [^http://blissroms.github.io/](This doesn't work in an iFrame.) outputs something like [^http://blissroms.github.io/connect](*blissroms.github.io/connect*)"],
      ["/clear", "Clear the console"],
      ["/login &lt;username&gt; &lt;password&gt;", "Login to your account - This is not set up and when implemeneted it'll be '/login username' then request password without printing into the cmd prompt"],
      ["/upload", "Upload file, must be logged in."]
   ];
   var previouscommands = [];
   var currentcommand = 0;
   var pages = [ /*Can be populated with various methods*/
      ["index", "Welcome to BlissROMs temporary site", "This is a temporary website we are puting up in order to help with the current transition of our website", "You can find us online or on Telegram using the following links.", "Google+: [https://plus.google.com/communities/118265887490106132524](https://plus.google.com/communities/118265887490106132524)","Telegram: [https://t.me/OfficialBlissROMs](https://t.me/OfficialBlissROMs)"],
      ["about", "About Bliss", "A little info about us", "We are a family of ROMs, app developers, designers, and tech gurus, that work together to bring our dreams to life.", "To join Bliss Family of ROMs, [https://goo.gl/ZJn2vn](https://goo.gl/ZJn2vn)", "We are currently accepting applications for developers, maintainers, app devs, designers, and marketing/PR."],
	  ["connect", "Connect with Bliss",
	  "[mailto:Officialblissroms@gmail.com](Email Bliss)",
	  "[^https://plus.google.com/communities/118265887490106132524](Google+ Community)",
	  "[^https://t.me/OfficialBlissROMs](Telegram Community)",
	  "[^https://review.blissroms.com](Gerrit Code Review for Blissroms)"]
   ];
   var pageindex = ["index", "about", "connect"];
   var currentpage = "landing";
   var url = "http://blissroms.github.io/"
      /*
         Custom Text Syntax
         Links:      
            [URLPATH](NAME) - regular
            [^URLPATH](NAME) - open in new tab
            
         Styles:
            *TEXT* - bold text
            E! - Text is an error/notification
            A! - spaces are converted to non-breaking spaces (it's for ascii art - after all, this is a text based website)
      */

   function init() {
      setInterval(time);
      console.clear();
      console.log(new Date().getTime());
      log("Website", "A!****************************");
      log("Website", "A! ____  _     ___ ____ ____  ");
      log("Website", "A!| __ )| |   |_ _/ ___/ ___| ");
      log("Website", "A!|  _) | |    | |(___ (___ ) ");
      log("Website", "A!| |_) | |___ | | ___) |__) |");
      log("Website", "A!|____/|_____|___|____/____/ ");
      log("Website", "A!                           *");
      log("Website", "A!****************************");
      log("Website", "A!Have A Truly Blissful Experience");
      log("Website", "A!****************************");
      log("Website", "");
      log("Website", "E!Bliss ROMs temporary site [^http://blissroms.github.io/](*blissroms.github.io*)");
      log("Website", "");
      log("Website", "A!********************************");
      log("Website", "");
      log("Website", "E![^http://downloads.blissroms.com/](*Bliss Downloads*) , [^http://paypal.me/TeamBliss](*Donate to Team Bliss*)");
	log("Website", "E![^http://review.blissroms.com](*BlissROMs Gerrit Review*)");
	log("Website", "");
      log("Website", "A!********************************");
	   urlvars();
      log("Client", "For help say '/help'");
	  setInterval(favicon,500);
   }

   function urlvars() {
	   var pagelocs = window.location.pathname.replace("/","").split("/");
	   var pageloc = pagelocs[0];
	   console.log(pageloc);
	   //alert();
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
            }
		}
      	log("Website", "You are currently on page: *" + currentpage + "*");
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
               loadpage($.inArray(pageloc, pageindex));
            } else {
               //Un-note next line to show 404 errors with wrong urls
               //log("Client", "404 - The page '" + pageloc + "' does not exist. To "); 
            }
		}
		if(pageloc == "") {
      		log("Client", "What would you like to access?");	
		}
   }
   function getParam(name){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec (window.location.href);
		if (results == null) {
			return "";
		}
		else  {
			return results[1];
		}
	}

   function log(name, information) {
      var d = new Date();
      var hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
      var minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
      var seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
      var colour = "whitet";
      var textcolour = "";
      var postcolour = "";

      switch (name[0]) {
         case "!":
            postcolour = " important";
            name = name.substr(1);
            break;
      }
      switch (name) {
         case "Website":
            colour = "redt";
            break;
         case "Server":
            colour = "bluet";
            break;
         case "Client":
            colour = "bluet";
            break;
         case "User":
            colour = "greent";
            postcolour = " selft";
            break;
      }
      if (information[0] == "A" && information[1] == "!") {
         information = information.substr(2);
         information = information.replace(/ /g, '\u00A0');
      }
      if (information[0] == "E" && information[1] == "!") {
         information = information.substr(2);
         postcolour = " important";
      }

      while (information.indexOf("](") >= 0) { //URL parser

         var NAMEregExp = /\(([^)]+)\)/;
         var uname = NAMEregExp.exec(information)[1];

         var URLregExp = /\[([^)]+)\]/;
         var url = URLregExp.exec(information)[1];
         var newpage = false;
         if (url[0] == "^") {
            newpage = true;
            url = url.substr(1);
         }
         var start = information.indexOf("[");
         var end = information.indexOf(")");
         if (newpage) {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '" target="_blank">' + uname + '</a>');
         } else {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '">' + uname + '</a>');
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working

      }
      var tobold = true;
      var boldnumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            boldnumber++;
         }
      }
      while (information.indexOf("*") >= 0) { //Bold parser
         var pos = information.indexOf("*");
         information = information.replace("*", "");
         if (tobold) {
            information = information.splice(pos, 0, '<b>');
         } else {
            information = information.splice(pos, 0, '</b>');
         }
         tobold = !tobold;
         if (tobold && boldnumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      }
      var tounderline = true;
      var underlinenumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            underlinenumber++;
         }
      }
      while (information.indexOf("**") >= 0) { //Bold parser
         var pos = information.indexOf("**");
         information = information.replace("**", "");
         if (tounderline) {
            information = information.splice(pos, 0, '<u>');
         } else {
            information = information.splice(pos, 0, '</u>');
         }
         tounderline = !tounderline;
         if (tounderline && underlinenumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      } /**/
      $(".stream").append('<div class="line">' +
         '<p class="time">[' + hours + ":" + minutes + ":" + seconds + ']</p>' +
         '<p class="name ' + colour + '">' + name + '</p>' +
         '<p class="information' + postcolour + '">' + information + '</p>' +
         '</div>');
      $(document).scrollTop($(document).height() - $(window).height());
   }
	var timestring = "";
   function time() {
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      if (hours < 10) {
         hours = "0" + hours;
      }
      if (minutes < 10) {
         minutes = "0" + minutes;
      }
      if (seconds < 10) {
         seconds = "0" + seconds;
      }
	  var temptimestring = "[" + hours + ":" + minutes + ":" + seconds + "]";
	  if (temptimestring != timestring) {
		  timestring = temptimestring;
      	$(".editline .time").text(timestring);
	  }
   }

   var ctrldown = false;
   $(".editline .edit").keydown(function(e) {
      var text = $(".editline .edit").text();
      console.log(e.which);
      if (e.which == 13 && text !== "" && !ctrldown) {
         var commands = text.split(' ');
         var output = "";
         if (commands[0] == "help") {
            text = "/" + text;
         }
         $(".editline .edit").text("");
         log("User", text);

         previouscommands[currentcommand] = text;
         currentcommand = previouscommands.length;
         $(".editline .edit").keydown(35);
         cmd(commands[0], text, commands);
         /*Add mod commands*/
         //modcmd(commands[0], text, commands);
         /*Add mod commands*/

      }
      if (e.which == 38) { //up
         if (currentcommand > 0) {
            currentcommand--;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
      if (e.which == 40) { //down

         if (currentcommand < previouscommands.length) {
            currentcommand++;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
   });

   function cmd(command, words, word) {
      switch (word[0]) {
         case "/help":
         case "help":
            for (var i = 0; i < commandlist.length; i++) {
               output = commandlist[i][0] + " : " + commandlist[i][1];
               //console.log(command[i][0]);
               log("Client", output);
            }
            break;
		 case "/gl":
			//window.location.href = "http://koya.io" + (currentpage == "landing" ? "" : "/" + currentpage);
			window.history.pushState(currentpage, 'InpagePage', (currentpage == "landing" ? "/" : "/" + currentpage));
			break;
         case "/clear":
            $(".stream").text("");
            break;
         case "/nav":
            if ($.inArray(word[1], pageindex) >= 0) {
               currentpage = word[1];
               log("Website", "You are now in " + currentpage);
               loadpage($.inArray(word[1], pageindex));
            } else {
               log("Client", "'" + word[1] + "' does not exist.");
            }
            break;
         case "/list":
            $.each(pageindex, function(id, content) {
               log("Client", "> " + content);
            });
            break;
         case "/login":
            if (word.length >= 3) {
               log("Client", "Attempting to login to " + word[1] + " with " + Array(word[2].length + 1).join("â€¢"));
               loginreturn = false;
               //log("Client", "ER1");
               setTimeout(loginemptyreturn, 20000);
            } else {
               log("Client", "Not enough arguments to log in, you need a USERNAME and a PASSWORD.");
            }
            break;
         case "brunch bliss_kiwi":
            window.open("https://downloads.blissroms.com/Bliss/Official/kiwi/");
            break;
         case "brunch bliss_x86":
            window.open("https://downloads.blissroms.com/Bliss/Official/x86/");
            break;
         default:
            output = "Unrecognised command '" + word[0] + "'.";
            log("Client", output);
      }
   }

   function loadpage(i) {
      $.each(pages[i], function(id, content) {
         if (content != pageindex[i]) {
            log("Website", content);
         }
      });
   }
   var loginreturn = false;

   function loginemptyreturn() {
      //log("Client", "ER2");
      if (!loginreturn) {
         log("Client", "E![LOGIN] No Return Recieved");
      }
   }
   String.prototype.splice = function(idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
   };
   init();
});
