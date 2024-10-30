# cmd_ifAND

Jumps to a specific instruction (without executing next) if the and calculation result is not zero.

## Code Information

- **Name**: `cmd_ifAND`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 1d 00`
- **Assembly Address in Memory** : `0x8839130`

## Parameters

`cmd_ifAND((int/float)value1, (int/float)value2, (Address)address)`

- `(Int/Float)value1` *(8 bytes)* : A value to compare. Can be variable or immediate. Read-only.
- `(Int/Float)value2` *(8 bytes)* : The another value to compare. Can be variable or immediate. Read-only.
- `(Address)address` *(4 bytes)* : Address to jump, the address is hex instruction offset from the PAC file.

This performs `if((value1 & value2) != 0) goto address;

## Example

Here is one example in hex:

```25 00 1d 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 10 00 00 / 40 10 00 00```

Which is interpreted as:

```c
cmd_ifAND((int *)iVar0, (int)4096, 0x1040)
```

`4096` is `0x1000`, as binary it checks 12th place is one, not zero.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08839130(undefined4 param_1,undefined4 param_2)

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
    PAC::Cmd_Jump_Or_Call(param_2,*puVar3,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

