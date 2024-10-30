# getPlayerVersusGoal

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getPlayerVersusGoal`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 c4 00`
- **Assembly Address in Memory** : `0x8924130`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 c4 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getPlayerVersusGoal((int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924130(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar4 = *piVar1;
  if ((iVar4 < 0) || (7 < iVar4)) {
    uVar3 = 0xffffffff;
  }
  else {
    uVar3 = *(undefined4 *)
             (iVar4 * 4 + *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2d8) + 0x58) + 0x14);
  }
  *puVar2 = uVar3;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

