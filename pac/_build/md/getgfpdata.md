# getGfpData

Gets data from the `itemparam`, either weaponparam ID or base Ka-ching requirement for blacksmith.

## Code Information

- **Name**: `getGfpData`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 07 00`
- **Assembly Address in Memory** : `0x8949ad4`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the result value (`weaponparam` ID or blacksmith ka-ching).
- `(int)must_be_9` *(8 bytes)* : Param file ID, but only 9 (itemparam) works. **Must be 9 to be functional**.
- `(int)must_be_0` *(8 bytes)* : Should be section index, Keep 0 to make functional.
- `(int)item_id` *(8 bytes)* : [Item ID](./guide/reference-table.md#item-id--weaponparam-id-indexes) to get the data.
- `(bool)type` *(8 bytes)* : 1 gives [`weaponparam` ID](./guide/reference-table.md#item-id--weaponparam-id-indexes) as result, 0 gives base Ka-ching requirement for Blacksmith as result.

## Example

Here is one example in hex:

```25 0a 07 00 / 04 00 00 00 / 05 00 00 00 / 02 00 00 00 / 09 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 03 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getGfpData((int *)iVar5, (int)9, (int)0, (int *)iVar3, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949ad4(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 *puVar3;
  undefined4 uVar4;
  int iVar5;
  int iVar6;
  undefined4 uVar7;
  int iVar8;
  int iVar9;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar9 = *piVar2;
  piVar2 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar8 = *piVar2;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  uVar7 = *puVar3;
  piVar2 = (int *)Pac_Get_Param(param_2,4,1,4);
  iVar6 = *piVar2;
  uVar4 = Save::Get_Save_BaseAddr(1);
  iVar5 = Save::Get_BaseAddr__0x78(uVar4,1);
  iVar5 = Param::Get_Data_Addr(*(undefined4 *)(iVar5 + 0xa4),iVar9);
  if ((((*(int *)(iVar5 + 8) != 0) &&
       (iVar5 = Param::Get_Line_Addr(iVar5,iVar8,uVar7,1), iVar5 != 0)) && (iVar9 == 9)) &&
     (iVar8 == 0)) {
    if (iVar6 == 1) {
      *piVar1 = (int)*(short *)(iVar5 + 6);
    }
    else if (iVar6 == 0) {
      *piVar1 = (int)*(short *)(iVar5 + 0xc);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

