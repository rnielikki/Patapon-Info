# setGroupId (25100900)

> *Other functions have the same name. Check the [Disambiguation page](./setGroupId.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setGroupId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 09 00`
- **Assembly Address in Memory** : `0x890a280`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0890a280(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    *(undefined4 *)(*(int *)(param_1 + 0x10) + 0x4fc) = *puVar1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

