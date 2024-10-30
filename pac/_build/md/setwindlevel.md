# setWindLevel

Sets the wind strength. This works both in hideout and during mission.

## Code Information

- **Name**: `setWindLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 71 00`
- **Assembly Address in Memory** : `0x8920998`

## Parameters

- `(float *)destination` *(8 bytes)* :  Strength of the wind, the value is **between 0~1**. 0 means no wind.

**DO NOT set stength to negative for changing direction** (it will remove wind).

For direction, use [setWindDirection](./setwinddirection.md).

## Example

Here is one example in hex:

```25 16 71 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setWindLevel((float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920998(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
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
    FUN_088fddc8(*puVar1,iVar2 + 0x250);
    FUN_088fddc8(*puVar1,iVar2 + 0x210);
    FUN_08900850(0,iVar2 + 0x1b0,9);
    FUN_08900850(0,iVar2 + 0x1b0,0xd);
    FUN_08900850(0,iVar2 + 0x1b0,0x10);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

