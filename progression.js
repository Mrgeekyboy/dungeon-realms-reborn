const KEY='dungeon-realms-reborn-v4';
export const SLOTS=['Weapon','Helmet','Armor','Accessory'];
export const RARITIES=[['Common','#b9beca',55,1],['Uncommon','#63d88b',25,1.3],['Rare','#69a9ff',13,1.7],['Epic','#c18cff',6,2.3],['Legendary','#ffba59',1,3.1]];
const bases={Weapon:['Sword','Staff','Dagger','Runeblade','Hammer','Scepter','Branch','Focus'],Helmet:['Helm','Circlet','Hood'],Armor:['Plate','Robes','Leathers'],Accessory:['Charm','Ring','Talisman']};
export function newProfile(name){return {name,level:1,xp:0,gold:0,inventory:[],equipment:{},runs:0,completed:0,forgeLevel:0,innLevel:0}}
export function loadProfiles(){try{let raw=JSON.parse(localStorage.getItem(KEY));return raw&&typeof raw==='object'&&!Array.isArray(raw)?raw:{}}catch{return {}}}
export function saveProfiles(profiles){try{localStorage.setItem(KEY,JSON.stringify(profiles));return true}catch{return false}}
export function requiredXP(level){return 90+level*55}
export function grantXP(profile,amount){profile.xp+=Math.max(0,Math.floor(amount));let gains=0;while(profile.level<10&&profile.xp>=requiredXP(profile.level)){profile.xp-=requiredXP(profile.level);profile.level++;gains++}if(profile.level>=10)profile.xp=0;return gains}
export function generateItem(level=1,slot=null,guaranteed=null){slot=slot||SLOTS[Math.floor(Math.random()*SLOTS.length)];let roll=Math.random()*100,sum=0,rarity=RARITIES[0];for(let r of RARITIES){sum+=r[2];if(roll<sum){rarity=r;break}}if(guaranteed){rarity=RARITIES.find(r=>r[0]===guaranteed)||rarity}const prefix={Common:'Worn',Uncommon:'Sturdy',Rare:'Enchanted',Epic:'Ancient',Legendary:'Mythic'}[rarity[0]];let words=bases[slot];let name=words[Math.floor(Math.random()*words.length)];let power=Math.max(1,Math.round((2+level*1.6)*rarity[3]));return {id:crypto.randomUUID?.()||`${Date.now()}-${Math.random()}`,name:`${prefix} ${name}`,slot,rarity:rarity[0],color:rarity[1],power,level}}
export function gearPower(profile){return Object.values(profile.equipment).reduce((sum,item)=>sum+(item?.power||0),0)}
export function equip(profile,id){let index=profile.inventory.findIndex(item=>item.id===id);if(index<0)return false;let item=profile.inventory[index];if(item.level>profile.level)return false;let old=profile.equipment[item.slot];profile.inventory.splice(index,1);if(old)profile.inventory.push(old);profile.equipment[item.slot]=item;return true}
export function unequip(profile,slot){if(!profile.equipment[slot])return false;profile.inventory.push(profile.equipment[slot]);delete profile.equipment[slot];return true}

export function forgeCost(p){return 60+40*(p.forgeLevel||0)}
export function innCost(p){return 45+35*(p.innLevel||0)}
export function purchaseForge(p){if((p.forgeLevel||0)>=5||p.gold<forgeCost(p))return false;p.gold-=forgeCost(p);p.forgeLevel=(p.forgeLevel||0)+1;return true}
export function purchaseInn(p){if((p.innLevel||0)>=5||p.gold<innCost(p))return false;p.gold-=innCost(p);p.innLevel=(p.innLevel||0)+1;return true}
export function purchaseItem(p,slot){if(!SLOTS.includes(slot))return null;const price=45+20*p.level;if(p.gold<price)return null;p.gold-=price;const item=generateItem(p.level,slot,'Uncommon');p.inventory.push(item);return item}
