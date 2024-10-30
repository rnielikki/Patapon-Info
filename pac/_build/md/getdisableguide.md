# getDisableGuide

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getDisableGuide`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 21 00`
- **Assembly Address in Memory** : `0x897139c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0897139c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

