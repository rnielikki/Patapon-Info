# setLevel

Sets every object's level in a specific generator.

See also: [About Levels](./guide/about-levels.md).

## Code Information

- **Name**: `setLevel`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 04 00`
- **Assembly Address in Memory** : `0x8b5c138`

## Parameters

- `(int *)generator_handle` *(8 bytes)* : Handle of the generator to set level, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)level` *(8 bytes)* : Individual level to assign to the unit(s). More information in [here](./guide/about-levels.md).

## Example

Here is one example in hex:

```25 1f 04 00 / 08 00 00 00 / 1a 00 00 00 / 08 00 00 00 / 32 00 00 00```

Which is interpreted as:

```c
setLevel(((global)int *)giVar26, ((global)int *)giVar50)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5c138(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (*piVar1 == -1) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar3 + 0x2c8));
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 != 0) {
                    // loads and saves lvl
    *(undefined4 *)(iVar3 + 0x10) = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

