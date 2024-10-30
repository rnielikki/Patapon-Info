# deadExit

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `deadExit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 23 00`
- **Assembly Address in Memory** : `0x89b36a4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b36a4(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar2 != 0) {
    FUN_0897555c(iVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

