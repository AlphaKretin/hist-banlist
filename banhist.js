const fetch = require("node-fetch");
const fs = require("fs").promises;

async function getAPIList(set) {
	const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=" + encodeURIComponent(set);
	const res = await fetch(url);
	const body = await res.json();
	return body.data;
}

const sets = {
	classic: {
		2002: [
			"Legend of Blue Eyes White Dragon",
			"Magic Ruler",
			"McDonald's Promotional Cards",
			"Metal Raiders",
			"Shonen Jump Vol. 1, Issue 1 promotional card",
			"Spell Ruler",
			"Starter Deck: Kaiba",
			"Starter Deck: Yugi",
			"Tournament Pack: 1st Season",
			"Tournament Pack: 2nd Season",
			"Yu-Gi-Oh! Dark Duel Stories promotional cards",
			"Yu-Gi-Oh! Forbidden Memories promotional cards",
			"Yu-Gi-Oh! The Eternal Duelist Soul promotional cards"
		],
		2003: [
			"Dark Crisis",
			"Duel Master's Guide promotional cards",
			"Labyrinth of Nightmare",
			"Legacy of Darkness",
			"Magician's Force",
			"Pharaonic Guardian",
			"Starter Deck: Joey",
			"Starter Deck: Pegasus",
			"Tournament Pack 4",
			"Tournament Pack: 3rd Season",
			"Yu-Gi-Oh! Power of Chaos: Yugi the Destiny promotional cards",
			"Yu-Gi-Oh! The Duelists of the Roses promotional cards",
			"Yu-Gi-Oh! The Falsebound Kingdom promotional cards",
			"Yu-Gi-Oh! The Sacred Cards promotional cards",
			"Yu-Gi-Oh! Worldwide Edition: Stairway to the Destined Duel promotional cards"
		],
		2004: [
			"Ancient Sanctuary",
			"Collectible Tins 2004",
			"Dark Beginning 1",
			"Duelist League Series 6 participation card",
			"Exclusive Pack",
			"Hobby League 1 participation cards A",
			"Hobby League 1 participation cards B",
			"Invasion of Chaos",
			"Invasion of Chaos: Special Edition",
			"Kids WB Duel of Destiny promotional card",
			"Master Collection Volume 1",
			"Master Collection Volume 2",
			"Rise of Destiny",
			"Rise of Destiny: Special Edition",
			"Shonen Jump Championship 2004 Prize Card",
			"Soul of the Duelist",
			"Starter Deck: Kaiba Evolution",
			"Starter Deck: Yugi Evolution",
			"Tournament Pack 5",
			"Yu-Gi-Oh! Capsule Monster Coliseum promotional cards",
			"Yu-Gi-Oh! Destiny Board Traveler promotional cards",
			"Yu-Gi-Oh! Power of Chaos: Kaiba the Revenge promotional cards",
			"Yu-Gi-Oh! Reshef of Destruction promotional cards",
			"Yu-Gi-Oh! The Dawn of Destiny promotional cards",
			"Yu-Gi-Oh! World Championship Tournament 2004 promotional cards"
		],
		2005: [
			"Cybernetic Revolution",
			"Cybernetic Revolution Sneak Peek Participation Card",
			"Dark Beginning 2",
			"Dark Revelation Volume 1",
			"Dark Revelation Volume 2",
			"Duelist League Series 7 participation card",
			"Duelist League Series 8 participation card",
			"Elemental Energy",
			"Elemental Energy Sneak Peek Participation Card",
			"Elemental Energy: Special Edition",
			"Flaming Eternity",
			"Flaming Eternity Sneak Peek Participation Card",
			"Hobby League 1 participation cards C",
			"Master Collection Volume 1",
			"Master Collection Volume 2",
			"Shonen Jump Vol. 3, Issue 1 promotional card",
			"Shonen Jump Vol. 4, Issue 1 promotional card",
			"Structure Deck: Blaze of Destruction",
			"Structure Deck: Dragon's Roar",
			"Structure Deck: Fury from the Deep",
			"Structure Deck: Warrior's Triumph",
			"Structure Deck: Zombie Madness",
			"The Lost Millennium",
			"The Lost Millennium Sneak Peek Participation Card",
			"The Lost Millennium: Special Edition",
			"Tournament Pack 6",
			"Tournament Pack 7",
			"Yu-Gi-Oh! 7 Trials to Glory: World Championship Tournament 2005 promotional cards"
		],
		2006: [
			"Champion Pack: Game One",
			"Cyberdark Impact",
			"Cyberdark Impact Sneak Peek Participation Card",
			"Dark Revelation Volume 3",
			"Duelist League Series 10 participation card",
			"Duelist League Series 9 participation card",
			"Duelist Pack: Chazz Princeton",
			"Duelist Pack: Jaden Yuki",
			"Enemy of Justice",
			"Enemy of Justice Sneak Peek Participation Card",
			"Hobby League 2 participation card A",
			"Hobby League 2 participation card B",
			"Hobby League 2 participation card C",
			"Hobby League 2 participation card D",
			"Hobby League 2 participation card E",
			"Hobby League 2 participation card F",
			"Hobby League 3 participation card A",
			"Hobby League 3 participation card B",
			"Hobby League 3 participation card C",
			"Hobby League 3 participation card D",
			"Hobby League 3 participation card E",
			"Hobby League 3 participation card F",
			"McDonald's Promotional Cards 2",
			"Power of the Duelist",
			"Power of the Duelist Sneak Peek Participation Card",
			"Shadow of Infinity",
			"Shadow of Infinity Sneak Peek Participation Card",
			"Shadow of Infinity: Special Edition",
			"Shonen Jump Championship 2006 Prize Card",
			"Starter Deck 2006",
			"Starter Deck 2006: Special Edition",
			"Structure Deck: Dinosaur's Rage",
			"Structure Deck: Dinosaur's Rage Special Set",
			"Structure Deck: Invincible Fortress",
			"Structure Deck: Lord of the Storm",
			"Structure Deck: Spellcaster's Judgment",
			"Tournament Pack 8",
			"Yu-Gi-Oh! GX Ultimate Beginner's Pack",
			"Yu-Gi-Oh! Ultimate Masters: World Championship Tournament 2006 promotional cards"
		],
		2007: [
			"Champion Pack: Game Four",
			"Champion Pack: Game Three",
			"Champion Pack: Game Two",
			"Collectible Tins 2007 Wave 1",
			"Dark Revelation Volume 4",
			"Duelist Pack: Aster Phoenix",
			"Duelist Pack: Jaden Yuki 2",
			"Duelist Pack: Zane Truesdale",
			"Force of the Breaker",
			"Force of the Breaker: Special Edition",
			"Gladiator's Assault",
			"Gladiator's Assault: Special Edition",
			"Hobby League 4 participation card A",
			"Hobby League 4 participation card B",
			"Hobby League 4 participation card C",
			"Hobby League 4 participation card D",
			"Hobby League 4 participation card E",
			"Hobby League 4 participation card F",
			"Hobby League 5 participation card A",
			"Hobby League 5 participation card B",
			"Hobby League 5 participation card C",
			"Hobby League 5 participation card D",
			"Hobby League 5 participation card E",
			"Hobby League 5 participation card F",
			"Pharaoh Tour 2007 promotional cards",
			"Premium Pack (TCG)",
			"Rise of the Dragon Lords Structure Deck",
			"Shonen Jump 2007 subscription bonus",
			"Shonen Jump Championship 2007 Prize Card A",
			"Shonen Jump Championship 2007 Prize Card B",
			"Shonen Jump Vol. 5, Issue 4 promotional card",
			"Shonen Jump Vol. 5, Issue 6 promotional card",
			"Starter Deck: Jaden Yuki",
			"Starter Deck: Syrus Truesdale",
			"Strike of Neos",
			"Strike of Neos: Special Edition",
			"Structure Deck: Machine Re-Volt",
			"Tactical Evolution",
			"Tactical Evolution: Special Edition",
			"Yu-Gi-Oh! GX Card Almanac promotional cards",
			"Yu-Gi-Oh! GX Spirit Caller promotional cards",
			"Yu-Gi-Oh! GX Tag Force 2 promotional cards",
			"Yu-Gi-Oh! GX Volume 1 promotional card",
			"Yu-Gi-Oh! World Championship 2007 promotional cards"
		],
		2008: [
			"Champion Pack: Game Five",
			"Champion Pack: Game Seven",
			"Champion Pack: Game Six",
			"Crossroads of Chaos",
			"Crossroads of Chaos: Special Edition",
			"Dark Legends",
			"Duelist Pack: Jaden Yuki 3",
			"Duelist Pack: Jesse Anderson",
			"Gold Series",
			"Hobby League 6 participation card A",
			"Hobby League 6 participation card B",
			"Hobby League 6 participation card C",
			"Hobby League 6 participation card D",
			"Hobby League 6 participation card E",
			"Hobby League 6 participation card F",
			"Hobby League 7 participation card A",
			"Hobby League 7 participation card B",
			"Hobby League 7 participation card C",
			"Hobby League 7 participation card D",
			"Hobby League 7 participation card E",
			"Hobby League 7 participation card F",
			"Light of Destruction",
			"Light of Destruction: Special Edition",
			"Phantom Darkness",
			"Phantom Darkness: Special Edition",
			"Premium Pack 2 (TCG)",
			"Retro Pack",
			"Shonen Jump Championship 2008 Prize Card",
			"Shonen Jump May 2008 subscription bonus",
			"Shonen Jump Vol. 6, Issue 3 promotional card",
			"Starter Deck: Yu-Gi-Oh! 5D's",
			"The Dark Emperor Structure Deck",
			"The Duelist Genesis",
			"The Duelist Genesis: Special Edition",
			"Yu-Gi-Oh! GX Tag Force 3 promotional cards",
			"Yu-Gi-Oh! GX Tag Force Evolution promotional cards",
			"Zombie World Structure Deck"
		],
		2009: [
			"Ancient Prophecy",
			"Ancient Prophecy: Special Edition",
			"Champion Pack: Game Eight",
			"Collectible Tins 2009 Wave 1",
			"Collectible Tins 2009 Wave 2",
			"Collectible Tins Exclusive 2009",
			"Crimson Crisis",
			"Crimson Crisis: Special Edition",
			"Duel Terminal - Preview Wave 2",
			"Duelist Pack: Yugi",
			"Duelist Pack: Yusei",
			"Gold Series 2009",
			"Hidden Arsenal",
			"Raging Battle",
			"Raging Battle: Special Edition",
			"Retro Pack 2",
			"Shonen Jump Championship 2009 Prize Card",
			"Shonen Jump February 2009 subscription bonus",
			"Shonen Jump Vol. 7, Issue 1 promotional card",
			"Shonen Jump Vol. 7, Issue 11 promotional card",
			"Shonen Jump Vol. 7, Issue 3 promotional card",
			"Shonen Jump Vol. 7, Issue 6 promotional card",
			"Spellcaster's Command Structure Deck",
			"Stardust Overdrive",
			"Stardust Overdrive: Special Edition",
			"Starter Deck: Yu-Gi-Oh! 5D's 2009",
			"Turbo Pack: Booster One",
			"Warriors' Strike Structure Deck",
			"Yu-Gi-Oh! 5D's Stardust Accelerator promotional cards",
			"Yu-Gi-Oh! 5D's Tag Force 4 promotional cards",
			"Yu-Gi-Oh! 5D's Wheelie Breakers Promotional Cards",
			"Yu-Gi-Oh! 5D's World Championship 2009: Stardust Accelerator promotional cards",
			"Yu-Gi-Oh! GX Volume 3 promotional card",
			"Yu-Gi-Oh! R Volume 1 promotional card"
		],
		2010: [
			"Absolute Powerforce",
			"Absolute Powerforce: Special Edition",
			"Collectible Tins 2010 Wave 1",
			"Collectible Tins 2010 Wave 2",
			"Duel Terminal 1",
			"Duel Terminal 2",
			"Duel Terminal 3",
			"Duelist League 2 participation cards",
			"Duelist League 2010 participation cards",
			"Duelist Pack: Kaiba",
			"Duelist Pack: Yusei 2",
			"Duelist Revolution",
			"Duelist Revolution: Special Edition",
			"Gold Series 3",
			"Hidden Arsenal 2",
			"Hidden Arsenal 3",
			"Machina Mayhem Structure Deck",
			"Shonen Jump Championship 2009 Prize Card",
			"Shonen Jump December 2010 subscription bonus",
			"Shonen Jump May 2010 subscription bonus",
			"Shonen Jump Vol. 8, Issue 1 promotional card",
			"Shonen Jump Vol. 8, Issue 11 promotional card",
			"Shonen Jump Vol. 8, Issue 3 promotional card",
			"Shonen Jump Vol. 8, Issue 5 promotional card",
			"Shonen Jump Vol. 8, Issue 7 promotional card",
			"Shonen Jump Vol. 8, Issue 9 promotional card",
			"Starstrike Blast",
			"Starter Deck: Duelist Toolbox",
			"Structure Deck: Marik (TCG)",
			"The Shining Darkness",
			"Turbo Pack: Booster Four",
			"Turbo Pack: Booster Three",
			"Turbo Pack: Booster Two",
			"World Championship 2010 Card Pack",
			"Yu-Gi-Oh! 5D's Tag Force 5 promotional cards",
			"Yu-Gi-Oh! 5D's World Championship 2010: Reverse of Arcadia promotional cards",
			"Yu-Gi-Oh! GX Volume 4 promotional card",
			"Yu-Gi-Oh! GX Volume 5 promotional card",
			"Yu-Gi-Oh! R Volume 3 promotional card",
			"Yu-Gi-Oh! R Volume 5 promotional card"
		],
		2011: [
			"Collectible Tins 2011 Wave 1",
			"Collectible Tins 2011 Wave 2",
			"Demo Pack",
			"Dragunity Legion Structure Deck",
			"Duel Terminal 4",
			"Duel Terminal 5a",
			"Duel Terminal 5b",
			"Duelist League 13 participation cards",
			"Duelist League 3 participation cards",
			"Duelist Pack Collection Tin 2011",
			"Duelist Pack: Crow",
			"Duelist Pack: Yusei 3",
			"Extreme Victory",
			"Gates of the Underworld Structure Deck",
			"Generation Force",
			"Generation Force: Special Edition",
			"Gold Series 4: Pyramids Edition",
			"Hidden Arsenal 4: Trishula's Triumph",
			"Hidden Arsenal 5: Steelswarm Invasion",
			"Legendary Collection 2: The Duel Academy Years",
			"Legendary Collection 2: The Duel Academy Years Mega Pack",
			"Lost Sanctuary Structure Deck",
			"Photon Shockwave",
			"Samurai Assault",
			"Shonen Jump December 2011 subscription bonus",
			"Shonen Jump June/July 2011 subscription bonus",
			"Shonen Jump Scholastic Edition Vol. 9, Issue 1 promotional card",
			"Shonen Jump Vol. 9, Issue 1 promotional card",
			"Shonen Jump Vol. 9, Issue 10 promotional card",
			"Shonen Jump Vol. 9, Issue 3 promotional card",
			"Shonen Jump Vol. 9, Issue 4 promotional card",
			"Shonen Jump Vol. 9, Issue 6 promotional card",
			"Shonen Jump Vol. 9, Issue 8 promotional card",
			"Starter Deck: Dawn of the Xyz",
			"Storm of Ragnarok",
			"Storm of Ragnarok: Special Edition",
			"Turbo Pack: Booster Five",
			"Turbo Pack: Booster Six",
			"World Championship 2011 Card Pack",
			"Yu-Gi-Oh! 3D Bonds Beyond Time DVD promotional card",
			"Yu-Gi-Oh! 3D Bonds Beyond Time Movie Pack",
			"Yu-Gi-Oh! 5D's Volume 1 promotional card",
			"Yu-Gi-Oh! 5D's World Championship 2011: Over the Nexus promotional cards",
			"Yu-Gi-Oh! Championship Series 2011 Prize Card",
			"Yu-Gi-Oh! GX Volume 7 promotional card"
		],
		2012: [
			"Abyss Rising",
			"Abyss Rising: Special Edition",
			"Astral Pack One",
			"Battle Pack: Epic Dawn",
			"Collectible Tins 2012 Wave 1",
			"Collectible Tins 2012 Wave 2",
			"Dragons Collide Structure Deck",
			"Duel Terminal 6a",
			"Duel Terminal 6b",
			"Duel Terminal 7a",
			"Duelist League 14 participation cards",
			"Duelist League 15 participation cards",
			"Galactic Overlord",
			"Gold Series: Haunted Mine",
			"Hidden Arsenal 5: Steelswarm Invasion: Special Edition",
			"Hidden Arsenal 6: Omega Xyz",
			"Legendary Collection 3: Yugi's World",
			"Legendary Collection 3: Yugi's World Mega Pack",
			"Order of Chaos",
			"Order of Chaos: Special Edition",
			"Ra Yellow Mega Pack",
			"Ra Yellow Mega Pack: Special Edition",
			"Realm of the Sea Emperor Structure Deck",
			"Return of the Duelist",
			"Return of the Duelist: Special Edition",
			"Samurai Warlords Structure Deck",
			"Shonen Jump Vol. 10, Issue 1 promotional card",
			"Shonen Jump Vol. 10, Issue 3 promotional card",
			"Shonen Jump Vol. 10, Issue 4 promotional card",
			"Starter Deck: Xyz Symphony",
			"Turbo Pack: Booster Eight",
			"Turbo Pack: Booster Seven",
			"Weekly Shonen Jump Alpha December 2012 membership promotional card",
			"Weekly Shonen Jump Alpha July 2012 membership promotional card",
			"Yu-Gi-Oh! 5D's Volume 2 promotional card",
			"Yu-Gi-Oh! 5D's Volume 3 promotional card",
			"Yu-Gi-Oh! GX Volume 8 promotional card",
			"Yu-Gi-Oh! GX Volume 9 promotional card",
			"Yu-Gi-Oh! ZEXAL Volume 1 promotional card",
			"Yu-Gi-Oh! ZEXAL Volume 2 promotional card"
		],
		2013: [
			"2013 Collectible Tins Wave 1",
			"2013 Collectible Tins Wave 2",
			"Astral Pack Three",
			"Astral Pack Two",
			"Battle Pack 2: War of the Giants",
			"Collectible Tins 2012 Wave 2.5",
			"Cosmo Blazer",
			"Cosmo Blazer: Special Edition",
			"Duel Terminal 7b",
			"Duelist League 16 participation cards",
			"Duelist League 17 participation cards",
			"Hidden Arsenal 7: Knight of Stars",
			"Judgment of the Light",
			"Judgment of the Light: Deluxe Edition",
			"Legendary Collection 4: Joey's World",
			"Legendary Collection 4: Joey's World Mega Pack",
			"Lord of the Tachyon Galaxy",
			"Number Hunters",
			"Onslaught of the Fire Kings Structure Deck",
			"Saga of Blue-Eyes White Dragon Structure Deck",
			"Shadow Specters",
			"Shadow Specters: Special Edition",
			"Star Pack 2013",
			"Starter Deck: Kaiba Reloaded",
			"Starter Deck: Yugi Reloaded",
			"Super Starter Power-Up Pack",
			"Super Starter: V for Victory",
			"Weekly Shonen Jump December 2013 membership promotional card",
			"Weekly Shonen Jump July 2013 membership promotional card",
			"Weekly Shonen Jump March 2013 membership promotional card",
			"Weekly Shonen Jump September 2013 membership promotional card",
			"Yu-Gi-Oh! 5D's Volume 4 promotional card",
			"Yu-Gi-Oh! Championship Series 2013 Prize Card",
			"Zexal Collection Tin"
		],
		2014: [
			"Astral Pack Four",
			"Cyber Dragon Revolution Structure Deck",
			"Dragons of Legend",
			"Duelist League 18 participation cards",
			"Legacy of the Valiant",
			"Legacy of the Valiant: Deluxe Edition",
			"Premium Gold",
			"Primal Origin",
			"Primal Origin Plus",
			"Primal Origin: Deluxe Edition",
			"Realm of Light Structure Deck",
			"Star Pack 2014",
			"War of the Giants: Round 2",
			"Weekly Shonen Jump March 2014 membership promotional card",
			"Yu-Gi-Oh! ZEXAL Volume 4 promotional card",
			"Yu-Gi-Oh! ZEXAL World Duel Carnival promotional cards"
		]
	},

	modern: {
		2014: [
			"2014 Mega-Tin Mega Pack",
			"2014 Mega-Tins",
			"Astral Pack Five",
			"Astral Pack Four",
			"Astral Pack Six",
			"Battle Pack 3: Monster League",
			"Cyber Dragon Revolution Structure Deck",
			"Dragons of Legend",
			"Duelist Alliance",
			"Duelist Alliance: Deluxe Edition",
			"Duelist League 18 participation cards",
			"Geargia Rampage Structure Deck",
			"Legacy of the Valiant",
			"Legacy of the Valiant: Deluxe Edition",
			"Legendary Collection 5D's",
			"Legendary Collection 5D's Mega Pack",
			"Noble Knights of the Round Table Box Set",
			"Noble Knights of the Round Table Power-Up Pack",
			"Premium Gold",
			"Primal Origin",
			"Primal Origin Plus",
			"Primal Origin: Deluxe Edition",
			"Realm of Light Structure Deck",
			"Space-Time Showdown Power-Up Pack",
			"Star Pack 2014",
			"Super Starter: Space-Time Showdown",
			"The New Challengers",
			"The New Challengers: Super Edition",
			"War of the Giants: Round 2",
			"Weekly Shonen Jump August 2014 membership promotional card",
			"Weekly Shonen Jump March 2014 membership promotional card",
			"Weekly Shonen Jump November 2014 membership promotional card",
			"Yu-Gi-Oh! Advent Calendar",
			"Yu-Gi-Oh! Championship Series 2014 Prize Card",
			"Yu-Gi-Oh! ZEXAL Volume 4 promotional card",
			"Yu-Gi-Oh! ZEXAL Volume 5 promotional card",
			"Yu-Gi-Oh! ZEXAL World Duel Carnival promotional cards"
		],
		2015: [
			"2015 Mega-Tin Mega Pack",
			"2015 Mega-Tins",
			"Astral Pack Eight",
			"Astral Pack Seven",
			"Clash of Rebellions",
			"Clash of Rebellions: Special Edition",
			"Crossed Souls",
			"Crossed Souls: Advance Edition",
			"Dark Legion Starter Deck",
			"Demo Deck 2015",
			"Dimension of Chaos",
			"Dimension of Chaos: Special Edition",
			"Dragons of Legend 2",
			"Duelist Pack: Battle City",
			"HERO Strike Structure Deck",
			"High-Speed Riders",
			"Master of Pendulum Structure Deck",
			"Premium Gold: Return of the Bling",
			"Saber Force Starter Deck",
			"Secrets of Eternity",
			"Secrets of Eternity: Super Edition",
			"Star Pack ARC-V",
			"Synchron Extreme Structure Deck",
			"The Secret Forces",
			"Weekly Shonen Jump April 2015 membership promotional card",
			"Weekly Shonen Jump July 2015 membership promotional card",
			"Weekly Shonen Jump October 2015 membership promotional card",
			"World Superstars",
			"Yu-Gi-Oh! 5D's Volume 7 promotional card",
			"Yu-Gi-Oh! Championship Series 2015 Prize Card"
		],
		2016: [
			"2016 Mega-Tin Mega Pack",
			"2016 Mega-Tins",
			"Breakers of Shadow",
			"Breakers of Shadow: Special Edition",
			"Demo Deck 2016",
			"Destiny Soldiers",
			"Dragons of Legend: Unleashed",
			"Duelist Pack: Rivals of the Pharaoh",
			"Emperor of Darkness Structure Deck",
			"Invasion: Vengeance",
			"Invasion: Vengeance: Special Edition",
			"Legendary Decks II",
			"Millennium Pack",
			"OTS Tournament Pack 1",
			"OTS Tournament Pack 2",
			"OTS Tournament Pack 3",
			"Premium Gold: Infinite Gold",
			"Rise of the True Dragons Structure Deck",
			"Shining Victories",
			"Shining Victories: Special Edition",
			"Starter Deck: Yuya",
			"Structure Deck: Seto Kaiba",
			"Structure Deck: Yugi Muto",
			"The Dark Illusion",
			"The Dark Illusion: Special Edition",
			"Weekly Shonen Jump April 2016 membership promotional card",
			"Weekly Shonen Jump January 2016 membership promotional card",
			"Weekly Shonen Jump July 2016 membership promotional card",
			"Weekly Shonen Jump October 2016 membership promotional card",
			"Wing Raiders",
			"Yu-Gi-Oh! 5D's Volume 9 promotional card",
			"Yu-Gi-Oh! Championship Series 2016 Prize Card",
			"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack"
		],
		2017: [
			"2017 Mega-Tin Mega Pack",
			"2017 Mega-Tins",
			"Battles of Legend: Light's Revenge",
			"Circuit Break",
			"Circuit Break Special Edition",
			"Code of the Duelist",
			"Code of the Duelist Special Edition",
			"Dinosmasher's Fury Structure Deck",
			"Duelist Pack: Dimensional Guardians",
			"Duelist Saga",
			"Fusion Enforcers",
			"Legendary Dragon Decks",
			"Legendary Duelists",
			"Machine Reactor Structure Deck",
			"Maximum Crisis",
			"Maximum Crisis: Special Edition",
			"OTS Tournament Pack 4",
			"OTS Tournament Pack 5",
			"OTS Tournament Pack 6",
			"Pendulum Domination Structure Deck",
			"Pendulum Evolution",
			"Raging Tempest",
			"Raging Tempest: Special Edition",
			"Spirit Warriors",
			"Star Pack Battle Royal",
			"Starter Deck: Link Strike",
			"Structure Deck: Cyberse Link",
			"Weekly Shonen Jump April 2017 membership promotional card",
			"Weekly Shonen Jump January 2017 membership promotional card",
			"Weekly Shonen Jump July 2017 membership promotional card",
			"Weekly Shonen Jump November 2017 membership promotional card",
			"Yu-Gi-Oh! ARC-V Volume 2 promotional card",
			"Yu-Gi-Oh! Championship Series 2017 prize card",
			"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack: Gold Edition"
		],
		2018: [
			"2018 Mega-Tin Mega Pack",
			"2018 Mega-Tins",
			"Battles of Legend: Relentless Revenge",
			"Cybernetic Horizon",
			"Cybernetic Horizon Special Edition",
			"Dark Saviors",
			"Extreme Force",
			"Extreme Force Special Edition",
			"Flames of Destruction",
			"Flames of Destruction Special Edition",
			"Hidden Summoners",
			"Legendary Collection Kaiba",
			"Legendary Collection Kaiba Mega Pack",
			"Legendary Duelists: Ancient Millennium",
			"Legendary Duelists: White Dragon Abyss",
			"Legendary Hero Decks",
			"OTS Tournament Pack 7",
			"OTS Tournament Pack 8",
			"OTS Tournament Pack 9",
			"Shadows in Valhalla",
			"Soul Fusion",
			"Soul Fusion Special Edition",
			"Star Pack VRAINS",
			"Starter Deck: Codebreaker",
			"Structure Deck: Lair of Darkness",
			"Structure Deck: Powercode Link",
			"Structure Deck: Wave of Light",
			"Structure Deck: Zombie Horde",
			"Weekly Shonen Jump April 2018 membership promotional card",
			"Weekly Shonen Jump December 2018 membership promotional cards",
			"Weekly Shonen Jump January 2018 membership promotional card",
			"Weekly Shonen Jump July 2018 membership promotional card",
			"Weekly Shonen Jump November 2018 membership promotional card",
			"Yu-Gi-Oh! Advent Calendar (2018)",
			"Yu-Gi-Oh! ARC-V Volume 3 promotional card",
			"Yu-Gi-Oh! Championship Series 2018 prize card"
		],
		2019: [
			"2019 Gold Sarcophagus Tin",
			"2019 Gold Sarcophagus Tin Mega Pack",
			"Battles of Legend: Hero's Revenge",
			"Chaos Impact",
			"Chaos Impact Special Edition",
			"Dark Neostorm",
			"Dark Neostorm Special Edition",
			"Duel Devastator",
			"Duel Power",
			"Event Pack Speed Duel",
			"Fists of the Gadgets",
			"Legendary Duelists: Immortal Destiny",
			"Legendary Duelists: Sisters of the Rose",
			"Mystic Fighters",
			"OTS Tournament Pack 10",
			"OTS Tournament Pack 11",
			"OTS Tournament Pack 12",
			"Rising Rampage",
			"Rising Rampage Special Edition",
			"Savage Strike",
			"Savage Strike Special Edition",
			"Speed Duel Demo Deck",
			"Speed Duel Starter Decks: Destiny Masters",
			"Speed Duel Starter Decks: Duelists of Tomorrow",
			"Speed Duel Starter Decks: Ultimate Predators",
			"Speed Duel Tournament Pack 1",
			"Speed Duel Tournament Pack 2",
			"Speed Duel: Arena of Lost Souls",
			"Speed Duel: Attack from the Deep",
			"Speed Duel: Scars of Battle",
			"Speed Duel: Trials of the Kingdom",
			"Structure Deck: Order of the Spellcasters",
			"Structure Deck: Rokket Revolt",
			"Structure Deck: Soulburner",
			"The Infinity Chasers",
			"Yu-Gi-Oh! Advent Calendar (2019)",
			"Yu-Gi-Oh! ARC-V Volume 6 promotional card"
		],
		2020: [
			"Duel Overload",
			"Eternity Code",
			"Ignition Assault",
			"Ignition Assault Special Edition",
			"Legendary Duelists: Magical Hero",
			"Secret Slayers",
			"Speed Duel Starter Decks: Match of the Millennium",
			"Speed Duel Starter Decks: Twisted Nightmares",
			"Structure Deck: Mechanized Madness",
			"Structure Deck: Shaddoll Showdown",
			"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack Secret Edition"
		]
	}
};

const cards = {
	classic: {
		2002: {},
		2003: {},
		2004: {},
		2005: {},
		2006: {},
		2007: {},
		2008: {},
		2009: {},
		2010: {},
		2011: {},
		2012: {},
		2013: {},
		2014: {}
	},
	modern: {
		2014: {},
		2015: {},
		2016: {},
		2017: {},
		2018: {},
		2019: {},
		2020: {}
	}
};

async function generateCardLists(key) {
	for (const year in sets[key]) {
		console.log(`Processing ${key} year ${year}`);
		const setCards = await getAPIList(sets[key][year].join(";"));
		for (const card of setCards) {
			cards[key][year][card.id] = card.id + " 1 --" + card.name;
		}
	}
}

function getYearPairs(years) {
	const pairs = [];
	for (let i = 0; i < years.length - 1; i++) {
		pairs.push([years[i], years[i + 1]]);
	}
	return pairs;
}

async function generateBanlists(key) {
	const years = Object.keys(cards[key]);
	const pairs = getYearPairs(years);
	for (const pair of pairs) {
		const list =
			"#[" +
			pair[0] +
			"-" +
			pair[1] +
			" Histlander]\n!" +
			pair[0] +
			"-" +
			pair[1] +
			" Histlander\n$whitelist\n" +
			Object.values(cards[key][pair[0]]).join("\n") +
			"\n" +
			Object.values(cards[key][pair[1]]).join("\n");
		const filename = "Hist." + pair[0] + "." + pair[1] + ".lflist.conf";
		await fs.writeFile(filename, list, "utf8");
	}
}

generateCardLists("classic")
	.then(() => {
		generateBanlists("classic").catch(console.error);
	})
	.catch(console.error);

generateCardLists("modern")
	.then(() => {
		generateBanlists("modern").catch(console.error);
	})
	.catch(console.error);
