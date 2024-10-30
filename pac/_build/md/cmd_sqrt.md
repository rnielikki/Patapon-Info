# cmd_sqrt

Gets square root of the value and stores the result as float.

## Code Information

- **Name**: `cmd_sqrt`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 3b 00`
- **Assembly Address in Memory** : `0x883aa04`

## Parameters

`cmd_sqrt((float/int)value, (float *)destination)`

- `(Float/Int)value` *(8 bytes)* : Can be variable or constat value. This value will be used for *reading only*.
- `(Float *)destination` *(8 bytes)* : Variable to store value. This value will be uesd for *writing only* and **will be modified**.

This performs `destination = Math.Sqrt(value)`.

## Example

Here is one example in hex:

```25 00 3b 00 / 20 00 00 00 / 07 00 00 00 / 20 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
cmd_sqrt((float *)fVar7, (float *)fVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883aa04(undefined4 param_1,undefined4 param_2)

{
  float *pfVar1;
  float *pfVar2;
  uint uVar3;
  float fVar4;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  uVar3 = Pac_Get_ParamType(param_2,0);
  if ((uVar3 & 0x70) == 0) {
    fVar4 = (float)(int)*pfVar1;
  }
  else {
    fVar4 = *pfVar1;
  }
  *pfVar2 = SQRT(fVar4);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
