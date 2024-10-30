# setPlayerSquadType

Sets type of the player squad. Describe what the type is.

## Code Information

- **Name**: `setPlayerSquadType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 44 00`
- **Assembly Address in Memory** : `0x891e080`

## Parameters

- `(int *)player_squadhandle` *(8 bytes)* : The player squad handle. `4:35` is usually used for player squad handle.
- `(int)squad_type` *(8 bytes)* : Expected 0~2.

## Example

Here is one example in hex:

```25 16 44 00 / 08 00 00 00 / 6c 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setPlayerSquadType(((global)int *)giVar108, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e080(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
    iVar4 = *piVar2;
    if (iVar4 == 2) {
      FUN_088c5ea0(iVar3);
    }
    else if (iVar4 == 1) {
      FUN_088c5ea0(iVar3,2);
    }
    else if (iVar4 == 0) {
      FUN_088c5ea0(iVar3);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

