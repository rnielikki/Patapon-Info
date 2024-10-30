# cameraGetPosX

Gets X Position of the camera in the world.

## Code Information

- **Name**: `cameraGetPosX`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 90 00`
- **Assembly Address in Memory** : `0x8921e8c`

## Parameters

- `(float *)pos_x` *(8 bytes)* : Variable to *store* the X position of the camera in the world, as PSP pixels.

## Example

Here is one example in hex:

```25 16 90 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cameraGetPosX((float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921e8c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0xd8);
  if (iVar2 != 0) {
    iVar2 = (**(code **)(*(int *)(iVar2 + 4) + 0x24))();
    *puVar1 = *(undefined4 *)(iVar2 + 0x480);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

