# cameraEnableControll

Enables or disables camera controlling with L/R button.

## Code Information

- **Name**: `cameraEnableControll`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 8a 00`
- **Assembly Address in Memory** : `0x89219f0`

## Parameters

- `(bool)enable_control` *(8 bytes)* : 0 disables moving camera with L/R button, 1 enables camera moving by player.

## Example

Here is one example in hex:

```25 16 8a 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cameraEnableControll((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089219f0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 uVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0xd8);
  if (iVar3 != 0) {
    *(uint *)(iVar3 + 0x5d4) = (uint)(*piVar1 != 0);
    uVar2 = FUN_0890fa6c();
    FUN_0890d71c(uVar2,*piVar1 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

