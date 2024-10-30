# addEquip

Sets equipment to a class. This sets equipment with lvl 0.

## Code Information

- **Name**: `addEquip`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2a 00`
- **Assembly Address in Memory** : `0x891c06c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(int)weaponparam_id` *(8 bytes)* : [`weaponparam` ID](./guide/reference-table.md#item-id--weaponparam-id-indexes) of the equipment to apply.

## Example

Here is one example in hex:

```25 16 2a 00 / 04 00 00 00 / 36 00 00 00 / 02 00 00 00 / e4 00 00 00```

Which is interpreted as:

```c
addEquip((int *)iVar54, (int)228)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891c06c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
    AddEquipment(iVar3,*puVar2,0,0,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

