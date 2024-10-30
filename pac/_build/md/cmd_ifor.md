# cmd_ifOR

Jumps to a specific instruction (without executing next) if the or calculation result is not zero.

## Code Information

- **Name**: `cmd_ifOR`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 1e 00`
- **Assembly Address in Memory** : `0x8839204`

## Parameters

`cmd_ifOR((int/float)value1, (int/float)value2, (Address)address)`

- `(Int/Float)value1` *(8 bytes)* : A value to compare. Can be variable or immediate. Read-only.
- `(Int/Float)value2` *(8 bytes)* : The another value to compare. Can be variable or immediate. Read-only.
- `(Address)address` *(4 bytes)* : Address to jump, the address is hex instruction offset from the PAC file.

This performs `if((value1 | value2) != 0) goto address;

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08839204(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  uint *puVar2;
  undefined4 *puVar3;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,0,4);
  Param_Print_Type(param_2,0);
  Param_Print_Type(param_2,1);
  Param_Print_Type(param_2,2);
  if ((*puVar1 | *puVar2) != 0) {
    PAC::Cmd_Jump_Or_Call(param_2,*puVar3,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

