# isUpdateVersusGoal

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isUpdateVersusGoal`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 c3 00`
- **Assembly Address in Memory** : `0x89240a4`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 c3 00 / 08 00 00 00 / 9b 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isUpdateVersusGoal(((global)int *)giVar155, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089240a4(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2d8) + 0x58) + 0x10);
  if (*piVar1 == iVar3) {
    *piVar2 = 0;
  }
  else {
    *piVar2 = iVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

