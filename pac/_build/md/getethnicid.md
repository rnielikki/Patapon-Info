# getEthnicId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getEthnicId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3f 00`
- **Assembly Address in Memory** : `0x891d9e4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 3f 00 / 04 00 00 00 / 41 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getEthnicId((int *)iVar65, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891d9e4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  *piVar2 = -1;
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 == 0) || (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 != 3)) {
    iVar4 = 0;
    if ((iVar3 != 0) && (iVar5 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar5 == 9)) {
      iVar4 = iVar3;
    }
  }
  else {
    iVar4 = *(int *)(iVar3 + 0x490);
  }
  if ((iVar4 != 0) && (*(int *)(iVar4 + 0x870) != 0)) {
    *piVar2 = (int)*(short *)(*(int *)(iVar4 + 0x870) + 0x18);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

