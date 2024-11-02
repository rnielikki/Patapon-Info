# movePosition

Moves a target by given handle.

## Code Information

- **Name**: `movePosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 3c 00`
- **Assembly Address in Memory** : `0x8914f6c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : ID of the handle.
- `(float)x_position` *(8 bytes)* : X position to move.
- `(float)y_position` *(8 bytes)* : Y position to move.
- `(float)delay` *(8 bytes)* : Delay before moving.
- `(float)speed` *(8 bytes)* : Speed to move. 0 moves the target immediately. The bigger the value is, the faster the target moves.
- `(int)Var5` *(8 bytes)* : Please describe, can be related to the subtle animation adjustment.

## Example

Here is one example in hex:

```25 17 3c 00 / 04 00 00 00 / 40 00 00 00 / 20 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 40 40 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
movePosition((int *)iVar64, (float *)fVar1, (float)0, (float)0, (float)3, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08914f6c(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int *piVar6;
  int iVar7;
  undefined *puVar8;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  if (*piVar1 != -1) {
    iVar7 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar7 == 0) {
      iVar7 = 0;
    }
    if (((iVar7 != 0) && (*(int *)(iVar7 + 200) != 0)) &&
       (puVar8 = *(undefined **)(*(int *)(iVar7 + 200) + 0x1ec), puVar8 != (undefined *)0x0)) {
      *puVar8 = 1;
      FUN_089846d0(puVar8);
      FUN_089841f4(*puVar5,0x3f000000,0x3f000000,puVar8);
      local_8 = *puVar3;
      local_c = *puVar2;
      local_4 = 0;
      FUN_089840dc(*puVar4,puVar8,&local_c,*piVar6 != 0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

