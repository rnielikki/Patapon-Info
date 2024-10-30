# setCameraPosition

Simply moves the position of the Camera in the world. For more options, see [cameraMove](./cameramove.md).

## Code Information

- **Name**: `setCameraPosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 58 00`
- **Assembly Address in Memory** : `0x891f97c`

## Parameters

- `(float)pos_x` *(8 bytes)* : X position in the world to move the camera, as PSP pixels.
- `(float)pos_y` *(8 bytes)* : Y position in the world to move the camera, as PSP pixels.
- `(int)Var2` *(8 bytes)* : *unused*.

## Example

Here is one example in hex:

```25 16 58 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setCameraPosition((float *)fVar0, (float *)fVar1, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891f97c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  Pac_Get_Param(param_2,2,1,4);
  (**(code **)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0xd8) + 4) + 0x24))();
  FUN_0890f8a0(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xd8),0,1);
  FUN_0890eaf4(*puVar1,0,*(int *)(*(int *)(param_1 + 0x10) + 0xd8) + 0x30,0,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

