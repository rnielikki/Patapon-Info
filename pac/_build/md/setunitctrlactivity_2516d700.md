# setUnitCtrlActivity (2516d700)

> *Other functions have the same name. Check the [Disambiguation page](./setUnitCtrlActivity.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setUnitCtrlActivity`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 d7 00`
- **Assembly Address in Memory** : `0x8926100`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926100(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  int iVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined4 uVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar4 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar6 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  uVar5 = *puVar1;
  iVar2 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),uVar4,1);
  if ((iVar2 != 0) && (iVar3 = (**(code **)(*(int *)(iVar2 + 4) + 0x34))(iVar2), iVar3 == 3)) {
    FUN_08956210(iVar2 + 0x474,uVar6,(int)(short)uVar5);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

