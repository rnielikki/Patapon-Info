# getTroopSign (25164101)

> *Other functions have the same name. Check the [Disambiguation page](./getTroopSign.md) to find them.*

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getTroopSign`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 41 01`
- **Assembly Address in Memory** : `0x892b274`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(float)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 41 01 / 04 00 00 00 / 0a 00 00 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getTroopSign((int *)iVar10, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892b274(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  float *pfVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  *pfVar2 = 0.0;
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0xf8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (((iVar3 != 0) && (iVar3 = FUN_088a8650(iVar3,*puVar1), iVar3 != 0)) && (iVar3 != -0x170)) {
    *pfVar2 = (float)*(int *)(iVar3 + 0x288);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

