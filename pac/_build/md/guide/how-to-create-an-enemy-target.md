# How To: Create an Enemy Target

## How does it work

There is "generator" that contains object definitions.

## 1. Create a generator with `create`

> This is done in [setMissionTimmingScript](../setmissiontimmingscript.md) 1st phase.

Related article: [create](../create.md).

## 2. Setup generator

> This is done in [setMissionTimmingScript](../setmissiontimmingscript.md) 1st phase, right after step above

Related instructions: [Generator setup](./category.md#generator-setup)

Use 1st parameter from `create` to define the detail of the generator.

- [setTroopType](../settrooptype.md): Defines troop type (is player side or enemy side)
- [setPosX](../setposx.md): Defines position
- [setDeathCall](../setdeathcall.md): Defines instruction set to call after the unit is dead.

## 3. Setup individual unit in the generator.

> This is done in [setMissionTimmingScript](../setmissiontimmingscript.md) 1st phase, right after step above

- [setReqActorType](../setreqactortype.md): Sets actor type from [generatorparam](./reference-table.md#generatorparam).
  - If the target is not in the list, another method like [addGimmick](../addgimmick.md) etc are required.
- [setReqActorCount](../setreqactorcount.md): Sets the spawn limit.
- [setReqActorDelayTime](../setreqactordelaytime.md): Spawn delay between next spawn.

### Example result as visualised table

Each table represents generator.

*~ Generator (with `create`) table 1 ~*

- X position 3200
- Calls address to `cmd_end()` after death

|ReqActor0|ReqActor1|ReqActor2|
|---|---|---|
|Yarideth|Tatedeth|Yumideth|
|2 units|1 unit|3 units|

*~ Generator (with `create`) table 2 ~*

- X position 2400
- Calls address `0x2099C` after death

|ReqActor0|
|---|
|Cyclops|
|1 unit|

## 4. Spawn the generator

> This is done in [setMissionTimmingScript](../setmissiontimmingscript.md) **2nd phase**.

First, use [getHandle](../gethandle.md) to load the unit, and then [Spawn](../spawn.md).

```c
0005C7FC  251F1500:getHandle(2:898, 8:1A)
0005C810  251F1300:spawn(8:1A)
```

If there are many entities on the way, consider using [setDeathCall](../setdeathcall.md) to spawn the next targets.

## Bringing together (example)

This is *spawning motiti in runtime* function in debug mode.

```c
0002B514  25100600:getPack(4:0)
0002B520  251F0200:create(4:1, 2:1)
0002B534  251F1B00:setModeEx(4:1, 2:0, 2:FFFFFFFF, 2:FFFFFFFF)
0002B558  251F0500:setPosX(4:1, 150.0)
0002B56C  251F0600:setAdventRadius(4:1, 0.0)
0002B580  251F0800:setDeathCall(4:1, 4:0, 1:248CC)
0002B59C  251F0900:setReqActorType(4:1, 2:0, 24)
0002B5B8  251F0A00:setReqActorCount(4:1, 2:0, 2:1)
0002B5D4  251F0E00:setReqActorPos(4:1, 2:0, 0.0, 0.0)
...
//0002B5F8  251F1300:spawn(4:1)
0002B604  25000100:cmd_end()
```

**Do not call `spawn` until [mission timming](./how-to-define-a-mission.md) is reached to 2nd phase**. Mind that is debug mode and everything is already fully loaded.

In normal mission, use [getHandle](../gethandle.md) and [spawn](../spawn.md) **later**.

```c
00000310  251F1500:getHandle(2:0, 8:1A)
00000324  251F1300:spawn(8:1A)
```

## For const structure

Note that **constGimmick object is loaded from very first**, and *can't be lazy loaded*.

If the structure is spawned after some point (e.g. when other structure destroyed), the structure must be called using reqActor (like above).

1. Use [registConstGimmick](../registconstgimmick.md) (MissionTimming phase 1).
2. Set the gimmick with [applyConstGimmick](../applyconstgimmick.md) (MissionTimming phase 2).
3. Call [resetGateInfo](../resetgateinfo.md) right before setting gate information.
4. Use [setGateInfo](../setgateinfo.md) (last parameter with 1st param 0) to setup the gimmick (`registerConstGimmick` last parameter).
5. Control collision status with [enableCollisionConstGimmick](../enablecollisionconstgimmick.md).

1st:

```c
0005A9D4  25120200:setMissionTimmingScript(2:1, 4:0, 1:5AAA8)
  0005AAA8  25000300:cmd_call(1:5A3F0)
    0005A3F0  2516BF00:registConstGimmick(2:103, 8:32, 2:1, 2:12C, 2:0, 2:0, 2:1, 2:1, 2:1, 2:384, 2:186A0)
    ...
    0005A674  2516BF00:registConstGimmick(2:117, 8:32, 2:1, 2:A8C, 2:0, 2:0, 2:1, 2:1, 2:1, 2:12C, 2:186A9)
    0005A6D0  25000100:cmd_end()
```

2~4:

```c
0005A9F0  25120200:setMissionTimmingScript(2:2, 4:0, 1:5D4AC)
  0005D4AC  25000300:cmd_call(1:5D4E4)
  0005D4B4  25000300:cmd_call(1:5D4F0)
  /* 2. apply const gimmicks */
    0005D4F0  2516C000:applyConstGimmick()
    0005D4F4  25000100:cmd_end()
  ...
  0005D4D4  25000300:cmd_call(1:5A6D4)
  /* 3. reset the gate information */
    0005A6D4  2516BC00:resetGateInfo()
  /* 4. setup the gates */
    0005A6D8  25000700:cmd_mov(8:46, 0.0) //8:46 index
    0005A6EC  25000700:cmd_mov(8:48, -1.0) //object identifier
    0005A700  2516BD00:setGateInfo(2:0, 8:46, 2:0, 8:48)
    0005A724  2516BD00:setGateInfo(2:0, 8:46, 2:1, 2:0)
    0005A748  2516BD00:setGateInfo(2:0, 8:46, 2:2, 1:5D5F8)
    0005A76C  25000C00:cmd_inc(8:46) //increases the index
    0005A778  25000700:cmd_mov(8:48, 100000.0) //identifier 0x186a0 from constgimmick
    0005A78C  2516BD00:setGateInfo(2:0, 8:46, 2:0, 8:48)
    0005A7B0  2516BD00:setGateInfo(2:0, 8:46, 2:1, 2:5)
    0005A7D4  2516BD00:setGateInfo(2:0, 8:46, 2:2, 1:5D6A8)
    0005A7F8  25000C00:cmd_inc(8:46)
    0005A804  25000700:cmd_mov(8:48, 100001.0)
    ...
    0005A9A8  25000100:cmd_end()
```

This is how to setup the gate in phase 3 and 4:

```c
000049CC  2516BC00:resetGateInfo()
000049D0  25000700:cmd_mov(8:46, 0.0)
000049E4  25000700:cmd_mov(8:48, -1.0)
000049F8  2516BD00:setGateInfo(2:0, 8:46,
000049F8  2516BD00:setGateInfo(2:0, 8:46, 2:0, 8:48)
00004A1C  2516BD00:setGateInfo(2:0, 8:46, 2:1, 2:0)
00004A40  2516BD00:setGateInfo(2:0, 8:46, 2:2, 1:24C)
00004A64  25000C00:cmd_inc(8:46)
00004A70  25000700:cmd_mov(8:48, -2.0)
00004A84  2516BD00:setGateInfo(2:0, 8:46, 2:0, 8:48)
00004AA8  2516BD00:setGateInfo(2:0, 8:46, 2:1, 2:0)
00004ACC  2516BD00:setGateInfo(2:0, 8:46, 2:2, 1:24C)
00004AF0  25000C00:cmd_inc(8:46)
00004AFC  25000100:cmd_end()
```

### For dungeon

1. Use [setupStartDungeonWall](../setupstartdungeonwall.md).
2. Call [setupAddDungeonWall](../setupadddungeonwall.md).
3. Set detail information of it with [setGateInfo](../setgateinfo.md).
  - If there is any lever, [create the levers](../setreqactortype.md) first and [get thd ID of them](../setreqactoruniqueid.md).
4. Finish with [setupEndDungeonWall](../setupenddungeonwall.md)

## Grass / Obstacle

Same as creating unit entities. They also have `generatorparam` entities, and can use them. Those are main differences from the unit creation:

- **For grass, use hitbox layer 3 in [setTroopType](../settrooptype.md)**.
- Use [setAdventRadius](../setadventradius.md) or [setReqActorAdventRadius](../setreqactoradventradius.md) for setting distance between grasses.

## Spawning units from a structure

### ConstGimmick Method

1. [Create the tower](./how-to-create-an-enemy-target.md#for-const-structure) using [registConstGimmick](../registconstgimmick.md).
2. Use generator and connect with [SetModeEx](../setmodeex.md) last parameter  (to `registeConstGimmick` last parameter), and set `mode_type` to 3.
3. **Set the [time between respawn](../setreqactordelaytime.md) and [total respawn count](../setreqactortotal.md)**.
4. Use [spawn](../spawn.md) to spawn units.

```c
/* 1. register const gimmick */
0005DED8  2516BF00:registConstGimmick(2:118, 8:32, 2:1, 2:2BC, 2:0, 2:0, 2:0, 2:1, 2:1, 2:12C, 2:6E)
...
/* 2. define a generator and set "setModeEx" */
0005EAF8  251F0200:create(8:1A, 2:44C)
...
0005EB34  251F1B00:setModeEx(8:1A, 2:1, 2:FFFFFFFF, 2:6E)
...
0005EB78  251F0800:setDeathCall(8:1A, 4:0, 1:5F39C)
0005EB94  251F0900:setReqActorType(8:1A, 2:1, 16)
...
/* 3. limit the spawn amount and spawn time */
0005EF0C  251F1200:setReqActorDelayTime(8:1A, 2:1, 2.0)
0005EF28  251F0B00:setReqActorTotal(8:1A, 2:1, 2:3)
```

### ReqActor Method

1. Use generator and set `mode_type` (2nd parameter) in [SetModeEx](../setmodeex.md) to **4**.
2. Define a structure in the generator, as reqActor gimmick, as index 0.
3. Put the units together to the **same generator as the structure**.
4. Set the [time between respawn](../setreqactordelaytime.md) and [total respawn count](../setreqactortotal.md).
5. Use [spawn](../spawn.md) to spawn units.

```c

0005B7D4  251F0200:create(8:1A, 2:44C)
0005B7E8  251F1900:setTroopType(8:1A, 2:1)
0005B7FC  251F0400:setLevel(8:1A, 8:32)
/* NOTE THE SECOND PARAM IS 4 */
0005B810  251F1B00:setModeEx(8:1A, 2:4, 2:FFFFFFFF, 2:FFFFFFFF)
...
/* Make the spawn point structure in index 0 */
0005B870  251F0900:setReqActorType(8:1A, 2:0, 118)
...
0005B974  251F0900:setReqActorType(8:1A, 2:1, 4F)
0005B990  251F0A00:setReqActorCount(8:1A, 2:1, 2:1)
...
/* Add other units */
0005BAB0  251F1200:setReqActorDelayTime(8:1A, 2:1, 4.0)
0005BACC  251F0B00:setReqActorTotal(8:1A, 2:1, 2:9)
0005BAE8  251F0900:setReqActorType(8:1A, 2:4, 15)
0005BB04  251F0A00:setReqActorCount(8:1A, 2:4, 2:3)
...
0005BC90  251F1200:setReqActorDelayTime(8:1A, 2:4, 4.0)
0005BCAC  251F0B00:setReqActorTotal(8:1A, 2:4, 2:9)
```

## Next step

- [How To: Get a Handle](./how-to-get-a-handle.md)