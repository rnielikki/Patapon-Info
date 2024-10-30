# setCommandMonitor

**Unimplemented**.

## Code Information

- **Name**: `setCommandMonitor`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 05 00`
- **Assembly Address in Memory** : `0x8909f04`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08909f04(undefined4 param_1,undefined4 param_2)

{
  Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

