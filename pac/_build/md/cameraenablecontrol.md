# cameraEnableControl

Please describe what this exactly does.

For controlling with L/R button, use [cameraEnableControll](./cameraenablecontroll.md).

## Code Information

- **Name**: `cameraEnableControl`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 bb 00`
- **Assembly Address in Memory** : `0x8923ae4`

## Parameters

- `(bool)Var0` *(8 bytes)* : Either 0 or not, please describe what is this.
- `(bool)enable_control` *(8 bytes)* : 0 disables moving camera, 1 enables camera moving.

## Example

Here is one example in hex:

```25 16 bb 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
cameraEnableControl((int)1, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923ae4(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 != 0) {
    if (*piVar2 == 0) {
      iVar3 = *piVar1;
      iVar4 = FUN_0890fa6c(*(undefined4 *)(iVar4 + 0xd8));
      *(bool *)(iVar4 + 0x4d6) = iVar3 != 0;
    }
    else {
      iVar3 = *piVar1;
      iVar4 = FUN_0890fa6c(*(undefined4 *)(iVar4 + 0xd8));
      *(bool *)(iVar4 + 0x4d7) = iVar3 != 0;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

