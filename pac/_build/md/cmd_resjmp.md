# cmd_resJmp

Check if the "result" value is same as given value. and jumps to the certain address.

The "result" value is only used as a condition for jumping([cmd_resJmp](./cmd_resjmp.md)) or calling([cmd_resCall](./cmd_rescall.md)) function.

## Code Information

- **Name**: `cmd_resJmp`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 05 00`
- **Assembly Address in Memory** : `0x8837aa0`

## Parameters

- `(bool)comparer` *(8 bytes)* : Zero or one to compare with the "result".
- `(Address)address` *(4 bytes)* : Address to jump if the "result" is samd as 1st parameter.

This performs `if((bool)result == (bool)comparer) { goto address; }`

## Example

Here is one example in hex:

```25 00 05 00 / 02 00 00 00 / 00 00 00 00 / d4 99 00 00```

Which is interpreted as:

```c
cmd_resJmp((int)0, 0x99d4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08837aa0(undefined4 param_1,undefined4 param_2)

{
  char cVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,0,4);
  Param_Print_Type(param_2,0);
  Param_Print_Type(param_2,1);
  iVar4 = *piVar2;
  cVar1 = FUN_0883c028(param_2);
  if ((iVar4 != 0) == (bool)cVar1) {
    PAC::Cmd_Jump_Or_Call(param_2,*puVar3,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

