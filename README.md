# Dungeon Realms: Reborn — Milestone 8

Five playable six-room dungeons with randomized combat room order, individual enemy names, bosses, themes, difficulty and reward scaling:
- The Forgotten Crypt (level 1): Skeletons, knights, Bone Warden.
- Emberforge Depths (level 2): Emberlings, fire guards, magma elementals, Molten Guardian.
- Pyramid of Zalataz (level 3): Mummies, scarabs, tomb guardians, Pharaoh Zalataz.
- Ice Crown Citadel (level 4): Frost wraiths, ice knights, frozen sentinels, original boss The Frost Sovereign.
- Primal Jungle (level 3): Raptors, tigers, panthers, crocodiles, Ancient Tyrant.

Run `python -m http.server 8000` from the extracted folder, then visit http://localhost:8000. Use the Dungeon Board in Adventurer's Haven to select an unlocked dungeon. Saves remain in browser localStorage. Controls: A/D, Space, Shift, J, 1–3, I, K, Escape.


## Milestone 9 — Multi-phase dungeon bosses
Every dungeon boss now has three phases triggered at 68% and 34% health, unique rotating moves and visible ground telegraphs. Bone Warden uses grave slams, skeleton summons and sweeps; Molten Guardian uses lava eruptions and magma waves; Pharaoh Zalataz uses sandstorms, mummies and curses; Frost Sovereign uses frozen ground, reinforcements and ice shards; Ancient Tyrant charges, summons raptors and pounces. Bosses display a health/phase bar and warning text. Summoned enemies have a cap of four active adds. The dungeon progression, loot, talents and town are retained.

## Milestone 10: Playable Races and Character Creation
Choose one of eight races, then a compatible class. Every race has a distinct appearance color, some distinct silhouette details, and a racial ability on key 4 or the fourth action-bar button. Racial abilities have a 35-second cooldown. Race/class combinations have separate saved profiles, while old class-only profiles migrate to Human versions. Race selection is made in the town/character screen. Race/class combinations are deliberately restricted as shown in the creator. Existing dungeons, boss phases, talents, gear and town services are retained.
