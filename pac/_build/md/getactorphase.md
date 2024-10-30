# getActorPhase

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getActorPhase`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 14 00`
- **Assembly Address in Memory** : `0x89421c4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 14 00 / 04 00 00 00 / 40 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getActorPhase((int *)iVar64, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089421c4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
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
      *puVar2 = *(undefined4 *)(iVar3 + 0x290);
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
      *puVar2 = *(undefined4 *)(iVar3 + 0x168);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

