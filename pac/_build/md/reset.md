# reset

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `reset`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 20 02 00`
- **Assembly Address in Memory** : `0x89b0e28`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 20 02 00```

Which is interpreted as:

```c
reset()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b0e28(int param_1,undefined4 param_2)

{
  if (*(int *)(param_1 + 0x14) != 0) {
    FUN_0898e004();
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

