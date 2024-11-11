# setUnitCtrlSkill

Adds a set skill or class skill to a reqActor PVE unit.

Note this does not automatically load the skill effect and the skill effect must be loaded manually.

## Code Information

- **Name**: `setUnitCtrlSkill`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 31 00`
- **Assembly Address in Memory** : `0x8b5ed18`

## Parameters

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(int)skill_id` *(8 bytes)* : [ID](https://rnielikki.github.io/pata/resources/skill.html) of the class skill or set skill to give to the unit.

## Example

Here is one example in hex:

```25 1f 31 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 04 00 00 00 / 02 00 00 00 / bc 00 00 00```

Which is interpreted as:

```c
setUnitCtrlSkill(((global)int *)giVar26, (int)4, (int)188)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5ed18(int param_1,undefined4 param_2)

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
    FUN_Mission__08b57948(iVar4,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

