# How To: Get a Handle

Article before: [How To: Create an Enemy Target](./how-to-create-an-enemy-target.md)

## What is a handle?

A **handle** is specific ID given to the each entity. The entity can be player unit, enemy unit, squad, troop, or even effect or gimmick. Many PAC instructions use the handle to control the entity, e.g. [model info](../setmodelinfo.md), [render priority](../setrenderpriority_25171800.md), [motion](../playmotion.md), [speech bubble target](../callmessagewindow.md) and more.

The handle can be unit, gimmick, squad or something else.

## How to get a handle

Check [getting handle category](./category.md#getting-handle).

### Units

1. Get [squad handle](./category.md#squad).
2. Get Unit handle from the squad handle.

Few PAC instructions allow handle as parameter, but this doesn't happen often.

### reqActor (created) unit

In the [prior article](./how-to-create-an-enemy-target.md), there was part to [set unique ID](../setreqactoruniqueid.md).

```c
00067B00  251F1800:setReqActorUniqueId(8:1A, 2:1, 2:65)
```

`2:65` (third parameter) is the one that will be used for obtaining *squad handle* and *unit handle*.

```c
00060BD0  25163700:getUnitSquadHandle(4:1, 2:12C)   //squadHandle stored in 4:1
00060BE4  25163D00:getUnitHandle(4:A, 4:1, 2:0)     //unitHandle stored in 4:A, 2nd parameter is squadHandle from above
```

Now the **`4:A`** contains the [unit handle](../getunithandle.md).

Note the [reqActor](../setreqactortype.md) can be either an unit or a gimmick.

### Player unit

Use [getPlayerSquadHandle](../getplayersquadhandle.md) and [getUnitHandle](../getunithandle.md).

```c
0002A83C  25163900:getPlayerSquadHandle(4:A, 2:0)   //squadHandle 4:A
0002A850  25163D00:getUnitHandle(4:B, 4:A, 2:0)     //unitHandle 4:B
```

For multiplayer, [getMultiplayerSquadHandle](../getmultiplayersquadhandle.md) or [getMultiplayerSquadHandle_PID](../getmultiplayersquadhandle_pid.md) to get the *squad handle*.

For Hatapon, [getHataPonHandle](../gethataponhandle.md) gives **unit handle** without need to get squad handle.

### Item

[addItemEffect](../additemeffect.md) stores handle as the result.

### Gimmick

1. First, get gimmick ID
   - For [getGateInfo](../getgateinfo.md) or [setGateInfo](../setgateinfo.md), it is `destination` or `param` *with* `param_index` 0.
   - For [registConstGimmick](../registconstgimmick.md), it is last parameter of the instruction (user-defined ID).
2. [gimmick_getHandle](../gimmick_gethandle.md) to get a handle of it.

### Hideout

This is how to get a handle of a selected unit.

```c
00009C64  251C0600:getAzitoInfo(2:7, 4:0)
00009C78  251C0900:getFacilityGimmickHandle(4:1, 4:0)
00009C8C  25170A00:getModelInfo(4:1, 20:0, 20:1, 40:1FF, 40:1FF)
```

For obtaining Pons unit, use [getEventUnitHandle](../geteventunithandle.md). Pons can be placed in the hideout in this way.

Next: [How To: Control a Squad](./how-to-control-a-squad.md)