# setAppearItem

Sets item drop from the item table. The item can be anything, e.g. potion, material or equipment.

For Ka-ching, see [setCharinAppearParam](./setcharinappearparam.md).

## Code Information

- **Name**: `setAppearItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 08 03 00`
- **Assembly Address in Memory** : `0x896e890`

## Parameters

- `(float)drop_chance` *(8 bytes)* : The item drop chance, check below for detail.
- `(int)item_id` *(8 bytes)* : [ID of the item](./guide/reference-table.md#item-id--weaponparam-id-indexes). 0 does not drop anything.
- `(int)min_item_level` *(8 bytes)* : Minimal level of the item (for equipment and chest).
- `(int)max_item_level` *(8 bytes)* : Maximum level of the item (for equipment and chest).
- `(int)sound_type` *(8 bytes)* : Item obtain sound, please describe the detail. **Keep -1 to set the sound default**.

## Remarks

The loot chance is **relative to the item drop chance in the same table**.

For example, if there are items called *A, B, C*, with chance of *0.3, 0.1, 0.4* for each
- The drop chance of A is `0.3/(0.3+0.1+0.4) = 37.5%`
- The drop chance of B is `0.1/(0.3+0.1+0.4) = 12.5%`
- The drop chance of C is `0.4/(0.3+0.1+0.4) = 50%`

Which is total 100%.

## Example

Here is one example in hex:

```25 08 03 00 / 10 00 00 00 / 00 00 80 3f / 02 00 00 00 / 31 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / ff ff ff ff```

Which is interpreted as:

```c
setAppearItem((float)1, (int)49, (int)0, (int)0, (int)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896e890(int param1,undefined4 param2)

{
  undefined4 *loot_chance;
  undefined4 *puVar1;
  undefined4 *min_loot_lvl;
  undefined4 *max_loot_lvl;
  undefined4 *puVar2;
  int iVar3;
  
  loot_chance = (undefined4 *)Pac_Get_Param(param2,0,1,4);
  puVar1 = (undefined4 *)Pac_Get_Param(param2,1,1,4);
  min_loot_lvl = (undefined4 *)Pac_Get_Param(param2,2,1,4);
  max_loot_lvl = (undefined4 *)Pac_Get_Param(param2,3,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param2,4,1,4);
  iVar3 = *(int *)(param1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0x188);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 != 0) {
    Loot::Load_Loot_Chance(*loot_chance,iVar3,*puVar1,*min_loot_lvl,*max_loot_lvl,*puVar2);
  }
  PAC::PAC_setCmdId(param2,0);
  return;
}
```

