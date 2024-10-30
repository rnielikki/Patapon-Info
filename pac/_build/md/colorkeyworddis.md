# colorKeywordDis

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `colorKeywordDis`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 0c 00`
- **Assembly Address in Memory** : `0x892d6d0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892d6d0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  undefined4 uVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar5 = *piVar2;
  iVar3 = FUN_0883bc1c(param_2);
  Message::Write_Value_Final(param_1 + 0x34,0x200,iVar3 + iVar5);
  uVar4 = FUN_08871508();
  iVar3 = FUN_088715ac(uVar4);
  FUN_089930b8(iVar3 + 0x34528,*puVar1,param_1 + 0x34);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

