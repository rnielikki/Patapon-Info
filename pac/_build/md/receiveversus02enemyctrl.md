# receiveVersus02EnemyCtrl

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `receiveVersus02EnemyCtrl`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 cc 00`
- **Assembly Address in Memory** : `0x8924904`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924904(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int iVar6;
  int iVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  *puVar1 = 0;
  iVar7 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if ((iVar7 != 0) && (*(char *)(*(int *)(iVar7 + 0x48) + 0x10) != '\0')) {
    *puVar1 = 1;
    iVar6 = *(int *)(iVar7 + 0x48);
    *puVar2 = *(undefined4 *)(iVar6 + 0x14);
    *puVar3 = *(undefined4 *)(iVar6 + 0x18);
    *puVar4 = *(undefined4 *)(iVar6 + 0x1c);
    *puVar5 = *(undefined4 *)(iVar6 + 0x20);
    *(undefined *)(*(int *)(iVar7 + 0x48) + 0x10) = 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

