# resultBoxItemGet

Gets the **chest information** of the chest *before* deciding an item. Called through [resultBoxItemLabel](./resultboxitemlabel.md).

This is called in start of the item drop logic, before setting the dropped item from the chest. See also: [How To:Set Item Drops](./guide/how-to-set-item-drops.md).

## Code Information

- **Name**: `resultBoxItemGet`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 69 00`
- **Assembly Address in Memory** : `0x89205e8`

## Parameters

- `(int *)chest_type` *(8 bytes)* : The type of the chest.
   - 0 is Wooden, 1 is Iron, 2 is Gold, 3 is Jewel, 4 is Pink. -1 if the chest is invalid.
- `(int *)chest_index` *(8 bytes)* : Index of the chest, **starts from 1**.
- `(int *)chest_level` *(8 bytes)* : Level of the chest.

## Example

Here is one example in hex:

```25 16 69 00 / 04 00 00 00 / 0a 00 00 00 / 04 00 00 00 / 0b 00 00 00 / 04 00 00 00 / 0c 00 00 00```

Which is interpreted as:

```c
resultBoxItemGet((int *)iVar10, (int *)iVar11, (int *)iVar12)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089205e8(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  
  uVar1 = Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_Param(param_2,1,1,4);
  uVar3 = Pac_Get_Param(param_2,2,1,4);
  uVar4 = FUN_08a50110(1);
  Loot::Save_ChestData(uVar4,uVar1,uVar2,uVar3);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

