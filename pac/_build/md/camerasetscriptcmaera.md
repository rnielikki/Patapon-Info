# cameraSetScriptCmaera

Sets if the camera follows player or not. Not following (1) can used in cutscene.

## Code Information

- **Name**: `cameraSetScriptCmaera`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 89 00`
- **Assembly Address in Memory** : `0x892196c`

## Parameters

- `(bool)script_controlled` *(8 bytes)* : If this is set to 0, the camera auto follows the player. Otherwise the camera movement is deciede by [scripts](./guide/category.md#camera).

## Example

Here is one example in hex:

```25 16 89 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
cameraSetScriptCmaera((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892196c(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0xd8);
  if (iVar2 != 0) {
    if (*piVar1 == 0) {
      FUN_0890f8a0(iVar2,*(undefined4 *)(iVar2 + 0x25ec),1);
    }
    else {
      FUN_0890f8a0(iVar2,0,1);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

