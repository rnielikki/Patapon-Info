# setCloudyLevel

Sets the cloud amount scale, in range of 0~1.

## Code Information

- **Name**: `setCloudyLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 74 00`
- **Assembly Address in Memory** : `0x8920b84`

## Parameters

- `(float)cloud_level` *(8 bytes)* : Cloud amount scale to set. 0 is no cloud, 1 has most clouds.

## Example

Here is one example in hex:

```25 16 74 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setCloudyLevel((float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920b84(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0x118);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if (iVar2 != 0) {
    FUN_088fdda0(*puVar1,iVar2 + 0x1d0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

