# getMaxMissionAreaId

Gets floor amount of the dungeon, from [setMaxMissionAreaId](./setmaxmissionareaid.md).

It should be 1 outside dungeon mission.

## Code Information

- **Name**: `getMaxMissionAreaId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 12 04 00`
- **Assembly Address in Memory** : `0x8a1d184`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the floor amount.

## Example

Here is one example in hex:

```25 12 04 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getMaxMissionAreaId((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08a1d184(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Some_Flag(1);
  *puVar1 = *(undefined4 *)(*(int *)(iVar2 + 0x44) + 0x544);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

