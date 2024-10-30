# cmd_abs

Makes value absolute. If the value is negative, the value becomes positive.

## Code Information

- **Name**: `cmd_abs`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 3a 00`
- **Assembly Address in Memory** : `0x883a92c`

## Parameters

`cmd_abs((int/float)value, (int/float *)destination)`

- `(Int/Float)value` *(8 bytes)* : Can be variable or constat value. This value will be used for *reading only*.
- `(Int/Float *)destination` *(8 bytes)* : Variable to store value. This value will be uesd for *writing only* and **will be modified**.

This performs `destination = Math.Abs(value)`.

## Remarks

If `value` and `destination` are different two variables, the origianl value from `value` is preserved.

To modify the variable, you can set the `value` and the `destination` same.

## Example

Here is one example in hex:

```25 00 3a 00 / 20 00 00 00 / 0b 00 00 00 / 20 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
cmd_abs((float *)fVar11, (float *)fVar11)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a92c(undefined4 param_1,undefined4 param_2)

{
  float *pfVar1;
  float *pfVar2;
  uint uVar3;
  uint uVar4;
  float fVar5;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  uVar3 = Pac_Get_ParamType(param_2,0);
  uVar4 = Pac_Get_ParamType(param_2,1);
  if ((uVar3 & 0x70) == 0) {
    fVar5 = (float)(int)*pfVar1;
  }
  else {
    fVar5 = *pfVar1;
  }
  if ((uVar4 & 0x70) == 0) {
    *pfVar2 = (float)(int)ABS(fVar5);
  }
  else {
    *pfVar2 = ABS(fVar5);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

