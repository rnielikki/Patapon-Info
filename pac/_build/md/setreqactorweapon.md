# setReqActorWeapon

Overwrites equipment of the actor.

The default equipment is defined in [`generatorparam`](./guide/reference-table.md#generatorparam), and this changes the default equipment from there.

## Code Information

- **Name**: `setReqActorWeapon`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 20 00`
- **Assembly Address in Memory** : `0x8b5d488`

## Parameters

- `(int *)generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator* to set in thoe whole mission.
- `(int)slot` *(8 bytes)* : Which equipment slot to replace, like helm, weapon or shield slot etc.
- `(int)equipment_id` *(8 bytes)* : Equpiment ID [**from `weaponparam`**](./guide/reference-table.md#item-id--weaponparam-id-indexes).
- `(int)visual_level` *(8 bytes)* : Only *visual* level (1~3) of the equipment. For actual stat, see [setLevel](./setlevel.md).

## Example

Here is one example in hex:

```25 1f 20 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 4a 01 00 00 / 08 00 00 00 / 58 00 00 00```

Which is interpreted as:

```c
setReqActorWeapon(((global)int *)giVar26, (int)2, (int)0, (int)330, ((global)int *)giVar88)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5d488(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *offset;
  undefined4 *slot;
  int *equipment_id_addr;
  undefined4 *puVar2;
  int base_addr;
  undefined4 uVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  offset = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  slot = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  equipment_id_addr = (int *)Pac_Get_Param(param_2,3,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  base_addr = *(int *)(param_1 + 0x10);
  if (base_addr == 0) {
    base_addr = 0;
  }
  else if (*piVar1 == -1) {
    base_addr = 0;
  }
  else {
    if (base_addr == 0) {
      base_addr = 0;
    }
    base_addr = Get_BaseAddr_From_Generator(*(undefined4 *)(base_addr + 0x2c8), *piVar1);
    if (base_addr == 0) {
      base_addr = 0;
    }
  }
  if (base_addr != 0) {
    uVar3 = *puVar2;
    if (*equipment_id_addr - 0x141U < 7) {
      uVar3 = 0;
    }
    overwrite_equipment(base_addr,*offset,*slot,*equipment_id_addr,uVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

