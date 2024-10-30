# getParentGroupId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getParentGroupId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 0b 00`
- **Assembly Address in Memory** : `0x890a348`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0890a348(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0xffffffff;
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x4e0), iVar2 != 0)) {
    *puVar1 = *(undefined4 *)(iVar2 + 0x4fc);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

