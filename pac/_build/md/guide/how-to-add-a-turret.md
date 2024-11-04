# How To: Add A Turret

The sequence below shoots one bullet.

## 1. Add a turret as a gimmick.

[registConstGimmick](../registconstgimmick.md) is good option.

However, it doesn't need to be constGimmick if the turret can be dynamic object.

It is named `BATTERY_000` (`gimc1210`), and `BATTERY_VS` for VS Mission.

## 2. Get timing.

Simple and rough method to find cannon timing is comparing 3rd and 4th parameter of [getMotionInfo](../getmotioninfo.md) during animation.

(The animation can be set easily with [setActionController](../setactioncontroller.md)).

The problem of this approach is, the turret shoots too many bullets with pons. This can be fixed with checking action type (do not shoot if it is less than 2).

In this case, if the both value are same, go to the next phase.

## 3. Get a handle and node index.

Get the handle of the turret gimmick with [gimmick_getHandle](../gimmick_gethandle.md).

Then use [getNodeIndex](../getnodeindex.md) and [getNodePos](../getnodepos.md) to get the node position.

For turret, the node name is `eff_shot_01`.

## 4. Add the shooting effect to the handle.

Both the shooting effect **and** cannonball effect must be added.

The shooting effect is ID `0x336` (`efm_225.bnd`). The shooting effect [must be preloaded](../readarcfile.md).

The cannonball effect itself is `EFF_CANNONBALL_001x`~`EFF_CANNONBALL_004x`, which is `0x319`, `0x31A`, `0x31D`, `0x31E`.

## 5. Set the stat.

Use [setDamageParam](../setdamageparam.md) to apply damage to the cannonball.

## Example

```c
0005FEA4  25170C00:getMotionInfo(8:5B, 8:1FF, 8:1FF, 20:C)
/* check the motion status */
00060250  25170C00:getMotionInfo(8:5B, 4:A, 8:1FF, 40:1FF)
00060274  25001700:cmd_ifEQ(4:A, 1.0, 1:602C0)
0006028C  25001700:cmd_ifEQ(4:A, 2.0, 1:602C4)
000602A4  25001700:cmd_ifEQ(4:A, 3.0, 1:602C8) //shooting animation
//preheating condition.
000602C8  25000700:cmd_mov(20:1, 20:C)
000602DC  25000700:cmd_mov(20:2, 3.0)
000602F0  25004E00:cmd_getElapsedTime(20:3)
000602FC  25000A00:cmd_mul(20:3, 0.5)
00060310  25000800:cmd_add(20:3, 3.0)
/* Check the timing */
00060324  25000300:cmd_call(1:5FAB4)
    0005FAB4  25001B00:cmd_ifLS(20:1, 20:2, 1:260)
        00000250  25000400:cmd_result(2:1)
        0000025C  25000100:cmd_end()
    0005FACC  25001A00:cmd_ifLBE(20:1, 20:3, 1:260)
        00000260  25000400:cmd_result(2:0)
        0000026C  25000100:cmd_end()
    0005FAE4  25000200:cmd_jmp(1:250)
0006032C  25000600:cmd_resCall(2:1, 1:60340)
/* get handle and node */
00060340  25190100:gimmick_getHandle(4:B, 8:5B)
00060354  25172000:getNodeIndex(8:5B, 8:1FF, "eff_shot_01")
00060374  25172100:getNodePos(8:5B, 8:1FF, 20:0, 20:1)
00060398  25000300:cmd_call(1:607E4) //just flip related
000603A0  2516D000:getTroopType_GimmickUID(4:B, 4:0)
/* decides which kind of cannonball, can give fixed value instead of this */
000603B4  25000300:cmd_call(1:6074C)
000603BC  25002C00:cmd_flgAND(1:60508, E94)
/* adding cannonball */
000603CC  25160800:addEffect(8:1FF, 4:1, 4:0, 1.0, 2:0)
000603F8  25170B00:setModelInfo(8:1FF, 20:0, 20:1, 20:2, 20:3, 20:4) //position set
/* registering damage and wait time */
0006042C  25190100:gimmick_getHandle(4:B, 8:5B)
00060440  25174400:setDamageParam(8:1FF, 8:5B)
00060454  25190500:effectSetWaitTime(8:1FF, 0.0)
/* adding cannon shooting effect */
00060468  25160800:addEffect(8:1FF, 2:336, 4:0, 1.0, 2:0)
00060494  25170B00:setModelInfo(8:1FF, 20:0, 20:1, 0.0, 0.009999999776482582, 0.0) //position set
/* registering damage and wait time */
000604C8  25190100:gimmick_getHandle(4:B, 8:5B)
000604DC  25174400:setDamageParam(8:1FF, 8:5B)
000604F0  25190500:effectSetWaitTime(8:1FF, 0.0)
00060504  25000100:cmd_end()
```