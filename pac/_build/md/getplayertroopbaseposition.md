# getPlayerTroopBasePosition

Gets player troop position *without* additional attack movement.

With additional attack movement, check [getTroopTopPosX](./gettrooptopposx.md).

## Code Information

- **Name**: `getPlayerTroopBasePosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 40 00`
- **Assembly Address in Memory** : `0x891daec`

## Parameters

- `(bool)no_hatapon_pos` *(8 bytes)* : *Single player only*. 0 uses Hatapon base position. Does nothing in multi.
- `(float *)destination` *(8 bytes)* : Variable to *store* the base position.

## Example

Here is one example in hex:

```25 16 40 00 / 02 00 00 00 / 01 00 00 00 / 40 00 00 00 / c8 00 00 00```

Which is interpreted as:

```c
getPlayerTroopBasePosition((int)1, ((global)float *)gfVar200)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891daec(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  int iVar5;
  int iVar6;
  undefined4 *puVar7;
  int iVar8;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0xf8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if ((iVar3 != 0) && (iVar3 = FUN_088a8650(iVar3,0), iVar3 != 0)) {
    uVar4 = Save::Get_Save_BaseAddr(1);
    iVar5 = Save::Get_BaseAddr__0x78(uVar4,1);
    uVar4 = *(undefined4 *)(iVar5 + 100);
    iVar5 = FUN_088e217c(iVar3);
    iVar8 = 0;
    iVar6 = Is_Multi(uVar4);
    if (iVar6 == 0) {
      if (*piVar1 == 0) {
        iVar3 = Get_HataponAddr(iVar3);
        if (iVar3 == 0) {
          if (iVar5 != 0) {
            iVar8 = iVar5 + 0x260;
          }
        }
        else {
          iVar8 = *(int *)(iVar3 + 0xa14) + 0x260;
        }
      }
      else if ((*piVar1 == 1) && (iVar5 != 0)) {
        iVar8 = iVar5 + 0x260;
      }
    }
    else if (iVar5 != 0) {
      iVar8 = iVar5 + 0x260;
    }
    if (iVar8 != 0) {
      puVar7 = (undefined4 *)offset__10(iVar8);
      *puVar2 = *puVar7;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

