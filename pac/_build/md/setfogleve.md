# setFogLeve

Sets how foggy the weather is in the world.

Does not work with rain.

## Code Information

- **Name**: `setFogLeve`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 76 00`
- **Assembly Address in Memory** : `0x8920c9c`

## Parameters

- `(float)fog_level` *(8 bytes)* : Fog level to set. 0 is no fog, 1 is maximum fog.

## Example

Here is one example in hex:

```25 16 76 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setFogLeve((float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920c9c(int param_1,undefined4 param_2)

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
    FUN_088fdd64(*puVar1,iVar2 + 0x250);
    FUN_088fdd64(*puVar1,iVar2 + 0x210);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

