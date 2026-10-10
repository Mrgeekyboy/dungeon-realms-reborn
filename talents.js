// Three specializations per class. Each talent has three ranks.
export const TREES={
 Warrior:[['Arms','Executioner','Heavy strikes increase attack damage','damage'],['Protection','Bulwark','More health and stronger protective skills','defense'],['Fury','Battle Trance','Faster ability recovery and rage generation','tempo']],
 Mage:[['Fire','Pyromancer','Fire and arcane spells hit harder','damage'],['Frost','Ice Barrier','Extra health and stronger defenses','defense'],['Arcane','Spellweaver','Mana and spell cooldown improvements','tempo']],
 Rogue:[['Assassination','Venomblade','Increased dagger and skill damage','damage'],['Subtlety','Evasion','Improved survival and defensive power','defense'],['Outlaw','Quick Hands','Faster abilities and energy recovery','tempo']],
 'Death Knight':[['Blood','Bloodreaver','More damage from dark strikes','damage'],['Frost','Frozen Bastion','More health and damage resistance','defense'],['Unholy','Runic Flow','Faster runic power and cooldowns','tempo']],
 Paladin:[['Retribution','Judgment','Increase holy attack damage','damage'],['Protection','Sacred Aegis','Improve durability and shields','defense'],['Holy','Divine Focus','Improve mana and ability recovery','tempo']],
 Priest:[['Shadow','Mindfire','Increase spell damage','damage'],['Holy','Grace','Improve healing and maximum health','defense'],['Discipline','Clarity','Reduce cooldowns and improve mana','tempo']],
 Druid:[['Balance','Starcaller','Increase nature spell damage','damage'],['Guardian','Ironbark','Improve maximum health and protection','defense'],['Restoration','Wild Growth','Improve mana recovery and abilities','tempo']],
 Summoner:[['Destruction','Voidfire','Increase shadow spell damage','damage'],['Demonology','Soul Ward','Increase health and protective magic','defense'],['Affliction','Dark Pact','Reduce cooldowns and regenerate mana','tempo']]
};
export const MAX_RANK=3;
export function ensureTalents(p){if(!p.talents||typeof p.talents!=='object'||Array.isArray(p.talents))p.talents={};for(const type of ['damage','defense','tempo'])p.talents[type]=Math.max(0,Math.min(MAX_RANK,Math.floor(Number(p.talents[type])||0)));return p.talents}
export function pointsSpent(p){return Object.values(ensureTalents(p)).reduce((a,b)=>a+b,0)}
export function availablePoints(p){return Math.max(0,(p.level||1)-1-pointsSpent(p))}
export function investTalent(p,type){if(!['damage','defense','tempo'].includes(type)||availablePoints(p)<1||ensureTalents(p)[type]>=MAX_RANK)return false;p.talents[type]++;return true}
export function talentStats(p){const t=ensureTalents(p);return {damageMultiplier:1+t.damage*.09,hpMultiplier:1+t.defense*.09,damageReduction:t.defense*.065,shieldDuration:1+t.defense*.15,cooldownMultiplier:1-t.tempo*.08,resourceMultiplier:1+t.tempo*.12,regenMultiplier:1+t.tempo*.15}}
