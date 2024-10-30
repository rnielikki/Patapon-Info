# setReqActorAdventRadius

Decides approach speed of an enemy, as [reqActor](./setreqactortype.md) scope.

See also: [setAdventRadius](./setadventradius.md)

## Code Information

- **Name**: `setReqActorAdventRadius`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 0f 00`
- **Assembly Address in Memory** : `0x8b5cc40`

## Parameters

- `(int* )generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(float)x` *(8 bytes)* : X position of the "radius" to advent, as PSP pixels in the world, bigger is slower
- `(float)y` *(8 bytes)* : Y position of the "radius" to advent, as PSP pixels in the world, bigger is slower

Note that **PSP screen size is 480 x 272**.

## Example

Here is one example in hex:

```25 1f 0f 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setReqActorAdventRadius(((global)int *)giVar26, (int)0, (float)0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5cc40(int param_1,undefined4 param_2)

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
    iVar5 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar5 + 0x2c8));
    if (iVar5 == 0) {
      iVar5 = 0;
    }
  }
  if (iVar5 != 0) {
    FUN_Mission__08b56b78(*puVar3,*puVar4,iVar5,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

