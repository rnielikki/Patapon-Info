# getEquipItemParam

Gets `itemparam` item information by the equipment slot index.

## Code Information

- **Name**: `getEquipItemParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 49 00`
- **Assembly Address in Memory** : `0x894d77c`

## Parameters

- `(int)inventory_index` *(8 bytes)* : Equipment inventory slot index.
- `(int *)itemparam_data02` *(8 bytes)* : Variable to *store* something, please describe. Usually zero.
- `(int *)weaponparam_id` *(8 bytes)* : Variable to *store* the [`weaponparam` ID](./guide/reference-table.md#item-id--weaponparam-id-indexes).
- `(int *)equip_level` *(8 bytes)* :Variable to *store* the level of the equipment.
- `(int *)enchant_id` *(8 bytes)* : Variable to *store* the [enchant of the equipment](./guide/reference-table.md#enchant-ids).

## Example

Here is one example in hex:

```25 0a 49 00 / 04 00 00 00 / 05 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 03 00 00 00 / 04 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
getEquipItemParam((int *)iVar5, (int *)iVar1, (int *)iVar2, (int *)iVar3, , (int *)iVar4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d77c(int param_1,undefined4 param_2)

{
  short sVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  undefined4 *puVar5;
  int *piVar6;
  int iVar7;
  undefined4 uVar8;
  int iVar9;
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,3,1,4);
  *piVar3 = -1;
  *piVar4 = -1;
  *puVar5 = 0xffffffff;
  *piVar6 = -1;
  if (-1 < *piVar2) {
    iVar7 = Equipment::Get_Eqslot_Addr_Wrapper
                      (*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x34), *piVar2);
    sVar1 = *(short *)(iVar7 + 2);
    uVar8 = Save::Get_Save_BaseAddr(1);
    iVar9 = Save::Get_BaseAddr__0x78(uVar8,1);
    uVar8 = Param::Get_Data_Addr(*(undefined4 *)(iVar9 + 0xa4),9);
    iVar9 = Param::Get_Line_Addr(uVar8,0,(int)sVar1,1);
    *piVar3 = (int)*(short *)(iVar7 + 2);
    *piVar4 = (int)*(short *)(iVar9 + 6);
    uVar8 = Equip::Return_Eq_Level(iVar7);
    *puVar5 = uVar8;
    *piVar6 = (int)*(char *)(iVar9 + 0xe);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

