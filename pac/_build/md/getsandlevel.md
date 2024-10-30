# getSandLevel

Gets the strength of the sandstorm weather.

## Code Information

- **Name**: `getSandLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 82 00`
- **Assembly Address in Memory** : `0x89213ec`

## Parameters

- `(float *)sandstorm_level` *(8 bytes)* : Variable to *store* the sandstorm level. 0 is no sandstorm, 1 is strongest sandstorm.

## Example

Here is one example in hex:

```25 16 82 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getSandLevel((float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089213ec(int param_1,undefined4 param_2)

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
    *puVar1 = *(undefined4 *)(iVar2 + 600);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

