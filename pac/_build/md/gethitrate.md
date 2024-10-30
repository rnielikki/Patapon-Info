# getHitRate

Saves how perfect the drum hit was.

## Code Information

- **Name**: `getHitRate`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 02 00`
- **Assembly Address in Memory** : `0x8970288`

## Parameters

- `(float *)destination` *(8 bytes)* : Variable to *store* how the perfect the drum hit was. 0 is no hit at all, 1 is perfect hit.

## Example

Here is one example in hex:

```25 0c 02 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getHitRate((float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970288(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  *piVar1 = 0;
  if (((*(int *)(*(int *)(param_1 + 0x10) + 0x158) != 0) &&
      (piVar2 = (int *)func_0x08b5f810(), 0 < *piVar2)) && (piVar2[3] != 4)) {
    *piVar1 = piVar2[5];
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

