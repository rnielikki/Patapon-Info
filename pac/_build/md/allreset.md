# allReset

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `allReset`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0b 07 00`
- **Assembly Address in Memory** : `0x896fbe4`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 0b 07 00```

Which is interpreted as:

```c
allReset()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896fbe4(int param_1,undefined4 param_2)

{
  FUN_088e6e30(*(undefined4 *)(param_1 + 0x14));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

