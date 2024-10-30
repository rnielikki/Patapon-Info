# getUnitHandle

Obtains handle of the certain unit.

The ID can be used for getting the unit status, or controlling the unit through PAC, e.g. Status effect.

## Code Information

- **Name**: `getUnitHandle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3d 00`
- **Assembly Address in Memory** : `0x891d7f4`

## Parameters

- `(int *)destination` *(8 bytes)* : Destination to save the unit handle.
- `(int)squad_handle_id` *(8 bytes)* : Value obtained from [getUnitSquadHandle](./getunitsquadhandle.md) or [getPlayerSquadHandle](./getplayersquadhandle.md).
- `(int)index` *(8 bytes)* : Index in squad, Usually this is zero.

## Example

Here is one example in hex:

```25 16 3d 00 / 04 00 00 00 / 06 00 00 00 / 04 00 00 00 / 03 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getUnitHandle((int *)iVar6, (int *)iVar3, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891d7f4(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int *piVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  *piVar1 = -1;
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1);
  if ((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 3)) {
    iVar5 = *piVar3;
    if (iVar5 == -1) {
      if (*(int *)(iVar4 + 0x490) != 0) {
        *piVar1 = (int)*(short *)(*(int *)(iVar4 + 0x490) + 0x78);
      }
    }
    else {
      iVar6 = FUN_088c5340(iVar4);
      if ((iVar5 < iVar6) && (iVar4 = FUN_088c5348(iVar4,iVar5), iVar4 != 0)) {
        *piVar1 = (int)*(short *)(iVar4 + 0x78);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

