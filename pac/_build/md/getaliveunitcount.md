# getAliveUnitCount

Checks currently how many units are alive in the player squad.

This also determines mission failrue status (every member of the team is wiped out).

## Code Information

- **Name**: `getAliveUnitCount`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 36 00`
- **Assembly Address in Memory** : `0x891cf94`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* how many units are alive in the player troop.

## Example

Here is one example in hex:

```25 16 36 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getAliveUnitCount((int *)iVar0)
```

This sets mission failure flag when the alive unit in the player team is 0 or less.

```c
00004E40  25163600:getAliveUnitCount(4:0)
00004E4C  25001900:cmd_ifLSE(4:0, 0.0, 1:4F08)
00004E64  25000100:cmd_end()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891cf94(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0xf8);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if ((iVar2 != 0) && (iVar2 = FUN_088a8650(iVar2,0), iVar2 != 0)) {
    uVar3 = FUN_088e11c4(iVar2);
    *puVar1 = uVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

