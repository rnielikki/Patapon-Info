# cameraGetPos

Gets the world position of the camera.

Called e.g. when NPC is selected in hideout.

## Code Information

- **Name**: `cameraGetPos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 8f 00`
- **Assembly Address in Memory** : `0x8921d48`

## Parameters

- `(bool)Var0` *(8 bytes)* : Either 0 or not, please describe what is this.
- `(float *)pos_x` *(8 bytes)* : Variable to *store* the X position of the camera in the world, as PSP pixels.
- `(float *)pos_y` *(8 bytes)* : Variable to *store* the Y position of the camera in the world, as PSP pixels.
- `(float *)pos_z` *(8 bytes)* : Variable to *store* the Z position of the camera in the world, as PSP pixels.

## Example

Here is one example in hex:

```25 16 8f 00 / 02 00 00 00 / 00 00 00 00 / 40 00 00 00 / ff 01 00 00 / 40 00 00 00 / ff 01 00 00 / 20 00 00 00 / 0a 00 00 00```

Which is interpreted as:

```c
cameraGetPos((int)0, ((global)float *)gfVar511, ((global)float *)gfVar511, (float *)fVar10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921d48(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  *puVar2 = 0;
  *puVar3 = 0;
  *puVar4 = 0;
  iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0xd8);
  if (iVar5 != 0) {
    if (*piVar1 == 0) {
      iVar5 = (**(code **)(*(int *)(iVar5 + 4) + 0x24))();
      *puVar2 = *(undefined4 *)(iVar5 + 0x480);
      *puVar3 = *(undefined4 *)(iVar5 + 0x484);
      *puVar4 = *(undefined4 *)(iVar5 + 0x488);
    }
    else {
      iVar5 = (**(code **)(*(int *)(iVar5 + 4) + 0x24))();
      (**(code **)(*(int *)(iVar5 + 4) + 0x20))(&local_10,iVar5);
      *puVar2 = local_10;
      *puVar3 = local_c;
      *puVar4 = local_8;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

