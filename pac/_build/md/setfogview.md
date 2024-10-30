# setFogView

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setFogView`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 35 00`
- **Assembly Address in Memory** : `0x89144c4`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089144c4(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 != 0) {
      *(bool *)(*(int *)(iVar3 + 200) + 0x14c) = *piVar2 != 0;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

