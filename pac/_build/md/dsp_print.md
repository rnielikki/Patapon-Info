# dsp_print

**This does nothing**. For debugging purpose.

## Code Information

- **Name**: `dsp_print`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 08 00`
- **Assembly Address in Memory** : `0x8948cfc`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*
- `(Undefined)Var3` *(8 bytes)*
- `(String)Var4`

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08948cfc(undefined4 param_1,undefined4 param_2)

{
  undefined auStack256 [256];
  
  Pac_Get_Param(param_2,1,1,4);
  Pac_Get_Param(param_2,2,1,4);
  Pac_Get_Param(param_2,3,1,4);
  Pac_Get_StringParam(param_2,auStack256);
  Pac_Get_Param(param_2,0,1,4);
  PAC::Pac_Return_ParamAddr(param_2,0);
  Pac_Get_ParamType(param_2,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

