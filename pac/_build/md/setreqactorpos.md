# setReqActorPos

Defines position of a unit as "reqActor".

## Code Information

- **Name**: `setReqActorPos`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 0e 00`
- **Assembly Address in Memory** : `0x8b5cb28`

## Parameters

- `(int* )generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(float)x` *(8 bytes)* : X position of the unit, as PSP pixels, **relative to the generator**
- `(float)y` *(8 bytes)* : Y position of the unit, as PSP pixels, **relative to the generator**

Note that **PSP screen size is 480 x 272**.

Unit can be grounded (with gravity) even after y value is set to greater than zero.

## Example

Here is one example in hex:

```25 1f 0e 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 7a 43 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setReqActorPos(((global)int *)giVar26, (int)0, (float)250, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5cb28(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
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
    iVar5 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar5 + 0x2c8), *piVar1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
  }
  if (iVar5 != 0) {
    FUN_Mission__08b56ac8(*puVar3,*puVar4,iVar5,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

