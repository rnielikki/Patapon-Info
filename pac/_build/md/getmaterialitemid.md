# getMaterialItemId

Loads item ID of the material by the *material group* and *tier*.

## Code Information

- **Name**: `getMaterialItemId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 0e 00`
- **Assembly Address in Memory** : `0x894a10c`

## Parameters

- `(int *)item_id` *(8 bytes)* : Variable to *store* the material [item ID](./guide/reference-table.md#item-id--weaponparam-id-indexes).
- `(int)material_group_id` *(8 bytes)* : Material Group ID, see below.
- `(uint)material_tier` *(8 bytes)* : Material Tier, expected 0~4. (4 here is tier 5 material)

|`material_group_id`|Material|
|---|---|
|`0x0`|*Leaf*|
|`0x1`|**Mineral (Stone)**|
|`0x2`|**Wood**|
|`0x3`|*Meat*|
|`0x4`|*Vegetables*|
|`0x5`|*Alloy*|
|`0x6`|*Hide*|
|`0x7`|*Fang*|
|`0x8`|**Bone**|
|`0x9`|*Seed*|
|`0xA`|*Liquid*|

Other material group IDs are invalid.

## Example

Here is one example in hex:

```25 0a 0e 00 / 04 00 00 00 / 0f 00 00 00 / 04 00 00 00 / 0d 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getMaterialItemId((int *)iVar15, (int *)iVar13, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a10c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  uint *puVar3;
  undefined4 uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar4 = *puVar2;
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    uVar4 = BS::Get_Material_ID(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x34),
                                uVar4,*puVar3);
    *puVar1 = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
