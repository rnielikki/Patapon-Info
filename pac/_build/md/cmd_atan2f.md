# cmd_atan2f

Applies [atan2](https://en.wikipedia.org/wiki/Atan2) function to the value and stores the result as float.

## Code Information

- **Name**: `cmd_atan2f`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 39 00`
- **Assembly Address in Memory** : `0x883a874`

## Parameters

`cmd_atan2f((float)value, (float *)destination)`

- `(Float)value` *(8 bytes)* : Can be variable or constat value. This value will be used for *reading only*.
- `(Float *)destination` *(8 bytes)* : Variable to store value. This value will be uesd for *writing only* and **will be modified**.

This performs `destination = Atan2(value)`.

Note the both values must be float.

## Example

Here is one example in hex:

```25 00 39 00 / 20 00 00 00 / 02 00 00 00 / 20 00 00 00 / 03 00 00 00 / 20 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
cmd_atan2f((float *)fVar2, (float *)fVar3, (float *)fVar4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a874(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  float *pfVar3;
  float fVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  fVar4 = (float)FUN_0880e604(*puVar1,*puVar2);
  *pfVar3 = (fVar4 * 180.0) / 3.141593;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

