# allClearActorWindow

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `allClearActorWindow`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 61 00`
- **Assembly Address in Memory** : `0x8917dbc`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 17 61 00```

Which is interpreted as:

```c
allClearActorWindow()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917dbc(int param_1,undefined4 param_2)

{
  FUN_0887c324(*(undefined4 *)(param_1 + 0x14));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

