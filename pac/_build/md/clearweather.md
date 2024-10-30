# clearWeather

Clears weather, **does not work**.

## Code Information

- **Name**: `clearWeather`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 7a 00`
- **Assembly Address in Memory** : `0x8920fb0`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 7a 00```

Which is interpreted as:

```c
clearWeather()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920fb0(int param_1,undefined4 param_2)

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
    iVar1 = *(int *)(iVar1 + 0x118);
    if (iVar1 == 0) {
      iVar1 = 0;
    }
  }
  if (iVar1 != 0) {
    FUN_088fde20(iVar1 + 0x1d0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

