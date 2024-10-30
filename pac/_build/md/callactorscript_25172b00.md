# callActorScript (25172b00)

> *Other functions have the same name. Check the [Disambiguation page](./callActorScript.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `callActorScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 2b 00`
- **Assembly Address in Memory** : `0x891378c`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891378c(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int iVar6;
  undefined auStack24 [24];
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  if (*piVar1 != -1) {
    if (param_1 == 0) {
      iVar6 = 0;
    }
    else {
      iVar6 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
      if (iVar6 == 0) {
        iVar6 = 0;
      }
      if (iVar6 == 0) {
        iVar6 = 0;
      }
      else {
        iVar6 = *(int *)(iVar6 + 0xd4);
        if (iVar6 == 0) {
          iVar6 = 0;
        }
      }
    }
    if (iVar6 != 0) {
      FUN_0890949c(auStack24);
      FUN_089094c8(auStack24,*puVar2,*puVar3,*puVar4,*puVar5,1,0);
      (**(code **)(*(int *)(iVar6 + 0x7c) + 0x14))(iVar6 + 0x10,auStack24);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

