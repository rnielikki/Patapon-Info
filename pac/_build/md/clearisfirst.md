# clearIsFirst

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `clearIsFirst`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 0d 00`
- **Assembly Address in Memory** : `0x894a014`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 0d 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
clearIsFirst((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a014(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_08945778(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x34),*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

