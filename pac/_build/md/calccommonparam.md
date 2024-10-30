# calcCommonParam

Settles some squad handle values to squadlineparam. Please describe the detail.

## Code Information

- **Name**: `calcCommonParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 45 00`
- **Assembly Address in Memory** : `0x891e180`

## Parameters

- `(int *)squad_handle` *(8 bytes)* : ID of the Squad handle to set the values.
- `(int)squadlineparam_id` *(8 bytes)* : ID of the `squadlineparam_id` to apply to the handle.

## Example

Here is one example in hex:

```25 16 45 00 / 04 00 00 00 / 14 00 00 00 / 02 00 00 00 / 43 04 00 00```

Which is interpreted as:

```c
calcCommonParam((int *)iVar20, (int)1091)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e180(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
    FUN_088f7da4(iVar3 + 0x1f0,*puVar2,1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

