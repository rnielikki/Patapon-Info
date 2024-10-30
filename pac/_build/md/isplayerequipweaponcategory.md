# isPlayerEquipWeaponCategory

Checks if a player equipped specific type of equipment.

## Code Information

- **Name**: `isPlayerEquipWeaponCategory`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 b9 00`
- **Assembly Address in Memory** : `0x89235c8`

## Parameters

- `(int *)unit_handle` *(8 bytes)* : Unit handle, obtained from e.g. [getUnitHandle](./getunithandle.md).
- `(int)equipment_type` *(8 bytes)* : [Type of the equipment](./guide/reference-table.md#equipment-group-id-indexes) to check.
- `(int *)result` *(8 bytes)* : Variable to *store* if the unit has the equipment. 0 if the unit didn't equip it, 1 if the unit equipped the equipment.

## Example

This checks **if the player equipped greatshield**:

```25 16 b9 00 / 04 00 00 00 / 06 00 00 00 / 02 00 00 00 / 1a 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isPlayerEquipWeaponCategory((int *)iVar6, (int)26, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089235c8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *puVar3 = 0;
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 9)) &&
     (iVar4 = Equip::Item::Has_Equipment_Type(iVar4,*puVar2), iVar4 != 0)) {
    *puVar3 = 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

