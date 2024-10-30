# setBrakeScore

Sets VS scoring logic when a squad or gimmick is being killed.

## Code Information

- **Name**: `setBrakeScore`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 08 00`
- **Assembly Address in Memory** : `0x89111b8`

## Parameters

- `(int *)handle` *(8 bytes)* : The target *to be killed* to get the score. Can be squad or gimmick.
- `(int)point` *(8 bytes)* : Points to give to the side who killed the squad/gimmick.
- `(int)break_type` *(8 bytes)* : Expected 0~6. **Does nothing with fort occupation**.

|`break_type`|Action with **killing** enemy|
|0|Gives score to blue team troop|
|1|Gives score to red team troop|
|2|Nothing|
|3|Nothing|
|4|(**Normal**) Gives score to the opposite side when being killed|
|5|When Missile is ready (missile VS only)|
|6|*unused*, Score based on troop side flag|

## Remarks

For settling the *fort occupation* score, set `break_type` 2 or 3, and then **settle the score with PAC instructions**.

This is checked every time during mission.

1. Set `break_type` to 2 or 3 in `setBrakeScore`.
2. Get gimmick status with [getGimmickPowerGaugePoint](./getgimmickpowergaugepoint.md).
3. Check with [cmd_ifLBE](./cmd_iflbe.md), if the occupation gauge is full.
4. Obtain the score with [getBrakeScore](./getbrakescore.md).
5. Settle the score with [multiSetScore](./multisetscore.md).
6. Deactivate the "unoccupied" gimmick object with [gimmickGetUserIdI](./gimmickgetuseridi.md), [gimmickSetUserIdI](./gimmicksetuseridi.md) and [setActive](./setactive.md).
7. Get the occupied gimmick handle with [gimmick_getHandle](./gimmick_gethandle.md) and activate it with `setActive`.

```c
0005DC7C  25000300:cmd_call(1:37454)
  ...
  00037468  25170700:getActive(8:7F, 4:0)
  0003747C  25001700:cmd_ifEQ(4:0, 0.0, 1:32F84) //cmd_end()
  00037494  25172900:setMaxHitPoint(8:7F, 2:186A0)
  /* Checks red team gauge */
  000374A8  25161300:getGimmickPowerGaugePoint(8:7F, 2:1, 20:0, 4:2)
  000374CC  25001A00:cmd_ifLBE(20:0, 1.0, 1:3768C)
    0003768C  25000700:cmd_mov(8:7F, 8:84)
    /* settles score */
    000376A0  25170900:getBrakeScore(8:7F, 4:0, 4:1)
    000376BC  25161000:multiSetScore(2:1, 2:2, 4:0, 4:2)
    /* Mark gimmick as "red team occupied" (2:1) */
    000376E0  25190800:gimmickGetUserIdI(8:7F, 2:3, 4:3)
    000376FC  25190900:gimmickSetUserIdI(8:7F, 2:2, 2:1)
    /* Hide "unoccupied" gimmick structure */
    00037718  25170600:setActive(8:7F, 2:0)
    0003772C  25190800:gimmickGetUserIdI(8:7F, 2:0, 4:0)
    00037748  25190800:gimmickGetUserIdI(8:7F, 2:1, 4:1)
    /* Show "occupied" gimmick structure */
    00037764  25190100:gimmick_getHandle(4:1, 8:7F)
    00037778  25170600:setActive(8:7F, 2:1)
    ...
    000377F0  25000100:cmd_end()
  /* Checks blue team gauge */
  000374E4  25161300:getGimmickPowerGaugePoint(8:7F, 2:0, 20:0, 4:2)
  00037508  25001A00:cmd_ifLBE(20:0, 1.0, 1:37524)
    00037524  25000700:cmd_mov(8:7F, 8:84)
    00037538  25170900:getBrakeScore(8:7F, 4:0, 4:1)
    00037554  25161000:multiSetScore(2:0, 2:2, 4:0, 4:2)
    /* almost same as red side, excpet the user side is (2:0) */
    ...
    00037688  25000100:cmd_end()
  00037520  25000100:cmd_end() 
```

## Example

Here is one example in hex:

```25 17 08 00 / 04 00 00 00 / 36 00 00 00 / 02 00 00 00 / 03 00 00 00 / 02 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
setBrakeScore((int *)iVar54, (int)3, (int)4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089111b8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  uint uVar6;
  uint *puVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  if (iVar4 != 0) {
    *(short *)(iVar4 + 0x86) = (short)*puVar2;
    *(short *)(iVar4 + 0x88) = (short)*puVar3;
    iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
    if (iVar5 == 3) { //squad
      puVar7 = *(uint **)(iVar4 + 0x5c);
      if ((puVar7[2] ^ *(uint *)(iVar4 + 0x60) |
          *puVar7 ^ *(uint *)(iVar4 + 0x58) | puVar7[1] ^ *(uint *)(iVar4 + 0x5c)) != 0) {
        uVar6 = puVar7[2];
        while( true ) {
          if ((uVar6 != 0) && (iVar5 = (**(code **)(*(int *)(uVar6 + 4) + 0x34))(uVar6), iVar5 == 9)
             ) {
            *(short *)(uVar6 + 0x86) = (short)*puVar2;
            *(short *)(uVar6 + 0x88) = (short)*puVar3;
          }
          uVar6 = _DAT_00000004;
          if (puVar7 != (uint *)0x0) {
            puVar7 = (uint *)puVar7[1];
            uVar6 = puVar7[1];
          }
          if ((puVar7[2] ^ *(uint *)(iVar4 + 0x60) |
              *puVar7 ^ *(uint *)(iVar4 + 0x58) | uVar6 ^ *(uint *)(iVar4 + 0x5c)) == 0) break;
          uVar6 = puVar7[2];
        }
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

