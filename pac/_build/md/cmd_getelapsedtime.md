# cmd_getElapsedTime

Gets the time between. Usually the value is 1.

(Guessing this could be between frames, but not sure about this magic, please fix if you know this.)

## Code Information

- **Name**: `cmd_getElapsedTime`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 4e 00`
- **Assembly Address in Memory** : `0x883b5e8`

## Parameters

- `(float *)destination` *(8 bytes)* : Store the time elapsed. *Writing only*.

## Example

Here is one example in hex:

```25 00 4e 00 / 20 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
cmd_getElapsedTime((float *)fVar3)
```

## Remarks

This get specific "time divider" value, which is 160 (0xA0) here.

And the "between time" is also the 160 (0xA0), so dividing them results 1.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883b5e8(undefined4 param_1,undefined4 param_2)

{
  float *pfVar1;
  int iVar2;
  uint uVar3;
  float fVar4;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Get_Time_Between(param_2);
  uVar3 = Get_TimeDivider(0x3f800000);
  if ((int)uVar3 < 0) {
    fVar4 = (float)(uVar3 >> 1 | uVar3 & 1);
    fVar4 = fVar4 + fVar4;
  }
  else {
    fVar4 = (float)uVar3;
  }
  *pfVar1 = (float)iVar2 / fVar4;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

