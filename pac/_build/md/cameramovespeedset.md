# cameraMoveSpeedSet

Sets time to camera to move while using [cameraMove](./cameramove.md).

Works only [cameraMoveType](./cameramovetype.md) is set to 1.

*Does not* affect player camera control with L/R.

## Code Information

- **Name**: `cameraMoveSpeedSet`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 8d 00`
- **Assembly Address in Memory** : `0x8921b20`

## Parameters

- `(float)speed_x` *(8 bytes)* : Camera speed in X direction.
- `(float)speed_y` *(8 bytes)* : Camera speed in Y direction.
- `(float)speed_z` *(8 bytes)* : Camera speed in Z direction.

## Example

Here is one example in hex:

```25 16 8d 00 / 10 00 00 00 / 00 00 80 3f / 10 00 00 00 / 89 88 88 3e / 10 00 00 00 / 89 88 88 3e```

Which is interpreted as:

```c
cameraMoveSpeedSet((float)1, (float)0.26666668, (float)0.26666668)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921b20(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *(undefined4 *)(param_1 + 0x24) = *puVar1;
  *(undefined4 *)(param_1 + 0x28) = *puVar2;
  *(undefined4 *)(param_1 + 0x2c) = *puVar3;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

