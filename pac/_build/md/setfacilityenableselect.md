# setFacilityEnableSelect

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setFacilityEnableSelect`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 0b 00`
- **Assembly Address in Memory** : `0x8b4dbb0`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4dbb0(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar2 = *(int *)(iVar2 * 0x10 + *(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x1e0),
     iVar2 != 0)) {
    *(bool *)(iVar2 + 0x141) = *piVar1 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

