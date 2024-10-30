# cmd_textOut

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_textOut`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 35 00`
- **Assembly Address in Memory** : `0x883a650`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a650(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  FUN_0883bf24(param_2,*puVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

