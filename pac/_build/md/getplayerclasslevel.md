# getPlayerClassLevel

Gets Maximum class level of the given player index.

This affects e.g. item level from chest and infection.

## Code Information

- **Name**: `getPlayerClassLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 53 00`
- **Assembly Address in Memory** : `0x891f004`

## Parameters

- `(int)player_id` *(8 bytes)* : 0 is hero, 1 is Ton, 2 is Chin, 3 is Kan.
- `(int)level_limit` *(8 bytes)* : **If this is -1, the result is max level.** Otherwise, the result is `level_limit <= max_level`.
- `(int *destination` *(8 bytes)* : Variable to *store* the result. (Stores either 0 or 1 if the `level_limit` is not -1).

## Example

Here is one example in hex:

```25 16 53 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / ff ff ff ff / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getPlayerClassLevel((int)0, (int)-1, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891f004(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  undefined4 uVar4;
  int iVar5;
  uint uVar6;
  int iVar7;
  uint uVar8;
  uint uVar9;
  int iVar10;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  *piVar3 = 0;
  uVar4 = Save::Get_Save_BaseAddr(1);
  iVar5 = Save::Get_BaseAddr__0x78(uVar4,1);
  iVar10 = *(int *)(iVar5 + 100);
  uVar4 = Save::Get_Save_BaseAddr(1);
  iVar5 = Save::Get_BaseAddr__0x78(uVar4,1);
  iVar5 = *(int *)(iVar5 + 0x44);
  if (iVar5 == 0) goto LAB_0891f280;
  iVar7 = *piVar1;
  piVar1 = (int *)0x0;
  if (iVar7 == 3) {
    iVar10 = *(int *)(iVar5 + 0x28);
    if (iVar10 < 0) {
      iVar10 = iVar10 + 3;
    }
    piVar1 = (int *)(iVar5 + (iVar10 >> 2) * 0x58a4 + 0x67b4);
  }
  else if (iVar7 == 2) {
    iVar10 = *(int *)(iVar5 + 0x28);
    if (iVar10 < 0) {
      iVar10 = iVar10 + 3;
    }
    piVar1 = (int *)(iVar5 + (iVar10 >> 2) * 0x58a4 + 0x5194);
  }
  else if (iVar7 == 1) {
    iVar10 = *(int *)(iVar5 + 0x28);
    if (iVar10 < 0) {
      iVar10 = iVar10 + 3;
    }
    piVar1 = (int *)(iVar5 + (iVar10 >> 2) * 0x58a4 + 0x3b74);
  }
  else if (iVar7 == 6) {
    iVar10 = *(int *)(iVar5 + 0x28);
    if (iVar10 < 0) {
      iVar10 = iVar10 + 3;
    }
    piVar1 = (int *)(iVar5 + (iVar10 >> 2) * 0x58a4 + 0x2554);
  }
  else if (iVar7 == 0) {
    if (iVar10 == 0) {
      iVar10 = *(int *)(iVar5 + 0x28);
    }
    else {
      iVar10 = Is_Multi(iVar10);
      if (iVar10 != 0) {
        uVar9 = *(uint *)(iVar5 + 0x28);
        uVar6 = uVar9;
        if ((int)uVar9 < 0) {
          uVar6 = uVar9 + 3;
        }
        uVar8 = uVar9 & 3;
        if (((int)uVar9 < 0) && (uVar8 != 0)) {
          uVar8 = uVar8 - 4;
        }
        piVar1 = (int *)(uVar8 * 0x1620 + iVar5 + ((int)uVar6 >> 2) * 0x58a4 + 0x2554);
        goto LAB_0891f224;
      }
      iVar10 = *(int *)(iVar5 + 0x28);
    }
    if (iVar10 < 0) {
      iVar10 = iVar10 + 3;
    }
    piVar1 = (int *)(iVar5 + (iVar10 >> 2) * 0x58a4 + 0x2554);
  }
LAB_0891f224:
  if ((piVar1 != (int *)0x0) && (*piVar1 != 0)) {
    iVar5 = *piVar2;
    if (iVar5 == -1) {
      iVar5 = piVar1[1];
    }
    *piVar3 = piVar1[iVar5 * 0x21 + 8];
  }
LAB_0891f280:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

