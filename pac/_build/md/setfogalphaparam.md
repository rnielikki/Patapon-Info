# setFogAlphaParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setFogAlphaParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 79 00`
- **Assembly Address in Memory** : `0x8920e90`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(float)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 79 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setFogAlphaParam((int)0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920e90(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  float *pfVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0x118);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  switch(*puVar1) {
  case 0:
    (&DAT_00007e3c)[iVar3] = (int)*pfVar2 != 0;
    break;
  case 1:
    *(float *)(&DAT_00007e30 + iVar3) = *pfVar2;
    break;
  case 2:
    *(float *)(&DAT_00007e34 + iVar3) = *pfVar2;
    break;
  case 3:
    *(float *)(&DAT_00007e38 + iVar3) = *pfVar2;
    break;
  case 4:
    DAT_08a6eae0 = *pfVar2;
    break;
  case 5:
    DAT_08a6eae4 = *pfVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

