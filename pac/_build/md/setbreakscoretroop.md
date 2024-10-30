# setBreakScoreTroop

Sets VS scoring logic when any member in the troop is being killed.

## Code Information

- **Name**: `setBreakScoreTroop`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 67 00`
- **Assembly Address in Memory** : `0x89183b0`

## Parameters
 
- `(int *)handle` *(8 bytes)* : The target *to be killed* to get the score. Can be squad or gimmick.
- `(int)point` *(8 bytes)* : Points to give reward, **0 will use default value**.
- `(int)break_type` *(8 bytes)* : Expected 0~6. More information in [setBrakeScore](./setbrakescore.md). **Does nothing with fort occupation**.
- `(int)apply_to_hero` *(8 bytes)* : Expected -1~1. -1 to apply to everyone, 0 to apply to only non-heroes, 1 to apply to only heroes.

## Example

Here is one example in hex:

```25 17 67 00 / 08 00 00 00 / 68 00 00 00 / 02 00 00 00 / 05 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setBreakScoreTroop(((global)int *)giVar104, (int)5, (int)1, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089183b0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  int iVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar5 == 0) {
    iVar5 = 0;
  }
  if ((iVar5 != 0) && (iVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5), iVar6 == 2)) {
    FUN_088e3aec(iVar5,*puVar2,*puVar3,*puVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

