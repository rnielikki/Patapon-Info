# setDisableFeverGauge

Shows or hides the fever worm.

## Code Information

- **Name**: `setDisableFeverGauge`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 29 00`
- **Assembly Address in Memory** : `0x89717a8`

## Parameters

- `(bool)disable_fever_gauge` *(8 bytes)* : **0 enables fever gauge**, otherwise fever gauge is disabled.

## Remarks

This function stores 0 or 1 to `0x08b969c0`, which can be changed also with direct Assembly code.

### Execution order

**If this is called too early, this won't work**. Set this at least e.g. callback of [setMissionTimmingScript](./setmissiontimmingscript.md).

But for good UX design practice, avoid using this.

## Example

Here is one example in hex:

```25 0c 29 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setDisableFeverGauge((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089717a8(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  DAT_08b969c0 = *piVar1 == 0;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

