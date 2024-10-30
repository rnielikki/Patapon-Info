# setVersus03RankForce

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setVersus03RankForce`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 34 01`
- **Assembly Address in Memory** : `0x89280a4`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 34 01```

Which is interpreted as:

```c
setVersus03RankForce()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089280a4(int param_1,undefined4 param_2)

{
  int iVar1;
  
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar1 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8), iVar1 != 0)) &&
     (*(int *)(iVar1 + 0x58) != 0)) {
    FUN_089efad8();
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

