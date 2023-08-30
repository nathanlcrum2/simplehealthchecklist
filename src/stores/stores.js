import { writable } from 'svelte/store';
let _items =  [
	//INHALE
	{
		name: "Sunblock",
		categories: ["touch", "outdoors", "swap"],
		week: 1,
		miniText: 'Many sunblocks contain cancer causing chemicals. Swap for mineral sunscreens like zinc oxide or SPF clothing.',
		pageText: '',
		links: [],
		priority: 'Medium'
	},
	{	
		name: "Polyester Clothing",
		categories: ["touch", "other", "swap"],
		miniText: 'Polyester and other plastic fabrics should be avoided. Swap for natural materials like cotton and wool.',
		pageText: '',
		links: [],
		week: 1,
		priority: 'Medium'
	},
	{
		name: "Deodorant",
		categories: ["touch", "bathroom", "swap"],
		miniText: 'Many deodorants contain aluminum, parabens, and artificial dyes and parfumes. Avoid these and swap for a natural deodorant.',
		pageText: '',
		links: [],
		week: 1,
		priority: 'Medium'
	},
	{
		name: "Soap",
		categories: ['touch', 'bathroom', 'swap'],
		miniText: 'Avoid synthetic detergent bars, opt for natural soaps made with natural oils like olive, coconut, lard, etc. and essential oils.',
		pageText: '',
		links: [],
		week: 3,
		priority: 'Medium'
	},
	{
		name: "Shampoo", 
		categories: ['touch', 'bathroom', 'swap'],
		miniText: 'Many shampoos contain parabens, silicones, and numerous chemicals which damage your scalp and hair. Swap for a natural shampoo or even eliminating shampoo.',
		pageText: '',
		links: [],
		week: 3,
		priority: 'Medium'
	},
	{
		name: "Cosmetics", 
		categories: ['touch', 'bathroom', 'swap'],
		miniText: 'Swap all makeups and cosmetics out for healthier options. Avoid anything artificial.',
		pageText: '',
		links: [],
		week: 3,
		priority: 'Medium'
	},
	{
		name: 'Lotion', 
		categories: ['touch', 'bathroom', 'swap'],
		miniText: 'Choose a lotion made of natural butters, oils, and fats with real essential oils.',
		pageText: '',
		links: [],
		week: 2,
		priority: 'Medium'
	},
	{
		name: 'Conditioner',
		categories: ['touch', 'bathroom', 'swap'],
		miniText: 'Swap your conditioner out for a healthier option.',
		pageText: '',
		links: [],
		week: 2,
		priority: 'Medium'
	},
	{
		name: 'Laundry Detergent',
		categories: ['touch', 'other', 'swap'],
		miniText: 'You can make your own laundry detergent at home with only a few chemicals or simply find a healthier option with artificial dyes and perfumes that will damage your health.',
		pageText: '',
		links: [],
		week: 2,
		priority: 'Medium'
	},
	{
		name: 'Hair Sprays/Gels/Creams', 
		categories: ['touch', 'bathroom', 'swap'],
		miniText: '',
		pageText: '',
		links: [],
		week: 4,
		priority: 'Medium'
	},
	{
		name: 'Face Wash',
		categories: ['touch', 'bathroom', 'swap'],
		miniText: '',
		pageText: '',
		links: [],
		week: 4,
		priority: 'Medium'
	},
	{
		name: 'Industrial Chemicals', 
		categories: ['touch', 'work', 'eliminate'],
		miniText: 'If you work in an environment with industrial chemicals, wear PPE or exposure if possible.',
		pageText: '',
		links: [],
		week: 19,
		priority: 'Extreme'
	},
	{
		name: 'Bedsheets', 
		categories: ['touch', 'bedroom', 'swap'],
		miniText: 'Swap bedsheets, linens, and towels for natural materials that are made without harsh chemical processing if possible.',
		pageText: '',
		links: [],
		week: 19,
		priority: 'Medium'
	},

	//INHALE
	{
		name: 'Colognes/Perfumes', 
		categories: ['inhale', 'bathroom', 'swap'],
		miniText: 'Use colognes and perfumes without artificial perfumes.',
		pageText: '',
		links: [],
		week: 4,
		priority: 'Medium'
	},
	{
		name: 'Floor Cleaners',
		categories: ['inhale', 'kitchen', 'swap'],
		miniText: 'Swap hazardous floor cleaners out for simple soaps, alcohols, or cleaning vinegar.',
		pageText: '',
		links: [],
		week: 5,
		priority: 'Medium'
	},
	{
		name: 'Bathroom Cleaners', 
		categories: ['inhale', 'bathroom', 'swap'],
		miniText: 'Swap hazardous cleaners out for simple soaps, alcohols, or cleaning vinegar.',
		pageText: '',
		links: [],
		week: 5,
		priority: 'Medium'
	},
	{
		name: 'Glass/Mirror/Window Cleaners', 
		categories: ['inhale', 'other', 'swap'],
		miniText: 'Swap hazardous cleaners out for simple soaps, alcohols, or cleaning vinegar.',
		pageText: '',
		links: [],
		week: 5,
		priority: 'Medium'
	},
	{
		name: 'Counter Cleaners', 
		categories: ['inhale', 'kitchen', 'swap'],
		miniText: 'Swap hazardous cleaners out for simple soaps, alcohols, or cleaning vinegar.',
		pageText: '',
		links: [],
		week: 6,
		priority: 'Medium'
	},
	{
		name: 'Scented Candles', 
		categories: ['inhale', 'bathroom', 'swap'],
		miniText: 'Most candles are made from petroleum derived waxes and contain artificial parfumes making their fumes toxic. Eliminate these completely, use essential oils, or buy natural candles.',
		pageText: '',
		links: [],
		week: 6,
		priority: 'Medium'
	},
	{
		name: 'Air Fresheners', 
		categories: ['inhale', 'bathroom', 'swap'],
		miniText: 'Opt for natural air fresheners like essential oils, flowers, baking, etc.',
		pageText: '',
		links: [],
		week: 6,
		priority: 'Medium'
	},
	{
		name: 'Trash Bags w/ Scent', 
		categories: ['inhale', 'kitchen', 'swap'],
		miniText: 'Anything with artificial perfumes is bad for your health. Switch to unscented trash bags, dryer sheets and anything else.',
		pageText: '',
		links: [],
		week: 7,
		priority: 'Medium'
	},
	{
		name: 'Vapes', 
		categories: ['inhale', 'other', 'eliminate'],
		miniText: 'There is no way vaping is good for you. It may even be worse than cigarettes. Eliminate.',
		pageText: '',
		links: [],
		week: 7,
		priority: 'Medium'
	},
	{
		name: 'Cigarettes', 
		categories: ['inhale', 'other', 'eliminate'],
		miniText: 'They are known carcinogens, enough said.',
		pageText: '',
		links: [],
		week: 9,
		priority: 'Medium'
	},
	{
		name: 'Marijuana', 
		categories: ['inhale', 'other', 'eliminate'],
		miniText: 'Some people may disagree, but this is most likely not worth any perceived benefits.',
		pageText: '',
		links: [],
		week: 9,
		priority: 'High'
	},
	{
		name: 'Air Quality/Particulate Matter', 
		categories: ['inhale', 'outdoors', 'eliminate'],
		miniText: 'More and more cities are suffering from air pollution. Do your best to reduce air pollution, live in an area without air pollution, or buy an air purifier.',
		pageText: '',
		links: [],
		week: 7,
		priority: 'Medium'
	},
	{
		name: 'Industrial Fumes', 
		categories: ['inhale', 'work', 'eliminate'],
		miniText: 'Wear PPE if you must come into contact with these.',
		pageText: '',
		links: [],
		week: 8,
		priority: 'Extrem'
	},
	//INGEST
	{
		name: 'Toothepaste', 
		categories: ['ingest', 'bathroom', 'swap'],
		miniText: 'Opt for natural toothepastes without detergents or artificial coloring.',
		pageText: '',
		links: [],
		week: 8,
		priority: 'Low'
	},
	{
		name: 'Dish/Dishwasher Detergent', 
		categories: ['ingest', 'kitchen', 'swap'],
		miniText: 'Keep it natural.',
		pageText: '',
		links: [],
		week: 8,
		priority: 'Low'
	},
	{
		name: 'Soda', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: 'Did we evolve to drink it? No.',
		pageText: '',
		links: [],
		week: 9,
		priority: 'High'
	},
	{
		name: 'Fruit Juice', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: 'Eat your fruits, do not drink them.',
		pageText: '',
		links: [],
		week: 10,
	},
	{
		name: 'Alcohol', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: 'It kills gym gains, enough said.',
		pageText: '',
		links: [],
		week: 10,
		priority: 'High'
	},
	{
		name: 'Other Drugs', 
		categories: ['ingest', 'other', 'eliminate'],
		miniText: 'Yeah, no.',
		pageText: '',
		links: [],
		week: 10,
		priority: 'Extreme'
	},
	{
		name: 'Processed Foods', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: 'Exceptions are cheeses and mechanically processed meats like sausages.',
		pageText: '',
		links: [],
		week: 11,
		priority: 'High'
	},
	{
		name: 'Unfiltered Water', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: 'Just ask the people in Flint. Will you blindly trust that your water is safe?',
		pageText: '',
		links: [],
		week: 11,
		priority: 'Medium'
	},
	{
		name: 'Artificial Flavors', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: '',
		pageText: '',
		links: [],
		week: 11,
		priority: 'Medium'
	},
	{
		name: 'Artificial Dyes', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: 'Some of these are actually banned in Europe because they are known carcinogens.',
		pageText: '',
		links: [],
		week: 12,
		priority: 'Medium'
	},
	{
		name: 'Pesticides/Inorganic Produce', 
		categories: ['ingest', 'kitchen', 'swap'],
		miniText: 'Pesticides get absorbed by the plants they are sprayed on. Avoid consuming inorganic produce if you can afford it.',
		pageText: '',
		links: [],
		week: 12,
		priority: 'Medium'
	},
	{
		name: 'Candy', 
		categories: ['ingest', 'kitchen', 'swap'],
		miniText: '',
		pageText: '',
		links: [],
		week: 12,
		priority: 'Medium'
	},
	{
		name: 'High Fructose Corn Syrup', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: 'Too processed, not real food.',
		pageText: '',
		links: [],
		week: 13,
		priority: 'Medium'
	},
	{
		name: 'Seed Oils', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: 'Use animal fats or olive or avocado or other healthier oils. Most seed oils are industrial byproducts and should not be consumed.',
		pageText: '',
		links: [],
		week: 13,
		priority: 'High'
	},
	{
		name: 'Gluten', 
		categories: ['ingest', 'kitchen', 'eliminate'],
		miniText: 'I am still on the fence about this. I find my gut feels better without it. YMMV.',
		pageText: '',
		links: [],
		week: 13,
	},
	{
		name: 'Farm Raised Fish/Shellfish', 
		categories: ['ingest', 'kitchen', 'swap'],
		miniText: 'I would only eat wild caught fish, but even wild caught fish today have heavy metals and contain plastic due to pollution in the ocean. I love seafood, but it may be best to indulge sparingly.',
		pageText: '',
		links: [],
		week: 14,
		priority: 'Medium'
	},

	//See/Hear
	{
		name: "Porn",
		categories: ["see/hear", "bedroom", 'eliminate'],
		miniText: 'I lot of men are addicted, and it is not healthy.',
		pageText: '',
		links: [],
		week: 14,
		priority: 'Extreme'
	},
	{
		name: 'Loud Noises', 
		categories: ['see/hear', 'other', 'eliminate'],
		miniText: 'We live in the loudest time in human history. Cities are loud (mainly due to cars) and this can cause stress, anxiety, and other issues. Babies are especially sensitive to loud noises. Try to quiet things down if you can.',
		pageText: '',
		links: [],
		week: 14,
		priority: 'Low'
	},
	{
		name: 'Wireless Earbuds', 
		categories: ['see/hear', 'other', 'swap'],
		miniText: 'Not only does it make people unapproachable and make our society less inviting. Some people believe the radiation may not be healthy for our brains.',
		pageText: '',
		links: [],
		week: 15,
		priority: 'Low'
	},
	{
		name: 'Blue Light', 
		categories: ['see/hear', 'bedroom', 'eliminate'],
		miniText: 'Avoid before bed especially.',
		pageText: '',
		links: [],
		week: 15,
		priority: 'Medium'
	},
	{
		name: 'Sleep Schedule', 
		categories: ['see/hear', 'bedroom', 'eliminate'],
		miniText: 'Ideally I think rising at dawn and being in bed right after dusk makes sense. If possible, try it out.',
		pageText: '',
		links: [],
		week: 15,
		priority: 'Medium'
	},
	{
		name: 'Social Media', 
		categories: ['see/hear', 'other', 'eliminate'],
		pageText: '',
		links: [],
		week: 16,
		priority: 'Medium'
		
	},
	//Additions
	{
		name: 'Daily Sunlight', 
		categories: ['see/hear', 'add', 'outdoors'],
		pageText: '',
		links: [],
		week: 16,
		priority: 'Medium'
	},
	{
		name: 'Barefoot/Grounding', 
		categories: ['touch', 'add', 'outdoors'],
		pageText: '',
		links: [],
		week: 16,
		priority: 'Medium'
	},
	{
		name: 'Time Outdoors', 
		categories: ['see/hear', 'add', 'outdoors'],
		pageText: '',
		links: [],
		week: 17,
		priority: 'Medium'
	},
	{
		name: 'Lift Weights', 
		categories: ['add', 'other'],
		pageText: '',
		links: [],
		week: 17,
		priority: 'Medium'
	},
	{
		name: 'Time w/ Friends/Family', 
		categories: ['see/hear', 'add', 'other'],
		pageText: '',
		links: [],
		week: 17,
		priority: 'Medium'
	},
	{
		name: 'Runs/Swims/Cardio', 
		categories: ['add', 'outdoors'],
		pageText: '',
		links: [],
		week: 18,
		priority: 'Medium'
	},
	{
		name: 'Salt Water', 
		categories: ['ingest', 'add', 'outdoors'],
		pageText: '',
		links: [],
		week: 18,
		priority: 'Medium'
	},
	{
		name: 'Starlight', 
		categories: ['see/hear', 'add', 'outdoors'],
		pageText: '',
		links: [],
		week: 18,
		priority: 'Medium'
	},
	
]
export const items = writable(_items)
export const page = writable('checklist')