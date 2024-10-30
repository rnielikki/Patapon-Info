# decItem

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `decItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 62 00`
- **Assembly Address in Memory** : `0x89202f0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 62 00 / 02 00 00 00 / 31 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
decItem((int)49, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089202f0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  FUN_0896550c(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 100),*puVar1,*puVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

