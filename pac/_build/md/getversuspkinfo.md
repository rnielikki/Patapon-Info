# getVersusPKInfo

Check if any unit is killed. Any VS mission continuosly calls this.

Does not called with VS with pons.

## Code Information

- **Name**: `getVersusPKInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 14 01`
- **Assembly Address in Memory** : `0x8929620`

## Parameters

- `(int)killed_side` *(8 bytes)* : Killed side, 1 is blue and 2 is red.
- `(int *)killed_unit_index` *(8 bytes)* :  *Variable to store*, Killed enemy index in PVE. Player index starts from 0, PVE DH index starts from 1.
- `(int *)Var2` *(8 bytes)* : *Variable to store*.
   - Usually -1 in PVE VS or current player kills the opponent. 4 when the opponent killed the player. Please describe this.
- `(int *)Var3` *(8 bytes)* : *Variable to store*.
   - Usually -1 in PVE VS or current player kills the opponent. 0 when the opponent killed the player. Please describe this.

## Example

Here is one example in hex:

```25 16 14 01 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
getVersusPKInfo((int *)iVar0, (int *)iVar1, (int *)iVar2, (int *)iVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08929620(int param_1,undefined4 param_2)

{
  char cVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  undefined4 uVar5;
  int iVar6;
  int iVar7;
  int *piVar8;
  int iVar9;
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar9 = *piVar2;
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  *piVar2 = -1;
  *piVar3 = -1;
  *piVar4 = -1;
  uVar5 = Save::Get_Save_BaseAddr(1);
  iVar6 = Save::Get_BaseAddr__0x78(uVar5,1);
  iVar6 = *(int *)(iVar6 + 100);
  if ((iVar6 != 0) && (iVar7 = Is_Multi(iVar6), iVar7 != 0)) {
    iVar7 = Is_Multi(iVar6);
    if (iVar7 == 0) {
      cVar1 = '\0';
    }
    else {
      cVar1 = FUN_08986d3c(iVar6);
    }
    if ((((cVar1 != '\0') &&
         (iVar6 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2d8) + 0x18), iVar6 != 0)) &&
        (piVar8 = (int *)(iVar6 + 0x9c), piVar8 != (int *)0x0)) && (*piVar8 != 0)) {
      if (iVar9 < *piVar8) {
        *piVar2 = (int)*(char *)((int)piVar8 + iVar9 * 3 + 4);
        *piVar3 = (int)*(char *)((int)piVar8 + iVar9 * 3 + 5);
        *piVar4 = (int)*(char *)((int)piVar8 + iVar9 * 3 + 6);
      }
      else {
        *piVar8 = 0;
        *(undefined *)(iVar6 + 0xa0) = 0xff;
        *(undefined *)(iVar6 + 0xa1) = 0xff;
        *(undefined *)(iVar6 + 0xa2) = 0xff;
        *(undefined *)(iVar6 + 0xa3) = 0xff;
        *(undefined *)(iVar6 + 0xa4) = 0xff;
        *(undefined *)(iVar6 + 0xa5) = 0xff;
        *(undefined *)(iVar6 + 0xa6) = 0xff;
        *(undefined *)(iVar6 + 0xa7) = 0xff;
        *(undefined *)(iVar6 + 0xa8) = 0xff;
        *(undefined *)(iVar6 + 0xa9) = 0xff;
        *(undefined *)(iVar6 + 0xaa) = 0xff;
        *(undefined *)(iVar6 + 0xab) = 0xff;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

