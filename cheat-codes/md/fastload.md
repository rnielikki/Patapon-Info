# Fast load: Save button clicking!

> Use only if you read all the information!
## Language Select Skip

- Overhaul Compatible: `YES`
```
_C0 Saving time0 (Language Select)
_L 0x1023F474 0x000009b8
_L 0x20240010 0x34020002
```
From the line `_L 0x20240010 0x34020002`, and from `0x34020002`, `0002` is the language code.
I don't know the language code, also it varies depends on the mod, so you can test and find out.

## System data loading message Skip

- Overhaul Compatible: `YES`
```
_C0 Saving time1 (System data load)
_L 0x20221970 0x34100002
_L 0x20221974 0xAE702390
_L 0x20221978 0x10000305
_L 0x2022197C 0x00000000
_L 0x20221980 0x00000000
_L 0x20221984 0x00000000
_L 0x20221988 0x00000000
_L 0x2022198C 0x00000000
_L 0x20221990 0x00000000
_L 0x20221994 0x00000000
```

## EULA Skip
> **This may block you from playing infrasturcture mode**.
- Overhaul Compatible: `NO`
```
_C0 Saving time2 (EULA Skip)
_L 0xE0016B7C 0x002DA99C
_L 0x202DA99C 0x00000000
```


## Intro Skip
- Overhaul Compatible: `NO`
```
_C0 Saving time3 (Intro skip)
_L 0xE0020004 0x002C1000
_L 0x202C1000 0x24020006
_L 0x202C11B0 0x34030001
```