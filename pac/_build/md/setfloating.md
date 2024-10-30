# setFloating

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setFloating`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 16 00`
- **Assembly Address in Memory** : `0x8912304`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912304(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  if (param_1 == 0) {
    iVar4 = 0;
  }
  else {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    else {
      iVar4 = *(int *)(iVar4 + 200);
      if (iVar4 == 0) {
        iVar4 = 0;
      }
    }
  }
  if (iVar4 != 0) {
    FUN_08892530(*puVar2,*puVar3,iVar4 + 0x158);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

