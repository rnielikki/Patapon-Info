# cmd_initArray

Called once in very first time to initialise before setting up [cmd_flgMemset](./cmd_flgmemset.md) etc.

## Code Information

- **Name**: `cmd_initArray`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 48 00`
- **Assembly Address in Memory** : `0x883b150`

## Parameters

This function is parameterless.

## Example

Here is one example in hex:

```25 00 48 00```

Which is interpreted as:

```c
cmd_initArray()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883b150(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  
  uVar1 = Get_Array_BaseAddr(param_2);
  FUN_089fee70(uVar1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

