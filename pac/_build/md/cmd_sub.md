# cmd_sub

Subtracts a value from the another, and stores the subtracted value to the first parameter.

## Code Information

- **Name**: `cmd_sub`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 09 00`
- **Assembly Address in Memory** : `0x8837eec`

## Parameters

`cmd_sub((int/float *)target, (int/float)value)`

- `(Int/Float *)target` *(8 bytes)* : This value is for *reading/writing*, and **will be modified**.
- `(Int/Float)value` *(8 bytes)* : Can be variable or  value. This value is for *reading*.

This performs `target -= value` (or `target = target - value`).

## Example

Here is one example in hex:

```25 00 09 00 / 20 00 00 00 / 0c 00 00 00 / 10 00 00 00 / 00 00 a0 40```

Which is interpreted as:

```c
cmd_sub((float *)fVar12, (float)5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08837eec(undefined4 param_1,undefined4 param_2)

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
  Param_Print_Type(param_2,0);
  Param_Print_Type(param_2,1);
  if ((uVar3 & 0x70) == 0) {
    if ((uVar4 & 0x70) == 0) {
      fVar5 = *pfVar2;
    }
    else {
      fVar5 = (float)(int)*pfVar2;
    }
    *pfVar1 = (float)((int)*pfVar1 - (int)fVar5);
  }
  else {
    if ((uVar4 & 0x70) == 0) {
      fVar5 = (float)(int)*pfVar2;
    }
    else {
      fVar5 = *pfVar2;
    }
    *pfVar1 = *pfVar1 - fVar5;
  }
  Param_Print_Type(param_2,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

