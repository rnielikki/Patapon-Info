# cmd_irol

Performs left-shift calculation.

## Code Information

- **Name**: `cmd_irol`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 15 00`
- **Assembly Address in Memory** : `0x88387cc`

## Parameters

- `(uint *)value` *(8 bytes)* : Value to shift. *Read and write*, the result is saved here.
- `(uint)amount` *(8 bytes)* : Amount to shift.

This performs `value = value << amount`.

## Example

Here is one example in hex:

```25 00 15 00 / 08 00 00 00 / f8 01 00 00 / 02 00 00 00 / 08 00 00 00```

Which is interpreted as:

```c
cmd_irol(((global)int *)giVar504, (int)8)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_088387cc(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  *piVar1 = *piVar1 << (*puVar2 & 0x1f);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

