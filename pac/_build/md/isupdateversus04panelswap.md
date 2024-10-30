# isUpdateVersus04PanelSwap

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isUpdateVersus04PanelSwap`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ff 00`
- **Assembly Address in Memory** : `0x8925034`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925034(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if ((iVar2 != 0) && (iVar2 = *(int *)(iVar2 + 0x68), iVar2 != 0)) {
    if (*(char *)(iVar2 + 0xa8) == '\0') {
      *puVar1 = 0;
    }
    else {
      *puVar1 = 1;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

