# cmd_mov

Assigns value directly without extra calculation. This can assign current value of a variable, or an immediate value.

## Code Information

- **Name**: `cmd_mov`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 07 00`
- **Assembly Address in Memory** : `0x8837c08`

## Parameters

`cmd_mov((int/float *)destination, (int/float)value)`

- `(Int/Float *)destination` *(8 bytes)* : Variable to store value. This value will be uesd for *writing only* and **will be modified**.
- `(Int/Float)value` *(8 bytes)* : Can be variable or constat value. This value will be used for *reading only*.

This performs `destination = value`.

## Remarks

You **can** use from int to float and vice versa. In this case, the function will perform type conversion automatically.

## Example

Here is one example in hex:

```25 00 07 00 / 08 00 00 00 / 35 00 00 00 / 10 00 00 00 / 00 00 80 bf```

Which is interpreted as:

```c
cmd_mov(((global)int *)giVar53, (float)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08837c08(undefined4 param_1,undefined4 param_2)

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
    *pfVar1 = fVar5;
  }
  else {
    if ((uVar4 & 0x70) == 0) {
      fVar5 = (float)(int)*pfVar2;
    }
    else {
      fVar5 = *pfVar2;
    }
    *pfVar1 = fVar5;
  }
  Param_Print_Type(param_2,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

