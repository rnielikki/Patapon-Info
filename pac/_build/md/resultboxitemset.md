# resultBoxItemSet

Settles the item drop from the chest. The item data is decided from [getAppearItem](./getappearitem.md).

## Code Information

- **Name**: `resultBoxItemSet`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 6a 00`
- **Assembly Address in Memory** : `0x8920690`

## Parameters

- `(int)item_id` *(8 bytes)* : The [item ID](./guide/reference-table.md#item-id--weaponparam-id-indexes) to drop in the current chest.
- `(int)item_level` *(8 bytes)* : Level of the item to drop in the current chest.

## Example

Here is one example in hex:

```25 16 6a 00 / 04 00 00 00 / 0d 00 00 00 / 04 00 00 00 / 0e 00 00 00```

Which is interpreted as:

```c
resultBoxItemSet((int *)iVar13, (int *)iVar14)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920690(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  
  uVar1 = Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_Param(param_2,1,1,4);
  uVar3 = FUN_08a50110(1);
  FUN_08a501cc(uVar3,uVar1,uVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

