# getSyncValue

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getSyncValue`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 1d 00`
- **Assembly Address in Memory** : `0x89b33a4`

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
void FUN_089b33a4(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar5 != 0) {
    puVar1 = (undefined4 *)FUN_08977d70(iVar5,*puVar2);
    *puVar3 = *puVar1;
    *puVar4 = puVar1[1];
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

