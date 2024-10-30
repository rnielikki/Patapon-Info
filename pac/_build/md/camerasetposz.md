# cameraSetPosZ

Sets Z position (zoom) of the camera in the world.

## Code Information

- **Name**: `cameraSetPosZ`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 24 00`
- **Assembly Address in Memory** : `0x8b4fcb8`

## Parameters

- `(float)value` *(8 bytes)* : Z position of camera to be set.

## Example

Here is one example in hex:

```25 1c 24 00 / 20 00 00 00 / 0a 00 00 00```

Which is interpreted as:

```c
cameraSetPosZ((float *)fVar10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4fcb8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x1b4);
    uVar3 = *puVar1;
    *(undefined4 *)(iVar2 + 0x5e0) = *(undefined4 *)(iVar2 + 0x5e0);
    *(undefined4 *)(iVar2 + 0x5e4) = *(undefined4 *)(iVar2 + 0x5e4);
    *(undefined4 *)(iVar2 + 0x5e8) = uVar3;
    *(undefined4 *)(iVar2 + 0x5ec) = *(undefined4 *)(iVar2 + 0x5ec);
    *(undefined4 *)(iVar2 + 0x5ec) = 0x3f800000;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

