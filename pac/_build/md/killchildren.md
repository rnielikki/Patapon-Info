# killChildren

Kill all scripts created by [createScript](./createscript_25100800.md).

## Code Information

- **Name**: `killChildren`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 0c 00`
- **Assembly Address in Memory** : `0x890a3bc`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 10 0c 00```

Which is interpreted as:

```c
killChildren()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0890a3bc(int param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = *(int **)(*(int *)(param_1 + 0x10) + 0x4dc);
  if (piVar1 != (int *)0x0) {
    (**(code **)(*piVar1 + 0x18))();
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

