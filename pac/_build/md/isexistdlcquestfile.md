# isExistDLCQuestFile

Checks if the DLC file with the given quest ID exists.

## Code Information

- **Name**: `isExistDLCQuestFile`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 35 00`
- **Assembly Address in Memory** : `0x8b505d8`

## Parameters

- `(int)mission_id` *(8 bytes)* : ID of the mission, the id is *unique in the map*.
   - The mission ID can be duplicated in different world map.
- `(uint *)destination` *(8 bytes)* : Variable to *store* the existence, either 0 or 1. 0 if does not exist.

## Note

Madwig DLC quest contains all available DLC mission IDs. There is no way to add new missions to there without editing Assembly code.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
/*
`0x08874d60` in memory decides edat file name. 
1st parameter "dlc_mission_XXXX" string address, 2nd parameter the string length, called from `08a0f680`.
Seems like there are total 64 dlc mission slots available.
*/
void FUN_Azito__08b505d8(int param_1,undefined4 param_2)
{
  undefined4 *puVar1;
  uint *puVar2;
  uint uVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar4 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30) + 0x14),
     iVar4 != 0)) {
    uVar3 = FUN_Azito__08b59210(iVar4,*puVar1);
    *puVar2 = uVar3 & 0xff;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

