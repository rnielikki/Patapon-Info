# getMultiPlayerSquadHandle

Gets a squad ID from a player in multi.

Please describe the difference from [getMultiplayerSquadHandle_PID](./getmultiplayersquadhandle_pid.md).

## Code Information

- **Name**: `getMultiPlayerSquadHandle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3a 00`
- **Assembly Address in Memory** : `0x891d458`

## Parameters

- `(int *)squad_handle` *(8 bytes)* : Variable to *store* the squad handle. **Stores -1 if the unit doesn't exist**.
- `(undefined4)Var1` *(8 bytes)* : The observed value was zero, please describe more.
- `(int)player_index` *(8 bytes)* : Index of the player in multi, usually 0~3.

## Example

Here is one example in hex:

```25 16 3a 00 / 04 00 00 00 / 03 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getMultiPlayerSquadHandle((int *)iVar3, (int *)iVar1, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891d458(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *piVar1 = -1;
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = *(int *)(iVar4 + 0xf8);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (((iVar4 != 0) && (iVar4 = FUN_088a8650(iVar4,*puVar2), iVar4 != 0)) &&
     (iVar4 = FUN_088df588(iVar4,*puVar3), iVar4 != 0)) {
    *piVar1 = (int)*(short *)(iVar4 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

