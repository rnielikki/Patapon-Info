# getStageRuleParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getStageRuleParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1d 00`
- **Assembly Address in Memory** : `0x891ab78`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 1d 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
getStageRuleParam((int *)iVar0, (int *)iVar1, (int *)iVar2, (int *)iVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891ab78(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = Get_Some_Flag(1);
  iVar5 = *(int *)(iVar5 + 0x44);
  *piVar1 = (int)*(char *)(iVar5 + 0x822);
  *piVar2 = (int)*(char *)(iVar5 + 0x823);
  *piVar3 = (int)*(short *)(iVar5 + 0x826);
  *piVar4 = (int)*(char *)(iVar5 + 0x821);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

