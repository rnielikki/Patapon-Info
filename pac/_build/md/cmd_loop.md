# cmd_loop

Repeats jumping to the address for the given amount.

## Code Information

- **Name**: `cmd_loop`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 0e 00`
- **Assembly Address in Memory** : `0x88383b4`

## Parameters

- `(int)amount` *(8 bytes)* : How much jumping should be repeated.
- `(Address)address` *(4 bytes)* : Address to jump.

## Example

Here is one example in hex:

```25 00 0e 00 / 04 00 00 00 / 02 00 00 00 / f0 38 06 00```

Which is interpreted as:

```c
cmd_loop((int *)iVar2, 0x638f0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_088383b4(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,0,4);
  iVar3 = *piVar1;
  *piVar1 = iVar3 + -1;
  if (iVar3 + -1 != 0) {
    PAC::Cmd_Jump_Or_Call(param_2,*puVar2,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

