# How To: Add A Turret

## 1. Add a turret as a gimmick.

[registConstGimmick](../registconstgimmick.md) is good option.

However, it doesn't need to be constGimmick if the turret can be dynamic object.

It is named `BATTERY_000` (`gimc1210`), and `BATTERY_VS` for VS Mission.

## 2. Get a handle and node index.

Get the handle of the turret gimmick with [gimmick_getHandle](../gimmick_gethandle.md).

Then use [getNodeIndex](../getnodeindex.md) and [getNodePos](../getnodepos.md) to get the node position.

For turret, the node name is `eff_shot_01`.

## 2. Add the shooting effect to the handle.

Both the shooting effect **and** cannonball effect must be added.

The shooting effect is ID `0x336`.

The cannonball effect itself is `EFF_CANNONBALL_001x`~`EFF_CANNONBALL_004x`, which is `0x319`, `0x31A`, `0x31D`, `0x31E`.

Of course, [the resource must be preloaded](../readarcfile.md).

## 4. Set the stat.

Use [setDamageParam](../setdamageparam.md) to apply damage to the cannonball.

## 5. Set cooldown time for the effect.

The cooldown time can be set with [effectSetWaitTime](../effectsetwaittime.md).

## Example

```c
/* get handle and node */
00060340  25190100:gimmick_getHandle(4:B, 8:5B)
00060354  25172000:getNodeIndex(8:5B, 8:1FF, "eff_shot_01")
00060374  25172100:getNodePos(8:5B, 8:1FF, 20:0, 20:1)
/* get handle and node */
00060398  25000300:cmd_call(1:607E4) //just flip related
000603A0  2516D000:getTroopType_GimmickUID(4:B, 4:0)
/* decides which kind of cannonball, can give fixed value instead of this */
000603B4  25000300:cmd_call(1:6074C)
000603BC  25002C00:cmd_flgAND(1:60508, E94)
/* adding cannon */
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