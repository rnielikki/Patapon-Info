# setEnableQuickMotionMode

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setEnableQuickMotionMode`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 28 00`
- **Assembly Address in Memory** : `0x89b3b04`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b3b04(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar3 != 0) {
    FUN_0897e3f8(iVar3,*piVar2 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

