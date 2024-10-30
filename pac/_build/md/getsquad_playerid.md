# getSquad_playerId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getSquad_playerId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 cf 00`
- **Assembly Address in Memory** : `0x8925880`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925880(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = *(int *)(iVar4 + 0xf8);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    iVar8 = 0;
    do {
      iVar5 = FUN_088a8650(iVar4,iVar8);
      if (iVar5 != 0) {
        iVar7 = 0;
        do {
          iVar6 = FUN_088df588(iVar5,iVar7);
          if ((iVar6 != 0) && (*piVar1 == *(int *)(iVar6 + 0x188))) {
            *piVar2 = iVar8;
            *piVar3 = iVar7;
            PAC::PAC_setCmdId(param_2,0);
            return;
          }
          iVar7 = iVar7 + 1;
        } while (iVar7 < 4);
      }
      iVar8 = iVar8 + 1;
    } while (iVar8 < 2);
  }
  *piVar2 = -1;
  *piVar3 = -1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

