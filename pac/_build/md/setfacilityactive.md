# setFacilityActive

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setFacilityActive`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 0a 00`
- **Assembly Address in Memory** : `0x8b4daf0`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4daf0(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar2 = *piVar1;
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar3 = *(int *)(iVar3 * 0x10 + *(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x1e0),
     iVar3 != 0)) {
    (**(code **)(*(int *)(iVar3 + 4) + 0x58))(iVar3,iVar2 != 0);
    (**(code **)(*(int *)(*(int *)(iVar3 + 0x148) + 4) + 0x58))(*(int *)(iVar3 + 0x148),iVar2 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

