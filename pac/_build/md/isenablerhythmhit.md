# isEnableRhythmHit

Gets if the command cancel is enabled or not.

## Code Information

- **Name**: `isEnableRhythmHit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 26 00`
- **Assembly Address in Memory** : `0x89715f0`

## Parameters

- `(int *)disable_commandcancel` *(8 bytes)* : Variable to *store* the result. 0 is command cancel enabled, 1 is command cancel disabled.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089715f0(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = (uint)DAT_08b98eb0;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

