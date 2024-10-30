# cmd_inc

Adds 1 to the value and stores the value. Works both for `int` and `float`.

## Code Information

- **Name**: `cmd_inc`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 0c 00`
- **Assembly Address in Memory** : `0x883825c`

## Parameters

`cmd_inc((int/float *)value)` *(8 bytes)*

- `(Int/Float *)value`: The value is for *reading/writing*, the value will be changed.

This performs `value++`.

## Example

Here is one example in hex:

```25 00 0c 00 / 04 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
cmd_inc((int *)iVar5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883825c(undefined4 param_1,undefined4 param_2)

{
  float *pfVar1;
  uint uVar2;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_ParamType(param_2,0);
  Param_Print_Type(param_2,0);
  if ((uVar2 & 0x70) == 0) {
    *pfVar1 = (float)((int)*pfVar1 + 1);
  }
  else {
    *pfVar1 = *pfVar1 + 1.0;
  }
  Param_Print_Type(param_2,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

