# setRenderPriority (25030900)

> *Other functions have the same name. Check the [Disambiguation page](./setRenderPriority.md) to find them.*

Sets render priority of something. Please explain.

## Code Information

- **Name**: `setRenderPriority`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 09 00`
- **Assembly Address in Memory** : `0x892d4c8`

## Parameters

- `(int)priority` *(8 bytes)* : Render priority to set.

## Example

This shows **ending [sysytemmessage](./sysytemmessage.md)** render priority:

```25 03 09 00 / 02 00 00 00 / ad bb 0d 00```

Which is interpreted as:

```c
setRenderPriority((int)900013)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892d4c8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x2c) != 0) {
    *(undefined4 *)(param_1 + 0x244) = *puVar1;
    (**(code **)(*(int *)(*(int *)(param_1 + 0x2c) + 0x32c) + 0x14))
              (*(int *)(param_1 + 0x2c) + 0x310,*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

