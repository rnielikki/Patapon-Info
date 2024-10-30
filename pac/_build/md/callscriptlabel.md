# callScriptLabel

**Unimplemented**.

## Code Information

- **Name**: `callScriptLabel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 03 00`
- **Assembly Address in Memory** : `0x890a1d8`

## Parameters

- `(Undefined)Var0` *(4 bytes)*
- `(Undefined)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0890a1d8(undefined4 param_1,undefined4 param_2)

{
  Pac_Get_Param(param_2,0,0,4);
  Pac_Get_Param(param_2,1,1,4);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

