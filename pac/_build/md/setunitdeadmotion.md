# setUnitDeadMotion

Sets the motion when an unit is dead. Works only with an unit.

## Code Information

- **Name**: `setUnitDeadMotion`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 da 00`
- **Assembly Address in Memory** : `0x8926384`

## Parameters

- `(int *)unit_handle` *(8 bytes)* : Handle of the unit to set the motion when being dead.
- `(int)action_id` *(8 bytes)* : [ID of the action](./guide/reference-table.md#action-ids) for the unit to perform when the unit is dead.

## Example

Here is one example in hex:

```25 16 da 00 / 04 00 00 00 / 15 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setUnitDeadMotion((int *)iVar21, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926384(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
    FUN_088b8dcc(iVar3,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

