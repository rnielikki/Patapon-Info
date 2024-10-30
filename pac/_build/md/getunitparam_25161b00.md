# getUnitParam (25161b00)

> *Other functions have the same name. Check the [Disambiguation page](./getUnitParam.md) to find them.*

Gets unit information by troop and index. Useful for loading effects adn gimmicks.

## Code Information

- **Name**: `getUnitParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1b 00`
- **Assembly Address in Memory** : `0x891a9d0`

## Parameters

- `(int)troop_side` *(8 bytes)* : 0 is player/blue side, 1 is enemy/red side.
- `(int)int_index` *(8 bytes)* : Index of the unit. For player with hideout closed
   - For pons, 0 is hero, 1 is ton, 2 is chin, 3 is kan
   - For multi, host is 0 and guests are 1, 2, 3 in order.
   - please describe what is 4.
- `(int *)class_id` *(8 bytes)* : Variable to *store* the [Class ID](./guide/reference-table.md#class-ids) of the unit.
- `(uint *)is_hero` *(8 bytes)* : Variable to *store* if the unit is hero. 1 if the unit is hero, otherwise zero.

## Example

Here is one example in hex:

```25 16 1b 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getUnitParam((int)0, (int)0, (int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a9d0(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 *puVar3;
  uint *puVar4;
  int iVar5;
  undefined4 uVar6;
  int iVar7;
  int iVar8;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (uint *)Pac_Get_Param(param_2,3,1,4);
  iVar8 = *piVar1;
  iVar7 = *piVar2;
  iVar5 = Get_Some_Flag(1);
  iVar5 = *(int *)(iVar5 + 0x44);
  *puVar4 = 0;
  *puVar3 = 0;
  iVar5 = iVar7 * 0x1620 + iVar5 + iVar8 * 0x58a4;
  if (*(int *)(iVar5 + 0x2554) != 0) {
    uVar6 = Param::Get_Charaparam_Id
                      (*(undefined4 *)(iVar5 + 0x2558),*(int *)(iVar5 + 0x2560) == 0,0);
    FUN_0895e9b8(uVar6,*(undefined4 *)(iVar5 + *(int *)(iVar5 + 0x2558) * 0x84 + 0x2578));
    *puVar4 = (uint)(*(int *)(iVar5 + 0x2560) == 0);
    *puVar3 = *(undefined4 *)(iVar5 + 0x2558);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

