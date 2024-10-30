# setSandLevel

Sets the strength of the sandstorm weather.

## Code Information

- **Name**: `setSandLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 77 00`
- **Assembly Address in Memory** : `0x8920d40`

## Parameters

- `(float)sandstorm_level` *(8 bytes)* : Sandstorm level to set. 0 is no sandstorm, 1 is strongest sandstorm.

## Example

Here is one example in hex:

```25 16 77 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setSandLevel((float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920d40(int param_1,undefined4 param_2)

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
    FUN_088fdd78(*puVar1,iVar2 + 0x250);
    FUN_088fdd78(*puVar1,iVar2 + 0x210);
    FUN_08900850(0,iVar2 + 0x1b0,9);
    FUN_08900850(0,iVar2 + 0x1b0,0xd);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

