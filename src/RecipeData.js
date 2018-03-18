const recipes = {
	bandName: {
		items: [ [ 'leaderOrLeadersPossessive', 'bandLabel' ] ]
	},
	leaderOrLeadersPossessive: {
		items: [
			[ 'leaderAndHis' ],
			[ 'leaderAndHer' ],
			[ 'leaders', '_ and their ' ],
			[ 'leaderName', '_ and the ' ]
		]
	},
	leaderAndHer: {
		items: [
			[ 'femaleLeaderName', '_ and her ' ],
			[ 'femaleLeaderName', "_'s " ]
		]
	},
	leaderAndHis: {
		items: [
			[ 'maleLeaderName', '_ and his ' ],
			[ 'maleLeaderName', "_'s "]
		]
	},
	leaders: {
		items: [
			[ 'maleLeaderName', '_ and ', 'maleLeaderName' ],
			[ 'maleFirstName', '_ and ', 'maleLeaderName' ],
			[ 'femaleFirstName', '_ and ', 'femaleLeaderName' ],
			[ 'lastName', '_ and ', 'lastName' ],
			[ '_The ', 'lastName', '_ Brothers' ],
			[ '_The ', 'lastName', '_ Sisters' ],
			[ "_The King's Jesters" ]
		]
	},
	leaderName: {
		items: [ [ 'maleLeaderName' ], [ 'femaleLeaderName' ] ]
	},
	maleLeaderName: {
		items: [
			[ 'adjective', 'maleFirstName', '_ ', 'lastName', 'honorific' ],
			[ 'maleFirstName', '_ ', 'middleInitialOrNickname', 'lastName', 'honorific' ]
		]
	},
	femaleLeaderName: {
		items: [ [ 'femaleFirstName', '_ ', 'lastName' ] ]
	},
	adjective: {
		items: [ 'Jolly', "Smilin'", 'General' ],
		spaceMode: 'after',
		chance: 20
	},
	maleFirstName: {
		items: [
			'Abbey', 'Albert', 'Arthur', 'Bill', 'Bob', 'Bobby', 'Buddy',
			'Carter', 'Clyde', 'Donnie', 'Eddie', 'Edward', 'Edwin', 'Earl',
			'Frank', 'Fred', 'Gene', 'George', 'Glen', 'Hank', 'Hector',
			'Henry', 'Howard', 'Jack','James', 'John', 'Johnnie', 'Johnny',
			'Karl', 'Louis', 'Lowell', 'Mitchell', 'Ollie', 'Oscar',
			'Pee Wee', 'Ray', 'Robin', 'Roger', 'Rusty', 'Sammy', 'Scotty',
			'Seymour', 'Sonny', 'Stuff', 'Tab', 'Ted', 'Thomas', 'Vaughn',
			'Walter', 'Wayne', 'Wendell', 'Wilbert', 'Willie', 'Wilson'
		]
	},
	femaleFirstName: {
		items: [
			'Anita', 'Bessie', 'Carrie', 'Connie', 'Ellen', 'Ginny', 'Gloria',
			'Helen', 'June', 'Kitty', 'Louise', 'Margaret', 'Marie', 'Marion',
			'Martha', 'Mary', 'Maxine', 'Nellie', 'Olive', 'Rosetta', 'Ruby',
			'Shannon', 'Virginia', 'Vivian'
		]
	},
	middleInitialOrNickname: {
		items: [
			'A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.', 'K.',
			'L.', 'M.', 'N.', 'O.', 'P.', 'Q.', 'R.', 'S.', 'T.', 'U.', 'V.',
			'W.', 'X.', 'Y.', 'Z.', '"Red"', '"Scat"'
		],
		spaceMode: 'after',
		chance: 27
	},
	lastName: {
		items: [
			'Adair', 'Adams', 'Allen', 'Ayres', 'Balmer', 'Baranco', 'Baur',
			'Bechet', 'Brown', 'Bostic', 'Burke', 'Carlson', 'Cletro',
			'Crayton', 'Crosby', 'Costa', 'Dixon', 'Fox', 'Fuller',
			'Gershwin', 'Gray', 'Hall', 'Heier', 'Jackson', 'Jenkins',
			'Johnson', 'Jordan', 'Kahn', 'Kaufman', 'Kaye', 'Kent', 'King',
			'Kreisler', 'Kryger', 'Lane', 'Lewis', 'Maddox', 'McCoy',
			'McDonald', 'McGhee', 'McKinley', 'McPartland', 'Melton',
			'Miller', 'Monroe', 'Mooney', 'Powers', 'Pryor', 'Russels',
			'Schneider', 'Simms', 'Short', 'Smith', 'Snow', 'Sparrow',
			'Swift', 'Tharpe', 'Williams', 'Worth'
		]
	},
	honorific: {
		items: [ '"King of the Polkas"', '"The Crooning Troubador"' ],
		spaceMode: 'before',
		chance: 30
	},
	bandLabel: {
		items: [
			[ 'memberNouns' ],
			[ 'memberNounPrefix', '_ ', 'memberNouns' ],
			[ 'place', '_ ', 'memberNounPrefix', '_ ', 'memberNouns' ],
			[ 'place', '_ ', 'memberNouns' ],
			[ 'memberNounNumericPrefix', '_ ', 'memberNouns' ],
			[ 'memberNounPrefix', '_ ', 'bandNumeric' ],
			[ 'instrument', 'bandNumeric' ],
			[ 'bandNumeric' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
			[ 'orchestra' ],
		]
	},
	place: {
		items: [
			'Casa Loma', 'Campus', 'City', 'Colorado', 'Farm', 'Grand Canyon',
			'Hollywood', 'Louisiana', 'Motor City', 'New Orleans', 'Prairie',
			'Red River', 'Santa Fe', 'Smoky Mountain', 'Texas', 'Valley'
		]
	},
	instrument: {
		items: [ 'Jug', 'Marimba', 'Saxophone', 'Tympany' ],
		spaceMode: 'after',
		chance: 20
	},
	bandNumeric: {
		items: [
			'Band', 'Ensemble', 'Five', 'Trio', 'Quartet', 'Quartette',
			'Quintet', 'Sax-O-Tette', 'Sextet', 'Symphonette'
		]
	},
	memberNounPrefix: {
		items: [
			'All Star', 'Barn Dance', 'Bashful', 'Black and White',
			'Blue Grass', 'Boogie Woogie', 'Buster Brown', 'Cabin', 'Cactus',
			'Cool', 'Cowboy', 'Dependable', 'Dixie Lily', 'Famous', 'Fox',
			'Happiness', 'Hot', 'Hot Box', 'House', 'Jazz', 'Jolly',
			'Marimba', 'Master', 'Melody', 'Moana', 'Musical', 'Polka',
			'Radio', 'Rambling', 'Rhythm', 'Round Up', 'Royal', 'Statler',
			'Tivoli', 'Varsity'
		]
	},
	memberNounNumericPrefix: {
		items: [ 'Three', 'Four', 'Five', 'Six', 'Seven' ]
	},
	memberNouns: {
		items: [
			'Band', 'Blazers', 'Bob Cats', 'Bohemians', 'Bombadiers', 'Boys',
			'Briarhoppers', 'Canadians', 'Caroleers', 'Cats', 'Chicagoans',
			'Cornellians', 'Cowboys', 'Debs', 'Dude Ranchers', 'Feetwarmers',
			'Gang', 'Girls', 'Girls of the Golden West', 'Hawaiians',
			'Highpointers', 'Hillbillies', 'Hounds', 'Hunters', 'Islanders',
			'Stompers', 'Knights', 'Melody Makers', 'Millers',
			'Pennsylvanians', 'Plainsmen', 'Ramblers', 'Rangers', 'Rascals',
			'Rhythmasters', 'Riders', 'Rockers', 'Rounders', 'Slickers',
			'Sons of the Golden West', 'Syncopaters', 'Swing Wing',
			'Tornadoes', 'Troopers', 'Twisters', 'Vagabonds', 'Westerners',
			'Wranglers', 'Yanks'
		]
	},
	orchestra: {
		items: [
			[ 'place', '_ ', 'orchestraSpecialty', '_Orchestra', 'orchestraSuffix' ],
			[ 'place', '_ ', '_Orchestra', 'orchestraSuffix' ],
			[ 'orchestraSpecialty', '_Orchestra', 'orchestraSuffix' ]
		]
	},
	orchestraSpecialty: {
		items: [
			[ 'orchestraSpecialtyPrefix', 'orchestraSpecialtyMain' ]
		]
	},
	orchestraSpecialtyPrefix: {
		items: [ 'International', 'Specialty' ],
		spaceMode: 'after',
		chance: 5
	},
	orchestraSpecialtyMain: {
		items: [ 'Dance', 'Concert', 'Folk' ],
		spaceMode: 'after',
		chance: 5
	},
	orchestraSuffix: {
		items: [ 'De Luxe' ],
		spaceMode: 'before',
		chance: 10
	}
};

module.exports = recipes;