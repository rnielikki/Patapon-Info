# labelToInt

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `labelToInt`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 07 00`
- **Assembly Address in Memory** : `0x8909fc4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(4 bytes)*

## Example

Here is one example in hex:

```25 10 07 00 / 04 00 00 00 / 01 00 00 00 / 1c c9 05 00```

Which is interpreted as:

```c
labelToInt((int *)iVar1, 0x5c91c)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08909fc4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,0,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    *puVar1 = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

