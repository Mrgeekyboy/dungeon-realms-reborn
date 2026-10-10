// Original fantasy race designs and restricted class combinations.
export const RACES=[
{id:'human',name:'Human',icon:'🧑',color:'#d7b08d',ability:'Heroic Spirit',description:'Empowers your attacks for 7 seconds.',kind:'power',classes:['Warrior','Mage','Rogue','Death Knight','Paladin','Priest','Druid','Summoner']},
{id:'high-elf',name:'High Elf',icon:'🧝',color:'#e6cda9',ability:'Arcane Heritage',description:'Restores your class resource.',kind:'resource',classes:['Mage','Priest','Paladin','Druid','Summoner']},
{id:'orc',name:'Orc',icon:'🪓',color:'#81a67c',ability:'Battle Fury',description:'Empowers your attacks for 7 seconds.',kind:'power',classes:['Warrior','Rogue','Death Knight','Summoner']},
{id:'dwarf',name:'Dwarf',icon:'⛏️',color:'#c9a075',ability:'Stoneform',description:'Gain a protective ward for 6 seconds.',kind:'shield',classes:['Warrior','Paladin','Priest','Rogue']},
{id:'night-elf',name:'Night Elf',icon:'🌙',color:'#9b92d4',ability:'Shadowmeld',description:'Become briefly untouchable and dash forward.',kind:'shadow',classes:['Rogue','Druid','Priest','Warrior']},
{id:'undead',name:'Undead',icon:'💀',color:'#b3c1ac',ability:'Unbroken Will',description:'Recover health and briefly resist damage.',kind:'heal',classes:['Warrior','Mage','Rogue','Death Knight','Priest','Summoner']},
{id:'tauren',name:'Tauren',icon:'🐂',color:'#a37d60',ability:'War Stomp',description:'Damage and stun nearby enemies.',kind:'stomp',classes:['Warrior','Paladin','Druid','Death Knight']},
{id:'drakon',name:'Drakon',icon:'🐉',color:'#76b1b0',ability:'Dragon Breath',description:'Unleash an elemental burst in front of you.',kind:'breath',classes:['Warrior','Mage','Paladin','Summoner']}
];
export const raceById=id=>RACES.find(r=>r.id===id)||RACES[0];
export const canCombine=(race,className)=>race.classes.includes(className);
