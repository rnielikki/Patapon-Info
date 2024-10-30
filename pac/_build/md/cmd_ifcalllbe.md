# cmd_ifCallLBE

Compares two values and calls another instruciton line, if the value is bigger than or equal to the other one.

## Code Information

- **Name**: `cmd_ifCallLBE`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 22 00`
- **Assembly Address in Memory** : `0x8839730`

## Parameters

`cmd_ifCallLBE((int/float)value1, (int/float)value2, (Address)address)`

- `(Int/Float)value1` *(8 bytes)* : The value that might be bigger than or equal to `value2`. Can be variable or immediate. Read-only.
- `(Int/Float)value2` *(8 bytes)* : The value that might be smaller than or equal to `value1`. Can be variable or immediate. Read-only.
- `(Address)address` *(4 bytes)* : Address to call, the address is hex instruction offset from the PAC file.

This performs `if(value1 >= value2){ (address*)(); }...;`

## Remarks

For int/float, the function converts the type automatically.

## Example

Here is one example in hex:

```25 00 22 00 / 08 00 00 00 / a8 00 00 00 / 10 00 00 00 / 00 00 00 00 / ac 3e 01 00```

Which is interpreted as:

```c
cmd_ifCallLBE(((global)int *)giVar168, (float)0, 0x13eac)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08839730(undefined4 param_1,undefined4 param_2)

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
      Set_ReturnContext(param_2);
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
      Set_ReturnContext(param_2);
      PAC::Cmd_Jump_Or_Call(param_2,*puVar3,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

