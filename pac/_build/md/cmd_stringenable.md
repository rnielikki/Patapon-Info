# cmd_stringEnable

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_stringEnable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 46 00`
- **Assembly Address in Memory** : `0x883b0b0`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883b0b0(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  DAT_08a6df0c = *piVar1 == 1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

