# cmd_ifLBE

Compares two values and jumps to a specific instruction (without executing next) if the value is bigger than or equal to the other one.

## Code Information

- **Name**: `cmd_ifLBE`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 1a 00`
- **Assembly Address in Memory** : `0x8838cd4`

## Parameters

`cmd_ifLBE((int/float)value1, (int/float)value2, (Address)address)`

- `(Int/Float)value1` *(8 bytes)* : The value that might be bigger than or equal to `value2`. Can be variable or immediate. Read-only.
- `(Int/Float)value2` *(8 bytes)* : The value that might be smaller than or equal to `value1`. Can be variable or immediate. Read-only.
- `(Address)address` *(4 bytes)* : Address to jump, the address is hex instruction offset from the PAC file.

This performs `if(value1 >= value2) goto address;`

## Remarks

For int/float, the function converts the type automatically.

## Example

Here is one example in hex:

```25 00 1a 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / d8 99 00 00```

Which is interpreted as:

```c
cmd_ifLBE((int *)iVar0, (int *)iVar1, 0x99d8)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08838cd4(undefined4 param_1,undefined4 param_2)

{
  float *pfVar1;
  float *pfVar2;
  undefined4 *puVar3;
  uint uVar4;
  uint uVar5;
  float fVar6;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,0,4);
  uVar4 = Pac_Get_ParamType(param_2,0);
  uVar5 = Pac_Get_ParamType(param_2,1);
  Param_Print_Type(param_2,0);
  Param_Print_Type(param_2,1);
  Param_Print_Type(param_2,2);
  if ((uVar4 & 0x70) == 0) {
    if ((uVar5 & 0x70) == 0) {
      fVar6 = *pfVar2;
    }
    else {
      fVar6 = (float)(int)*pfVar2;
    }
    if ((int)fVar6 <= (int)*pfVar1) {
      PAC::Cmd_Jump_Or_Call(param_2,*puVar3,0);
    }
  }
  else {
    if ((uVar5 & 0x70) == 0) {
      fVar6 = (float)(int)*pfVar2;
    }
    else {
      fVar6 = *pfVar2;
    }
    if (fVar6 <= *pfVar1) {
      PAC::Cmd_Jump_Or_Call(param_2,*puVar3,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

