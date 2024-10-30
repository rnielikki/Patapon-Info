# getFogLevel

Gets how foggy the weather is in the world.

## Code Information

- **Name**: `getFogLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 81 00`
- **Assembly Address in Memory** : `0x8921360`

## Parameters

- `(float *)fog_level` *(8 bytes)* : Variable to *store* the fog level. 0 is no fog, 1 is maximum fog.

## Example

Here is one example in hex:

```25 16 81 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getFogLevel((float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921360(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
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
    *puVar1 = *(undefined4 *)(iVar2 + 0x254);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

