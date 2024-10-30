# setReqActorRenderPrio

Sets z-position (render priority) of the actor. The higher the value is, the more the top the actor object is.

## Code Information

- **Name**: `setReqActorRenderPrio`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 1d 00`
- **Assembly Address in Memory** : `0x8b5d270`

## Parameters

- `(int *)generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator* to set in thoe whole mission.
- `(int *)priority` *(8 bytes)* : The render priority value to set to the target.
- `(bool)bVar2` *(8 bytes)* : Please describe what this does. Might do something with +10000 render priority in certain condition.

## Example

Here is one example in hex:

```25 1f 1d 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setReqActorRenderPrio(((global)int *)giVar26, (int)0, (int)0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5d270(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int *piVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = *(int *)(param_1 + 0x10);
  if (iVar5 == 0) {
    iVar5 = 0;
  }
  else if (*piVar1 == -1) {
    iVar5 = 0;
  }
  else {
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    iVar5 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar5 + 0x2c8));
    if (iVar5 == 0) {
      iVar5 = 0;
    }
  }
  if (iVar5 != 0) {
    FUN_Mission__08b56f00(iVar5,*puVar2,*puVar3,*piVar4 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

