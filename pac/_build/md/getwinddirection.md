# getWindDirection

Gets the direction of the wind. This represents *direction only* and does nothing with power or wind's existence.

## Code Information

- **Name**: `getWindDirection`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 7b 00`
- **Assembly Address in Memory** : `0x8921014`

## Parameters

- `(float *)destination` *(8 bytes)* : Variable to *store* the wind direction. **Expected `-1` or `1`**.

`-1` means headwind and `1` means tailwind (Same with reversed direction too).

**DO NOT retrieve this to check if there is wind or not**
.
For checking if the wind exists, use [getWindLevel](./getwindlevel.md).

## Example

Here is one example in hex:

```25 16 7b 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getWindDirection((float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921014(int param_1,undefined4 param_2)

{
  float *pfVar1;
  int iVar2;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  *pfVar1 = 0.0;
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0x118);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if (iVar2 != 0) {
    *pfVar1 = (float)*(int *)(iVar2 + 0x26c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

