# getAppearItemEx

Rolls **with specific random seed** and gets the random item from a given table.

Used for rolling items during mission (e.g. Cyclops loot throwing), since the random function in [getAppearItem](./getappearitem.md) doesn't work properly during mission.

## Code Information

- **Name**: `getAppearItemEx`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 08 06 00`
- **Assembly Address in Memory** : `0x896ed04`

## Parameters

- `(int)item_table_id` *(8 bytes)* : ID of the Item table, defined from [beginAppearItem](./beginappearitem.md)
- `(int *)item_id` *(8 bytes)* : Variable to *store* the item ID.
- `(int *)item_level` *(8 bytes)* : Variable to *store* the item level.
- `(int)random_seed` *(8 bytes)* : Random seed to set.

## Example

Here is one example in hex:

```25 08 06 00 / 02 00 00 00 / 90 01 00 00 / 08 00 00 00 / 2a 00 00 00 / 08 00 00 00 / 36 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getAppearItemEx((int)400, ((global)int *)giVar42, ((global)int *)giVar54, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896ed04(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int *piVar4;
  int iVar5;
  uint uVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = *(int *)(param_1 + 0x10);
  if (iVar5 == 0) {
    iVar5 = 0;
  }
  else {
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    iVar5 = *(int *)(iVar5 + 0x188);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
  }
  if (iVar5 != 0) {
    param_1 = param_1 + *piVar4 * 0x10;
    uVar6 = *(uint *)(param_1 + 0x14) ^ *(uint *)(param_1 + 0x14) << 0xb;
    *(undefined4 *)(param_1 + 0x14) = *(undefined4 *)(param_1 + 0x18);
    *(undefined4 *)(param_1 + 0x18) = *(undefined4 *)(param_1 + 0x1c);
    *(undefined4 *)(param_1 + 0x1c) = *(undefined4 *)(param_1 + 0x20);
    uVar6 = *(uint *)(param_1 + 0x20) ^ *(uint *)(param_1 + 0x20) >> 0x13 ^ uVar6 ^ uVar6 >> 8;
    *(uint *)(param_1 + 0x20) = uVar6;
    puVar1 = (undefined4 *)Loot::Get_Chosen_Loot_Id(iVar5,*puVar1,uVar6,1);
    if (puVar1 == (undefined4 *)0x0) {
      *puVar2 = 0x220;
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

