# getLevelUpInfo

Gets blacksmith level-up related data from **currently selected** equipment.

## Code Information

- **Name**: `getLevelUpInfo`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 1c 00`
- **Assembly Address in Memory** : `0x8b4f4e8`

## Parameters

- `(int)unknown` *(8 bytes)* : Unused, can keep 0.
- `(int *)item_id` *(8 bytes)* : Variable to *store* the item ID.
- `(int *)level` *(8 bytes)* : Variable to *store* the equipment level, used for requirement calculation
- `(int *)section_id` *(8 bytes)* : Variable to *store* the Section ID of the `levelupparam`. 0 is equipment section and 1 is material section.
- `(int *)equipment_type` *(8 bytes)* : Variable to *store* the [equipment group](./guide/reference-table.md#equipment-group-id-indexes), from `levelupparam`+0x40, works only with individual equipment section.
- `(int *)Var4` *(8 bytes)* :  Variable to *store* the result, Please explain, from `levelupparam`+0x44.
- `(int *)Var5` *(8 bytes)* :  Variable to *store* the result, Proper data has zero, from `levelupparam`+0x48.
- `(int *)Var6` *(8 bytes)* :  Variable to *store* the result, Proper data has zero, from `levelupparam`+0x4c.
- `(int *)data_type` *(8 bytes)* :  Variable to *store* the result, in range of 0~3. from `levelupparam`+0x70, Affects blacksmith Ka-ching calculation.
  - 0 is material, 2 is equipment, unknown -1 also observed.
- `(int *)material_id` *(8 bytes)* :  Variable to *store* the [material id](./getmaterialitemid.md), from `levelupparam`+0x74. 2nd section (Material info) only.
- `(int *)kaching` *(8 bytes)* :  ~~Variable to *store* the ka-ching amount, the amount is in from `levelupparam` 2nd section+0x68~~
   - Do not use this. **Use `itemparam` from [getGfpData](./getgfpdata.md)** instead.
- `(float *)Var11` *(8 bytes)* :  Variable to *store* the result, from `levelupparam`+0x6C

There are some data that aren't useful, so can put same variable to the parameter to discard it.

## Remarks

Ka-ching calculation logic follows this (from PAC instructions), but only the type 1 is used:

```javascript
//returns Ka-ching amount
function calculate_kaching(level, baseRequirement, type) {
    let nextLvl = level+1;
    let val = (((nextLvl+1)*nextLvl)/2)*baseRequirement;
    switch(type){
      case 1:
        return val*0.75 + baseRequirement*0.25;
      case 2:
        return val*0.25 + baseRequirement*0.75
      default:
        return 0;
    }
}
```

## Example

Here is one example in hex:

```25 1c 1c 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 10 00 00 00 / 04 00 00 00 / 0b 00 00 00 / 04 00 00 00 / 05 00 00 00 / 04 00 00 00 / 05 00 00 00 / 04 00 00 00 / 05 00 00 00 / 04 00 00 00 / 05 00 00 00 / 04 00 00 00 / 05 00 00 00 / 04 00 00 00 / 0e 00 00 00 / 04 00 00 00 / 0d 00 00 00 / 04 00 00 00 / 0c 00 00 00 / 20 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
getLevelUpInfo((int)0, (int *)iVar16, (int *)iVar11, (int *)iVar5, (int *)iVar5, (int *)iVar5, (int *)iVar5, (int *)iVar5, (int *)iVar14, (int *)iVar13, (int *)iVar12, (float *)fVar4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4f4e8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  undefined4 *puVar8;
  undefined4 *puVar9;
  undefined4 *puVar10;
  undefined4 *puVar11;
  int iVar12;
  int iVar13;
  undefined4 uVar14;
  int *piVar15;
  
  Pac_Get_Param(param_2,0,1,4);
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,7,1,4);
  puVar8 = (undefined4 *)Pac_Get_Param(param_2,8,1,4);
  puVar9 = (undefined4 *)Pac_Get_Param(param_2,9,1,4);
  puVar10 = (undefined4 *)Pac_Get_Param(param_2,10,1,4);
  puVar11 = (undefined4 *)Pac_Get_Param(param_2,0xb,1,4);
  *piVar1 = 0;
  *puVar2 = 0;
  *puVar3 = 0;
  *puVar4 = 0;
  *puVar5 = 0;
  *puVar6 = 0;
  *puVar7 = 0;
  *puVar8 = 0;
  *puVar9 = 0;
  *puVar10 = 0;
  *puVar11 = 0;
  if (*(int *)(param_1 + 0x10) != 0) {
    iVar12 = Get_Some_Flag(1);
    iVar12 = *(int *)(iVar12 + 0x34);
    piVar15 = (int *)(iVar12 + 0x25c);
    if (piVar15 != (int *)0x0) {
      if (*piVar15 == 0) {
        iVar13 = *(int *)(iVar12 + 0x268);
      }
      else {
        iVar13 = *(int *)(*piVar15 + 0x20);
        if (iVar13 != 0) {
          *piVar1 = (int)*(short *)(iVar13 + 2);
          uVar14 = Equip::Return_Eq_Level(*(undefined4 *)(*piVar15 + 0x20));
          *puVar2 = uVar14;
        }
        iVar13 = *(int *)(iVar12 + 0x268);
      }
      if (iVar13 == 0) {
        puVar2 = *(undefined4 **)(iVar12 + 0x264);
      }
      else {
        *puVar3 = *(undefined4 *)(iVar12 + 0x260);
        *puVar4 = *(undefined4 *)(*(int *)(iVar12 + 0x268) + 0x40);
        *puVar5 = *(undefined4 *)(*(int *)(iVar12 + 0x268) + 0x44);
        *puVar6 = *(undefined4 *)(*(int *)(iVar12 + 0x268) + 0x48);
        *puVar7 = *(undefined4 *)(*(int *)(iVar12 + 0x268) + 0x4c);
        puVar2 = *(undefined4 **)(iVar12 + 0x264);
      }
      if (puVar2 != (undefined4 *)0x0) {
        *puVar8 = *puVar2;
        *puVar9 = *(undefined4 *)(*(int *)(iVar12 + 0x264) + 4);
        *puVar10 = *(undefined4 *)(*(int *)(iVar12 + 0x264) + 8);
        *puVar11 = *(undefined4 *)(*(int *)(iVar12 + 0x264) + 0xc);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

