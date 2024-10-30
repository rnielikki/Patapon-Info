# addItem (250a0900)

> *Other functions have the same name. Check the [Disambiguation page](./addItem.md) to find them.*

Adds item directly to the inventory.

## Code Information

- **Name**: `addItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 09 00`
- **Assembly Address in Memory** : `0x8949dfc`

## Parameters

- `(int)item_id` *(8 bytes)* : [ID of the item](./guide/reference-table.md#item-id--weaponparam-id-indexes).
- `(int)item_amount` *(8 bytes)* : Amount of item to add to the inventory.

## Example

Here is one example in hex:

```25 0a 09 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
addItem((int *)iVar0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949dfc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    Item::Add_Material(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x34),*puVar1,
                       *puVar2,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

