# setKnownItem

Mark an item as obtained item ever before. **This does nothing with ultimate anticheat flag, does not give the item either**.

## Code Information

- **Name**: `setKnownItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 46 00`
- **Assembly Address in Memory** : `0x894a07c`

## Parameters

- `(int)item_id` *(8 bytes)* : [ID of the item](./guide/reference-table.md#item-id--weaponparam-id-indexes) to mark as known item.
- `(int)as_obtained` *(8 bytes)* : 1 marks the item as obtained, 0 marks as unobtained.

## Example

Here is one example in hex:

```25 0a 46 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setKnownItem((int *)iVar0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a07c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_089457a0(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x34),*puVar1,
                 *piVar2 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

