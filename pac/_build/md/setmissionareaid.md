# setMissionAreaId

Sets current floor of the dungeon. Dungeon index **starts from 0**, floor 1 results zero.

## Code Information

- **Name**: `setMissionAreaId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 12 07 00`
- **Assembly Address in Memory** : `0x8a1d2bc`

## Parameters

- `(int)dungeon_floor` *(8 bytes)* : Dungeon floor id to set, starts from zero. "Floor number" is this number +1.

## Example

Here is one example in hex:

```25 12 07 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setMissionAreaId((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08a1d2bc(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x540) = *puVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

