# endGame

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `endGame`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 6c 00`
- **Assembly Address in Memory** : `0x8920750`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920750(int param_1,undefined4 param_2)

{
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_0889ddec();
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

