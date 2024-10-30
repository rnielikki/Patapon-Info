# saveFlag

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `saveFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 30 00`
- **Assembly Address in Memory** : `0x894bf84`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 0a 30 00```

Which is interpreted as:

```c
saveFlag()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894bf84(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  
  uVar1 = FUN_08877b6c(1);
  FUN_08877c78(uVar1,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

