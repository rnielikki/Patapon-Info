# getDamageCount_GimmickUID

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getDamageCount_GimmickUID`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 d2 00`
- **Assembly Address in Memory** : `0x8925c5c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925c5c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x108);
  if ((iVar3 != 0) && (iVar3 = Get_Gimmick(iVar3,*puVar1), iVar3 != 0)) {
    *puVar2 = (uint)*(ushort *)(iVar3 + 0x19a);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

