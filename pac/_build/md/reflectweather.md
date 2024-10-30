# reflectWeather

Please describe what this does. Potentially visual related, but there is no visible difference.

## Code Information

- **Name**: `reflectWeather`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 78 00`
- **Assembly Address in Memory** : `0x8920e04`

## Parameters

- `(float)reflect_scale` *(8 bytes)* : Usually this is 3~4. Do not put 0.

## Example

Here is one example in hex:

```25 16 78 00 / 10 00 00 00 / 00 00 80 40```

Which is interpreted as:

```c
reflectWeather((float)4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920e04(int param_1,undefined4 param_2)

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
    FUN_08900678(*puVar1,iVar2 + 0x1b0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

