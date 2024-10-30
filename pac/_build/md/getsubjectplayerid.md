# getSubjectPlayerId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getSubjectPlayerId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 6c 00`
- **Assembly Address in Memory** : `0x8918838`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 6c 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getSubjectPlayerId((int *)iVar1, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08918838(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0xffffffff;
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
    if (((iVar4 == 9) && (iVar3 != 0)) && (*(int *)(iVar3 + 0xa14) != 0)) {
      *puVar2 = *(undefined4 *)(*(int *)(iVar3 + 0xa14) + 0x188);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

