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

- [setModeEx](../setmodeex.md): Defines hitbox layer (is player side or enemy side)
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
0002B5F8  251F1300:spawn(4:1)
0002B604  25000100:cmd_end()
```

Note that in non-debug mode, `getHandle` and `spawn` method is preferred.

## For structure

1. Use [registConstGimmick](../registconstgimmick.md) (MissionTimming phase 1).
2. Set the gimmick with [applyConstGimmick](../applyconstgimmick.md) (MissionTimming phase 2).
3. Use [setGateInfo](../setgateinfo.md) (last parameter with 1st param 0) to setup the gimmick (`registerConstGimmick` last parameter).
4. Control collision status with [enableCollisionConstGimmick](../enablecollisionconstgimmick.md).

## For dungeon

1. Use [setupStartDungeonWall](../setupstartdungeonwall.md).
2. Call [setupAddDungeonWall](../setupadddungeonwall.md).
3. Set detail information of it with [setGateInfo](../setgateinfo.md).
  - If there is any lever, [create the levers](../setreqactortype.md) first and [get thd ID of them](../setreqactoruniqueid.md).
4. Finish with [setupEndDungeonWall](../setupenddungeonwall.md)

## Spawning units from a structure

1. [Create the tower](./how-to-create-an-enemy-target.md#for-structure) using [registConstGimmick](../registconstgimmick.md).
2. Use generator and connect with [SetModeEx](../setmodeex.md) last parameter  (to `registeConstGimmick` last parameter).
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

## Next step

- [How To: Get a Handle](./how-to-get-a-handle.md)