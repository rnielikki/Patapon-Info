#  cmd_string (25090500)

> *Other functions have the same name. Check the [Disambiguation page](./cmd_string.md) to find them.*

This function does nothing.

## Code Information

- **Name**: `cmd_string`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 05 00`
- **Assembly Address in Memory** : `0x8948bc4`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(String)Var1`

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08948bc4(undefined4 param_1,undefined4 param_2)

{
  undefined auStack256 [256];
  
  Pac_Get_Param(param_2,0,1,4);
  Pac_Get_StringParam(param_2,auStack256);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

