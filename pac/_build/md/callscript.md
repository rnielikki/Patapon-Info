# callScript

**Unimplemented**.

## Code Information

- **Name**: `callScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 01 00`
- **Assembly Address in Memory** : `0x89496bc`

## Parameters

- `(Undefined)Var0` *(8 bytes)* : This parameter is unused.
- `(Undefined)Var1` *(4 bytes)* : This parameter is unused.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089496bc(undefined4 param_1,undefined4 param_2)

{
  Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,0,4);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

