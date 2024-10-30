# addLevelUpItemParam

Loads level-up requirement Ka-chings and materials of an equipment for Blacksmith.

## Code Information

- **Name**: `addLevelUpItemParam`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 1a 00`
- **Assembly Address in Memory** : `0x8b4f308`

## Parameters

- `(int)item_id` *(8 bytes)* : [ID of the item](./guide/reference-table.md#item-id--weaponparam-id-indexes), possibly obtained from [getMaterialItemId](./getmaterialitemid.md), or `0x32` for Ka-ching.
- `(int)amount` *(8 bytes)* : Amount of requirement to set.

## Example

Here is one example in hex:

```25 1c 1a 00 / 04 00 00 00 / 0f 00 00 00 / 04 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
addLevelUpItemParam((int *)iVar15, (int *)iVar11)
```

In blacksmith, this is used with [getMaterialItemId](./getmaterialitemid.md):

```c
00041264  25001B00:cmd_ifLS(4:B, 5.0, 1:412E4) //Level < 5 requirement
  000412E4  250A0E00:getMaterialItemId(4:F, 4:D, 2:0) //tier 1 material
  00041300  251C1A00:addLevelUpItemParam(4:F, 2:1) //requires 1 of it
  00041314  25000100:cmd_end()
0004127C  25001B00:cmd_ifLS(4:B, 10.0, 1:41318) //Level < 10 requirement
  ...
00041294  25001B00:cmd_ifLS(4:B, 15.0, 1:4134C) //Level < 15 requirement
  ...
000412AC  25001B00:cmd_ifLS(4:B, 20.0, 1:413B0) //Level < 20 requirement
  ...
000412C4  25001B00:cmd_ifLS(4:B, 30.0, 1:41444) //Level < 30 requirement
  ...
000412DC  25000200:cmd_jmp(1:41508)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4f308(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int amount;
  undefined4 item_id;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  item_id = *puVar1;
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  amount = *piVar2;
  if ((*(int *)(param_1 + 0x10) != 0) && (0 < amount)) {
    iVar3 = Get_Some_Flag(1);
    BS::Write_Request_Amount(*(int *)(iVar3 + 0x34) + 0x2c,item_id,amount);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

