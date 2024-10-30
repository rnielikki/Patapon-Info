# cmd_setSleep

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_setSleep`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 36 00`
- **Assembly Address in Memory** : `0x883a69c`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 00 36 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
cmd_setSleep((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a69c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  FUN_0883bbc0(param_2,*piVar1 != 0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

