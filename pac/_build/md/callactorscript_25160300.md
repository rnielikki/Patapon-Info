# callActorScript (25160300)

> *Other functions have the same name. Check the [Disambiguation page](./callActorScript.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `callActorScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 03 00`
- **Assembly Address in Memory** : `0x8919120`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919120(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int *piVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (piVar5 = *(int **)(*(int *)(param_1 + 0x10) + 0x168),
     piVar5 = (int *)(**(code **)(*piVar5 + 0xc))(piVar5,*puVar1,*puVar2,1,0,*puVar3,*puVar4),
     piVar5 != (int *)0x0)) {
    (**(code **)(*piVar5 + 0x10))(piVar5,1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

