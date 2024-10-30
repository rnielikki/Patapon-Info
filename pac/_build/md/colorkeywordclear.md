# colorKeywordClear

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `colorKeywordClear`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 0a 00`
- **Assembly Address in Memory** : `0x892d540`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892d540(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  
  uVar1 = FUN_08871508();
  iVar2 = FUN_088715ac(uVar1);
  FUN_08992b68(iVar2 + 0x34528);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

