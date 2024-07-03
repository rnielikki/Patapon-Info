# Background colour
> **ALWAYS TURN ON THE BASE CODE** when applying other codes!

## Base code
How does it work:
If the background image is backmost, it renders single colour instead.
Using `0x890730c` (`Render_Fog`) method, rendering as UI so camera turn or player position is unaffected.

- Overhaul Compatible: `YES`
```
_C0 BG Single Color1 (Field Only)
_L 0x200F4378 0E20F705
_L 0x200F437c 3404000C
_L 0x200F4380 A4400000
_L 0x200F4384 A4400002
_L 0x200F4388 34040064
_L 0x200F438c A4440004
_L 0x200F4390 340301E0
_L 0x200F4394 A4430006
_L 0x200F4398 34030110
_L 0x200F439c A4430008
_L 0x200F43a0 A444000A
_L 0x200F43a4 34040001
_L 0x200F43a8 00408021
_L 0x200F43ac 34040000
_L 0x200F43b0 00A03021
_L 0x200F43b4 0E212800
_L 0x200F43b8 34040009
_L 0x200F43bc 3C05088F
_L 0x200F43c0 8CA544F0
_L 0x200F43c4 0E201903
_L 0x200F43c8 34040001
_L 0x200F43cc 3C020080
_L 0x200F43d0 34040006
_L 0x200F43d4 34450100
_L 0x200F43d8 34060002
_L 0x200F43dc 34070000
_L 0x200F43e0 0E2017BC
_L 0x200F43e4 02004021
_L 0x200F43e8 0E212849
_L 0x200F43ec 00000000
_L 0x200F43f0 1000013C
_L 0x200F43f4 00000000
```

## Colour Change
### Single colour
Fortunately the code above makes free spaces that won't be called at all :D
So I use the space for saving colour. The address is `0x088F44F0`, which has an instruction by default.

* **ONLY WITH BASE CODE**
- Overhaul Compatible: `YES`
```
_C0 Background colour for single colour1 (abgr)
_L 0x088F44F0 00000000
```

### Rhythm Colour
> **! SEIZURE ALERT !** This code makes your background flashing!

Honestly, I removed calling some functions, I don't know does it affect to the game or not.
So use witu your own risk :D

This requires **Flashing rhythm borders on your screen**. If you turned off it, this code won't work.

* **ONLY WITH BASE CODE**
- Overhaul Compatible: `NO`
```
_C0 Oh yea rhythm for single colour1
_L 0xE01E08B9 0x0036B854
_L 0x2036B84C 0x3C02437F
_L 0x2036B850 0x44820000
_L 0x2036B854 0x46140002
_L 0x2036B858 0x46000024
_L 0x2036B85C 0x44020000
_L 0x2036B860 0x3C04FF00
_L 0x2036B864 0x00021200
_L 0x2036B868 0x00441025
_L 0x2036B86C 0x3C04088F
_L 0x2036B870 0xAC8244F0
_L 0x2036B97C 0x3C02437F
_L 0x2036B980 0x44820000
_L 0x2036B984 0x46140002
_L 0x2036B988 0x46000024
_L 0x2036B98C 0x44020000
_L 0x2036B990 0x3C04FF00
_L 0x2036B994 0x00021400
_L 0x2036B998 0x00441025
_L 0x2036B99C 0x3C04088F
_L 0x2036B9A0 0xAC8244F0
_L 0x2036B8F8 0x3C02437F
_L 0x2036B8FC 0x44820000
_L 0x2036B900 0x46140002
_L 0x2036B904 0x46000024
_L 0x2036B908 0x44020000
_L 0x2036B90C 0x00000000
_L 0x2036B910 0x3C04FF00
_L 0x2036B914 0x00441025
_L 0x2036B918 0x3C04088F
_L 0x2036B91C 0xAC8244F0
```

#### Helper line flahsing in DoI
> Warning: I don't know if this has side effect

That code doesn't work in DoI by default, because DoI doesn't have flashing rhythm borders (This is not even a curse!).
**Use only during mission, and remember to turn off after DoI!**

Use this to enable it (I will explain below why this code is here).

- Overhaul Compatible: `NO`, also why would you use this for Overhaul?
```
_C0 Force Line help (doi)
_L 0x2036B758 00000000
_L 0x2036B75C 00000000
```

## Remove others

### Do not render other background

* **ONLY WITH BASE CODE**
* This makes also **hideout npcs invisible**!
- Overhaul Compatible: `YES`
```
_C0 And don't render other background
_L 0x200F44F4 0x100000FB
_L 0x200F44F8 0x00000000
```

- Overhaul Compatible: `YES`
```
_C0 Front Background Removal
_L 0x200D9768 0x03E00008
_L 0x200D976C 0x00000000
```

### Removing other factors

#### Characters
**All characters removal**

This includes player, enemy, miniboss etc.
- Overhaul Compatible: `YES`
```
_C0 Hide characters
_L 0x200BE0A8 0x03E00008
_L 0x200BE0AC 0x00000000
```

**All effects removal**
This also hides items on the ground.
- Overhaul Compatible: `YES`
```
_C0 Hide all effects
_L 0x200d52c8 0x03E00008
_L 0x200d52c8 0x00000000
```

#### UIs

**Fever Status removal**
- Overhaul Compatible: `NO`
```
_C0 Remove Fever Status (DOESN'T WORK with OH)
_L 0xE002FFF0 0x00369628
_L 0x20369628 0x03E00008
_L 0x2036962C 0x00000000
```

**Player Position removal**
- Overhaul Compatible: `NO`
```
_C0 Remove Player Position (DOESN'T WORK with OH)
_L 0xE002FFD0 0x00334720
_L 0x20334720 0x03E00008
_L 0x20334724 0x00000000
```

**Player status removal**
- Overhaul Compatible: `NO`
```
_C0 Remove Player Position (DOESN'T WORK with OH)
_L 0xE002F5B0 0x00331b48
_L 0x20331b48 0x03E00008
_L 0x20331b4C 0x00000000
_L 0xE002FF60 0x00329f50
_L 0x20329f50 0x03E00008
_L 0x20329f54 0x00000000
```
**Enemy HP removal**
- Overhaul Compatible: `YES`
```
_C0 Remove Enemy HP
_L 0x20249558 0x03E00008
_L 0x2024955C 0x00000000
```

**Message balloon removal**
- Overhaul Compatible: `YES`
```
_C0 Don't show message balloon
_L 0x2013515C 0x03E00008
_L 0x20135160 0x00000000
```

**Damage number removal**
This disables only displaying. Damage will be calculated normally.
- Overhaul Compatible: `YES`
```
_C0 Hide damage amount
_L 0x200DBC28 0x03E00008
_L 0x200DBC2C 0x00000000
```

**Text removal**
This is applied next time you see the text.
- Overhaul Compatible: `YES`
```
_C0 Hide damage amount
_L 0x200EC1A0 0x03E00008
_L 0x200EC1A4 0x00000000
```

#### UIs

**Fever Status removal**
- Overhaul Compatible: `NO`
```
_C0 Remove Fever Status (DOESN'T WORK with OH)
_L 0xE002FFF0 0x00369628
_L 0x20369628 0x03E00008
_L 0x2036962C 0x00000000
```

**Player Position removal**
- Overhaul Compatible: `NO`
```
_C0 Remove Player Position (DOESN'T WORK with OH)
_L 0xE002FFD0 0x00334720
_L 0x20334720 0x03E00008
_L 0x20334724 0x00000000
```

**Player status removal**
- Overhaul Compatible: `NO`
```
_C0 Remove Player Position (DOESN'T WORK with OH)
_L 0xE002F5B0 0x00331b48
_L 0x20331b48 0x03E00008
_L 0x20331b4C 0x00000000
_L 0xE002FF60 0x00329f50
_L 0x20329f50 0x03E00008
_L 0x20329f54 0x00000000
```
**Enemy HP removal**
- Overhaul Compatible: `YES`
```
C0 Remove Enemy HP
_L 0x20249558 0x03E00008
_L 0x2024955C 0x00000000

```

#### Weather Renderings

> **None of them changes real weather**. All weather effects still work with this, they just hide visuals.

**Wind removal**
- Overhaul Compatible: `YES`
```
_C0 Remove wind
_L 0x20103328 0x03E00008
_L 0x2010332C 0x00000000
```

**Rain removal**
- Overhaul Compatible: `YES`
```
_C0 Remove rain
_L 0x20100fe0 0x03E00008
_L 0x20100fe4 0x00000000
```

**Snow removal**
- Overhaul Compatible: `YES`
```
_C0 Remove snow
_L 0x20104678 0x03E00008
_L 0x2010467C 0x00000000
```

**Cloud and Item Obtain Status removal**
- Overhaul Compatible: `YES`
```
_C0 Remove cloud
_L 0x20100d28 0x03E00008
_L 0x20100d2C 0x00000000
```

**Fog removal**
- Overhaul Compatible: `YES`
```
_C0 Remove fog
_L 0x2010730c 0x03E00008
_L 0x2010730c 0x00000000
```

#### Others
**Ground removal**
- Overhaul Compatible: `YES`
```
_C0 Remove ground
_L 0x20191bd0 0x03E00008
_L 0x20191bd4 0x00000000
_L 0x200f4034 0x03E00008
_L 0x200f4038 0x00000000
```