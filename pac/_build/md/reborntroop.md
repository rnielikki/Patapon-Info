# rebornTroop

Make the player team reborn. This *does not* recover the stamina for the alive units.

## Code Information

- **Name**: `rebornTroop`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 50 00`
- **Assembly Address in Memory** : `0x891e9a0`

## Parameters

- `(int)unit_handle` *(8 bytes)* : Unit handle of the target to reborn. **-1 reborns all player troops**.
- `(float)stamina_amount` *(8 bytes)* : % amount of stamina to set when the unit is reborn. Expected *0~1*. 0 will give 1 stamina.
- `(bool)always_reborn` *(8 bytes)* : Reborn even if the player is blocked from performing any command. Since the "block command" happens rarely, this can be kept 0.
   - Note that the "cannot perform command" flag is different from disabling input, there is separate flag for the command performing.
- `(bool)reborn_allies` *(8 bytes)* : **Recommended to set to 1**. If this is set to 1, it reborns everyone in multi. Otherwise only self is reborn.

## Example

Here is one example in hex:

```25 16 50 00 / 02 00 00 00 / ff ff ff ff / 10 00 00 00 / 00 00 80 3f / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
rebornTroop((int)-1, (float)1, (int)0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e9a0(int param_1,undefined4 param_2)

{
  char cVar1;
  int *piVar2;
  undefined4 *puVar3;
  int *piVar4;
  int *piVar5;
  int iVar6;
  undefined4 uVar7;
  uint uVar8;
  int iVar9;
  float *pfVar10;
  uint uVar11;
  int iVar12;
  undefined4 *****pppppuVar13;
  undefined4 *******pppppppuVar14;
  undefined4 ******ppppppuVar15;
  undefined4 *puVar16;
  float local_1d0;
  float local_1cc;
  float local_1c8;
  float local_1c4;
  int *local_1a4;
  int *local_1a0;
  undefined *local_19c;
  undefined auStack408 [388];
  undefined *local_14;
  undefined4 *******local_10;
  undefined4 *******local_c;
  int **local_8;
  undefined4 local_4;
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar12 = 0;
  if (*piVar2 == -1) {
    iVar6 = *(int *)(param_1 + 0x10);
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    else {
      if (iVar6 == 0) {
        iVar6 = 0;
      }
      iVar6 = *(int *)(iVar6 + 0xf8);
      if (iVar6 == 0) {
        iVar6 = 0;
      }
    }
    if (iVar6 != 0) {
      iVar12 = FUN_088a8650(iVar6,0);
    }
  }
  else {
    iVar6 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar2,1);
    if ((iVar6 != 0) && (iVar9 = (**(code **)(*(int *)(iVar6 + 4) + 0x34))(iVar6), iVar9 == 2)) {
      iVar12 = iVar6;
    }
  }
  if (iVar12 != 0) {
    uVar7 = Save::Get_Save_BaseAddr(1);
    iVar6 = Save::Get_BaseAddr__0x78(uVar7,1);
    if ((*piVar5 == 0) || (iVar6 = Is_Multi(*(undefined4 *)(iVar6 + 100)), iVar6 == 0)) {
      FUN_088e3858(iVar12,0);
      FUN_088de0a0(*puVar3,0x3e99999a,iVar12,0,*piVar4 != 0);
    }
    else {
      FUN_088e3858(iVar12,0);
      local_19c = &DAT_08a840a0;
      local_14 = auStack408;
      local_8 = &local_1a4;
      piVar2 = (int *)(*(code *)PTR_FUN_08a840a8)(local_8);
      local_1a4 = piVar2;
      iVar6 = (**(code **)(local_19c + 0xc))(local_8);
      local_1a0 = piVar2 + (iVar6 + -1) * 3;
      piVar2[1] = (int)local_8;
      *local_1a0 = (int)local_8;
      uVar11 = 1;
      uVar8 = (**(code **)(local_19c + 0xc))(local_8);
      if (1 < uVar8) {
        do {
          *piVar2 = (int)(piVar2 + 3);
          piVar2[4] = (int)piVar2;
          uVar11 = uVar11 + 1;
          uVar8 = (**(code **)(local_19c + 0xc))(local_8);
          piVar2 = piVar2 + 3;
        } while (uVar11 < uVar8);
      }
      local_10 = &local_10;
      local_4 = 0;
      local_c = local_10;
      FUN_088dfd3c(iVar12,0xffffffff,&local_1a4);
      iVar6 = FUN_088e1fd0(iVar12,1);
      if ((undefined4 ********)local_10 != &local_10) {
        ppppppuVar15 = local_10[2];
        pppppppuVar14 = local_10;
        while( true ) {
          pppppuVar13 = ppppppuVar15[0x285];
          iVar9 = Is_Player_Dead(ppppppuVar15);
          if (iVar9 == 0) {
            pppppppuVar14 = (undefined4 *******)*pppppppuVar14;
          }
          else {
            pfVar10 = (float *)FUN_088b8f84(ppppppuVar15);
            local_1d0 = *pfVar10;
            local_1cc = pfVar10[1];
            local_1c8 = pfVar10[2];
            local_1c4 = pfVar10[3];
            if (iVar6 != 0) {
              pfVar10 = (float *)offset__10(iVar6);
              local_1cc = pfVar10[1];
              local_1c8 = pfVar10[2];
              local_1c4 = pfVar10[3];
              local_1d0 = *pfVar10 +
                          (float)(int)*(short *)((int)pppppuVar13 + 0x32e) *
                          (float)*(int *)(iVar12 + 0x288);
            }
            FUN_088c5514(*puVar3,0x3e99999a,pppppuVar13,&local_1d0,0);
            pppppuVar13 = ppppppuVar15[0x285];
            puVar16 = pppppuVar13[4][9][0xb6][6];
            cVar1 = (*(code *)pppppuVar13[1][0x58])(pppppuVar13);
            FUN_089c4324(puVar16,(int)cVar1,(int)*(char *)(pppppuVar13 + 0x61));
            pppppppuVar14 = (undefined4 *******)*pppppppuVar14;
          }
          if ((undefined4 ********)pppppppuVar14 == &local_10) break;
          ppppppuVar15 = pppppppuVar14[2];
        }
      }
      FUN_088de56c(&local_10,0);
      FUN_088de508(&local_1a4,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

