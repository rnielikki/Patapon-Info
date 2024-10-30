# setMoveSpeedRatio (25164900)

> *Other functions have the same name. Check the [Disambiguation page](./setMoveSpeedRatio.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setMoveSpeedRatio`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 49 00`
- **Assembly Address in Memory** : `0x891e444`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 49 00 / 08 00 00 00 / a6 00 00 00 / 20 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
setMoveSpeedRatio(((global)int *)giVar166, (float *)fVar11)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e444(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) &&
     (iVar3 != -0x1f0)) {
    FUN_088f7254(*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

