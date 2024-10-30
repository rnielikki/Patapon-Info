# applyConstGimmick

Applies all const gimmick defined from [registConstGimmick](./registconstgimmick.md).

## Code Information

- **Name**: `applyConstGimmick`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 c0 00`
- **Assembly Address in Memory** : `0x8923fa8`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 c0 00```

Which is interpreted as:

```c
applyConstGimmick()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923fa8(int param_1,undefined4 param_2)

{
  FUN_089f077c(*(int *)(*(int *)(param_1 + 0x10) + 0x118) + 0x7e44);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

