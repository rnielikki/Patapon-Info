# isEquipWeaponInTroop

Checks if a specific weapon is equippped in the troop. Used for effect loading.

## Code Information

- **Name**: `isEquipWeaponInTroop`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2c 00`
- **Assembly Address in Memory** : `0x891c214`

## Parameters

- `(int)troop_index` *(8 bytes)* : Troop side, either 0 or 1 (0 for player/blue side, 1 for enemy/red side).
- `(int)weaponparam_id` *(8 bytes)* : Equipment ID from [`weaponparam`](./guide/reference-table.md#item-id--weaponparam-id-indexes).
- `(int *)result` *(8 bytes)* : Variable to *store* the result, 1 if the equipment is equipped, otherwise 0.

## Example

Here is one example in hex:

```25 16 2c 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 4a 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isEquipWeaponInTroop((int *)iVar1, (int)74, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891c214(undefined4 param_1,undefined4 param_2)

{
  char cVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  undefined4 uVar5;
  int iVar6;
  int iVar7;
  undefined4 uVar8;
  int *piVar9;
  int iVar10;
  uint uVar11;
  int iVar12;
  short *psVar13;
  int iVar14;
  int iVar15;
  int local_3c;
  int local_38;
  undefined auStack48 [4];
  char local_2c;
  int local_24;
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,2,1,4);
  *piVar4 = 0;
  uVar5 = Save::Get_Save_BaseAddr(1);
  iVar6 = Save::Get_BaseAddr__0x78(uVar5,1);
  iVar10 = *(int *)(iVar6 + 0x44);
  cVar1 = *(char *)(iVar10 + 0x24);
  iVar6 = Get_Some_Flag(1);
  uVar5 = *(undefined4 *)(iVar6 + 0x34);
  iVar6 = 0;
  local_38 = iVar10 + *piVar2 * 0x58a4 + 0x2550;
  do {
    if ((3 < iVar6) || (*piVar4 != 0)) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    if (*(int *)(local_38 + 4) != 0) {
      FUN_08960154(local_38 + 4);
      iVar12 = 0;
      local_3c = local_38 + 4 + *(int *)(local_38 + 8) * 0x84 + 0x14;
      do {
        iVar14 = local_3c + 0x18;
        if (*(int *)(local_3c + 0x18) != 0) {
          uVar11 = 0;
          do {
            if (uVar11 < 6) {
              piVar9 = (int *)(iVar14 + 4);
            }
            else {
              piVar9 = (int *)0x0;
            }
            if ((int)*(char *)piVar9 << 0x1f < 0) {
              iVar7 = *piVar9;
              iVar15 = -1;
              if ((cVar1 == '\0') || (iVar7 >> 1 != -2)) {
                FUN_08a15694(auStack48);
                Equipment::Get_Equipment_Name_Save_Validity(auStack48,iVar7 >> 1,uVar5);
                if (local_2c == '\0') goto LAB_0891c478;
                if (-1 < local_24) {
                  iVar15 = local_24;
                }
              }
              else {
                iVar7 = FUN_089880e8(iVar10 + 0x850,*piVar2,iVar6);
                if (iVar7 != 0) {
                  psVar13 = (short *)(iVar7 + 0x58 + (iVar12 + uVar11) * 0xc);
                  iVar15 = (int)*psVar13;
                  if (iVar15 < 0) goto LAB_0891c478;
                  uVar8 = Save::Get_Save_BaseAddr(1);
                  iVar7 = Save::Get_BaseAddr__0x78(uVar8,1);
                  uVar8 = Param::Get_Data_Addr(*(undefined4 *)(iVar7 + 0xa4),9);
                  Param::Get_Line_Addr(uVar8,0,iVar15,1);
                  iVar15 = *(int *)(psVar13 + 2);
                }
              }
              if ((-1 < iVar15) && (iVar15 == *piVar3)) {
                *piVar4 = 1;
                PAC::PAC_setCmdId(param_2,0);
                return;
              }
            }
LAB_0891c478:
            uVar11 = uVar11 + 1;
            iVar14 = iVar14 + 4;
          } while ((int)uVar11 < 6);
        }
        iVar12 = iVar12 + 1;
        local_3c = local_3c + 0x34;
      } while (iVar12 < 1);
    }
    iVar6 = iVar6 + 1;
    local_38 = local_38 + 0x1620;
  } while( true );
}
```

