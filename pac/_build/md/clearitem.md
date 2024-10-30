# clearItem

Clears item obtain statistics. **This does not delete item**.

## Code Information

- **Name**: `clearItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 0c 00`
- **Assembly Address in Memory** : `0x8949fac`

## Parameters

- `(int)item_id` *(8 bytes)* : [ID of the item](./guide/reference-table.md#item-id--weaponparam-id-indexes) to clear the status.

## Example

Here is one example in hex:

```25 0a 0c 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
clearItem((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949fac(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_08945748(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x34),*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

