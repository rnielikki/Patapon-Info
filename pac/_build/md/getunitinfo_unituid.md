# getUnitInfo_UnitUID

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getUnitInfo_UnitUID`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ed 00`
- **Assembly Address in Memory** : `0x8925da0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925da0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int *piVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int iVar6;
  undefined4 uVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  *puVar2 = 0xffffffff;
  *piVar3 = -1;
  *puVar4 = 0xffffffff;
  *puVar5 = 0;
  iVar6 = *(int *)(param_1 + 0x10);
  if (iVar6 == 0) {
    iVar6 = 0;
  }
  else {
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    iVar6 = *(int *)(iVar6 + 0xf8);
    if (iVar6 == 0) {
      iVar6 = 0;
    }
  }
  if ((iVar6 != 0) && (iVar6 = FUN_088a8798(iVar6,*puVar1), iVar6 != 0)) {
    uVar7 = (**(code **)(*(int *)(iVar6 + 4) + 0x13c))(iVar6);
    *puVar2 = uVar7;
    if (*(int *)(iVar6 + 0xa14) != 0) {
      *piVar3 = (int)*(short *)(*(int *)(iVar6 + 0xa14) + 0x78);
    }
    uVar7 = FUN_088b8f6c(iVar6);
    *puVar4 = uVar7;
    *puVar5 = *(undefined4 *)(*(int *)(iVar6 + 200) + 0xc0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

