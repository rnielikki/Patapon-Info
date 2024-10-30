# setUnitData

Enables or disables a unit in the player team. **Must be called before the unit setup is started**. This **affects to the whole save**.

Works only when [the squad of the unit](./setsquaddata.md) is active.

If the unit is disabled with this, the unit is still unlocked, but disappears.

## Code Information

- **Name**: `setUnitData`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 11 00`
- **Assembly Address in Memory** : `0x894a468`

## Parameters

- `(int)unit_type` *(8 bytes)* : 0 hero, 1 ton, 2 chin, 3 kan.
- `(int)unknown` *(8 bytes)* : Keep 0 to make this functional.
- `(int)class_id` *(8 bytes)* : [ID of the class](./guide/reference-table.md#class-ids) to enable/disable.
- `(int)unknown` *(8 bytes)* : Keep 0 to make this functional.
- `(bool)is_enabled` *(8 bytes)* : 1 enables the unit, 0 disables the unit.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a468(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 *puVar4;
  int iVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  int iVar9;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar9 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar8 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar7 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar6 = *piVar1;
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  iVar3 = Save::Get_Save_BaseAddr(1);
  iVar3 = return__0x1c(*(undefined4 *)(iVar3 + 0x50));
  iVar5 = 0;
  iVar3 = iVar9 * 0x1620 + iVar3 + 0x9500;
  puVar4 = (undefined4 *)0x0;
  if (iVar3 != 0) {
    iVar5 = iVar3 + iVar8 * 0x84 + 0x14;
  }
  if (iVar5 != 0) {
    puVar4 = (undefined4 *)(iVar5 + iVar7 * 0x34 + 0x18);
  }
  if ((puVar4 != (undefined4 *)0x0) && (iVar6 == 0)) {
    *puVar4 = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

