# getVersus04PanelIndexFromPos

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getVersus04PanelIndexFromPos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 36 01`
- **Assembly Address in Memory** : `0x8925500`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(float)Var2` *(8 bytes)*
- `(float)Var3` *(8 bytes)*
- `(int)Var4` *(8 bytes)*
- `(int)Var5` *(8 bytes)*
- `(float)Var6` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925500(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  float *pfVar3;
  float *pfVar4;
  int *piVar5;
  int *piVar6;
  float *pfVar7;
  int iVar8;
  int iVar9;
  float *pfVar10;
  float fVar11;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  pfVar4 = (float *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  pfVar7 = (float *)Pac_Get_Param(param_2,6,1,4);
  *piVar6 = -1;
  *pfVar7 = 0.0;
  iVar8 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar8 == 0) || (iVar9 = (**(code **)(*(int *)(iVar8 + 4) + 0x34))(iVar8), iVar9 != 3))
  goto LAB_089256d0;
  fVar11 = 0.0;
  if (*piVar2 == 0) {
    pfVar10 = (float *)offset__10(iVar8 + 0x260);
    fVar11 = *pfVar10;
LAB_08925668:
    *pfVar7 = fVar11;
  }
  else {
    iVar8 = FUN_088c5348(iVar8,0);
    if (iVar8 != 0) {
      if (*(int *)(iVar8 + 200) != 0) {
        fVar11 = *(float *)(*(int *)(iVar8 + 200) + 0xc0);
      }
      goto LAB_08925668;
    }
    *pfVar7 = 0.0;
  }
  fVar11 = fVar11 - *pfVar3;
  if ((0.0 <= fVar11) && (fVar11 < (float)(*piVar5 + 1) * *pfVar4)) {
    iVar8 = (int)*pfVar4;
    if (iVar8 == 0) {
      trap(7);
    }
    *piVar6 = (int)fVar11 / iVar8;
  }
LAB_089256d0:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

