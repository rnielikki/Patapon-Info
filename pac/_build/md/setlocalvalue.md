# setLocalValue

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setLocalValue`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 0f 00`
- **Assembly Address in Memory** : `0x890a50c`

## Parameters

- `(int*)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Int/Float)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0890a50c(undefined4 param_1,undefined4 param_2)

{
  undefined uVar1;
  int **ppiVar2;
  float *pfVar3;
  uint uVar4;
  uint uVar5;
  undefined4 uVar6;
  float fVar7;
  int *piVar8;
  
  ppiVar2 = (int **)Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  uVar4 = Pac_Get_ParamType(param_2,1);
  uVar5 = Pac_Get_ParamType(param_2,2);
  uVar1 = FUN_0883c49c(param_2,1);
  piVar8 = *ppiVar2;
  if (piVar8 != (int *)0x0) {
    if ((uVar4 & 0x20) != 0) {
      if ((uVar5 & 0x70) == 0) {
        fVar7 = (float)(int)*pfVar3;
      }
      else {
        fVar7 = *pfVar3;
      }
      uVar6 = (**(code **)(*piVar8 + 0xc))(piVar8);
      FUN_08837558(fVar7,uVar6,uVar1);
    }
    if ((uVar4 & 4) != 0) {
      if ((uVar5 & 0x70) == 0) {
        fVar7 = *pfVar3;
      }
      else {
        fVar7 = (float)(int)*pfVar3;
      }
      uVar6 = (**(code **)(*piVar8 + 0xc))(piVar8);
      FUN_08837540(uVar6,uVar1,fVar7);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

