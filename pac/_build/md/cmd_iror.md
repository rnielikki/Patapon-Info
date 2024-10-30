# cmd_iror

Performs right-shift calculation.

## Code Information

- **Name**: `cmd_iror`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 16 00`
- **Assembly Address in Memory** : `0x883883c`

## Parameters

- `(uint)value` *(8 bytes)* : Value to shift. *Read and write*, the result is saved here.
- `(uint)amount` *(8 bytes)* : Amount to shift.

This performs `value = value >> amount`.

## Example

Here is one example in hex:

```25 00 16 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 08 00 00 00```

Which is interpreted as:

```c
cmd_iror((int *)iVar0, (int)8)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883883c(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  uint *puVar2;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  *puVar1 = *puVar1 >> (*puVar2 & 0x1f);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

