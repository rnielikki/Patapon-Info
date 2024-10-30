# clearVersus04PanelActionCount

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `clearVersus04PanelActionCount`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 fc 00`
- **Assembly Address in Memory** : `0x8924ef8`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924ef8(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if ((iVar1 != 0) && (iVar1 = *(int *)(iVar1 + 0x68), iVar1 != 0)) {
    *(undefined4 *)(iVar1 + 0x54) = 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

