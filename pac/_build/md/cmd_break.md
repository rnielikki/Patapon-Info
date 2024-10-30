# cmd_break

Seems like for debugging purpose. Curiosuly, this does nothing.

## Code Information

- **Name**: `cmd_break`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 32 00`
- **Assembly Address in Memory** : `0x883a568`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(String)Var1`

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a568(undefined4 param_1,undefined4 param_2)

{
  undefined auStack256 [256];
  
  Pac_Get_Param(param_2,0,1,4);
  Pac_Get_StringParam(param_2,auStack256);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

