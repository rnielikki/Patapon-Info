# cmd_memset

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_memset`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 42 00`
- **Assembly Address in Memory** : `0x883ac9c`

## Parameters

- `(Int/Float)Var0` *(8 bytes)*
- `(Int/Float)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 00 42 00 / 08 00 00 00 / 2c 01 00 00 / 10 00 00 00 / 00 00 00 00 / 02 00 00 00 / 70 00 00 00```

Which is interpreted as:

```c
cmd_memset(((global)int *)giVar300, (float)0, (int)112)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883ac9c(undefined4 param_1,undefined4 param_2)

{
  float *pfVar1;
  float *pfVar2;
  int *piVar3;
  uint uVar4;
  uint uVar5;
  float fVar6;
  int iVar7;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  uVar4 = Pac_Get_ParamType(param_2,0);
  uVar5 = Pac_Get_ParamType(param_2,1);
  if ((uVar4 & 0x70) == 0) {
    if ((uVar5 & 0x70) == 0) {
      fVar6 = *pfVar2;
    }
    else {
      fVar6 = (float)(int)*pfVar2;
    }
    iVar7 = 0;
    if (0 < *piVar3) {
      do {
        *pfVar1 = fVar6;
        iVar7 = iVar7 + 1;
        pfVar1 = pfVar1 + 1;
      } while (iVar7 < *piVar3);
    }
  }
  else {
    if ((uVar5 & 0x70) == 0) {
      fVar6 = (float)(int)*pfVar2;
    }
    else {
      fVar6 = *pfVar2;
    }
    iVar7 = 0;
    if (0 < *piVar3) {
      do {
        *pfVar1 = fVar6;
        iVar7 = iVar7 + 1;
        pfVar1 = pfVar1 + 1;
      } while (iVar7 < *piVar3);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

