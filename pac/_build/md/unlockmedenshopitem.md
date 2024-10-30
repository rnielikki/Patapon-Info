# unlockMedenShopItem

Adds an item to the current Meden shop.

## Code Information

- **Name**: `unlockMedenShopItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 43 00`
- **Assembly Address in Memory** : `0x894d40c`

## Parameters

- `(int)item_id` *(8 bytes)* : [ID of the item](./guide/reference-table.md#item-id--weaponparam-id-indexes).
- `(int)scale` *(8 bytes)* : If equipment, level of the item. If regular item, stocks. **-1 makes infinite stock**.
- `(int)cost` *(8 bytes)* : How much does the item cost as Ka-ching.

## Example

Here is one example in hex:

```25 0a 43 00 / 04 00 00 00 / 14 00 00 00 / 04 00 00 00 / 15 00 00 00 / 04 00 00 00 / 16 00 00 00```

Which is interpreted as:

```c
unlockMedenShopItem((int *)iVar20, (int *)iVar21, (int *)iVar22)
```

This is how to unlock equipment in Meden shop item with [getGfpData](./getgfpdata.md):

```c
00062560  250A0700:getGfpData(4:16, 2:9, 2:0, 4:14, 2:0)
0006258C  25000A00:cmd_mul(4:16, 4:17)
000625A0  250A4300:unlockMedenShopItem(4:14, 4:15, 4:16)
000625BC  25000100:cmd_end()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d40c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar5 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar4 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  uVar3 = *puVar1;
  uVar2 = Save::Get_Save_BaseAddr(1);
  FUN_08851518(uVar2,uVar5,uVar4,uVar3);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

