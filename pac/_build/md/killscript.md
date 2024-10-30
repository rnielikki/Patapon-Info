# killScript

Stop executing (killing) the script, created from [createScript](./createscript_25100800.md).

## Code Information

- **Name**: `killScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 0d 00`
- **Assembly Address in Memory** : `0x890a408`

## Parameters

- `(int)script_id` *(8 bytes)* : Script ID, set from [createScript](./createscript_25100800.md).

## Example

Here is one example in hex:

```25 10 0d 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
killScript((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0890a408(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = *(int **)(*(int *)(param_1 + 0x10) + 0x4dc);
  if (piVar2 != (int *)0x0) {
    (**(code **)(*piVar2 + 0x1c))(piVar2,*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

