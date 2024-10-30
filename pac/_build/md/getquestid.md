# getQuestId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getQuestId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 12 08 00`
- **Assembly Address in Memory** : `0x8a1d31c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08a1d31c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *puVar1 = *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x550);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

