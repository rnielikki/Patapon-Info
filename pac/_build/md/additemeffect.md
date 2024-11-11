# addItemEffect

Creates an obtainable item in a specific position.

## Code Information

- **Name**: `addItemEffect`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 59 00`
- **Assembly Address in Memory** : `0x891fa48`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the item **handle**.
- `(int)gravity_status` *(8 bytes)* : If this is set to 2, the object doesn't fall to the ground.
- `(int)item_id` *(8 bytes)* : [ID of the item](./guide/reference-table.md#item-id--weaponparam-id-indexes).
- `(int)item_level` *(8 bytes)* : Level of the item.
- `(int)troop_type` *(8 bytes)* : [The troop type](./guide/reference-table.md#troop-types) of the item.
- `(float)pos_x` *(8 bytes)* : X position of the item as PSP pixels.
- `(float)pos_y` *(8 bytes)* : Y position of the item as PSP pixels.

## Example

Here is one example in hex:

```25 16 59 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00 / 02 00 00 00 / 01 00 00 00 / 20 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
addItemEffect((int *)iVar0, (int)0, (int *)iVar1, (int *)iVar2, (int)1, (float *)fVar0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891fa48(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  int iVar8;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  *piVar1 = -1;
  iVar8 = *(int *)(param_1 + 0x10);
  if (iVar8 == 0) {
    iVar8 = 0;
  }
  else {
    if (iVar8 == 0) {
      iVar8 = 0;
    }
    iVar8 = *(int *)(iVar8 + 0x188);
    if (iVar8 == 0) {
      iVar8 = 0;
    }
  }
  if (iVar8 != 0) {
    local_c = *puVar7;
    local_10 = *puVar6;
    local_4 = 0x3f800000;
    local_8 = 0;
    iVar8 = FUN_08952610(iVar8,*puVar2,*puVar3,*puVar4,0xffffffff,*puVar5,&local_10);
    if (iVar8 != 0) {
      *piVar1 = (int)*(short *)(iVar8 + 0x78);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

