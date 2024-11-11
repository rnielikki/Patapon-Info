# setSquadActivity

Sets squad activity from `squadactivityparam` to given squad.

## Code Information

- **Name**: `setSquadActivity`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 23 00`
- **Assembly Address in Memory** : `0x891bb98`

## Parameters

- `(int *)handle_id` *(8 bytes)* : **Squad handle**, obtained from [getUnitSquadHandle](./getunitsquadhandle.md).
- `(int)command_action` *(8 bytes)* : expected 0~2. 0 is marching, 1 is defending, 2 is attacking.
- `(short)squadactivityparam_id` *(8 bytes)* : [`squadactivityparam` ID](./guide/reference-table.md#squadactivityparam-ids) to set.

## Example

Here is one example in hex:

```25 16 23 00 / 04 00 00 00 / 35 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 0a 00 00 00```

Which is interpreted as:

```c
setSquadActivity((int *)iVar53, (int)0, (int)10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891bb98(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  short *psVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  psVar3 = (short *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 3)) &&
     (iVar4 != -0x1f0)) {
    FUN_08956210(iVar4 + 0x474,*puVar2,(int)*psVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

