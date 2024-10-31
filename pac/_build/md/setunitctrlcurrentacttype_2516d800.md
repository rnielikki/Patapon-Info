# setUnitCtrlCurrentActType (2516d800)

> *Other functions have the same name. Check the [Disambiguation page](./setUnitCtrlCurrentActType.md) to find them.*

Sets what the unit is currently doing *by Squad Handle*.

## Code Information

- **Name**: `setUnitCtrlCurrentActType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 d8 00`
- **Assembly Address in Memory** : `0x89261dc`

## Parameters

- `(int *)handle_id` *(8 bytes)* : **Squad handle**, obtained from e.g. [getUnitSquadHandle](./getunitsquadhandle.md).
- `(int)command_id` *(8 bytes)* : [Command ID](./guide/reference-table.md#command-ids) to perform now. **The action is limited to march/defend/attack** or nothing (-1).

## Example

Here is one example in hex:

```25 16 d8 00 / 08 00 00 00 / a8 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
setUnitCtrlCurrentActType(((global)int *)giVar168, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089261dc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  int iVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar4 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar5 = *puVar1;
  iVar2 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),uVar4,1);
  if ((iVar2 != 0) && (iVar3 = (**(code **)(*(int *)(iVar2 + 4) + 0x34))(iVar2), iVar3 == 3)) {
    FUN_089562cc(iVar2 + 0x474,uVar5);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

