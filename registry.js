// New classes, abilities and equipment can be registered here later.
export const CLASSES=[
{name:'Warrior',icon:'⚔️',role:'Melee / Tank',color:'#c7a477',accent:'#ffcd72',hp:150,damage:24,reach:105},
{name:'Mage',icon:'🔮',role:'Ranged Magic',color:'#777cc8',accent:'#87d7ff',hp:90,damage:18,reach:270},
{name:'Rogue',icon:'🗡️',role:'Fast Melee',color:'#668b76',accent:'#b2f8b4',hp:105,damage:20,reach:95},
{name:'Death Knight',icon:'💀',role:'Dark Knight',color:'#63677f',accent:'#a5c9ff',hp:140,damage:23,reach:120},
{name:'Paladin',icon:'🛡️',role:'Holy Guardian',color:'#c4a25b',accent:'#fff0a4',hp:145,damage:21,reach:105},
{name:'Priest',icon:'✨',role:'Holy Caster',color:'#d7c6c3',accent:'#fff8cb',hp:100,damage:17,reach:250},
{name:'Druid',icon:'🌿',role:'Nature Magic',color:'#8baf73',accent:'#b3f68c',hp:115,damage:19,reach:230},
{name:'Summoner',icon:'👁️',role:'Shadow Caster',color:'#9a79ac',accent:'#f3a2ff',hp:100,damage:18,reach:265}
];

export const SKILLS={
Warrior:['Rage',100,0,35,[['Whirlwind',25,5,'aoe'],['Iron Guard',20,10,'shield'],['Berserk',60,18,'power']]],
Mage:['Mana',120,13,120,[['Fireball',25,3,'bolt'],['Frost Nova',35,9,'aoe'],['Meteor',75,16,'blast']]],
Rogue:['Energy',100,19,100,[['Flurry',30,4,'aoe'],['Shadowstep',35,7,'blink'],['Blade Storm',65,16,'blast']]],
'Death Knight':['Runic Power',100,0,35,[['Frost Strike',25,4,'bolt'],['Death Grip',30,8,'grip'],['Death Coil',60,15,'blast']]],
Paladin:['Mana',110,11,110,[['Holy Smite',20,4,'bolt'],['Divine Shield',35,11,'shield'],['Consecration',65,16,'blast']]],
Priest:['Mana',125,15,125,[['Light Spear',20,3,'bolt'],['Renew',35,9,'heal'],['Holy Nova',70,16,'blast']]],
Druid:['Mana',115,13,115,[['Thorn Bolt',20,3,'bolt'],['Barkskin',30,10,'shield'],['Thornstorm',65,16,'blast']]],
Summoner:['Mana',120,12,120,[['Shadow Orb',20,3,'bolt'],['Familiar',40,12,'pet'],['Demonic Surge',65,16,'blast']]}
};
