# getArray

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getArray`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 10 00`
- **Assembly Address in Memory** : `0x8949244`

## Parameters

- `(Int/Float)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 09 10 00 / 04 00 00 00 / 03 00 00 00 / 04 00 00 00 / 00 00 00 00 / 01 00 00 00 / 80 11 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getArray((int *)iVar3, (int *)iVar0, (index)4480, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949244(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  uint uVar5;
  int iVar6;
  int iVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar7 = *piVar4;
  iVar6 = *piVar2;
  uVar5 = Pac_Get_ParamType(param_2,0);
  if ((uVar5 & 0x70) == 0) {
    if ((uVar5 & 0xe) != 0) {
      *piVar1 = *(int *)(iVar6 + *piVar3 + iVar7 * 4);
    }
  }
  else {
    *piVar1 = (int)*(float *)(iVar6 + *piVar3 + iVar7 * 4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

