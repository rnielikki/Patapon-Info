# isRegisterSkill

Checks if player squad have specific set skill or class skill. This can be used for loading specific effect.

## Code Information

- **Name**: `isRegisterSkill`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2e 00`
- **Assembly Address in Memory** : `0x891c5b8`

## Parameters

- `(int)Var0` *(8 bytes)* : *Keep this 0*, seems this also can be 1, please describe.
- `(int)skill_id` *(8 bytes)* : [Set skill or Class skill ID](https://rnielikki.github.io/pata/resources/skill.html) to check if the player has the skill.
- `(int *)destination` *(8 bytes)* : Variable to *store* the result, either 0 (doesn't have) or 1 (do have).

## Example

Here is one example in hex:

```25 16 2e 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
isRegisterSkill((int *)iVar1, (int)0, (int *)iVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891c5b8(undefined4 param_1,undefined4 param_2)

{
  char cVar1;
  short sVar2;
  int *piVar3;
  int *piVar4;
  int *piVar5;
  undefined4 uVar6;
  int iVar7;
  int iVar8;
  undefined4 uVar9;
  uint uVar10;
  int *piVar11;
  int ******ppppppiVar12;
  int iVar13;
  int iVar14;
  short *psVar15;
  uint uVar16;
  int iVar17;
  uint uVar18;
  int iVar19;
  int iVar20;
  int local_374;
  int local_370;
  int *local_354;
  int *local_350;
  undefined *local_34c;
  undefined auStack840 [772];
  undefined *local_44;
  int ******local_40;
  int ******local_3c;
  int **local_38;
  undefined4 local_34;
  undefined auStack48 [4];
  char local_2c;
  int local_24;
  
  piVar3 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,2,1,4);
  *piVar5 = 0;
  uVar6 = Save::Get_Save_BaseAddr(1);
  iVar7 = Save::Get_BaseAddr__0x78(uVar6,1);
  iVar13 = *(int *)(iVar7 + 0x44);
  cVar1 = *(char *)(iVar13 + 0x24);
  iVar7 = Get_Some_Flag(1);
  uVar6 = *(undefined4 *)(iVar7 + 0x34);
  iVar7 = 0;
  local_370 = iVar13 + *piVar3 * 0x58a4 + 0x2550;
  do {
    if ((3 < iVar7) || (*piVar5 != 0)) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    iVar20 = local_370 + 4;
    if (*(int *)(local_370 + 4) != 0) {
      FUN_08960154(iVar20);
      iVar19 = 0;
      local_374 = iVar20 + *(int *)(local_370 + 8) * 0x84 + 0x14;
      do {
        iVar14 = local_374 + 0x18;
        if (*(int *)(local_374 + 0x18) != 0) {
          uVar18 = 0;
          do {
            if (uVar18 < 6) {
              piVar11 = (int *)(iVar14 + 4);
            }
            else {
              piVar11 = (int *)0x0;
            }
            if ((int)*(char *)piVar11 << 0x1f < 0) {
              iVar8 = *piVar11;
              iVar17 = -1;
              if ((cVar1 == '\0') || (iVar8 >> 1 != -2)) {
                FUN_08a15694(auStack48);
                Equipment::Get_Equipment_Name_Save_Validity(auStack48,iVar8 >> 1,uVar6);
                if (local_2c == '\0') goto LAB_0891c994;
                if (-1 < local_24) {
                  iVar17 = local_24;
                }
              }
              else {
                iVar8 = FUN_089880e8(iVar13 + 0x850,*piVar3,iVar7);
                if (iVar8 != 0) {
                  psVar15 = (short *)(iVar8 + 0x58 + (iVar19 + uVar18) * 0xc);
                  iVar17 = (int)*psVar15;
                  if (iVar17 < 0) goto LAB_0891c994;
                  uVar9 = Save::Get_Save_BaseAddr(1);
                  iVar8 = Save::Get_BaseAddr__0x78(uVar9,1);
                  uVar9 = Param::Get_Data_Addr(*(undefined4 *)(iVar8 + 0xa4),9);
                  Param::Get_Line_Addr(uVar9,0,iVar17,1);
                  iVar17 = *(int *)(psVar15 + 2);
                }
              }
              if (-1 < iVar17) {
                uVar9 = FUN_088be6e4(iVar17);
                local_34c = &DAT_08a84090;
                local_44 = auStack840;
                piVar11 = (int *)(*(code *)PTR_FUN_08a84098)(&local_354);
                local_354 = piVar11;
                iVar17 = (**(code **)(local_34c + 0xc))(&local_354);
                local_350 = piVar11 + (iVar17 + -1) * 3;
                piVar11[1] = (int)&local_354;
                *local_350 = (int)&local_354;
                uVar16 = 1;
                uVar10 = (**(code **)(local_34c + 0xc))(&local_354);
                if (1 < uVar10) {
                  do {
                    *piVar11 = (int)(piVar11 + 3);
                    piVar11[4] = (int)piVar11;
                    uVar16 = uVar16 + 1;
                    uVar10 = (**(code **)(local_34c + 0xc))(&local_354);
                    piVar11 = piVar11 + 3;
                  } while (uVar16 < uVar10);
                }
                local_40 = (int ******)&local_40;
                local_34 = 0;
                local_3c = local_40;
                local_38 = &local_354;
                SS_Controller::Read_From_SetSkillSlot(&local_354,iVar20,uVar9,1);
                if ((int *******)local_40 != &local_40) {
                  sVar2 = *(short *)(local_40 + 2);
                  ppppppiVar12 = local_40;
                  while( true ) {
                    if ((int)sVar2 == *piVar4) {
                      *piVar5 = 1;
                      PAC::PAC_setCmdId(param_2,0);
                      FUN_088b6410(&local_40,0);
                      FUN_088df524(&local_354,0);
                      return;
                    }
                    ppppppiVar12 = (int ******)*ppppppiVar12;
                    if ((int *******)ppppppiVar12 == &local_40) break;
                    sVar2 = *(short *)(ppppppiVar12 + 2);
                  }
                }
                FUN_088b6410(&local_40,0);
                FUN_088df524(&local_354,0);
              }
            }
LAB_0891c994:
            uVar18 = uVar18 + 1;
            iVar14 = iVar14 + 4;
          } while ((int)uVar18 < 6);
        }
        iVar19 = iVar19 + 1;
        local_374 = local_374 + 0x34;
      } while (iVar19 < 1);
    }
    iVar7 = iVar7 + 1;
    local_370 = local_370 + 0x1620;
  } while( true );
}
```

