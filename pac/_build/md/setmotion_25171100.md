# setMotion (25171100)

> *Other functions have the same name. Check the [Disambiguation page](./setMotion.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setMotion`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 11 00`
- **Assembly Address in Memory** : `0x8911d30`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(float)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 11 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 40 40```

Which is interpreted as:

```c
setMotion((int *)iVar0, (int)2, (int)0, (float)3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08911d30(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int *piVar3;
  float *pfVar4;
  uint uVar5;
  undefined4 uVar6;
  int iVar7;
  uint uVar8;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  pfVar4 = (float *)Pac_Get_Param(param_2,3,1,4);
  if (param_1 == 0) {
    iVar7 = 0;
  }
  else {
    iVar7 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar7 == 0) {
      iVar7 = 0;
    }
    if (iVar7 == 0) {
      iVar7 = 0;
    }
    else {
      iVar7 = *(int *)(iVar7 + 200);
      if (iVar7 == 0) {
        iVar7 = 0;
      }
    }
  }
  if ((iVar7 != 0) &&
     (uVar8 = *puVar2, uVar5 = (**(code **)(**(int **)(iVar7 + 0x60) + 0x20))(), uVar8 < uVar5)) {
    *(undefined *)(iVar7 + 0xb9) = 0;
    uVar6 = FUN_08875ca8();
    *(undefined4 *)(iVar7 + 0x100) = uVar6;
    (**(code **)(*(int *)(iVar7 + 0x7c) + 0x14))(iVar7,*puVar2,*piVar3 != 0);
    if (0.0 < *pfVar4) {
      *(float *)(iVar7 + 0x68) = *pfVar4;
      if (*(float *)(iVar7 + 0x70) < *(float *)(iVar7 + 0x68)) {
        *(float *)(iVar7 + 0x68) = *(float *)(iVar7 + 0x70);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

