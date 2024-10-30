# sendVersus04KnockOutInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendVersus04KnockOutInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e9 00`
- **Assembly Address in Memory** : `0x8924a28`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924a28(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if (iVar1 != 0) {
    iVar1 = *(int *)(iVar1 + 0x68);
    if ((undefined4 *)(iVar1 + 0x10) != (undefined4 *)0x0) {
      *(undefined4 *)(iVar1 + 0x10) = 0;
      *(undefined *)(iVar1 + 0x14) = 0xff;
      *(undefined4 *)(iVar1 + 0x18) = 0xffffffff;
      *(undefined *)(iVar1 + 0x1c) = 0xff;
      *(undefined4 *)(iVar1 + 0x20) = 0xffffffff;
      *(undefined *)(iVar1 + 0x24) = 0xff;
      *(undefined4 *)(iVar1 + 0x28) = 0xffffffff;
      *(undefined *)(iVar1 + 0x2c) = 0xff;
      *(undefined4 *)(iVar1 + 0x30) = 0xffffffff;
      *(undefined *)(iVar1 + 0x34) = 0xff;
      *(undefined4 *)(iVar1 + 0x38) = 0xffffffff;
      *(undefined *)(iVar1 + 0x3c) = 0xff;
      *(undefined4 *)(iVar1 + 0x40) = 0xffffffff;
      *(undefined *)(iVar1 + 0x44) = 0xff;
      *(undefined4 *)(iVar1 + 0x48) = 0xffffffff;
      *(undefined *)(iVar1 + 0x4c) = 0xff;
      *(undefined4 *)(iVar1 + 0x50) = 0xffffffff;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

