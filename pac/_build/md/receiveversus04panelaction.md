# receiveVersus04PanelAction

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `receiveVersus04PanelAction`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 fa 00`
- **Assembly Address in Memory** : `0x8924cf8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*
- `(int)Var4` *(8 bytes)*
- `(int)Var5` *(8 bytes)*
- `(int)Var6` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924cf8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int *piVar5;
  int *piVar6;
  int *piVar7;
  int iVar8;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  piVar7 = (int *)Pac_Get_Param(param_2,6,1,4);
  *piVar2 = -1;
  *piVar3 = -1;
  *piVar4 = 0;
  *piVar5 = 0;
  *piVar6 = 0;
  *piVar7 = 0;
  iVar8 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if (((iVar8 != 0) && (iVar8 = *(int *)(iVar8 + 0x68), iVar8 != 0)) &&
     (iVar8 = FUN_089f030c(iVar8,*puVar1), iVar8 != 0)) {
    *piVar2 = (int)*(char *)(iVar8 + 1);
    *piVar3 = (int)*(short *)(iVar8 + 2);
    *piVar4 = (int)*(char *)(iVar8 + 4);
    *piVar5 = (int)*(char *)(iVar8 + 5);
    *piVar6 = (int)*(short *)(iVar8 + 6);
    *piVar7 = (int)*(short *)(iVar8 + 8);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

