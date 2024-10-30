# resetGateInfo

Resets the gate info setup done by [setGateInfo](./setgateinfo.md).

## Code Information

- **Name**: `resetGateInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 bc 00`
- **Assembly Address in Memory** : `0x8923b90`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 bc 00```

Which is interpreted as:

```c
resetGateInfo()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923b90(int param_1,undefined4 param_2)

{
  FUN_088b2448(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x118));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

