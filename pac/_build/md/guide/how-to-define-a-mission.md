# How To: Define a Mission

> See also: [The Flow](./the-flow.md)

> [!CAUTION]
> It is strongly recommended to use existing template (editing existing mission), otherwise it might cause crashing.

This is all theory and not tested yet. Please correct when this is tested.

## 1. Set mission information

- Set [mission metadata](./category.md#mission-information), including the [Quest Data](./category.md#quest-data).
- [Clears](../cmd_flgclr.md) or sets some flags.
- Loads basic data like [game mode](../getgamemode.md), [unit param](../getunitparam_25161b00.md) (Note unit itself is initialised in different phase!).
- System settings like [CPU Clock mode](../setcpuclockmode.md), [memset](../cmd_memset.md).

### Example

Here is example for a DLC Mission:
```c
00000000  25002700:cmd_flgSet(F15)
0000000C  25120300:setMaxMissionAreaId(2:1)
00000018  25000300:cmd_call(1:15A8)
00000020  25000700:cmd_mov(8:32, 29.0)
00000034  25000700:cmd_mov(8:33, 51.0)
00000048  2516A400:setQuestLevel(8:32)
00000054  2516A600:setQuestLevelRevise(8:33)
00000060  25002C00:cmd_flgAND(1:70, E3E)
00000070  25001700:cmd_ifEQ(8:1C, 2.0, 1:8C)
00000088  25000100:cmd_end()
```

The **`8:1C`** here means the **Mission ID**.
- For non-DLC mission, it is described from [mission ID table](./reference-table.md#mission-ids).
- For DLC mission, it is same as the number in PAC file. For example, if the file name is `dlc_mission_0010.pac`, the Mission ID here is 10.

```c
00000070  25001700:cmd_ifEQ(8:1C, 2.0, 1:8C)
```

In non-dlc mission, there can be more than one `8:1C` [comparison jump](../cmd_ifeq.md), since one PAC can contain more than one mission.

```c
00000000  25120300:setMaxMissionAreaId((int)1)             //dungeon floor amount, 1 for field
0000000C  25000300:cmd_call(0x2B0)                         //Init Mission and Quest Data and more
00000014  25002C00:cmd_flgAND(1:24, E3E)
00000024  25001700:cmd_ifEQ(8:1C, 52.0, 1:5ACE8)
0000003C  25001700:cmd_ifEQ(8:1C, 53.0, 1:60434)
00000054  25001700:cmd_ifEQ(8:1C, 54.0, 1:66A6C)
0000006C  25001700:cmd_ifEQ(8:1C, 55.0, 1:6725C)
00000084  25001700:cmd_ifEQ(8:1C, 56.0, 1:690C4)
0000009C  25001700:cmd_ifEQ(8:1C, 57.0, 1:69930)
000000B4  25000100:cmd_end()
```

## 2. Set MissionTimmingScript

Use [setMissionTimmingScript](../setmissiontimmingscript.md) to call instructions when mission is loaded.

### Read resources (0)

This loads not only stage, but also oter resources such as other models and messages.

```c
00000098  25120200:setMissionTimmingScript(2:0, 4:0, 1:F0)
    000000F0  25000300:cmd_call(1:A290)
    000000F8  25090900:readArcFile(2:2, "Actor/Stage/stg041.bnd")
    0000011C  25090900:readArcFile(2:2, "Actor/Stage/stg042.bnd")
    00000140  25000100:cmd_end()
```

#### Loading Resource on demand

1. Get unit data with [getUnitParam](../getunitparam_25161b00.md).
2. Check if the unit is certain class with [cmd_ifEQ](../cmd_ifeq.md) (`getUnitParam` 3rd parameter).
3. (Optional) If the character is not a hero (`getUnitParam` 4nd parameter 0), skips hero exclusive resource loading.
4. (Optional) If different equipment has different effect, check the equipment type with [isEquipWeaponInTroop](../isequipweaponintroop.md).

```c
/* 1. getUnitParam to each team member */
00039A64  25161B00:getUnitParam(2:1, 2:0, 4:4, 4:5)
00039A88  25000300:cmd_call(1:3F518)
00039A90  25161B00:getUnitParam(2:1, 2:1, 4:4, 4:5)
00039AB4  25000300:cmd_call(1:3F518)
00039ABC  25161B00:getUnitParam(2:1, 2:2, 4:4, 4:5)
00039AE0  25000300:cmd_call(1:3F518)
00039AE8  25161B00:getUnitParam(2:1, 2:3, 4:4, 4:5)
00039B0C  25000300:cmd_call(1:3F518)
/* 2. loads instruction by class type */
    0003F518  25001700:cmd_ifEQ(4:4, 0.0, 1:39420)
    ...
    0003F5C0  25001700:cmd_ifEQ(4:4, 13.0, 1:40190)
    /* 3. Skips hero specific effect for non-hero unit */
        00040190  25001700:cmd_ifEQ(4:5, 0.0, 1:407DF)
        /* load resources */
        000401A8  25090900:readArcFile(2:2, "Actor/Stand/stnd003.bnd")
        000401CC  25090900:readArcFile(2:2, "Actor/Effect/efm_108.bnd")
        00040218  25090900:readArcFile(2:2, "Actor/Effect/efm_109.bnd")
        00040240  250A1700:requestActor(2:B, 2:C1, 2:FFFFFFFF, 2:FFFFFFFF)
        /* 4. Resource can be loaded by equipment */
        00040264  25162C00:isEquipWeaponInTroop(4:1, 2:4A, 4:0)
        00040280  25001F00:cmd_ifCallEQ(4:0, 1.0, 1:407E4)
```

Sets skill or class skill can be loaded on demand too, using [isRegisterSkill](../isregisterskill.md).

```c
00039BFC  25162E00:isRegisterSkill(4:1, 2:0, 4:3)
00039C18  25001F00:cmd_ifCallEQ(4:3, 1.0, 1:3D16C)
00039C30  25162E00:isRegisterSkill(4:1, 2:1, 4:3)
00039C4C  25001F00:cmd_ifCallEQ(4:3, 1.0, 1:3D16C)
00039C64  25162E00:isRegisterSkill(4:1, 2:2, 4:3)
```

### Make Item Tables and setup actors (1)

Related article : [How To: create an Enemy Target](./how-to-create-an-enemy-target.md)

```c
00000674  25000300:cmd_call(1:C14)
//------------------- ITEM SETUP --------------------- //
0000067C  25000300:cmd_call(1:144)
    00000144  25000300:cmd_call(1:85B8)
        0000014C  25080200:beginAppearItem(2:15E)
        00000158  25080900:setAppearItemKillTime(26.0, 40.0)
        0000016C  25080800:setCharinAppearParam(2:4, 2:A, 8:60, 8:32, 16.0, 30.0)
        000001A0  25000700:cmd_mov(40:1C, 1.0)
        000001B4  25080300:setAppearItem(0.02500000037252903, 2:4A, 2:0, 2:0, 2:FFFFFFFF)
        000001E0  25000900:cmd_sub(40:1C, 0.02500000037252903)
...
//------------------- UNIT SETUP 1 --------------------- //
000006C0  25000300:cmd_call(1:BED8)
    0000BED8  25100600:getPack(4:0)
    0000BEE4  251F0200:create(8:1A, 4:1)
    0000BEF8  251F1900:setTroopType(8:1A, 2:1)
    0000BF0C  251F1B00:setModeEx(8:1A, 2:0, 2:FFFFFFFF, 2:FFFFFFFF)
    0000BF30  251F0400:setLevel(8:1A, 2:0)
    0000BF44  251F0500:setPosX(8:1A, 40:14)
    0000BF58  251F0600:setAdventRadius(8:1A, 0.0)
    0000BF6C  251F0800:setDeathCall(8:1A, 4:0, 1:D4C)
    0000BF88  251F0900:setReqActorType(8:1A, 2:0, 7E)
    0000BFA4  251F1800:setReqActorUniqueId(8:1A, 2:0, 4:2)
    ...
//------------------- UNIT SETUP 2 --------------------- //
000006C8  25000300:cmd_call(1:6D4)
    000006D4  251F0200:create(8:1A, 2:3E8)
    000006E8  251F1900:setTroopType(8:1A, 2:1)
    000006FC  251F0400:setLevel(8:1A, 8:32)
    00000710  251F1B00:setModeEx(8:1A, 2:4, 2:FFFFFFFF, 2:FFFFFFFF)
    00000734  251F0500:setPosX(8:1A, 800.0)
    00000748  25100600:getPack(4:0)
    00000754  251F0800:setDeathCall(8:1A, 4:0, 1:8C0)
    00000770  251F0900:setReqActorType(8:1A, 2:0, 65)
    ...
000006D0  25000100:cmd_end()
```

### Final setup (2)

```c
//------------------- Unit Information Setup --------------------- //
000008C4  25000300:cmd_call(1:910)
    00000910  25000300:cmd_call(1:A36C)
        0000A36C  25000700:cmd_mov(8:67, 0.0)
        0000A380  25161F00:addTroop(8:68, 8:67)
        0000A394  25162000:setAppearancePosition(8:68, 0.0)
        0000A3A8  25162100:setRebornPosition(8:68, 0.0)
        0000A3BC  25000700:cmd_mov(8:73, 1.0)
        0000A3D0  25161F00:addTroop(8:74, 8:73)
        0000A3E4  25162000:setAppearancePosition(8:74, 0.0)
        0000A3F8  25162100:setRebornPosition(8:74, 0.0)
        ...
        0000A49C  25163300:setupUnit() //After seting is done, call setupUnit()
        0000A4A0  25163100:applyUnit() //and applyUnit()
    00000918  25000100:cmd_end()
//------------------- Gimmick Handle Setup --------------------- //
000008CC  25000300:cmd_call(1:91C)
    0000091C  2516C000:applyConstGimmick()
    00000920  2516B200:multi_waitGoAhead1()
    00000924  251F1500:getHandle(2:0, 8:1A)
    00000938  251F1300:spawn(8:1A)
    00000944  2516B500:multi_waitActiveGenerator(2:0)
    00000950  2516B200:multi_waitGoAhead1()
    00000954  251F1500:getHandle(2:3E8, 8:1A)
    ...
//------------------- STAGE SETUP --------------------- //
000008D4  25000300:cmd_call(1:9A0)
    000009A0  25000300:cmd_call(1:6344)
        00006344  25165E00:setStageParam(1.0, 0.800000011920929, 0.699999988079071, 2:0, "stg041")
        00006370  25000100:cmd_end()
    000009A8  25000300:cmd_call(1:6374)
        00006374  25165E00:setStageParam(1.0, 0.800000011920929, 0.6000000238418579, 2:0, "stg042")
        000063A0  25000100:cmd_end()
    000009B0  25000300:cmd_call(1:AD8)
        00000AD8  25165D00:addStage(2:0, 2:0, 2:0, 2:0, 2:0, "stg041")
        00000B0C  25165D00:addStage(2:0, 2:0, 2:0, 2:0, 2:0, "stg041")
        ...
    000009B8  25165C00:endSetupStage()
    000009BC  25165F00:applyStage(2:0)
    000009C8  25000100:cmd_end()
000008DC  25000300:cmd_call(1:9CC)
000008E4  25000300:cmd_call(1:9D8)
000008EC  25000300:cmd_call(1:C18)
000008F4  25000700:cmd_mov(8:1C, -1.0)
00000908  25000200:cmd_jmp(1:9E4)
```

### Looping (after 2)

Some logics must be called in every frame. In this case, the instruction can be loopsed with following steps:

1. Loop by calling prior instructions through [cmd_jmp](../cmd_jmp.md).
2. Right *above* the cmd_jmp, **call [cmd_waitframe(1)](../cmd_waitframe.md)**.

Remember to call `cmd_waitFrame` so the game does not stuck.

```c
000119D8  25002C00:cmd_flgAND(1:11A40, EE9)
000119E8  25000300:cmd_call(1:5944)
000119F0  25161700:resultGetState(8:15, 8:16, 8:17)
00011A0C  25001700:cmd_ifEQ(8:17, 1.0, 1:11A6C)
00011A24  25000300:cmd_call(1:5AAC)
00011A2C  25000F00:cmd_waitFrame(2:1)   //WAIT before looping
00011A38  25000200:cmd_jmp(1:119D8)     //goes to the above(0x119D8)
```

### Setting up the goal position

`((global)float *)gfVar0x14` (`40 00 00 00 14 00 00 00`) is the mission goal position.

Editing this part will move mission position.

```c
00000280  25000700:cmd_mov(40:14, 3420.0) //goal position is 3420.0 (as psp pixels)
```

Mission goal gimmick is created in `((global)int *)giVar0x1A` (`08 00 00 00 1A 00 00 00`), and the `generatorparam` ID is `0x7E`.

```c
0000BEE4  251F0200:create(8:1A, 4:1)
...
0000BF44  251F0500:setPosX(8:1A, 40:14)    //using "40:14" for the position.
...
0000BF88  251F0900:setReqActorType(8:1A, 2:0, 7E)
```
However, the gimmick alone doesnn't do anything.

The code below is implemented in loop (described in above).

```c
// --- if all units are dead mission fails -- //
00005B4C  25163600:getAliveUnitCount(4:0)
00005B58  25001900:cmd_ifLSE(4:0, 0.0, 1:D4C)
...
// -------------- get position --------------- //
00005C14  25163400:getTroopTopPosX(20:0, 2:0)
// --- compare with goal position (40:14) ---- //
00005C28  25001B00:cmd_ifLS(20:0, 40:14, 1:D4C)
// --------------- if summon ---------------- //
00005C40  250C1700:isSummonMode(2:0, 4:0)
00005C54  25001800:cmd_ifNE(4:0, 0.0, 1:5C98)
// ------------ or march command ------------ //
00005C6C  250C0100:getCommandId(2:FFFFFFFF, 4:0)
00005C80  25001800:cmd_ifNE(4:0, 0.0, 1:D4C)
// ------- set mission status flags -------- //
00005C98  25002700:cmd_flgSet(DF6)
00005CA4  25002C00:cmd_flgAND(1:5D78, E94)
00005CB4  25002C00:cmd_flgAND(1:5D10, DFA)
// -- if 8:1C is 0, instant go to hideout -- //
00005CC4  25001700:cmd_ifEQ(8:1C, 0.0, 1:5D44)
    00005D44  25161900:resultSetState(2:7, 2:7, 2:0, 2:0, 2:0, "")
    00005D74  25000100:cmd_end()
// -------- normal mission success -------- //
00005CDC  25161900:resultSetState(2:2, 2:7, 2:0, 2:0, 2:0, "")
00005D0C  25000100:cmd_end()
```


## 3. Finish with `cmd_end()`.

Every PAC logics are callback of the MissionTimmingScript, so mission setup is done here.

## Adding a mission to the world map

> [!Warning]
> Madwig DLC has special format that can't be opened with bnd tools.
> One option is copy non-Mad mission and overwriting it, but still cannot guarantee to be functional in such mission.

Use [AddArea](../addarea.md) and [addQuest](../addquest.md) for adding the mission. Always check if the map/quest is already added in the PAC file.

For DLC, the PAC file is inside `98D1E9D2`, for non-DLC, it is inside `DATA_CMN/mission/(Mission_??_??)`.

For DLC Mission, Madwig DLC already has all available mission indexes (file names). Check the Mission ID table.

### Message

For non-DLC mission:
- The quest description is in `loadinggroup/azitolocal/localize/(language)/worldmapdata/scriptlist/worldmapmsg.msg` (used by `addQuest`)
- In-mission messages is are `message/azitolocal/(mission_??_??).msg`

For DLC mission:
- The quest description is in `98D1E9D2`
- In-mission messages are in the mission file.

## Misc

For the countdown before the battle, use [startIntroEvent](../startintroevent.md) and then [multiBattleGoAhead](../multi_battlegoahead.md).

Consider the followings for cutscene (do not use for disturbing gameplay):
- For disabling key input during cutscene, check [setDisableKey](../setdisablekey.md).
- For UI removing, check [UI related instructions](./category.md#ui--display).