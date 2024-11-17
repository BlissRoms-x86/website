var KEY_ENTER=13;
$(document).ready(function(){
	var $input=$(".chat-input")
		,$sendButton=$(".chat-send")
		,$messagesContainer=$(".chat-messages")
		,$messagesList=$(".chat-messages-list")
		,$effectContainer=$(".chat-effect-container")
		,$infoContainer=$(".chat-info-container")

		,messages=0
		,bleeding=100
		,isFriendTyping=false
		,incomingMessages=0
		,lastMessage=""
	;
	
	var lipsum="please ask for something like Android 9 or Android 10. I can understand you better if you ask for things like Bliss OS 11 or Bliss OS 12. You need to be a bit more specific like a version number (11 or 12). ";
	var nsfw="you cant talk to me that way. Do you kiss your mother with that mouth?. you should not talk like that. that is what she said. your mom was likes it like that?.";
	
	function gooOn(){
		setFilter('url(#goo)');
	}
	function gooOff(){
		setFilter('none');
	}
	function setFilter(value){
		$effectContainer.css({
			webkitFilter:value,
			mozFilter:value,
			filter:value,
		});
	}

	function addMessage(message,self){
		var $messageContainer=$("<li/>")
			.addClass('chat-message '+(self?'chat-message-self':'chat-message-friend'))
			.appendTo($messagesList)
		;
		var $messageBubble=$("<div/>")
			.addClass('chat-message-bubble')
			.appendTo($messageContainer)
		;
		$messageBubble.text(message);

		var oldScroll=$messagesContainer.scrollTop();
		$messagesContainer.scrollTop(9999999);
		var newScroll=$messagesContainer.scrollTop();
		var scrollDiff=newScroll-oldScroll;
		TweenMax.fromTo(
			$messagesList,0.4,{
				y:scrollDiff
			},{
				y:0,
				ease:Quint.easeOut
			}
		);

		return {
			$container:$messageContainer,
			$bubble:$messageBubble
		};
	}
	function sendMessage(){
		var message=$input.text().toLowerCase();
		const secretCode = 'readtheop';
		
		if(message=="") return;
		
		if(message.includes("pie")||message.includes("bliss 11")||message.includes("android 9")||message.includes("bliss os 11")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 9 builds: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissos-x86/files/Official/bleeding_edge/Generic%20builds%20-%20Pie/">x86_64 Generic Builds</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissos-x86/files/Official/bleeding_edge/Experimental%20-%2032%20bit%20%28x86%29%20builds%20-%20Pie/">Experimental x86 (32bit)</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissos-x86/files/Official/bleeding_edge/Surface%20IPTS%20builds%20-%20Pie/">x86_64 IPTS (M$ Surface 3(non-pro)-6 Devices Only)</a><br>';
		} else if (message.includes("yantra")|(message.includes("merkaba")||message.includes("bliss 12")||message.includes("android 10")||message.includes("bliss os 12")||message.includes("android q")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissos-dev/files/merkaba/">Bliss OS Merkaba - x86_64 Generic Builds</a><br>'+
			'There are currently no Android 10 Surface builds. Please check back later for those.';
		} else if (message.includes("taimen")||message.includes("pixel 2 xl")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for Tiamen: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/taimen/">Go To Downloads</a><br>';
		} else if (message.includes("I01WD")||message.includes("zenfone 6")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for ZenFone 6: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/I01WD/">Go To Downloads</a><br>';
		} else if (message.includes("z01r")||message.includes("zenfone 5z")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for zenfone 5z: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/z01r/">Go To Downloads</a><br>';
		} else if (message.includes("oneplus3")||message.includes("oneplus 3")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for oneplus3: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/oneplus3/">Go To Downloads</a><br>';
		} else if (message.includes("wayne")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for wayne: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/wayne/">Go To Downloads</a><br>';
		} else if (message.includes("jasmine")||message.includes("sprout")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for jasmine & sprout: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/jasmine_sprout/">Go To Downloads</a><br>';
		} else if (message.includes("clover")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for clover: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/clover/">Go To Downloads</a><br>';
		} else if (message.includes("violet")||message.includes("redmi note 7 pro")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for redmi note 7 pro: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/violet/">Go To Downloads</a><br>';
		} else if (message.includes("guacamole")||message.includes("oneplus 7 pro")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for oneplus 7 pro: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/guacamole/">Go To Downloads</a><br>';
		} else if (message.includes("gtaxllte")||message.includes("galaxy tab a lte")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for gtaxllte: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/gtaxllte/">Go To Downloads</a><br>';
		} else if (message.includes("gtaxlwifi")||message.includes("galaxy tab a wifi")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for gtaxlwifi: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/gtaxlwifi/">Go To Downloads</a><br>';
		} else if (message.includes("X00T")||message.includes("ZenFone Max Pro m1")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for ZenFone Max Pro m1: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/X00T/">Go To Downloads</a><br>';
		} else if (message.includes("kenzo")||message.includes("Redmi Note 3")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for Redmi Note 3: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/kenzo/">Go To Downloads</a><br>';
		} else if (message.includes("X01BD")||message.includes("ZenFone Max Pro M2")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for ZenFone Max Pro M2: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/X01BD/">Go To Downloads</a><br>';
		} else if (message.includes("enchilada")||message.includes("oneplus 6")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for OnePlus 6: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/enchilada/">Go To Downloads</a><br>';
		} else if (message.includes("whyred")||message.includes("redmi note 5")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for Redmi Note 5: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/whyred/">Go To Downloads</a><br>';
		} else if (message.includes("z2_plus")||message.includes("lenovo zuk z2 plus")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for Lenovo ZUK Z2/Z2 Plus: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/z2_plus/">Go To Downloads</a><br>';
		} else if (message.includes("h870")||message.includes("lg g6 lte")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for LG G6: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/h870/">Go To Downloads</a><br>';
		} else if (message.includes("us997")||message.includes("lg g6 lte-a")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for LG G6 LTE-A: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/us997/">Go To Downloads</a><br>';
		} else if (message.includes("h872")||message.includes("lg g6 tmo")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for LG G6 T-Mobile: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/h872/">Go To Downloads</a><br>';
		} else if (message.includes("bullhead")||message.includes("nexus 5x")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for Nexus 5X: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/bullhead/">Go To Downloads</a><br>';
		} else if (message.includes("santoni")||message.includes("redmi 4x")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for Xiaomi Redmi 4X: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/santoni/">Go To Downloads</a><br>';
		} else if (message.includes("bonito")||message.includes("pixel 4 xl")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for Pixel 4 XL: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/bonito/">Go To Downloads</a><br>';
		} else if (message.includes("dumpling")||message.includes("oneplus 5t")){
			const container = document.querySelector('.code_container');
			const containerTitle = document.querySelector('.code_container__title');
			container.style.background = secretCode;
			container.classList.add('alive');
			containerTitle.innerHTML = 'Here is the download link to our Android 10 builds for OnePlus 5T: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a>'+
			'<a class="btn mb-3 btn-link" style="color:black;" target="_blank" href="https://sourceforge.net/projects/blissroms/files/Q/dumpling/">Go To Downloads</a><br>';
		}
		
		//if(message=="readtheop") {
		//	console.log('DING DING');
		//	const container = document.querySelector('.code_container');
		//	const containerTitle = document.querySelector('.code_container__title');
		//	container.style.background = secretCode;
		//	container.classList.add('alive');
		//	containerTitle.innerHTML = 'correct code! Here is the download link: <br><br><a class="btn btn-light text-dark mb-3" href="https://opencollective.com/bliss-os/donate" target="_blank">Donate</a><a class="btn mb-3 btn-link" style="color:white;" target="_blank" href="https://sourceforge.net/projects/blissos-dev/files/Alpha/Bliss-OS-v12.2-x86_64-OFFICIAL-201912272156_k-k4.19.80-ax86-ga-q_m-q-x86_ld-q-x86_dg-_dh-q-x86.iso/download">Go To Downloads</a><br>';
		//}
		
		lastMessage=message;

		var messageElements=addMessage(message,true)
			,$messageContainer=messageElements.$container
			,$messageBubble=messageElements.$bubble
		;

		var oldInputHeight=$(".chat-input-bar").height();
		$input.text('');
		updateChatHeight();
		var newInputHeight=$(".chat-input-bar").height();
		var inputHeightDiff=newInputHeight-oldInputHeight

		var $messageEffect=$("<div/>")
			.addClass('chat-message-effect')
			.append($messageBubble.clone())
			.appendTo($effectContainer)
			.css({
				left:$input.position().left-12,
				top:$input.position().top+bleeding+inputHeightDiff
			})
		;


		var messagePos=$messageBubble.offset();
		var effectPos=$messageEffect.offset();
		var pos={
			x:messagePos.left-effectPos.left,
			y:messagePos.top-effectPos.top
		}

		var $sendIcon=$sendButton.children("i");
		TweenMax.to(
			$sendIcon,0.15,{
				x:30,
				y:-30,
				force3D:true,
				ease:Quad.easeOut,
				onComplete:function(){
					TweenMax.fromTo(
						$sendIcon,0.15,{
							x:-30,
							y:30
						},
						{
							x:0,
							y:0,
							force3D:true,
							ease:Quad.easeOut
						}
					);
				}
			}
		);

		gooOn();

		
		TweenMax.from(
			$messageBubble,0.8,{
				y:-pos.y,
				ease:Sine.easeInOut,
				force3D:true
			}
		);

		var startingScroll=$messagesContainer.scrollTop();
		var curScrollDiff=0;
		var effectYTransition;
		var setEffectYTransition=function(dest,dur,ease){
			return TweenMax.to(
				$messageEffect,dur,{
					y:dest,
					ease:ease,
					force3D:true,
					onUpdate:function(){
						var curScroll=$messagesContainer.scrollTop();
						var scrollDiff=curScroll-startingScroll;
						if(scrollDiff>0){
							curScrollDiff+=scrollDiff;
							startingScroll=curScroll;

							var time=effectYTransition.time();
							effectYTransition.kill();
							effectYTransition=setEffectYTransition(pos.y-curScrollDiff,0.8-time,Sine.easeOut);
						}
					}
				}
			);
		}

		effectYTransition=setEffectYTransition(pos.y,0.8,Sine.easeInOut);
		
		// effectYTransition.updateTo({y:800});

		TweenMax.from(
			$messageBubble,0.6,{
				delay:0.2,
				x:-pos.x,
				ease:Quad.easeInOut,
				force3D:true
			}
		);
		TweenMax.to(
			$messageEffect,0.6,{
				delay:0.2,
				x:pos.x,
				ease:Quad.easeInOut,
				force3D:true
			}
		);

		TweenMax.from(
			$messageBubble,0.2,{
				delay:0.65,
				opacity:0,
				ease:Quad.easeInOut,
				onComplete:function(){
					TweenMax.killTweensOf($messageEffect);
					$messageEffect.remove();
					if(!isFriendTyping)
						gooOff();
				}
			}
		);

		messages++;

		if(Math.random()<0.65 || lastMessage.indexOf("?")>-1 || messages==1) getReply();
	}
	function getReply(){
		if(incomingMessages>2) return;
		incomingMessages++;
		var typeStartDelay=1000+(lastMessage.length*40)+(Math.random()*1000);
		setTimeout(friendIsTyping,typeStartDelay);
		
		var string = lastMessage;

		if(string.includes("fuck")||string.includes("shit")||string.includes("sex")||string.includes("hate")||string.includes("kill")||string.includes("hit")||string.includes("shoot")){
			var source=nsfw.toLowerCase();
		} else {
			var source=lipsum.toLowerCase();
		}
		
		source=source.split(". ");
		var start=Math.round(Math.random()*(source.length-1));
		var length=Math.round(Math.random()*3)+1;
		var end=start+length;
		if(end>=source.length){
			end=source.length-1;
			length=end-start;
		}
		
		var message="";

		for (var i = 0; i < length; i++) {
			message+=source[start+i]+(i<length-1?" ":"");
		};
		message+=Math.random()<0.2?".":"";
		/* message+=Math.random()<0.12?" :)":(Math.random()<0.12?" :(":""); */
		
		if(string.includes("help")){
			var message="Options: Bliss OS 11/12, Android 9/10, Yantra, adding_your_linux_drivers, advanced_boot_debugging, bug_report, bug_tracker, docs, how_to_debug_booting, updates, where_to_start, wheres_the_keymapper. I can also understand many keywords, so depending on what you type, I should be able to figure out what you need for the most part.";
		} else if(string.includes("adding_your_linux_drivers")||string.includes("linux drivers")||string.includes("kernel module")){
			var message="So you have tracked down or created Linux drivers for your device, AWESOME!! Now all you have to do is turn it into a Linux kernel module, and then add it to external/kernel-drivers for it to be included in the current kernel build. Examples of others we add are here https://github.com/BlissRoms-x86/external_kernel-drivers/tree/q10.0-x86 The examples only add one Android.mk file, and the one I use is generic for just about any kernel module that has a standard MAKEFILE, not a MAKEFILE.am file. So you should really only need to add your kernel module folder to external/kernel-drivers/ and copy the Android.mk into it, then build source as normal. It'll get picked up as one of the last steps in building and packaging the kernel";
		} else if(string.includes("advanced_boot_debugging")||string.includes("debugging")){
			var message="Sometimes, you can't even get things to boot up at all. In these cases, you will want to use the Debug boot options, or manually add DEBUG=1 (2 - depending on logging level needed), and when it boots, use Logcat to log things, Code: logcat > 'sdcard/log_name.txt' Then in the console again, you can type 'exit' to continue booting Android. (if DEBUG=2, you will need to type exit twice) You can then use alt-f1 & alt-f7 to get back and forth from the console to the Android UI. When done, copy and paste the entire log either to Hastebin or Pastebin. When done, go to https://github.com/BlissRoms-x86/bug_reports/issues and file an issue with the link to the pastebin or hastebin and any other information you may be able to provide";
		} else if(string.includes("bug_report")||string.includes("logs")||string.includes("logcat")){
			var message="Manual Logging: Use the alt-f1 console, and in the console, type: 'logcat > sdcard/log_name.txt' Then alt-f7 to get back to the Android UI, and replacate the issue. When done, use alt-f1 to go back to console and ctrl-c to stop the logging. Copy and paste the entire log either to Hastebin or Pastebin. When done, go to https://github.com/BlissRoms-x86/bug_reports/issues and file an issue with the link to the pastebin or hastebin and any other information you may be able to provide. ";
		} else if(string.includes("bug_tracker")||string.includes("bugs")||string.includes("bug")||string.includes("issues")){
			var message="Bliss OS now has a place to help track open bugs and feature requests to start off with. Please follow the link and use one of the existing templates to fill things out. https://github.com/BlissRoms-x86/bug_reports";
		} else if(string.includes("docs")||string.includes("documentation")||string.includes("guide")||string.includes("tutorial")||string.includes("walkthrough")||string.includes("tutorials")||string.includes("walkthroughs")){
			var message="You can find more information in our docs. Everything from beginners to advance usage and debugging is covered over there. https://docs.blissroms.com" ;
		} else if(string.includes("how_to_debug_booting")||string.includes("not booting")){
			var message="There are a few ways to do this. First is to hit 'e' when the grub selection screen shows up, and try and boot by removing the 'quiet' from your grub entry. The second option would be to boot in debug mode by adding DEBUG=1 or DEBUG=2 , both represent a lower level of logging. You will need to enter 'exit' once or twice when using debug mode to procede to the following steps of the boot process. If the animation never starts, add 'nomodeset' to the grub command to force software rendering and hardware compatibility mode";
		} else if(string.includes("updates")){
			var message="Get yourself a Telegram account, then Subscribe to this Channel for All announcements and updates https://t.me/blissos_updates";
		} else if(string.includes("where_to_start")||string.includes("noob")||string.includes("starting")){
			var message="For those looking where to begin, I would like to direct your attention to our docs.blissroms.com site. The Bliss OS (x86) section on it has all the possible knowledge we've gathered to help make things easier for you all to find, and better for our sanity from having to repeat ourselves. Start there, and make sure to check out the XDA thread for the build you're using (nougat, oreo, pie, q) for any questions that you couldn't figure out using the docs site.";
		} else if(string.includes("wheres_the_keymapper")||string.includes("keymapper")){
			var message="Q: Why is there no keymapper included in Bliss OS? A: We have not found any open source keymappers, so we won't put our users data in jeopardy just for that. We are open to working with any developers interested in creating an on-screen keymapper for keyboard/mouse and gampads though, so please spread the word. For those lost as to why we want to ensure security there, a gaming keymapper will redirect any input from the users device, and can even run when a game is not loaded. So it has the potential to grab passwords, banking info, etc. We don't trust anything we can't sift through the source of enough these days, so this is why we haven't included one as of yet";
		} else if(string.includes("your manager")||string.includes("real person")||string.includes("speak with a human")){
			var message="We do have real people available to help in our free Telegram chat for Bliss OS. https://t.me/blissx86 Feel free to sign up for an account and ask more questions in there. ";
		} else if(string.includes("surface")){
			var message="You're going to have to further specify what version too. Android 9 or Android 10? ";
		}

		var typeDelay=300+(message.length*25)+(Math.random()*1000);

		setTimeout(function(){
			receiveMessage(message);
		},typeDelay+typeStartDelay);

		setTimeout(function(){
			incomingMessages--;
			if(Math.random()<0.1){
				getReply();
			}
			if(incomingMessages<=0){
				friendStoppedTyping();
			}
		},typeDelay+typeStartDelay);
	}
	function friendIsTyping(){
		if(isFriendTyping) return;

		isFriendTyping=true;

		var $dots=$("<div/>")
			.addClass('chat-effect-dots')
			.css({
				top:-30+bleeding,
				left:10
			})
			.appendTo($effectContainer)
		;
		for (var i = 0; i < 3; i++) {
			var $dot=$("<div/>")
				.addClass("chat-effect-dot")
				.css({
					left:i*20
				})
				.appendTo($dots)
			;
			TweenMax.to($dot,0.3,{
				delay:-i*0.1,
				y:30,
				yoyo:true,
				repeat:-1,
				ease:Quad.easeInOut
			})
		};

		var $info=$("<div/>")
			.addClass("chat-info-typing")
			.text("Bliss-Bot is typing...")
			.css({
				transform:"translate3d(0,30px,0)"
			})
			.appendTo($infoContainer)

		TweenMax.to($info, 0.3,{
			y:0,
			force3D:true
		});

		gooOn();
	}

	function friendStoppedTyping(){
		if(!isFriendTyping) return

		isFriendTyping=false;

		var $dots=$effectContainer.find(".chat-effect-dots");
		TweenMax.to($dots,0.3,{
			y:40,
			force3D:true,
			ease:Quad.easeIn,
		});

		var $info=$infoContainer.find(".chat-info-typing");
		TweenMax.to($info,0.3,{
			y:30,
			force3D:true,
			ease:Quad.easeIn,
			onComplete:function(){
				$dots.remove();
				$info.remove();

				gooOff();
			}
		});
	}
	function receiveMessage(message){
		var messageElements=addMessage(message,false)
			,$messageContainer=messageElements.$container
			,$messageBubble=messageElements.$bubble
		;

		TweenMax.set($messageBubble,{
			transformOrigin:"60px 50%"
		})
		TweenMax.from($messageBubble,0.4,{
			scale:0,
			force3D:true,
			ease:Back.easeOut
		})
		TweenMax.from($messageBubble,0.4,{
			x:-100,
			force3D:true,
			ease:Quint.easeOut
		})
	}

	function updateChatHeight(){
		$messagesContainer.css({
			height:460-$(".chat-input-bar").height()
		});
	}

	$input.keydown(function(event) {
		if(event.keyCode==KEY_ENTER){
			event.preventDefault();
			sendMessage();
		}
	});
	$sendButton.click(function(event){
		event.preventDefault();
		sendMessage();
		// $input.focus();
	});
	$sendButton.on("touchstart",function(event){
		event.preventDefault();
		sendMessage();
		// $input.focus();
	});

	$input.on("input",function(){
		updateChatHeight();
	});

	gooOff();
	updateChatHeight();
})
