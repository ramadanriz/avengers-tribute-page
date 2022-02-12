// history
const history = [
	['Battle of New York','The Avengers were a team of extraordinary individuals, with either superpowers or other special characteristics. Its purpose was to protect global stability from inner or extraterrestrial threats. Though primarily affiliated with the United States of America, they worked with the peaceful interests of the whole world in mind rather than a specific country or organization. The Avengers were first assembled by S.H.I.E.L.D. when Loki invaded Earth with his Chitauri army to conquer the planet. The team, consisting of Iron Man, Thor, Captain America, Black Widow, Hawkeye and Hulk, defeated Loki and went their separate ways for a while.'],
	['The New Team', 'After their victory against HYDRA, Stark built Ultron, hoping that the A.I. would be able to defend the world from any threats necessary in place of the Avengers. The plan backfired and Ultron started a war against humanity, forcing the Avengers to fight him. When Ultron was defeated, Hulk, Barton, Thor and Stark left the team, so Scarlet Witch, Vision, War Machine and Falcon were recruited, and they were relocated to the New Avengers Facility.'],
	['Clash of the Avengers','Under Captain America\'s leadership, the team completed several operations around the world with success, until the amount of collateral damage during their conflicts caused the United Nations to pass the Sokovia Accords in an attempt to regulate their actions, turning the team from a private organization to one which was under the control of the government. The differences in opinions created a rift within the team which split the Avengers into two factions, one led by Iron Man and the other by Captain America.'],
	['Battle of Titan','The Avengers were split up into different groups as they fought to combat Thanos before he succeeded, joining forces with the Masters of the Mystic Arts, the Wakandans, and the Guardians of the Galaxy. Iron Man and Spider-Man went to Titan alongside Doctor Strange, where they allied with Star-Lord, Nebula, Mantis and Drax to try to stop Thanos, while Captain America, Banner, Black Widow, War Machine, Falcon, Thor, Groot, Rocket Raccoon and Scarlet Witch protected Vision from the Black Order in Wakanda.'],
	['The Death of Tony Stark','The Avengers initiated a Time Heist, where they traveled to alternate timelines and collected the six Infinity Stones. Returning to their timeline with the Stones, at the cost of Black Widow\'s life, Banner donned the Nano Gauntlet and was able to resurrect those who died in the Snap. However, an alternate timeline Thanos and his army had followed them, sparking the immense Battle of Earth, where Iron Man gave his life to defeat Thanos and his army.']
];

// member
const namaChara = [
    ['tony stark','iron man','Genius. Billionaire. Philanthropist. Tony Stark\'s confidence is only matched by his high-flying abilities as the hero called Iron Man.'],
    ['steve rogers','captain america','Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.'],
    ['natasha romanoff','black widow','Natasha Romanoff, separated from the now-fractured Avengers, confronts the dark path she took to becoming a spy and assassin.'],
    ['','thor','The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.'],
    ['bruce banner','hulk','Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.'],
    ['clint barton','hawkeye','A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.'],
    ['carol danvers','captain marvel','Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.'],
    ['scott lang','ant-man','Overcoming his criminal past, Scott Lang follows in the tiny, yet mighty, footsteps of his predecessor as the size-changing hero known as Ant-Man!'],
    ['james rhodes','war machine','Military veteran James Rhodes is ready for combat in his advanced armor, adding a formidable arsenal to Tony Stark-created designs.'],
    ['t\'challa','black panther','T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.'],
    ['stephen strange','doctor strange','Formerly a renowned surgeon, Doctor Stephen Strange now serves as the Sorcerer Supreme—Earth’s foremost protector against magical and mystical threats.'],
    ['peter parker','spider-man','Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.'],
    ['wanda maximoff','scarlet witch','Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.'],
    ['','vision','The android called Vision defies physics and fights as an Avenger with the power of density manipulation and his flawless computer brain.'],
    ['sam wilson','falcon','Sam Wilson, formerly the Falcon, takes on the mantle of Captain America as he teams up with his fellow Avengers.'],
    ['bucky barnes','winter soldier','Bucky Barnes was brought back from his supposed death to be a brainwashed assassin called Winter Soldier. Reformed by his friends, he now fights alongside the Avengers.']
];

// movies
const namaFilm = [
    ['the avengers','Marvel Studios presents in association with Paramount Pictures "Marvel\'s The Avengers"--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.'],
    ['avengers: age of ultron','Marvel Studios presents “Avengers: Age of Ultron,” the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.'],
    ['avengers: infinity wars','An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios\' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.'],
    ['avengers: endgame','The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios\' grand conclusion to twenty-two films, "Avengers: Endgame."']
];

const detailFilm = [
    ['DIRECTORS','Joss Whedon','Joss Whedon','Anthony Russo, Joe Russo','Anthony Russo, Joe Russo'],
    ['PRODUCER','Joss Whedon','Joss Whedon','Christopher Markus, Stephen McFeely','Kevin Feige'],
    ['RATING','PG-13','PG-13','PG-13','PG-13'],
    ['RUN TIME','143 min','141 min','149 min','180 min'],
    ['RELEASE DATE','May 4, 2012','May 1, 2015','April 27, 2018','April 26, 2019']
];

// footer
const teksAbout1 = ['about marvel','help/faqs','careers','internships'];

const linkAbout1 = [
    'https://www.marvel.com/corporate/about',
    'https://www.marvel.com/help',
    'https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]',
    'https://www.marvel.com/corporate/interns'
]

const teksAbout2 = ['advertising','disney+','marvelhq.com','redeem digital comics'];

const linkAbout2 = [
    'https://www.marvel.com/corporate/advertising',
    'https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA',
    'https://www.marvelhq.com/',
    'https://www.marvel.com/redeem'
];

const merk = ['marvel insider','marvel unlimited'];

const tagline = ['Get Rewarded for Being a Marvel Fan','Access Over 28,000 Digital Comics'];

const sosmed = [
    'http://facebook.com/marvel',
    'http://twitter.com/marvel',
    'http://instagram.com/marvel',
    'http://marvelentertainment.tumblr.com/',
    'http://youtube.com/marvel',
    'https://www.snapchat.com/add/marvelhq',
    'https://www.pinterest.com/marvelofficial'
];