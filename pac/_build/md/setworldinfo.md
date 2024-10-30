# setWorldInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setWorldInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 05 00`
- **Assembly Address in Memory** : `0x89192b0`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089192b0(int param_1,undefined4 param_2)

{
  Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    Save::Get_Save_BaseAddr(1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

