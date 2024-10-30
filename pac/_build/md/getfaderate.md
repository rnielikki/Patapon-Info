# getFadeRate

Gets fading progress status. Used with [startFade](./startfade.md), useful with arranging change smoothly between scenes.

## Code Information

- **Name**: `getFadeRate`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 87 00`
- **Assembly Address in Memory** : `0x89217f8`

## Parameters

- `(float *)progress` *(8 bytes)* : Variable to *store* the fading progress, 0 is just started used [startFade](./startfade.md) and 1 is done with the fading animation.
   - Note that the fading screen is not always 0 or 1, it is decided by the `startFade`.

## Example

Here is one example in hex:

```25 16 87 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getFadeRate((float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089217f8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  if (*(int *)(param_1 + 0x10) != 0) {
    uVar2 = FUN_08992530(*(undefined4 *)(*(int *)(param_1 + 0x10) + 200));
    *puVar1 = uVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

