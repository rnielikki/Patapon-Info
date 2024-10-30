# setRainLevel

Sets the raining amount. This works both in hideout and during mission.

## Code Information

- **Name**: `setRainLevel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 72 00`
- **Assembly Address in Memory** : `0x8920a6c`

## Parameters

- `(float)amount` *(8 bytes)* : The amount how much the rain falls, the value is **between 0~1**. 0 means no rain.

## Example

Here is one example in hex:

```25 16 72 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setRainLevel((float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920a6c(int param_1,undefined4 param_2)

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
    Set_Rain(*puVar1,iVar2 + 0x1d0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

