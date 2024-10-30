# getDisableBeatGuide

Gets wheether the flashing rhythm border is hidden.

**This does not read from system setting**.

## Code Information

- **Name**: `getDisableBeatGuide`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 0b 00`
- **Assembly Address in Memory** : `0x8970838`

## Parameters

- `(bool *)disabled_beat_guide` *(8 bytes)* : Variable to *store* the result, 1 is disabled, 0 is enabled.

## Example

Here is one example in hex:

```25 0c 0b 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getDisableBeatGuide((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970838(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  if (*(int *)(*(int *)(param_1 + 0x10) + 0x158) != 0) {
    uVar2 = func_0x08b5f6d0();
    *puVar1 = uVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

