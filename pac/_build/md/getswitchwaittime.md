# getSwitchWaitTime

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getSwitchWaitTime`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 1a 00`
- **Assembly Address in Memory** : `0x8942850`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(float)Var1` *(8 bytes)*
- `(uint)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 1a 00 / 04 00 00 00 / 00 00 00 00 / 20 00 00 00 / 00 00 00 00 / 04 00 00 00 / 15 00 00 00```

Which is interpreted as:

```c
getSwitchWaitTime((int *)iVar0, (float *)fVar0, (int *)iVar21)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08942850(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  float *pfVar2;
  uint *puVar3;
  int iVar4;
  uint uVar5;
  int *piVar6;
  int iVar7;
  uint uVar8;
  float fVar9;
  float fVar10;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
  }
  *pfVar2 = 0.0;
  *puVar3 = 0;
  if (((iVar4 != 0) && (piVar6 = *(int **)(iVar4 + 0x1f0), piVar6 != (int *)0x0)) &&
     (uVar8 = 0, piVar6[1] != 0)) {
    iVar7 = 0;
    do {
      if (*(int *)(*piVar6 + iVar7 + 0x28) == 4) {
        fVar9 = (float)FUN_088ce2d4(iVar4,0);
        fVar10 = (float)FUN_08875d78(*(undefined4 *)(*piVar6 + iVar7));
        *pfVar2 = fVar10;
        *puVar3 = (uint)(fVar9 < *pfVar2 + 0.06666667);
        uVar5 = piVar6[1];
      }
      else {
        uVar5 = piVar6[1];
      }
      uVar8 = uVar8 + 1;
      iVar7 = iVar7 + 0x30;
    } while (uVar8 < uVar5);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

