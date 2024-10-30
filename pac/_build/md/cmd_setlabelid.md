# cmd_setLabelId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_setLabelId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 3c 00`
- **Assembly Address in Memory** : `0x883aaa0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(4 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883aaa0(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,0,4);
  FUN_0883bc54(param_2,*puVar1,*puVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

