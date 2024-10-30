# networkErrorInvoke (251c2c00)

> *Other functions have the same name. Check the [Disambiguation page](./networkErrorInvoke.md) to find them.*

In **hideout**, **check** if there is network error or not. This is called every time even when the hideout is closed.

## Code Information

- **Name**: `networkErrorInvoke`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 2c 00`
- **Assembly Address in Memory** : `0x8b50028`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 1c 2c 00```

Which is interpreted as:

```c
networkErrorInvoke()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b50028(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = FUN_Azito__08accd40(*(undefined4 *)(*(int *)(param_1 + 0x10) + 500));
  if (iVar1 != 0) {
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

