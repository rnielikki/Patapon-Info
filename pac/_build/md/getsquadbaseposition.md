# getSquadBasePosition

Gets squad position *without* additional attack movement.

## Code Information

- **Name**: `getSquadBasePosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 42 00`
- **Assembly Address in Memory** : `0x891de1c`

## Parameters

- `(int)squad_handle` *(8 bytes)* : The [squad handle](./guide/how-to-get-a-handle.md) of the squad to get the position.
- `(float *)position` *(8 bytes)* : Variable to *store* the current X position of the squad.

## Example

Here is one example in hex:

```25 16 42 00 / 04 00 00 00 / 00 00 00 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getSquadBasePosition((int *)iVar0, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891de1c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
    puVar1 = (undefined4 *)offset__10(iVar3 + 0x260);
    *puVar2 = *puVar1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

