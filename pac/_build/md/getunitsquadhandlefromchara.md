# getUnitSquadHandleFromChara

Gets squad handle of an unit.

## Code Information

- **Name**: `getUnitSquadHandleFromChara`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 38 00`
- **Assembly Address in Memory** : `0x891d100`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the squad handle.
- `(int *)unit_handle` *(8 bytes)* : Unit handle, obtained from e.g. [getUnitHandle](./getunithandle.md).

## Example

Here is one example in hex:

```25 16 38 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getUnitSquadHandleFromChara((int *)iVar1, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891d100(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *piVar1 = -1;
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
    *piVar1 = (int)*(short *)(*(int *)(iVar3 + 0xa14) + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

