# setVersusStatusFlag

Not known, and it isn't used anywhere, but if the flag is 1, the player deals 2x damage.

The flag is always initialised as zero programatically while loading the mission.

## Code Information

- **Name**: `setVersusStatusFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ee 00`
- **Assembly Address in Memory** : `0x8925250`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(int)flag` *(8 bytes)* : Expected 0~2. If the flag is 1, the player deals 2x damage. Please describe what this is meant for.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925250(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
    if (*piVar2 == 2) {
      *(undefined4 *)(iVar3 + 0x152c) = 2;
    }
    else if (*piVar2 == 1) {
      *(undefined4 *)(iVar3 + 0x152c) = 1;
    }
    else {
      *(undefined4 *)(iVar3 + 0x152c) = 0;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

