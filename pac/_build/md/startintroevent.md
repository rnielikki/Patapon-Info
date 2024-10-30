# startIntroEvent

Mark the countdown as performable. This sets only flag, and [multi_battleGoAHead](./multi_battlegoahead.md) after this is required for countdown.

## Code Information

- **Name**: `startIntroEvent`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3f 01`
- **Assembly Address in Memory** : `0x892b190`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 3f 01```

Which is interpreted as:

```c
startIntroEvent()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892b190(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x5c);
  if (iVar1 != 0) {
    *(undefined *)(iVar1 + 0x23) = 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

