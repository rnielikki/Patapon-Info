# cameraSetDefaultBattle

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cameraSetDefaultBattle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 94 00`
- **Assembly Address in Memory** : `0x892218c`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 94 00```

Which is interpreted as:

```c
cameraSetDefaultBattle()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892218c(int param_1,undefined4 param_2)

{
  int iVar1;
  
  if (*(int *)(param_1 + 0x10) != 0) {
    if (*(int *)(*(int *)(param_1 + 0x10) + 0xd8) == 0) {
      iVar1 = *(int *)(param_1 + 0x10);
    }
    else {
      FUN_0890f85c();
      iVar1 = *(int *)(param_1 + 0x10);
    }
    if (*(int *)(iVar1 + 0x118) != 0) {
      FUN_088b21ec(*(int *)(iVar1 + 0x118),1);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

