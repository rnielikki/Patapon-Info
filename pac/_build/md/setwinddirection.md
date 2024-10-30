# setWindDirection

Sets the direction of the wind. This represents *direction only* and does nothing with power or wind's existence.

## Code Information

- **Name**: `setWindDirection`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 70 00`
- **Assembly Address in Memory** : `0x89208ec`

## Parameters

- `(float *)direction` *(8 bytes)* : Wind direction. **Expected `-1` or `1`**.

`-1` means headwind and `1` means tailwind (Same with reversed direction too).

**DO NOT set zero to remove wind** (Making zero will cause weird background effect).

For removing wind, use [setWindLevel](./setwindlevel.md).

## Example

Here is one example in hex:

```25 16 70 00 / 10 00 00 00 / 00 00 80 bf```

Which is interpreted as:

```c
setWindDirection((float)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089208ec(int param_1,undefined4 param_2)

{
  float *pfVar1;
  int iVar2;
  float fVar3;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
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
    fVar3 = *pfVar1;
    FUN_088fdddc(iVar2 + 0x250,(int)fVar3);
    FUN_088fdddc(iVar2 + 0x210,(int)fVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

