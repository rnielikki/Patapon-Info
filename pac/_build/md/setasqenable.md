# setAsqEnable

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setAsqEnable`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 18 00`
- **Assembly Address in Memory** : `0x8b4f1a0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4f1a0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  undefined4 uVar5;
  undefined4 uVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar6 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar5 = *puVar1;
  piVar2 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *piVar2;
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar3 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30) + 0x14),
      iVar3 != 0)) &&
     (iVar3 = FUN_Azito__08b5a618(*(undefined4 *)(iVar3 + 0x38),uVar6,uVar5,1), iVar3 != 0)) {
    Save::Get_Save_BaseAddr(1);
    *(bool *)(iVar3 + 0x94) = iVar4 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

