# setBossMoveRangeLimit (251f2f00)

> *Other functions have the same name. Check the [Disambiguation page](./setBossMoveRangeLimit.md) to find them.*

Limits the move range of the boss, so it can't move further while not attacking.

## Code Information

- **Name**: `setBossMoveRangeLimit`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 2f 00`
- **Assembly Address in Memory** : `0x8b5eb28`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(int)in_generator_id` *(8 bytes)* :  *ID in the generator*.
- `(float)max_range` *(8 bytes)* : Maximum  move range **relative to the unit**, as PSP pixels in world.

## Example

Here is one example in hex:

```25 1f 2f 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 2a 44```

Which is interpreted as:

```c
setBossMoveRangeLimit(((global)int *)giVar26, (int)0, (float)680)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5eb28(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (*piVar1 == -1) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8));
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    FUN_Mission__08b57aa0(*puVar3,iVar4,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

