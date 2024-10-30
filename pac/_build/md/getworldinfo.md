# getWorldInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getWorldInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 04 00`
- **Assembly Address in Memory** : `0x891921c`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891921c(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *piVar1;
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) && (Save::Get_Save_BaseAddr(1), iVar3 == 0)) {
    *puVar2 = 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

