# getShopItemInfo

**Unimplemented**.

## Code Information

- **Name**: `getShopItemInfo`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 2a 00`
- **Assembly Address in Memory** : `0x8b4ff70`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4ff70(undefined4 param_1,undefined4 param_2)

{
  Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  Pac_Get_Param(param_2,2,1,4);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

