# addEquipSubModel

Places equipment (possibly in specific node, please check and describe here). This adds equipment with lvl 0.

## Code Information

- **Name**: `addEquipSubModel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2b 00`
- **Assembly Address in Memory** : `0x891c130`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(int)weaponparam_id` *(8 bytes)* : [`weaponparam` ID](./guide/reference-table.md#item-id--weaponparam-id-indexes) of the equipment to apply.
- `(int)node_id` *(8 bytes)* : Please describe, this can be ID of the node to attach. Setting this to 0 does same thing as [addEquip](./addequip.md).

## Example

Here is one example in hex:

```25 16 2b 00 / 04 00 00 00 / 36 00 00 00 / 02 00 00 00 / ac 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
addEquipSubModel((int *)iVar54, (int)172, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891c130(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 9)) {
    AddEquipment(iVar4,*puVar2,*puVar3,0,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

