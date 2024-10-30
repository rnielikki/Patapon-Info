# addGimmickPowerGauge

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `addGimmickPowerGauge`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 12 00`
- **Assembly Address in Memory** : `0x891a238`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*
- `(undefined4)Var5` *(8 bytes)*
- `(int)Var6` *(8 bytes)*
- `(int)Var7` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 12 00 / 04 00 00 00 / 28 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 c8 c2 / 10 00 00 00 / 00 00 70 42 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
addGimmickPowerGauge((int *)iVar40, (float)0, (float)-100, (float)60, (int)0, (float)1, (float)0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a238(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  int *piVar7;
  int *piVar8;
  int iVar9;
  int iVar10;
  int iVar11;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  piVar7 = (int *)Pac_Get_Param(param_2,6,1,4);
  piVar8 = (int *)Pac_Get_Param(param_2,7,1,4);
  iVar9 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar9 != 0) && (iVar10 = (**(code **)(*(int *)(iVar9 + 4) + 0x34))(iVar9), iVar10 == 10)) &&
     (*(int *)(param_1 + 0x10) != 0)) {
    iVar11 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x4c);
    iVar10 = func_0x08b30510(iVar11);
    if (iVar10 != 0) {
      local_4 = *puVar3;
      local_8 = *puVar2;
      (**(code **)(*(int *)(iVar10 + 0x10) + 0x10))
                (*puVar4,*puVar6,(float)*piVar7,(float)*piVar8,iVar10,*(undefined4 *)(iVar11 + 0x14)
                 ,iVar9,&local_8,*puVar5);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

