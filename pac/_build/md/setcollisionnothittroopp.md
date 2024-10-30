# setCollisionNotHitTroopP

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setCollisionNotHitTroopP`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 17 00`
- **Assembly Address in Memory** : `0x89b2cc8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b2cc8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar2 != 0) {
    FUN_0897bedc(*(undefined4 *)(iVar2 + 0xd0));
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

