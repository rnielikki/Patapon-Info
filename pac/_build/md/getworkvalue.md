# getWorkValue

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getWorkValue`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 0e 00`
- **Assembly Address in Memory** : `0x8941d1c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08941d1c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
  }
  if (iVar4 != 0) {
    if (*puVar2 < 4) {
      uVar5 = *(undefined4 *)(*puVar2 * 4 + iVar4 + 0x8e0);
    }
    else {
      uVar5 = 0;
    }
    *puVar3 = uVar5;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

