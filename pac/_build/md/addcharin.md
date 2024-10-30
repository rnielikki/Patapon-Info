# addCharin

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `addCharin`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 0a 00`
- **Assembly Address in Memory** : `0x8949e8c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 0a 00 / 02 00 00 00 / a0 86 01 00```

Which is interpreted as:

```c
addCharin((int)100000)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949e8c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_089457dc(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x34),*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

