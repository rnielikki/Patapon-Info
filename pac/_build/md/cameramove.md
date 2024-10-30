# cameraMove

Move the camera to the certain position in the world.

## Code Information

- **Name**: `cameraMove`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 8e 00`
- **Assembly Address in Memory** : `0x8921bc4`

## Parameters

- `(float)pos_x` *(8 bytes)* : X Position to move the camera in the world, as *PSP pixels*.
- `(float)pos_y` *(8 bytes)* : Y Position to move the camera in the world, as *PSP pixels*. 0 is normal position.
- `(float)pos_z` *(8 bytes)* : Z Position (Camera distance) in the world. For refrence, around 150~200 looks natural.
- `(bool)enable_anim_x` *(8 bytes)* : Decides if the camera animates in X direction or not. 0 moves to the position immediately, otherwise it will be animated in X direction.
- `(bool)enable_anim_y` *(8 bytes)* : Decides if the camera animates in Y direction or not. 0 moves to the position immediately, otherwise it will be animated in Y direction.
- `(bool)enable_anim_z` *(8 bytes)* : Decides if the camera animates in Z direction or not. 0 moves to the position immediately, otherwise it will be animated in Z direction.

## Remarks

For determining the speed of the camera, see description in [camerMoveType](./cameramovetype.md).

## Example

Here is one example in hex:

```25 16 8e 00 / 20 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cameraMove((float *)fVar0, (float)0, (float)0, (int)1, (int)0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921bc4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int *piVar4;
  int *piVar5;
  int *piVar6;
  int iVar7;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  iVar7 = *(int *)(*(int *)(param_1 + 0x10) + 0xd8);
  if (iVar7 != 0) {
    if (*piVar6 == 0) {
      local_4 = *(undefined4 *)(iVar7 + 0x4b8);
    }
    else {
      local_4 = *puVar3;
    }
    if (*piVar5 == 0) {
      local_8 = *(undefined4 *)(iVar7 + 0x4b4);
    }
    else {
      local_8 = *puVar2;
    }
    if (*piVar4 == 0) {
      local_c = *(undefined4 *)(iVar7 + 0x4b0);
    }
    else {
      local_c = *puVar1;
    }
    /* use time or speed? 0 for time 1 for speed */
    if (*(int *)(param_1 + 0x1c) == 1) {
      FUN_0890ece0(*(undefined4 *)(param_1 + 0x24),*(undefined4 *)(param_1 + 0x28),
                   *(undefined4 *)(param_1 + 0x2c),iVar7 + 0x30,&local_c);
    }
    else {
      FUN_0890ea24(*(undefined4 *)(param_1 + 0x20),iVar7 + 0x30,&local_c,0,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

