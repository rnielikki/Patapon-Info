# cmd_ifCallAND

Calls another instruciton line, if the and calculation result is not zero.

## Code Information

- **Name**: `cmd_ifCallAND`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 25 00`
- **Assembly Address in Memory** : `0x8839bbc`

## Parameters

`cmd_ifCallAND((int/float)value1, (int/float)value2, (Address)address)`

- `(Int/Float)value1` *(8 bytes)* : A value to compare. Can be variable or immediate. Read-only.
- `(Int/Float)value2` *(8 bytes)* : The another value to compare. Can be variable or immediate. Read-only.
- `(Address)address` *(4 bytes)* : Address to call, the address is hex instruction offset from the PAC file.

This performs `if((value1 & value2) != 0) { (address*)(); }...;`

## Example

Here is one example in hex:

```25 00 25 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 80 00 00 / e4 2a 00 00```

Which is interpreted as:

```c
cmd_ifCallAND((int *)iVar1, (int)32768, 0x2ae4)
```

`32768` is `0x8000`, as binary it checks 15th place is one, not zero.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08839bbc(undefined4 param_1,undefined4 param_2)

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
  if ((*puVar1 & *puVar2) != 0) {
    Set_ReturnContext(param_2);
    PAC::Cmd_Jump_Or_Call(param_2,*puVar3,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

