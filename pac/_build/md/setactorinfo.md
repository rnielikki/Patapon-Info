# setActorInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setActorInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 05 00`
- **Assembly Address in Memory** : `0x8910f90`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08910f90(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  Pac_Get_Param(param_2,2,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  if ((iVar3 != 0) && (*piVar2 == 0)) {
    *(byte *)(iVar3 + 0x8c) = *(byte *)(iVar3 + 0x8c) & 0xfd;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

