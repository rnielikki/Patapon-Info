# fillTipsSelectMask

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `fillTipsSelectMask`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 2d 00`
- **Assembly Address in Memory** : `0x894bd60`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894bd60(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = Save::Get_Save_BaseAddr(1);
  Syscall::Kernel::Kernel_Memset(*(int *)(iVar1 + 0x58) + 0x14,0xffffffff,0x10);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

