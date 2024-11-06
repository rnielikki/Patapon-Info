# setBossMoveRange (251f2e00)

> *Other functions have the same name. Check the [Disambiguation page](./setBossMoveRange.md) to find them.*

Sets boss position to move.

For retreating, use [setBossRetreatPos](./setbossretreatpos.md).

## Code Information

- **Name**: `setBossMoveRange`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 2e 00`
- **Assembly Address in Memory** : `0x8b5e9e8`

## Parameters

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* :  *ID in the generator*.
- `(float)max_range` *(8 bytes)* : Maximum  move range **relative to the world** to move, as PSP pixels in world.
- `(float)min_range` *(8 bytes)* : Minimum move range **relative to the world** to move, as PSP pixels in world. *Note that max goes first*.
- `(float)init_range` *(8 bytes)* : Initial range **relative to the world** to move, as PSP pixels in world, when the boss is in out of the given range. Usually it is same value as `min_range`-

## Example

Here is one example in hex:

```25 1f 2e 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 75 44 / 10 00 00 00 / 00 00 2a 44 / 10 00 00 00 / 00 00 2a 44```

Which is interpreted as:

```c
setBossMoveRange(((global)int *)giVar26, (int)0, (float)980, (float)680, (float)680)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5e9e8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  iVar6 = *(int *)(param_1 + 0x10);
  if (iVar6 == 0) {
    iVar6 = 0;
  }
  else if (*piVar1 == -1) {
    iVar6 = 0;
  }
  else {
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    iVar6 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar6 + 0x2c8));
    if (iVar6 == 0) {
      iVar6 = 0;
    }
  }
  if (iVar6 != 0) {
    FUN_Mission__08b57a18(*puVar3,*puVar4,*puVar5,iVar6,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

