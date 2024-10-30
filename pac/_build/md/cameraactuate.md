# cameraActuate

Shakes the camera. Tumble effect uses this.

## Code Information

- **Name**: `cameraActuate`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 93 00`
- **Assembly Address in Memory** : `0x892201c`

## Parameters

- `(float)x_scale` *(8 bytes)* : How much the camera will be shaked in x direction
- `(float)y_scale` *(8 bytes)* : How much the camera will be shaked in y direction (for reference, tumble uses 0.5)
- `(float)delay` *(8 bytes)* : Delay before the camera being shaked, as seconds.
- `(float)duration` *(8 bytes)* : How long the camear will be shaked, as seconds.
- `(int)Var4` *(8 bytes)* : Can keep 1, please describe.

## Example

Here is one example in hex:

```25 16 93 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 a0 40 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 3f / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
cameraActuate((float)0, (float)5, (float)0, (float)0.5, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892201c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int *piVar5;
  int iVar6;
  int iVar7;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  iVar7 = *(int *)(*(int *)(param_1 + 0x10) + 0xd8);
  if (iVar7 == 0) goto LAB_08922160;
  iVar6 = *piVar5;
  if (iVar6 == 2) {
    iVar6 = *(int *)(iVar7 + 4);
LAB_08922148:
    iVar7 = (**(code **)(iVar6 + 0x24))(iVar7);
    FUN_08898c64(iVar7 + 0x10);
  }
  else {
    if (iVar6 == 1) {
      local_4 = *puVar2;
    }
    else {
      if (iVar6 != 0) {
        iVar6 = *(int *)(iVar7 + 4);
        goto LAB_08922148;
      }
      iVar6 = (**(code **)(*(int *)(iVar7 + 4) + 0x24))(iVar7);
      FUN_08898c64(iVar6 + 0x10);
      local_4 = *puVar2;
    }
    local_8 = *puVar1;
    iVar7 = (**(code **)(*(int *)(iVar7 + 4) + 0x24))(iVar7);
    FUN_08898fc8(*puVar3,*puVar4,iVar7 + 0x10,&local_8);
  }
LAB_08922160:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

