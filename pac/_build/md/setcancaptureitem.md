# setCanCaptureItem

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setCanCaptureItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 69 00`
- **Assembly Address in Memory** : `0x89185d8`

## Parameters

- `(int *)handle` *(8 bytes)* : Handle to set if can capture item or not.
- `(bool)Var1` *(8 bytes)*
- `(bool)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 69 00 / 08 00 00 00 / 74 00 00 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setCanCaptureItem(((global)int *)giVar116, (int *)iVar0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089185d8(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 != 0) {
      (**(code **)(*(int *)(iVar4 + 4) + 0x11c))(iVar4,*piVar2 != 0,*piVar3 != 0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

