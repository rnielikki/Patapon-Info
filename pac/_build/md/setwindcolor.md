# setWindColor

Defines wind colour. For example, tailwind colour uses this.

## Code Information

- **Name**: `setWindColor`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e2 00`
- **Assembly Address in Memory** : `0x89268c8`

## Parameters

- `(int)red` *(8 bytes)* : Red, in range of **0~255**.
- `(int)green` *(8 bytes)* : Green, in range of **0~255**.
- `(int)blue` *(8 bytes)* : Blue, in range of **0~255**.
- `(int)alpha` *(8 bytes)* : (Supposed to be) alpha in range of **0~255**, but **does not work**.

## Example

Here is one example in hex:

```25 16 e2 00 / 02 00 00 00 / ff 00 00 00 / 02 00 00 00 / 83 00 00 00 / 02 00 00 00 / 30 00 00 00 / 02 00 00 00 / ff 00 00 00```

Which is interpreted as:

```c
setWindColor((int)255, (int)131, (int)48, (int)255)
```

This defines the tailwind colour.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089268c8(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int iVar5;
  float local_10;
  float local_c;
  float local_8;
  float local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = *(int *)(param_1 + 0x10);
  if (iVar5 == 0) {
    iVar5 = 0;
  }
  else {
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    iVar5 = *(int *)(iVar5 + 0x118);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
  }
  if (iVar5 != 0) {
    local_4 = (float)*piVar4 * 0.003921569;
    local_8 = (float)*piVar3 * 0.003921569;
    local_c = (float)*piVar2 * 0.003921569;
    local_10 = (float)*piVar1 * 0.003921569;
    FUN_088fddf0(iVar5 + 0x250,&local_10);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

