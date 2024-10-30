# setSquadData

Enables or disables a squad in the player team. **Must be called before the unit setup is started**. This **affects to the whole save**.

## Code Information

- **Name**: `setSquadData`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 0f 00`
- **Assembly Address in Memory** : `0x894a1bc`

## Parameters

- `(int)unit_type` *(8 bytes)* : 0 hero, 1 ton, 2 chin, 3 kan.
- `(int)unknown` *(8 bytes)* : Keep 0 to make this functional.
- `(bool)is_enabled` *(8 bytes)* : 1 enables the squad, 0 disables the squad.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a1bc(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 *puVar4;
  int iVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar6 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar5 = *piVar1;
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar3 = Save::Get_Save_BaseAddr(1);
  iVar3 = return__0x1c(*(undefined4 *)(iVar3 + 0x50));
  puVar4 = (undefined4 *)(iVar6 * 0x1620 + iVar3 + 0x9500);
  if ((puVar4 != (undefined4 *)0x0) && (iVar5 == 0)) {
    *puVar4 = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

