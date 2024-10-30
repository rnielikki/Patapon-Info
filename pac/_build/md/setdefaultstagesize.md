# setDefaultStageSize

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setDefaultStageSize`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 06 01`
- **Assembly Address in Memory** : `0x8928590`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 06 01 / 10 00 00 00 / 00 b0 14 45```

Which is interpreted as:

```c
setDefaultStageSize((float)2379)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08928590(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x118) + 0x3c) = *puVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

