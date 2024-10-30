# cmd_stkClr

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_stkClr`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 31 00`
- **Assembly Address in Memory** : `0x883a524`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 00 31 00```

Which is interpreted as:

```c
cmd_stkClr()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a524(undefined4 param_1,undefined4 param_2)

{
  FUN_0883ca68(param_2,0);
  FUN_0883bebc(param_2,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

