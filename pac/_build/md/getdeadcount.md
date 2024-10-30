# getDeadCount

Counts total dead amount of a team **in VS**. Reborn count rule based VS uses this.

This counts *total dead* amount, not currently alive units.

## Code Information

- **Name**: `getDeadCount`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 03 01`
- **Assembly Address in Memory** : `0x89281c0`

## Parameters

- `(int)team` *(8 bytes)* : 0 is blue side team, 1 is red side team.
- `(int *)dead_count` *(8 bytes)* : Variable to *store* total how many times in the team are dead.

## Example

Here is one example in hex:

```25 16 03 01 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getDeadCount((int)0, (int *)iVar0)
```
This shows how reborn based VS determines the winning side:

```c
00075BF0  25160301:getDeadCount(2:0, 4:0)
00075C04  25001900:cmd_ifLSE(4:0, 8:9E, 1:2A0)
00075C1C  25002700:cmd_flgSet(C66)
00075C28  25000100:cmd_end()
00075C2C  25160301:getDeadCount(2:1, 4:0)
00075C40  25001900:cmd_ifLSE(4:0, 8:9E, 1:2A0)
00075C58  25002700:cmd_flgSet(C67)
00075C64  25000100:cmd_end()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089281c0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0xf8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  iVar3 = FUN_088a8650(iVar3,*puVar1);
  if (iVar3 != 0) {
    uVar4 = FUN_088e0e5c(iVar3);
    *puVar2 = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

