# serchGfpId

Find [Item ID](./guide/reference-table.md#item-id--weaponparam-id-indexes) by the weaponparam ID *and* enchant type.

## Code Information

- **Name**: `serchGfpId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 08 00`
- **Assembly Address in Memory** : `0x8949c30`

## Parameters

- `(int *)destination` *(8 bytes)* : [Item Id](./guide/reference-table.md#item-id--weaponparam-id-indexes), gets -1 if no match was found.
- `(int)must_be_9` *(8 bytes)* : Param file ID, but only 9 (itemparam) works. **Must be 9 to be functional**.
- `(int)must_be_0` *(8 bytes)* : Should be section index, Keep 0 to make functional.
- `(int)another_must_be_0` *(8 bytes)* : Keep 0 to make functional.
- `(int)weaponparam_id` *(8 bytes)* : [Weaponparam ID](./guide/reference-table.md#item-id--weaponparam-id-indexes) of the item.
- `(int)enchant_type` *(8 bytes)* : [Enchant type](./guide/reference-table.md#enchant-ids) of the item.

## Example

Here is one example in hex:

```25 0a 08 00 / 04 00 00 00 / 03 00 00 00 / 02 00 00 00 / 09 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 05 00 00 00 / 04 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
serchGfpId((int *)iVar3, (int)9, (int)0, (int)0, (int *)iVar5, (int *)iVar4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949c30(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 uVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  int iVar9;
  int iVar10;
  int iVar11;
  int iVar12;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar9 = *piVar2;
  piVar2 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar8 = *piVar2;
  piVar2 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar10 = *piVar2;
  piVar2 = (int *)Pac_Get_Param(param_2,4,1,4);
  iVar11 = *piVar2;
  piVar2 = (int *)Pac_Get_Param(param_2,5,1,4);
  iVar12 = *piVar2;
  *piVar1 = -1;
  uVar3 = Save::Get_Save_BaseAddr(1);
  iVar4 = Save::Get_BaseAddr__0x78(uVar3,1);
  iVar4 = Param::Get_Data_Addr(*(undefined4 *)(iVar4 + 0xa4),iVar9);
  if (*(int *)(iVar4 + 8) != 0) {
    iVar6 = *(int *)(iVar8 * 8 + *(int *)(iVar4 + 8) + 0x20);
    iVar7 = 0;
    if (0 < iVar6) {
      do {
        iVar5 = Param::Get_Line_Addr(iVar4,iVar8,iVar7,1);
        if (iVar5 == 0) {
          iVar5 = *piVar1;
        }
        else {
          if ((((iVar9 == 9) && (iVar8 == 0)) && (iVar10 == 0)) &&
             ((*(short *)(iVar5 + 6) == iVar11 && (*(char *)(iVar5 + 0xe) == iVar12)))) {
            *piVar1 = iVar7;
          }
          iVar5 = *piVar1;
        }
      } while ((iVar5 == -1) && (iVar7 = iVar7 + 1, iVar7 < iVar6));
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

