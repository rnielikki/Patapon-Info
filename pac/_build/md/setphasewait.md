# setPhaseWait

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setPhaseWait`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 1d 00`
- **Assembly Address in Memory** : `0x89413e0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 1d 00 / 04 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
setPhaseWait((int *)iVar0, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089413e0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar3 != 0) {
    iVar3 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
    if (iVar3 == 0xb) {
      iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
      else if (iVar3 == 0) {
        iVar3 = 0;
      }
      else {
        (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
      }
      FUN_089c91b8(*puVar2,iVar3 + 0x288);
    }
    else if (iVar3 == 10) {
      iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
      else if (iVar3 == 0) {
        iVar3 = 0;
      }
      else {
        (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
      }
      FUN_089c91b8(*puVar2,iVar3 + 0x160);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

