# replaceActivityTable

Overwrites `squadline` action.

## Code Information

- **Name**: `replaceActivityTable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 25 01`
- **Assembly Address in Memory** : `0x892a740`

## Parameters

- `(int)squad_handle` *(8 bytes)* : The squad handle to get the class ID.
- `(int)from_id` *(8 bytes)* : The target `squadline` ID that will be changed.
- `(int)to_id` *(8 bytes)* : The desired `squadline` ID.

## Example

Here is one example in hex:

```25 16 25 01 / 04 00 00 00 / 18 00 00 00 / 02 00 00 00 / f2 03 00 00 / 02 00 00 00 / f4 03 00 00```

Which is interpreted as:

```c
replaceActivityTable((int *)iVar24, (int)1010, (int)1012)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a740(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 3)) &&
     (iVar4 + 0x1f0 != 0)) {
    Action::Overwrite_SquadlineAction(iVar4 + 0x1f0,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

