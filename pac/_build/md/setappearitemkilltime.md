# setAppearItemKillTime

Sets duration of the appeared item as seconds. Does not work with chest or ka-ching.

## Code Information

- **Name**: `setAppearItemKillTime`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 08 09 00`
- **Assembly Address in Memory** : `0x896eae4`

## Parameters

- `(float)fade_time` *(8 bytes)* : Time before fading out, as seconds.
- `(float)kill_time` *(8 bytes)* : Time before the item is deleted from the map, as seconds.

If `kill_time` is equal or bigger than `fade_time`, the item is deleted without fading.

## Example

Here is one example in hex:

```25 08 09 00 / 10 00 00 00 / 00 00 d0 41 / 10 00 00 00 / 00 00 20 42```

Which is interpreted as:

```c
setAppearItemKillTime((float)26, (float)40)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896eae4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0x188);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 != 0) {
    FUN_089532f4(*puVar1,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

