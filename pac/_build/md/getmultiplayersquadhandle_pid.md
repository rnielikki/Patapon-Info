# getMultiPlayerSquadHandle_PID

Gets a squad ID from a player in multi.

Please describe the difference from [getMultiplayerSquadHandle](./getmultiplayersquadhandle.md).

## Code Information

- **Name**: `getMultiPlayerSquadHandle_PID`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3b 00`
- **Assembly Address in Memory** : `0x891d558`

## Parameters

- `(int *)squad_handle` *(8 bytes)* : Variable to *store* the squad handle. **Stores -1 if the unit doesn't exist**.
- `(int)player_index` *(8 bytes)* : Index of the player in multi, 0~3 expected.

## Example

Here is one example in hex:

```25 16 3b 00 / 04 00 00 00 / 00 00 00 00 / 08 00 00 00 / 64 00 00 00```

Which is interpreted as:

```c
getMultiPlayerSquadHandle_PID((int *)iVar0, ((global)int *)giVar100)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891d558(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  uint uVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  *piVar1 = -1;
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0xf8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 != 0) {
    uVar4 = *puVar2;
    if ((int)uVar4 < 0) {
      uVar4 = uVar4 + 3;
    }
    iVar3 = FUN_088a8650(iVar3,(int)uVar4 >> 2);
    if (iVar3 != 0) {
      uVar4 = *puVar2 & 3;
      if (((int)*puVar2 < 0) && (uVar4 != 0)) {
        uVar4 = uVar4 - 4;
      }
      iVar3 = FUN_088df588(iVar3,uVar4);
      if (iVar3 != 0) {
        *piVar1 = (int)*(short *)(iVar3 + 0x78);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

