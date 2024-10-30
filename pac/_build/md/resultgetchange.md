# resultGetChange

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `resultGetChange`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1a 00`
- **Assembly Address in Memory** : `0x891a970`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a970(int param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  *piVar1 = (int)*(char *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x3c) + 0x1a7);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

