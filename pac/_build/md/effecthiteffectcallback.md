# effectHitEffectCallback

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `effectHitEffectCallback`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 0c 00`
- **Assembly Address in Memory** : `0x8941acc`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 0c 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 41 00 00 00 / 04 00 00 00 / 40 00 00 00```

Which is interpreted as:

```c
effectHitEffectCallback((int *)iVar0, (int *)iVar65, (int *)iVar64)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08941acc(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) && (-1 < *piVar1)) && (-1 < *piVar2)) && (-1 < *piVar3)) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar1,1);
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar2,1);
    iVar6 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar3,1);
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    else if (iVar6 == 0) {
      iVar6 = 0;
    }
    else {
      (**(code **)(*(int *)(iVar6 + 4) + 0x34))(iVar6);
    }
    if (((iVar4 != 0) && (iVar5 != 0)) && (iVar6 != 0)) {
      (**(code **)(*(int *)(iVar4 + 4) + 100))(iVar4,iVar5,iVar6);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

