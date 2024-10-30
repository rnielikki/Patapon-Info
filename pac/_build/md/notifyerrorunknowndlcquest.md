# notifyErrorUnknownDLCQuest

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `notifyErrorUnknownDLCQuest`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 31 00`
- **Assembly Address in Memory** : `0x8b50588`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b50588(int param_1,undefined4 param_2)

{
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (*(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30) + 0x14) != 0)) {
    FUN_Azito__08b59320();
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

