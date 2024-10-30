# cameraMoveTimeSet

Sets time to camera to move while using [cameraMove](./cameramove.md).

Works only [cameraMoveType](./cameramovetype.md) is set to 0.

*Does not* affect player camera control with L/R.

## Code Information

- **Name**: `cameraMoveTimeSet`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 8c 00`
- **Assembly Address in Memory** : `0x8921acc`

## Parameters

- `(float)time` *(8 bytes)* : Moving time as *seconds*.

## Example

Here is one example in hex:

```25 16 8c 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cameraMoveTimeSet((float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921acc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *(undefined4 *)(param_1 + 0x20) = *puVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

