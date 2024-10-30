# receiveVersus03EnemyCtrl

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `receiveVersus03EnemyCtrl`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 c6 00`
- **Assembly Address in Memory** : `0x89242d0`

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
void FUN_089242d0(int param_1,undefined4 param_2)

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
  if ((iVar7 != 0) && (*(char *)(*(int *)(iVar7 + 0x58) + 0x34) != '\0')) {
    *puVar1 = 1;
    iVar6 = *(int *)(iVar7 + 0x58);
    *puVar2 = *(undefined4 *)(iVar6 + 0x38);
    *puVar3 = *(undefined4 *)(iVar6 + 0x3c);
    *puVar4 = *(undefined4 *)(iVar6 + 0x40);
    *puVar5 = *(undefined4 *)(iVar6 + 0x44);
    *(undefined *)(*(int *)(iVar7 + 0x58) + 0x34) = 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

