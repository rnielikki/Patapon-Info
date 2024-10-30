# getVersus04PanelActionCount

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getVersus04PanelActionCount`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 fb 00`
- **Assembly Address in Memory** : `0x8924e88`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924e88(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if ((iVar2 != 0) && (iVar2 = *(int *)(iVar2 + 0x68), iVar2 != 0)) {
    *puVar1 = *(undefined4 *)(iVar2 + 0x54);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

