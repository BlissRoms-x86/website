console.clear();

/**
 * Choose Your Own Adventure-style data structure.
 *
 * Works on the principle of 'entries'/'chapters', like the oldschool 'turn to 100'
 * style Fighting Fantasy gamebooks - this is *not* a proper text adventure engine 
 * with full location, inventory and state management. It could probably be adapted
 * to that quite easily, though.
 *
 * Definition format:
 *
 * Content:
 * - id: unique string ID for use in 'goto'/'next'.
 * - text: body text for this entry.
 * - extra: array of additional paragraphs:
 *      - text: text for this paragraph
 *      - requires: string/array of item(s) required for this paragraph
 *                  to be included.  Use '!itemname' to invert logic.
 *
 * Inventory / state:
 * - gives: string/array of item(s) gained when entry is visited
 * - takes: string/array of item(s) lost when entry is visited
 * - gameover: if 'win' or 'lose', changes game state when entry is visited
 *
 * Navigation (ONE of the following):
 * - next: id of next entry (will convert to a single 'Continue...' option)
 * - options: array of options for this entry:
 *      - text: text used for option
 *      - goto: id of entry this option leads to
 *      - requires: string/array of item(s) required for this option
 *                  to be available.  Use '!itemname' to invert logic.
 * 
 **/

var ENTRIES = [{
        // Recreation room
        id: 'e_recroom',
        text: 'You are in a small-ish room with a computer in front of you ' +
            'The computer screen shows a terminal, and on the terminal ' +
            'error showing that you need to repo init before running repo ' +
            'sync. What do you do',
        extra: [{
            text: 'You have the BlissROMs thread for a different device ' +
				'open on a second screen.',
        }],
        options: [{
            text: 'Examine the webpage for the GitHub link',
			goto: 'e_github'
        }, {
            text: 'Search Google for your answer',
			goto: 'e_google'
        }],
        start: true
    }, {
        // Look at the plushie
        id: 'e_github',
        text: 'Upon closer inspection, the webpage has a section for Sources, Links, and ' +
            'Social Media. You scan through them quickly to see if anything could be useful ' +
            'What section do you decide on',
        options: [{
            text: 'Copy the link for the BlissROMs github',
			goto: 'e_got_github_link'
        }, {
            text: 'Open a new tab and go to Google Search instead',
			goto: 'e_google'
        }]
    }, {
        // Get the mask off the plushie
        id: 'e_got_github_link',
        text: 'You grab the link to the BlissROMs GitHub page, and paste it into a new tab. It loads and shows  ' +
            'a list of repo links is shown, and you are a little overwhelmed by the amount of choices available. ' +
            'You copy the link to the manifest repo, but are unsure. So you decide to head to Google instead ',
        next: 'e_google'
    }, {
        // Main atrium
        id: 'e_google',
        text: 'You sit there, staring at the Google Search page. ' +
            'As you type in BlissROMs repo init, the page results spit out you notice a few things in the  ' +
            'list that look familiar. The top result is for the manifest link, while the second result is for ' +
            'a how-to unlock and root any device. The third link shown is for a YouTube video on building ' +
			'Android ROMs, and the fourth link down leads to the BlissROMs webpage ',
        options: [{
			text: 'Follow the think to the BlissROMs Manifest.',
			goto: 'e_link_manifest'
		}, {
			text: 'Follow the link to unlock and root your device',
			goto: 'e_link_droid'
		}, {
			text: 'Head to YouTube for the video on building Android ROMs',
			goto: 'e_link_youtube'
		}, {
			text: 'Head over to the BlissROMs webpage',
			goto: 'e_link_blissroms'
		}],
    }, {
        // Manifest link
        id: 'e_link_manifest',
        text: 'You head to the manifest page and it shows a few files on the top, followed by a descriptive ' +
            'readme detailing all the steps needed to install dependencies, repo init, repo sync and even  ' +
            'steps to build the ROM, GSI, EFI & x86. You remember that you were looking for the init link ' +
			'so you copy that text snippet. ',
        next: 'e_back_to_terminal'
    }, {
        // Killed by malware
        id: 'e_link_droid',
        text: 'You follow the link to unlock and root your device. Upon loading the page, a pop-up dialog shows ' +
            'and mentioned that you need to click OK in order to root your device. You click it, and the screen ' +
            'displays a ton of terminal windows opening and closing. You smell smoke from the PC, and before you ' +
            'can reach the power button, the machine shuts off. smoke is still pouring from the case. ' +
			' You have failed, go back to your iPhone looser',
        gameover: 'lose'
	}, {		
        // Killed by youtube
        id: 'e_link_youtube',
        text: 'You follow the link to watch the YouTube video on building Android, and start to soak up all the ' +
            'info provided. At the one hour mark, you remember that you left the meatloaf in the oven, and you ' +
            'are starting to smell a combination of burnt BBQ sauce and beef. You rush to the kitchen to find ' +
            'half the kitchen on fire already. You reach for a fire extinguisher and try to use it. There was no ' +
			'pressure in the extinguisher. You then remember seeing a YouTube video on extinguishing a fire with ' +
			'water, so you quickly throw a bowl of water on the flames. ' +
			'The flames quickly grow because you threw water on a grease fire and you die. Dont believe everything ' +
			'you see on youtube ',
        gameover: 'lose'
    }, {
        // BlissROMs link
        id: 'e_link_blissroms',
        text: 'You load the BlissROMs page, and scroll through it. At the bottom, you notice the BlissROMs github ' +
            'link from earlier. You follow it and are shown a list of repos. ',
        extra: [{
				text: 'You study your options and notice there are a few repos pinned to the top for manifest, ' +
					'frameworks/base, vendor/bliss, etc. ',
			}],
        options: [{
				text: 'Check out the manifest repo',
				goto: 'e_link_manifest'
			}, {
				text: 'Check out frameworks/base repo.',
				goto: 'e_link_fwb'
			}, {
				text: 'Check out the vendor/bliss repo',
				goto: 'e_vendor_bliss'
			}]
    }, {
        // Link fwb
        id: 'e_link_fwb',
        text: 'You click the link to frameworks/base, and are presented with a page of source files. and code. None of ' +
            'this looks like something you are looking for. So you decide to go back to the main repo page' ,
        next: 'e_link_github_again'
    }, {
        // Link vendor/bliss
        id: 'e_vendor_bliss',
        text: 'You click the link to vendor/bliss, and are presented with a page of source files. and code. None of ' +
            'this looks like something you are looking for. So you decide to go back to the main repo page' ,
        next: 'e_link_github_again'
    }, {
        // GitHub again
        id: 'e_link_github_again',
        text: 'You head back to the BlissROMs github link from earlier. You see the same list of repos. ',
        extra: [{
				text: 'You study your options and notice there are a few repos pinned to the top for manifest, ' +
					'frameworks/base, vendor/bliss, etc. ',
			}],
        options: [{
				text: 'Check out the manifest repo',
				goto: 'e_link_manifest'
			}, {
				text: 'Check out frameworks/base repo.',
				goto: 'e_link_fwb'
			}, {
				text: 'Check out the vendor/bliss repo',
				goto: 'e_vendor_bliss'
			}]
    }, {
		// Back to terminal
        id: 'e_back_to_terminal',
        text: 'In the terminal window, you take the text snippet you grabbed and paste it into the terminal ' +
            'window, then hit Return. It spits out a bunch of text and presents you with a message that reads ' +
			'Repo has been successfully initiated. ',
        options: [{
                text: 'View the Github manifest page for the next step',
                goto: 'e_manifest_next'
            }, {
                text: 'Enter repo sync into the terminal',
                goto: 'e_repo_sync'
            }, {
                text: 'Search Google for an answer',
                goto: 'e_google_2'
            }, {
                text: 'Search Youtube for an answer',
                goto: 'e_link_youtube'
            }]
    }, {
		// Google again
        id: 'e_google_2',
        text: 'You head back to google to find out what you do next, so you search for blissroms repo init and ' +
			'are presented a few options. The top two links lead to the BlissROMs github page, so you follow that ',
        next: 'e_link_github_again'
    },{
      // manifest
        id: 'e_manifest_next',
        text: 'You return to the manifest repo, and scroll down to the list of instructions. Once there, you notice ' +
                ' that the next item after the repo init part are about repo sync.  ' +
                'What do you decide to do',
        options: [{
                text: 'Copy the command for repo sync',
                goto: 'e_repo_sync'
            }, {
                text: 'Give up and go watch some TV',
                goto: 'e_go_watch_tv'
            }, {
                text: 'Leave and go outside.',
                goto: 'e_outside'
            }]
    }, {
      // repo sync
        id: 'e_repo_sync',
        text: 'You head back to the terminal and enter the repo sync command into it, and press return ' +
            'The screen lights up with hundreds of lines of text scrolling past the screen endlessly.  ' +
            'After about 30 min, the repo sync finishes and you are presented with a blinking cursor. ' +
			'What do you do now',
        options: [{
                text: 'Head back to the Bliss manifest page to see whats next',
                goto: 'e_go_build'
            }, {
                text: 'Give up and go watch some TV',
                goto: 'e_go_watch_tv'
            }, {
                text: 'Leave and go outside',
                goto: 'e_outside'
            }]
    },{
        // build
        id: 'e_go_build',
        text: 'You head back to the Bliss manifest repo and follow the instructions a little further until ' +
            'you find the section for building. ' +
            'After finding the section, you see a code snippet to initiate the lunch command and build.' +
			'What do you do now',
        options: [{
                text: 'Leave and go outside',
                goto: 'e_outside'
            }, {
                text: 'Copy the code to the terminal window and press enter',
                goto: 'e_go_compile'
            }, {
                text: 'Give up and go watch some TV',
                goto: 'e_go_watch_tv'
            }]
    }, {
      // Die outside
        id: 'e_outside',
        text: 'You decide to give up for now and go outside. Once there, you are confronted with a huge thunderstorm ' +
            ' and lightning clashes and catches your house on fire.' ,
        gameover: 'lose'
    }, {
        // Die watching TV
        id: 'e_go_watch_tv',
        text: 'You decide to give up for now and go watch some TV. Once the TV is turned on, an alien mothership enters ' +
            'earths atmosphere and takes over all TV broadcasts. They state that the people of earth have 30 seconds to ' +
            'say their prayers before they git the reset button on human life. You waste the last 30 seconds of your life ' +
			'by flipping through Facebook on your phone. ',
        gameover: 'lose'
    },
    {
      // WINNING
        id: 'e_go_compile',
        text: 'You copy the lunch command into the terminal, then press return, and select the number representing your ' +
		'device. The build launches and you safely go watch TV for a bit while things are compiling ',
        gameover: 'win',
    },
               
];

/**
 * Parser module for the data format.
 * Reads the data object format and creates an internal copy with required 
 * transformations and parsing. Exposes methods to start/reset the game,
 * advance the game via choices/actions, and read the currently active entry.
 *
 * The module is just data-driven, and returns objects from its methods; it
 * does no handling of game display or user input directly.  It needs a frontend
 * written for it in order for a player to interact with it.
 **/
var CYOA = (function() {

    var ENTRY_DATA,
        currentEntryId, currentEntryData,
        inventory;

    function _init(entryData) {
        // clear state
        ENTRY_DATA = {};
        currentEntryId = null;
        currentEntryData = {};
        inventory = [];

        var startEntryId = null;

        // Parse entry data into internal object
        entryData.forEach(function(entry) {
            ENTRY_DATA[entry.id] = Object.create(entry);

            // Track the starting entry and warn of duplicates
            if (entry.start === true) {
                if (startEntryId !== null) {
                    console.error('More than one starting state defined:', startEntryId, entry.id);
                } else {
                    startEntryId = entry.id;
                }
            }

            // Process extra paragraphs if present
            if (entry.extra) {
                entry.extra.forEach(function(ext) {
                    // convert string options to single-item arrays for easier parsing
                    if (ext.requires && (typeof ext.requires === 'string')) {
                        ext.requires = [ext.requires];
                    }
                });
            }

            // 'Next' overrides all other options
            if (entry.next) {
                entry.options = [{
                    text: 'Continue...',
                    goto: entry.next
                }];
            }
            // Process and validate options
            if (entry.options) {
                entry.options.forEach(function(opt) {
                    // options must have a 'goto'
                    if (!opt.goto) console.error('Entry', entry.id, ' has option without a goto: ', opt.text);
                    // convert string options to single-item arrays for easier parsing
                    if (opt.requires && (typeof opt.requires === 'string')) {
                        opt.requires = [opt.requires];
                    }
                });
            }
        });

        // Set initial state from starting entry
        if (startEntryId === null) console.error('No start entry found');
        _setEntry(startEntryId);
    }

    // Inventory methods (accept string or array)

    function _addToInventory(items) {
        if (typeof items === 'string') items = [items];
        inventory = inventory.concat(items);
    }

    function _takeFromInventory(items) {
        if (typeof items === 'string') items = [items];
        var newInv = [];
        inventory.forEach(function(item) {
            if (items.indexOf(item) === -1) newInv.push(item);
        });
        inventory = newInv;
    }

    function _checkInventory(item) {
        return (inventory.indexOf(item) > -1);
    }

    // Utility method to check a 'requires'-format array against the current inventory
    function _hasRequirements(opt) {
        var isAvailable = true;
        if (opt.requires) {
            opt.requires.forEach(function(req) {
                if (req.charAt(0) === '!' && _checkInventory(req.substr(1))) isAvailable = false;
                if (req.charAt(0) !== '!' && !_checkInventory(req)) isAvailable = false;
            });
        }
        return isAvailable;
    }

    // Updates the current entry data to the given entry ID.
    // Composes the current entry data based on conditionals set in the entry data,
    // including required inventory to display options, etc.
    // Also makes changes to inventory and state based on the definition data.
    function _setEntry(id) {
        if (!id in ENTRY_DATA) console.error('Unable to change entry: invalid entry id', id);
        currentEntryId = id;

        var data = ENTRY_DATA[id];
        currentEntryData = {
            id: data.id,
            text: data.text,
            extra: []
        };

        // Add/remove inventory items in this entry
        if (data.gives) _addToInventory(data.gives);
        if (data.takes) _takeFromInventory(data.takes);

        // Update text with extras
        if (data.extra) {
            data.extra.forEach(function(ext) {
                if (_hasRequirements(ext)) currentEntryData.extra.push(ext.text);
            });
        }

        // State modifiers
        // TODO: make this more definitive and mutate options accordingly
        if (data.gameover) currentEntryData.gameover = data.gameover;

        // Define available options based on inventory requirements
        if (data.options) {
            currentEntryData.options = [];
            data.options.forEach(function(opt, idx) {
                if (_hasRequirements(opt)) {
                    currentEntryData.options.push({
                        text: opt.text,
                        goto: opt.goto
                    });
                }
            });
        }
        return currentEntryData;
    }

    function startGame(data) {
        _init(data);
    }

    function getCurrentEntry() {
        if (currentEntryData === {}) console.error('No current entry; has the game started?');
        return currentEntryData;
    }

    function getInventory() {
        return inventory;
    }

    // Changes the active entry according to the numeric ID of the option passed in,
    // if it is present in the current entry.
    function doOption(idx) {
        if (!currentEntryData.options) console.error('Can not complete option', idx);
        var opt = currentEntryData.options[idx];
        var newEntryId = opt.goto;
        if (!newEntryId in ENTRY_DATA) console.error('Cannot do option: invalid goto id', newEntryId);
        return _setEntry(newEntryId);
    }

    return {
        startGame: startGame,
        getCurrentEntry: getCurrentEntry,
        getInventory: getInventory,
        doOption: doOption
    };
})();

/**
 * Some simple jQuery DOM logic for demo purposes.
 * This could easily be expanded for better presentation,
 * per-location graphics, all kinds of stuff.
 **/
var Game = (function() {

    var DATA;

    // Container element to render into
    var $el = $('#output_a');

    // Text for game over scenarios
    var endMsgs = {
        win: 'You won! Play again...',
        lose: 'You failed.  Restart...'
    };

    // Reads the current entry data and puts DOM nodes
    // in the container to display the text and options
    function render(isStart) {
        var d = CYOA.getCurrentEntry();

        // Clear the container and write the body text
        $el.html('');
        if (isStart) $el.append('<p class="title">*** Build BlissROM ***</p>');
        $el.append('<p>' + d.text + '</p>');

        d.extra.forEach(function(ext) {
            $el.append('<p>' + ext + '</p>');
        });

        // Write out a list of option or restart links in a list
        // (click handlers bound in init() will handle these)
        var $opts = $('<ul/>');
        if (d.gameover) {
            var $action = $('<li><a class="opt gameover ' + d.gameover + '" href="#">' +
                endMsgs[d.gameover] + '</a></li>');
            $opts.append($action);
        }
        if (d.options) {
            d.options.forEach(function(opt, idx) {
                var $opt = $('<li><a class="opt action" href="#" data-opt="' + idx + '">' +
                    opt.text + '</a></li>');
                $opts.append($opt);
            });
        }
        $el.append($opts);

        // Show current inventory
        if (!d.gameover) {
            var inv = CYOA.getInventory();
            if (inv.length) {
                $el.append('<p class="inv">You are carrying: ' + inv.join(', ') + '</p>');
            }
        }
    }

    function init(entryData) {

        DATA = entryData;

        // Click handlers for option links.  Bound to the document
        // as we destroy and rebuild the links per-entry.
        $(document).on('click', '.action', function(e) {
            e.preventDefault();
            var opt = $(this).attr('data-opt');
            console.log('do option', opt);
            if (CYOA.doOption(opt)) render();
        });

        // As above but for win/lose links.  Restart the game when used
        $(document).on('click', '.gameover', function(e) {
            e.preventDefault();
            _start();
        });

        _start();
    }

    function _start() {
        // Init the game and render the first entry
        CYOA.startGame(DATA);
        render(true);
    }

    return {
        init: init
    }

})();

// Kick off 
Game.init(ENTRIES);