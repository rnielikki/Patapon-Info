# Reference table

## Drum / Command

### Drum IDs

|Id|Command|
|---|---|
|0|No input/Command Cancel|
|1|Pon|
|2|Don|
|3|Pata|
|4|Chaka|

### Command IDs

|Id|Command|
|---|---|
|0|March|
|1|Defend|
|2|Attack|
|3|Charge|
|4|Dodge|
|5|Jump|
|6|Party|
|6|Party|
|7|Chakapata|
|8|Patapon|
|9|Summon|

### Input ID Flags

They are *flags*, since multiple buttons can be pressed at same time.

|Id|Button|
|---|---|
|0x1|Start|
|0x8|Select|
|0x10|Up Arrow|
|0x20|Right Arrow|
|0x40|Down Arrow|
|0x80|Left Arrow|
|0x100|L|
|0x200|R|
|0x1000|△ (Chaka)|
|0x2000|◯ (Pon)|
|0x4000|✕ (Don)|
|0x8000|□ (Pata)|
|0x40000|Scroll Up|
|0x10000|Scroll Down|

## Other gameplay

### Status Effect table

#### As non-flag

|Id|Status|
|---|---|
|0|Freeze|
|1|Sleep|
|2|Poison|
|3|Stagger|
|4|Tumble|
|5|Knockback|
|6|Burn|

#### As flag

Those values are bitshifted from non-flag IDs. (`1 << (nonflagID)`)

This are used e.g. [getAbnormalStatus](../getabnormalstatus.md).

|Id|Status|
|---|---|
|0x1|Freeze|
|0x2|Sleep|
|0x4|Poison|
|0x8|Stagger|
|0x10|Tumble|
|0x20|Knockback|
|0x40|Burn|

### Hitbox Layers

This is also called *troop type*.

|ID|Layer|Hits Player|Hits Enemy|Example|
|---|---|---|---|---|
|0|Player|No|Yes|Catapult, Ziggerzank|
|1|Enemy|Yes|No|All bosses, minibosses, deths etc.|
|2|Unused|Yes|Yes|Unused|
|3|Both|Yes|Yes|Grass, Firewall|
|4|None|No|No|Talking sigh|

### Summon IDs

|Id|Status|
|---|---|
|0x0|Yarigami|
|0x1|Tategami|
|0x2|Soragami|
|0x3|Yamagami|
|0x4|Moegami (Unused)|
|0x5|Super Yarigami|
|0x6|Super Tategami|
|0x7|Super Soragami|
|0x8|Super Yamagami|

## Units

### Generatorparam

- [Generatorparam info (html)](./resources/generatorparam.html)
- [Generatorparam info (CSV)](./resources/generatorparam.csv)

### Class IDs

|ID|ID Hex|Unit|
|---|---|---|
|0|`0x0`|*Dummy*|
|1|`0x1`|**Hatapon**|
|2|`0x2`|Yarida|
|3|`0x3`|Taterazay|
|4|`0x4`|Yumiyacha|
|5|`0x5`|Kibadda|
|6|`0x6`|*Dekapon*|
|7|`0x7`|*Megapon*|
|8|`0x8`|*Mahopon*|
|9|`0x9`|Destrobo|
|10|`0xA`|*Chakapon*|
|11|`0xB`|*Charipon*|
|12|`0xC`|Piekron|
|13|`0xD`|Wooyari|
|14|`0xE`|Pyokorider|
|15|`0xF`|Cannassault|
|16|`0x10`|Charibasa|
|17|`0x11`|Guardira|
|18|`0x12`|Tondenga|
|19|`0x13`|Myamsar|
|20|`0x14`|Bowmunk|
|21|`0x15`|Grenburr|
|22|`0x16`|Alosson|
|23|`0x17`|Wondabarappa|
|24|`0x18`|Jamsch|
|25|`0x19`|Oohoroc|
|26|`0x1A`|Pingrek|
|27|`0x1B`|Cannogabang|
|28|`0x1C`|Ravenous|
|29|`0x1D`|Sonarchy|
|30|`0x1E`|Ragewolf|
|31|`0x1F`|Naughtyfins|
|32|`0x20`|Slogturtle|
|33|`0x21`|Covet-Hiss|
|34|`0x22`|Buzzcrave|

Note that Charaparm has a bit different order from this (Yumiyacha goes first in Charaparam).

### Action IDs

This varies depending on the model. For detali, see [Tayo's table](./resources/Char_Actions_(by-Tayo-Fox).zip).

(Credit to *Tayo Fox* for documenting this)

### SquadActivityParam IDs (PvE Only)

## Mission

### Mission IDs

- [Mission ID table (html)](./resources/mission_map.html)
- [Mission ID table (CSV)](./resources/mission_map.csv)

### Stage IDs

[Stages with Stage IDs (Video)](https://youtu.be/BsGuaVaYpLw)

### Cutscene IDs

|ID|Scene|
|---|---|
|`0x124`|Ending (going earthend scene)|
|`0x125`|Test scene (Ragewolf and Hero Jumping)|
|`0x126`|Field of Angry Giants 1st clear scene|
|`0x127`|Field of Angry Giants 2nd clear scene|
|`0x128`|Arena of Valor clear scene (ragewolf mentioning Summon)|
|`0x129`|Shakapon Summon Teaching|
|`0x12a`|(Unused Pata2 hero tortue scene... crying)|
|`0x12b`|Snow of Sullied Tears 1st clear (Fins First Appear, "What have we here!")|
|`0x12c`|Snow of Sullied Tears 2nd clear [It seems that ... Wants Selection]|
|`0x12d`|Snow field Racing Alley clear ("So this is the Tower of Purity...")|
|`0x12e`|Plateau of Pompous Wings 1st clear(Sonarchy first appear)|
|`0x12f`|Plateau of Pompous Wings 2nd clear [Dialogue, might not matter]|
|`0x130`|1st Missile battle clear [Dialog, contains naughtyfins too]|
|`0x131`|Archfiend of Justice Clear (Ravenous first appear)|
|`0x132`|Greedy Mask Jungle 1st clear (Kidnapped Mecha Hoshipon, "You can both have me")|
|`0x133`|Greedy Mask Jungle 2nd clear [What rare item/Where is Naughtyfins]|
|`0x134`|After Earnestness VS (Mecha Hoshipon disappeared)|
|`0x135`|Bottomless Stomach Desert 1st clear (First Buzzcrave Appear) [Fins itching th say something...]|
|`0x136`|Bottomless Stomach Desert 2nd clear (Toothpick rare item lol, What was your password)|
|`0x137`|Racing Desert clear (Ravenous past)|
|`0x138`|Labyrinth of Restraint clear (Fins dying)|
|`0x139`|Volcano Zone of the Lazy Demon 1st clear|
|`0x13a`|Volcano Zone of the Lazy Demon 2nd clear|
|`0x13b`|Evilmass of Adamance Clear [Princess saving scene!]|
|`0x13c`|Ravenous: Dule of Fate clear (Ravenous answer scene)|
|`0x13d`|Covet-hiss Loves Cannon clear (Ragewolf dying)|
|`0x13e`|Dark heroes last stand clear ("Papa no medicine")|
|`0x13f`|Ending (DH talking)|
|`0x140`|Test scene ("no translation needed" ragewolf and hero)|
|`0x141`|Test scene ("no translation needed" ragewolf and hero)|
|`0x142`|Test scene ("no translation needed" in dark hero hideout)|

## Hideout

### Facility IDs

|ID|Type|
|---|---|
|0x0|Silver Hoshipon|
|0x1|Blacksmith|
|0x2|Herogate|
|0x3|Armoury|
|0x4|Team Totem|
|0x5|Barracks|
|0x6|sukopon|
|0x7|Mission Obelisk|
|0x8|Battle Gate|
|0x9|Meden|
|0xA|Festival|

## Item indexes

### Equipment Group ID indexes

|ID|Equipment|
|---|---|
|0|Sword|
|1|Blade|
|2|Spear|
|3|Pike|
|4|Lance|
|5|Arm|
|6|Dagger|
|7|Shiv|
|8|Greatsword|
|9|Greatblade|
|10|Axe|
|11|Hammer|
|12|Bow|
|13|Longbow|
|14|Crossbow|
|16|Horn|
|17|Longhorn|
|18|Twinhorn|
|19|Staff|
|20|Scepter|
|21|Cannon|
|22|Blunderbuss|
|23|Laser|
|24|Helm|
|25|Shield|
|26|Greatshield|
|27|Shoulderguards|
|28|Cape|
|29|Boots|
|30|Horse|
|31|Warhorse|
|32|Chariot|
|33|Mask|
|34|Rock|
|35|Claw|
|36|Scythe|

### Enchant IDs

|`enchant_id`|Enchant|
|---|---|
|0|None|
|1|St|
|2|G|
|3|De|
|4|H|
|5|Sl|
|6|Fl|
|7|Po|
|8|Hp|
|9|Me|
|10|Ar|
|11|W|
|12|En|
|13|Ic|
|14|Cu

### Item ID + Weaponparam ID Indexes

- [Itemparam table, with weaponparam ID (html)](./resources/itemparam.html)
- [Itemparam table, with weaponparam ID (CSV)](./resources/itemparam.csv)

## Music

### Theme IDs

- [Theme ID list (html)](./resources/theme.html)
- [Theme ID list (CSV)](./resources/theme.csv)

### Music/Sound List (For [playAtrac](../playatrac.md) etc.)

The ID has **same order as selist.slt** (in `DATA_CMN\loadinggroup\systemdata\sound`). Here are few examples:

- title
  - `507000f8`: create player screen
  - `4fd000ee`: titlescreen (title_b.sgd)
  - `50d000fe`: choose starter
- azito
   - `50b000fc`: barracks (organization.sgd)
   - `505000f6`: hideout closed (azito.sgd)
   - `506000f7`: hideout open (ajito_multi.sgd)
   - `50e000ff`: blacksmith (workshop.sgd)
   - `50f00100`: world map (world_map.sgd)
- mission-story
   - `4ff000f0`: tutorial sign theme
   - `51300104`: archfiend theme (evil_and_boss.sgd)
   - `500000f1`: "evil plan"
   - `51400105`: suspect theme - duel tahi tahi..?
   - `51500106`: funny evil story
- mission
   - `509000fa`: result screen (fail)
   - `50c000fd`: result screen (success)
   - `51000101`: chest screen
   
- `4e0000d1`: ???
- `4e0000d2`: Units battle sound
- `4e0000d3`: Chants
- `508000f9`: Mission success sound
- `50a000fb`: Mission fail sound
- `51100102`: Return to the Hideout?

#### Find music/sound ID manually

1. Find the music/sound in `selist.spm` by name. For example, `azito.sgd` is in `0x334c`
2. Do the `data_addr = name_address-0x14`. In the example, it is `0x334c - 0x14` so `0x3338`.
3. Find the `data_addr` from 2. In example, search by `38 33` (And the value can be found in `0x3F8`)
4. Subtract `0x20` from the result of 3. In the example, it is `0x3f8 - 0x20` = 0x3d8`.
5. Divide to 4 from the result of 4. So `0x3d8/4` is `0xf6`, which proves it is the ID of `azito.sgd`.

## Data

## Magic word list

This means `\<NX>` type of the text.

|ID|Text|Highlight|Other player sees same value|
|---|---|---|---|
|`0x0`|Own almighty name|No|No|
|`0x1`|Player 1 hero|Yes|Yes|
|`0x2`|Player 1 hero|No|Yes|
|`0x3`|Player 2 hero|No|Yes|
|`0x4`|Player 3 hero|No|Yes|
|`0x5`|Player 4 hero|No|Yes|
|`0x6`|Player 1 Almighty|No|Yes|
|`0x7`|Unused|No|N/A|
|`0x8`|Unused|No|N/A|
|`0x9`|Unused|No|N/A|
|`0xA`|Own ka-ching value|No|No|
|`0xB`|Player 1 hero|Yes|Yes|
|`0xC``~`0xF`|**Dynamic data region**|No|No, Maybe|

The dynamic region often can be replaced by PAC instructions.

## Tips ID

|ID|Tip|
|---|---|
|`0x0`|Optimise Equipment|
|`0x1`|Collect Ka-ching and Materials|
|`0x2`|Equip Set Skills|
|`0x3`|Develop Class Skills|
|`0x4`|Magic-imbued Weapons|
|`0x5`|Visit Otherworlds with Herogate|
|`0x6`|Share Team Cards|
|`0x7`|Sukopon|
|`0x8`|Gear up in the Barracks!|
|`0x9`|Use the Armoury|
|`0xa`|Fabulous Meden Mart|
|`0xb`|Ad-lib Session with Summon|
|`0xc`|Maximise Summon Potential|
|`0xd`|Sutra Symbols for Summon|
|`0xe`|Four-beat Commands|
|`0xf`|Hatapon In The Middle|
|`0x10`|Never Neglect to Equip|
|`0x11`|Hero Mode|
|`0x12`|Effective CHAKA CHAKA|
|`0x13`|Taterazay Fever Advance|
|`0x14`|Silver Hoshipon!|
|`0x15`|Grass Fires Spread|
|`0x16`|Boost Level|
|`0x17`|Drum in Rhythm!|
|`0x18`|Cannot be Reborn in Dungeon!|
|`0x19`|Donchaka Song (□○×△)|
|`0x1a`|Class Change|
|`0x1b`|Tips Collection|
|`0x1c`|Communicate with Chat!|
|`0x1d`|Hatapon's Flag|
|`0x1e`|Hatapon Damage|
|`0x1f`|Stagger and Knockback|
|`0x20`|About Shield Evasion|
|`0x21`|About Shield Breaker|
|`0x22`|Level Up Blacksmith|
|`0x23`|Summon Yourself|
|`0x24`|Spear Class Tree |
|`0x25`|Shield Class Tree |
|`0x26`|Archer Class Tree |
|`0x27`|Yarida Tips|
|`0x28`|Kibadda Tips|
|`0x29`|Piekron Tips|
|`0x2a`|Wooyari Tips|
|`0x2b`|Pyokorider Tips|
|`0x2c`|Cannassault Tips|
|`0x2d`|Charibasa Tips|
|`0x2e`|Taterazay Tips|
|`0x2f`|Destrobo Tips|
|`0x30`|Guardira Tips|
|`0x31`|Tondenga Tips|
|`0x32`|Myamsar Tips|
|`0x33`|Bowmunk Tips|
|`0x34`|Grenburr Tips|
|`0x35`|Yumiyacha Tips|
|`0x36`|Alosson Tips|
|`0x37`|Wondabarappa Tips|
|`0x38`|Jamsch Tips|
|`0x39`|Oohoroc Tips|
|`0x3a`|Pingrek Tips|
|`0x3b`|Cannogabang Tips|
|`0x3c`|VS Rules: Head-on|
|`0x3d`|VS Rules: Racing Alley|
|`0x3e`|VS Rules: Missile Battle|
|`0x3f`|Cyclops Snacks on Patapons|
|`0x40`|Treants Love Rain|
|`0x41`|Dragon Puppies|
|`0x42`|Expanding Salamanders|
|`0x43`|Golems Rumble Along|
|`0x44`|Defend From Dragon Breath|
|`0x45`|Beware of Fenrir!|
|`0x46`|The Rancid Breath of Death|
|`0x47`|Balrog the Hungry Demon|
|`0x48`|Gargoyle the Tease|
|`0x49`|Unique Equipment|
|`0x4a`|The Best Chests|
|`0x4b`|Using the Blacksmith|
|`0x4c`|Effective Use of Blacksmith|
|`0x4d`|Visit Other Blacksmiths|
|`0x4e`|【Arch Item】|
|`0x4f`|Change Equipment Name|
|`0x50`|Perfect Command Input|
|`0x51`|Importance of Shield Class|
|`0x52`|Hit with Charge Attack|
|`0x53`|Hunker Down with Charge Defence|
|`0x54`|Evade? Or jump?|
|`0x55`|Careful of Status Effects|
|`0x56`|Destroy Structures with 【Strike】|
|`0x57`|Pillage Bonedeth Treasure |
|`0x58`|Multiplayer Quests|
|`0x59`|Anticipate Boss Attacks|
|`0x5a`|Team Up for Big Catches|
|`0x5b`|Anticipate the Wind|
|`0x5c`|Piekron and Rain|
|`0x5d`|So Many Djinns|
|`0x5e`|Boost Summon Energy|
|`0x5f`|DON DODON DODON!|
|`0x60`|Remember to Data Sync|
|`0x61`|Hero Co-operation|
|`0x62`|Collect Team Points|
|`0x63`|Try VS with Battle Gate|
|`0x64`|Co-ordinate Arch Items|
|`0x65`|Hoshipon Shop and Star Shards|
|`0x66`|Search for Star Shards|
|`0x67`|Multiplayer Basics|
|`0x68`|Create a Team!|
|`0x69`|Receiving Team Cards|
|`0x6a`|Rendezvous with Team|
|`0x6b`|Changing Options|
|`0x6c`|Using Server Mode|
|`0x6d`|VS Matching|
|`0x6e`|Failing Quests|
|`0x6f`|Keys in Multiplayer|
|`0x70`|Status Effect Icon List|
|`0x71`|VS Odds and Ends|
|`0x72`|Pause with the PATA PON song|
|`0x73`|Congrats! Finished!♪【Bonus 1】|
|`0x74`|Congrats! Finished!♪【Bonus 2】|
|`0x75`|Congrats! Finished!♪【Bonus 3】|
|`0x76`|Multi VS: Hell Gate|
|`0x77`|Defect to the Dark Side♪|