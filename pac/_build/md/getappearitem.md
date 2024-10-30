# getAppearItem

Rolls and gets the random item from a given table. Called when rolling final item from chests.

For rolling item during mission, check [getAppearItemEx](./getappearitemex.md).

## Code Information

- **Name**: `getAppearItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 08 05 00`
- **Assembly Address in Memory** : `0x896ebf4`

## Parameters

- `(int)item_table_id` *(8 bytes)* : ID of the Item table, defined from [beginAppearItem](./beginappearitem.md)
- `(int *)item_id` *(8 bytes)* : Variable to *store* the [item ID](./guide/reference-table.md#item-id--weaponparam-id-indexes).
- `(int *)item_level` *(8 bytes)* : Variable to *store* the item level.

## Example

Here is one example in hex:

```25 08 05 00 / 02 00 00 00 / 01 00 00 00 / 04 00 00 00 / 0d 00 00 00 / 04 00 00 00 / 0e 00 00 00```

Which is interpreted as:

```c
getAppearItem((int)1, (int *)iVar13, (int *)iVar14)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896ebf4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = *(int *)(iVar4 + 0x188);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
                    // this somehow decides loot type (maybe)
    uVar5 = Util::Random::Timer_Get_Random();
    puVar1 = (undefined4 *)Loot::Get_Chosen_Loot_Id(iVar4,*puVar1,uVar5,1);
    if (puVar1 == (undefined4 *)0x0) {
      *puVar2 = 0x220;
                    // +1
      *puVar3 = 1;
    }
    else {
      *puVar2 = *puVar1;
      *puVar3 = puVar1[2];
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

