# cmd_stkDec

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_stkDec`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 30 00`
- **Assembly Address in Memory** : `0x883a4c4`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 00 30 00```

Which is interpreted as:

```c
cmd_stkDec()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a4c4(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = FUN_0883be98(param_2);
  if (iVar1 == 0) {
    iVar1 = FUN_0883ca60(param_2);
    FUN_0883ca68(param_2,iVar1 + -1);
  }
  else {
    FUN_0883bee0(param_2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

