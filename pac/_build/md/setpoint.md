# setPoint

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setPoint`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 20 03 00`
- **Assembly Address in Memory** : `0x89b0e64`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 20 03 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 48 43```

Which is interpreted as:

```c
setPoint((int)0, (float)200)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b0e64(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x14) != 0) {
    FUN_0898e01c(*puVar2,*(int *)(param_1 + 0x14),*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

