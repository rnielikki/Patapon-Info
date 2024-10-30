# networkErrorInvoke (2516e800)

> *Other functions have the same name. Check the [Disambiguation page](./networkErrorInvoke.md) to find them.*

During **mission**, **check** if there is network error or not. This is called every time even when the hideout is closed.

## Code Information

- **Name**: `networkErrorInvoke`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e8 00`
- **Assembly Address in Memory** : `0x891b89c`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 e8 00```

Which is interpreted as:

```c
networkErrorInvoke()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b89c(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = FUN_08990e6c(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x2d8));
  if (iVar1 != 0) {
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

