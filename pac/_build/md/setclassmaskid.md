# setClassMaskId

Sets mask ID of a certain class. (Seems like this doesn't work. Please describe about this more.)

## Code Information

- **Name**: `setClassMaskId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 25 00`
- **Assembly Address in Memory** : `0x891bd68`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(int)mask_id` *(8 bytes)* : Mask ID to set, please add what this does mean.

## Example

Here is one example in hex:

```25 16 25 00 / 04 00 00 00 / 36 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setClassMaskId((int *)iVar54, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891bd68(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
    *(undefined4 *)(iVar3 + 0xa00) = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

