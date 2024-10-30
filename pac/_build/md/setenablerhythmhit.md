# setEnableRhythmHit

Check if command cancel is enabled or disabled.

## Code Information

- **Name**: `setEnableRhythmHit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 25 00`
- **Assembly Address in Memory** : `0x89715a0`

## Parameters

- `(bool)disable_commandcancel` *(8 bytes)* : 0 sets command cancel. otherwise command cancel is disabled.

## Example

Here is one example in hex:

```25 0c 25 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setEnableRhythmHit((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089715a0(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  DAT_08b98eb0 = *piVar1 != 0;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

