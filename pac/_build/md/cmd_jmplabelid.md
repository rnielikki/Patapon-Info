# cmd_jmpLabelId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_jmpLabelId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 3e 00`
- **Assembly Address in Memory** : `0x883ab10`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883ab10(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = FUN_0883bc98(param_2,*puVar1);
  PAC::Cmd_Jump_Or_Call(param_2,uVar2,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

