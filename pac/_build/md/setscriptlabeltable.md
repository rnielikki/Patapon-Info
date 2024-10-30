# setScriptLabelTable

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setScriptLabelTable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 02 00`
- **Assembly Address in Memory** : `0x8909ea4`

## Parameters

- `(undefined4)Var0` *(4 bytes)*

## Example

Here is one example in hex:

```25 10 02 00 / 2c 00 00 00```

Which is interpreted as:

```c
setScriptLabelTable(0x2c)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08909ea4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,0,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_08909c34(*(int *)(param_1 + 0x10),*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

