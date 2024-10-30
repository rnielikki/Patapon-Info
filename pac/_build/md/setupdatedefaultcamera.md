# setUpdateDefaultCamera

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setUpdateDefaultCamera`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 01 01`
- **Assembly Address in Memory** : `0x8928158`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 01 01 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setUpdateDefaultCamera((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08928158(int param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    *(bool *)(*(int *)(*(int *)(param_1 + 0x10) + 0xd8) + 0x25e8) = *piVar1 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

