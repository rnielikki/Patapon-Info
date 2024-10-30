# How To: Control a Squad

Article Before: [How To: Control a Squad](./how-to-control-a-squad.md)

## Controlling Bosses

All minibosses' and bosses' action are **automatic**, controlled by Assembly or `monster.pac`, which doesn't need to touch.

Though, if you want to control the boss manually, consider [enableBossManualCtrl](../enablebossmanualctrl.md).

Related instructions: [Boss Control](./category.md#boss-control)

## Small units

Related instructions: [Unit Control](./category.md#unit-control)

Unlike boss, small units like deths or dark heroes are controlled by separately defined PAC instructions.

### Auto controlled units

The "auto control" here means simple march and attack, like regular bonedeth units do.

1. Set [setUnitCtrlMode](../setunitctrlmode.md) with *zero `mode_id`* so can perform regular march-attack.
2. Set [setUnitCtrlStartActType](../setunitctrlstartacttype.md) with *zero `command_id`* so march by default.
3. Use [setUnitCtrlActivity](../setunitctrlactivity_251f1c00.md) to connect [the squadparam ID](./reference-table.md#squadactivityparam-ids-pve-only).
4. Set [setReqActorFixPosFlag](../setreqactorfixposflag.md) with *zero `can_float`*.

Note the units can do only march, attack and defend.

```c
0005AF34  25100600:getPack(8:5B)
0005AF40  251F2600:setUnitCtrlTimingScript_Int(8:1A, 2:7, 8:5B, 1:1C010)
0005AF64  251F1700:setUnitCtrlMode(8:1A, 2:5, 2:0)
0005AF80  251F2300:setUnitCtrlStartActType(8:1A, 2:5, 2:2)
0005AF9C  251F1C00:setUnitCtrlActivity(8:1A, 2:5, 2:0, 2:5C3)
0005AFC0  251F1C00:setUnitCtrlActivity(8:1A, 2:5, 2:1, 2:5C5)
0005AFE4  251F1C00:setUnitCtrlActivity(8:1A, 2:5, 2:2, 2:5C9)
0005B008  251F1A00:setReqActorFixPosFlag(8:1A, 2:5, 2:0)
```

### Maunally controlling units

Some dark heroes' actions are manually controlled for story mission balance.

(If they perform heromode all the times, the gameplay will be harder).

1. Connect to the unit activity with the [setUnitCtrlActivity](../setunitctrlactivity_251f1c00.md).
2. Set/Change [setUnitCtrlCurrentActType](../setunitctrlcurrentacttype_2516d800.md).

This is Ragewolf action in his first encounter (Ragewolf and the Mysterious Birch Grove):

```c
/*setting up the actions */
00062778  25004B00:cmd_getArray(4:40, 8:11B, 4:2B)
00062794  25004B00:cmd_getArray(4:40, 8:11A, 4:2A)
000627B0  251F1C00:setUnitCtrlActivity(4:2B, 4:2A, 2:0, 2:3BA)
000627D4  25004B00:cmd_getArray(4:40, 8:11B, 4:2B)
000627F0  25004B00:cmd_getArray(4:40, 8:11A, 4:2A)
0006280C  251F1C00:setUnitCtrlActivity(4:2B, 4:2A, 2:1, 2:3B2) //connects to defend squadlineparam
00062830  25004B00:cmd_getArray(4:40, 8:11B, 4:2B)
0006284C  25004B00:cmd_getArray(4:40, 8:11A, 4:2A)
00062868  251F1C00:setUnitCtrlActivity(4:2B, 4:2A, 2:2, 2:3C4) //connects to heromode squadlineparam
0006288C  25000C00:cmd_inc(8:CA)
...
/* sets heromode action */
0006289C  25004B00:cmd_getArray(4:40, 8:11B, 4:2B)
000628B8  25004B00:cmd_getArray(4:40, 8:11A, 4:2A)
000628D4  251F2700:setUnitCtrlCurrentActType(4:2B, 4:2A, 2:2) //<<- THIS
000628F0  25004A00:cmd_setArray(4:40, 8:121, -1.0)
0006290C  25000700:cmd_mov(8:5B, 4:40)
...
/* sets defending action */
000629F8  25000500:cmd_resJmp(2:0, 1:284)
00062A08  25004B00:cmd_getArray(4:40, 8:11B, 4:2B)
00062A24  25004B00:cmd_getArray(4:40, 8:11A, 4:2A)
00062A40  251F2700:setUnitCtrlCurrentActType(4:2B, 4:2A, 2:1) //<<- THIS
00062A5C  25004A00:cmd_setArray(4:40, 8:121, -1.0)
```

### Units on a structure

For bonedeth dying with their tower:

1. [Create the tower](./how-to-create-an-enemy-target.md#for-structure) using [registConstGimmick](../registconstgimmick.md).
2. Use [generator](../create.md) and connect with [SetModeEx](../setmodeex.md) last parameter  (to `registeConstGimmick` last parameter).
3. Use [setDeathCall](../setdeathcall.md) to call *specific instructions*.
4. Apply [position](../setreqactorpos.md), [unit activity](../setunitctrlactivity_251f1c00.md), [fix position](../setreqactorfixposflag.md) etc to the unit.
4. In *the spcific instructions*, get that enemy squad with [getUnitSquadHandle](../getunitsquadhandle.md).
5. Kill the squad with [kill](../kill.md).

```c
/* 1. register constgimmick */
00064900  2516BF00:registConstGimmick(2:E4, 8:32, 2:1, 2:5DC, 2:0, 2:0, 2:0, 2:1, 2:1, 2:190, 2:82)
/* 2~3. set an generator with setModeEx, use setDeathCall to call when the gimmick is destroyed */
00065E64  251F0200:create(8:1A, 2:514)
...
00065EA0  251F1B00:setModeEx(8:1A, 2:1, 2:FFFFFFFF, 2:82) //calls setDeathCall() when ID "0x82" structure is destroyed
...
00065ED8  25100600:getPack(4:0)
00065EE4  251F0800:setDeathCall(8:1A, 4:0, 1:66B88) //When gimmick is destroyed call 66B88
00065F00  251F0900:setReqActorType(8:1A, 2:1, 15) //NOTE THIS STARTS FROM 1, sets deth squad
00065F1C  251F0A00:setReqActorCount(8:1A, 2:1, 2:1) //one yumideth
00065F38  251F0E00:setReqActorPos(8:1A, 2:1, -44.0, 83.0) //note there is Y position
...
00065F9C  251F1800:setReqActorUniqueId(8:1A, 2:1, 2:83) //ID 83
...
00065FE8  251F0900:setReqActorType(8:1A, 2:2, 15)
00066004  251F0A00:setReqActorCount(8:1A, 2:2, 2:4) //4 yumideths
00066020  251F0E00:setReqActorPos(8:1A, 2:2, -5.0, 140.0)//note there is Y position
...
00066084  251F1800:setReqActorUniqueId(8:1A, 2:2, 2:84) //ID 84
/* 4. Set position to the unit. */
000663AC  251F1700:setUnitCtrlMode(8:1A, 2:1, 2:0) //normal control mode (0) somehow works.
000663C8  251F2300:setUnitCtrlStartActType(8:1A, 2:1, 2:1) //defend as default.
000663E4  251F1C00:setUnitCtrlActivity(8:1A, 2:1, 2:0, 2:5D4) //march (none)
00066408  251F1C00:setUnitCtrlActivity(8:1A, 2:1, 2:1, 2:5D6) //defend
0006642C  251F1C00:setUnitCtrlActivity(8:1A, 2:1, 2:2, 2:5D9) //attack
00066450  251F1A00:setReqActorFixPosFlag(8:1A, 2:1, 2:1) //So the units do not fall from the structure.

/* 5~6. The part that is called by setDeathCall() */
00066B88  25163700:getUnitSquadHandle(8:1A, 2:83)
00066B9C  25172600:kill(8:1A, -1.0, -1.0) //Kill all from squad ID 83.
00066BB8  25163700:getUnitSquadHandle(8:1A, 2:84)
00066BCC  25172600:kill(8:1A, -1.0, -1.0) //Kill all from squad ID 84.
```

### Units riding a gimmick or monster

The key point is using [nodes](./category.md#node) to set the unit position.

#### Example

This example is how Ravenous rides on the dragon in *Ravenous: Duel of the Fate*

First, set up the unit.

```c
/* Setting up riding unit (Ravenous) */
...
0005C8C4  25163D00:getUnitHandle(8:CB, 4:18, 2:0)
0005C8E0  25163E00:setUnitCtrlEnable(8:CB, 2:0) //The model shouldn't do anything, let the dragon attack
0005C8F4  25173E00:enableCollision(8:CB, 2:0, 2:0) //Delete collision so can't kill the unit only
0005C910  25170B00:setModelInfo(8:CB, 1367.0, 167.0, 0.0, 0.0, 0.0)
0005C944  25173700:playMotion(8:CB, 2:1, 2:1, 0.0, 0.0)
0005C970  25171000:setFixMoveEnable(8:CB, 2:1) //Fix the unit Y position so doesn't affect by gravity
0005C998  25163700:getUnitSquadHandle(4:2C, 2:CA)
0005C9AC  25163D00:getUnitHandle(4:2D, 4:2C, 2:0)
...
```

Next, ride to the unit.

```c
0005CBA4  25210300:enableBossManualCtrl(8:CA, 2:1) //PAC instructioni will move the dragon
...
/* Attach the unit */
0005D414  25171A00:setLink(8:CC, 8:CB, "kubi_bone5")
0005D434  25171B00:setLinkParam(8:CB, 2:1, 2:0, 2:0, 0.0, 18.0, 0.0)
0005D470  25174A00:setLinkInfo(8:CB, 2:1, 2:5)
0005D48C  25177100:enableRenderAttach(8:CB, 2:0)
0005D4A0  25173700:playMotion(8:CB, 2:A, 2:0, 0.0, 0.0)
0005D4CC  25213900:wakeUpForce(8:CA) //wake up the dragon
...
```