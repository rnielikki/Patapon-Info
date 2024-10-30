# applyUnit

Applies the [unit setup](./setupunit.md). Affects e.g. character action.

## Code Information

- **Name**: `applyUnit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 31 00`
- **Assembly Address in Memory** : `0x891cbbc`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 31 00```

Which is interpreted as:

```c
applyUnit()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891cbbc(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = *(int *)(param_1 + 0x10);
  if (iVar1 == 0) {
    iVar1 = 0;
  }
  else {
    if (iVar1 == 0) {
      iVar1 = 0;
    }
    iVar1 = *(int *)(iVar1 + 0xf8);
    if (iVar1 == 0) {
      iVar1 = 0;
    }
  }
  if (iVar1 != 0) {
    FUN_088a94d4();
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

