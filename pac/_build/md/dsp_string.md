# dsp_string

Unimplemented. This function does nothing.

## Code Information

- **Name**: `dsp_string`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 07 00`
- **Assembly Address in Memory** : `0x8948c88`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*
- `(String)Var3`

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08948c88(undefined4 param_1,undefined4 param_2)

{
  undefined auStack256 [256];
  
  Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  Pac_Get_Param(param_2,2,1,4);
  Pac_Get_StringParam(param_2,auStack256);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

