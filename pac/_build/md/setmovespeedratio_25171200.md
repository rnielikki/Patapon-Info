# setMoveSpeedRatio (25171200)

> *Other functions have the same name. Check the [Disambiguation page](./setMoveSpeedRatio.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setMoveSpeedRatio`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 12 00`
- **Assembly Address in Memory** : `0x8911eb8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 12 00 / 04 00 00 00 / 15 00 00 00 / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
setMoveSpeedRatio((int *)iVar21, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08911eb8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (param_1 == 0) {
    iVar3 = 0;
  }
  else {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = *(int *)(iVar3 + 200);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    *(undefined4 *)(iVar3 + 0x17c) = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

