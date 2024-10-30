# addAbnormalTroopP

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `addAbnormalTroopP`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 1a 00`
- **Assembly Address in Memory** : `0x89b30c0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 1a 00 / 04 00 00 00 / 14 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
addAbnormalTroopP((int *)iVar20, (int)0, (float)1, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b30c0(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar5 != 0) {
    if (*piVar2 == 4) {
      FUN_0897d6b4(*puVar4,*puVar3,iVar5);
    }
    else if (*piVar2 == 0) {
      FUN_0897da4c(*puVar4,*puVar3,iVar5);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

