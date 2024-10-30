# cmd_sinf

Applies sine function to the value and stores the result as float.

## Code Information

- **Name**: `cmd_sinf`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 37 00`
- **Assembly Address in Memory** : `0x883a6ec`

## Parameters

`cmd_sqrt((int/float)value, (float *)destination)`

- `(Int/Float)value` *(8 bytes)* : Can be variable or constat value. This value will be used for *reading only*.
- `(Float *)destination` *(8 bytes)* : Variable to store value. This value will be uesd for *writing only* and **will be modified**.

This performs `destination = Math.Sin(value)`.

## Example

Here is one example in hex:

```25 00 37 00 / 20 00 00 00 / 0c 00 00 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cmd_sinf((float *)fVar12, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a6ec(undefined4 param_1,undefined4 param_2)

{
  float *pfVar1;
  undefined4 *puVar2;
  uint uVar3;
  undefined4 uVar4;
  float fVar5;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar3 = Pac_Get_ParamType(param_2,0);
  if ((uVar3 & 0x70) == 0) {
    fVar5 = (float)(int)*pfVar1;
  }
  else {
    fVar5 = *pfVar1;
  }
  uVar4 = syscall::sinf((fVar5 * 2.0 * 3.141593) / 360.0);
  *puVar2 = uVar4;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

